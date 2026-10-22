const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {randomBytes,randomInt,createHash}=require('node:crypto');
const db=require('./db');
const {hash,verify}=require('./auth');
const root=path.join(__dirname,'..');
const bank=vm.runInNewContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';questions');
const digest=v=>createHash('sha256').update(v).digest('hex');
const safeUser=u=>u?{id:u.id,name:u.name,email:u.email,role:u.role}:null;
const limits=new Map();
function clientIp(req){
 const direct=req.socket.remoteAddress||'unknown';
 if(process.env.TRUST_PROXY!=='1')return direct;
 const forwarded=String(req.headers['x-forwarded-for']||'').split(',')[0].trim();
 return forwarded||direct;
}
function fail(message,status=400){throw Object.assign(new Error(message),{status});}
async function body(req){let raw='';for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>32000)fail('Dữ liệu quá lớn.',413);}try{return JSON.parse(raw||'{}');}catch{fail('Dữ liệu không hợp lệ.');}}
const files=new Set(['index.html','portal.css','learning.css','portal.js','practice.html','style.css','script.js','questions.js','flags.js','test.html','test.js','search.html','search.js','donate-qr.png','ads.txt']);
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Frame-Options','DENY');res.setHeader('Referrer-Policy','same-origin');
 const url=new URL(req.url,'http://localhost');
 const send=(data,status=200)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
 try{
 if(!url.pathname.startsWith('/api/')){
  const file=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname.slice(1));
  if(!files.has(file)||!['GET','HEAD'].includes(req.method)){res.writeHead(404);return res.end('Not found');}
  const type={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.txt':'text/plain; charset=utf-8'}[path.extname(file)];
  res.writeHead(200,{'Content-Type':type});return res.end(req.method==='HEAD'?undefined:fs.readFileSync(path.join(root,file)));
 }
 if(!['GET','HEAD'].includes(req.method)){
  if(req.headers.origin&&req.headers.origin!==(process.env.APP_ORIGIN||'http://'+req.headers.host))fail('Nguồn yêu cầu không hợp lệ.',403);
  if(!req.headers['content-type']?.startsWith('application/json'))fail('Yêu cầu JSON.',415);
 }
 const token=(req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('session='))?.slice(8);
 const user=token?db.prepare('SELECT u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=? AND s.expires>?').get(digest(token),Date.now()):null;
 const needUser=()=>{if(!user)fail('Vui lòng đăng nhập.',401);};
 const needAdmin=()=>{needUser();if(user.role!=='admin')fail('Bạn không có quyền quản trị.',403);};
 const route=req.method+' '+url.pathname;
  if(route==='GET /api/health'){db.prepare('SELECT 1').get();return send({ok:true});}
 if(route==='GET /api/me')return send({user:safeUser(user)});
 if(route==='GET /api/products')return send({products:db.prepare('SELECT * FROM products WHERE active=1').all(),questionCount:bank.length});
 if(route==='POST /api/register'||route==='POST /api/login'){
   const ip=clientIp(req), now=Date.now();
  for(const [key,value]of limits)if(value.until<now)limits.delete(key);
  const rate=limits.get(ip)||{count:0,until:now+900000};if(++rate.count>30)fail('Quá nhiều yêu cầu. Vui lòng thử lại sau 15 phút.',429);limits.set(ip,rate);
  const data=await body(req),email=String(data.email||'').trim().toLowerCase(),password=String(data.password||'');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254||password.length>128)fail('Email hoặc mật khẩu không hợp lệ.');
  let account;
  if(route.endsWith('/register')){
   const name=String(data.name||'').trim();if(name.length<2||name.length>80||password.length<10)fail('Tên cần 2–80 ký tự, mật khẩu tối thiểu 10 ký tự.');
   if(db.prepare('SELECT id FROM users WHERE email=?').get(email))fail('Email đã được đăng ký.',409);
   const result=db.prepare('INSERT INTO users(name,email,password) VALUES(?,?,?)').run(name,email,hash(password));account=db.prepare('SELECT * FROM users WHERE id=?').get(result.lastInsertRowid);
  }else{account=db.prepare('SELECT * FROM users WHERE email=?').get(email);if(!account||!verify(password,account.password))fail('Email hoặc mật khẩu không đúng.',401);}
  const session=randomBytes(32).toString('hex');
  db.prepare('DELETE FROM sessions WHERE expires<?').run(Date.now());db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(digest(session),account.id,Date.now()+604800000);
  res.setHeader('Set-Cookie',`session=${session}; HttpOnly; SameSite=Lax; Path=/; Max-Age=604800${process.env.NODE_ENV==='production'?'; Secure':''}`);return send({user:safeUser(account)});
 }
 if(route==='POST /api/logout'){if(token)db.prepare('DELETE FROM sessions WHERE token=?').run(digest(token));res.setHeader('Set-Cookie','session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0');return send({ok:true});}
 if(route==='GET /api/orders'){needUser();return send({orders:db.prepare('SELECT o.*,p.title,p.question_count FROM orders o JOIN products p ON p.id=o.product_id WHERE user_id=? ORDER BY o.id DESC').all(user.id)});}
 if(route==='POST /api/orders'){
  needUser();const data=await body(req),p=db.prepare('SELECT * FROM products WHERE id=? AND active=1').get(Number(data.productId));if(!p)fail('Bộ đề không tồn tại.',404);
  db.prepare('INSERT OR IGNORE INTO orders(user_id,product_id,amount) VALUES(?,?,?)').run(user.id,p.id,p.price);
  return send({order:db.prepare('SELECT * FROM orders WHERE user_id=? AND product_id=?').get(user.id,p.id)},201);
 }
 if(route==='GET /api/attempts'){needUser();return send({attempts:db.prepare('SELECT a.id,a.score,a.created_at,p.title,json_array_length(a.questions) AS question_count FROM attempts a JOIN products p ON p.id=a.product_id WHERE a.user_id=? AND a.score IS NOT NULL ORDER BY a.id DESC LIMIT 100').all(user.id)});}
 if(route==='POST /api/attempts'){
  needUser();const data=await body(req),p=db.prepare("SELECT p.* FROM products p JOIN orders o ON o.product_id=p.id WHERE p.id=? AND o.user_id=? AND o.status='paid'").get(Number(data.productId),user.id);
  if(!p)fail('Bộ đề chưa được kích hoạt.',403);
  const ids=Array.from({length:bank.length},(_,i)=>i);for(let i=ids.length-1;i>0;i--){const j=randomInt(i+1);[ids[i],ids[j]]=[ids[j],ids[i]];}
  const selected=ids.slice(0,p.question_count);const result=db.prepare('INSERT INTO attempts(user_id,product_id,questions) VALUES(?,?,?)').run(user.id,p.id,JSON.stringify(selected));
  return send({id:Number(result.lastInsertRowid),title:p.title,questions:selected.map(i=>({question:bank[i].question,options:bank[i].options}))});
 }
 if(route==='POST /api/submit'){
  needUser();const data=await body(req),a=db.prepare('SELECT * FROM attempts WHERE id=? AND user_id=?').get(Number(data.attemptId),user.id);if(!a)fail('Không tìm thấy bài làm.',404);if(a.score!==null)fail('Bài đã được nộp.',409);
  const ids=JSON.parse(a.questions);if(!Array.isArray(data.answers)||data.answers.length!==ids.length||data.answers.some(x=>x!==null&&(!Number.isInteger(x)||x<0||x>3)))fail('Đáp án không hợp lệ.');
  const correct=ids.map(i=>bank[i].correct.charCodeAt(0)-65),score=correct.reduce((s,c,i)=>s+(c===data.answers[i]?1:0),0);
  db.prepare('UPDATE attempts SET answers=?,score=? WHERE id=?').run(JSON.stringify(data.answers),score,a.id);return send({score,total:ids.length,correct});
 }
 if(route==='GET /api/admin'){needAdmin();return send({users:db.prepare('SELECT id,name,email,role,created_at FROM users ORDER BY id DESC').all(),orders:db.prepare('SELECT o.*,u.name,u.email,p.title FROM orders o JOIN users u ON u.id=o.user_id JOIN products p ON p.id=o.product_id ORDER BY o.id DESC').all(),products:db.prepare('SELECT * FROM products').all()});}
 if(route==='POST /api/admin/order'){needAdmin();const data=await body(req);if(!['paid','cancelled','pending'].includes(data.status))fail('Trạng thái không hợp lệ.');const result=db.prepare('UPDATE orders SET status=? WHERE id=?').run(data.status,Number(data.id));if(!result.changes)fail('Không tìm thấy đơn hàng.',404);return send({ok:true});}
 if(route==='POST /api/admin/product'){needAdmin();const d=await body(req);if(typeof d.title!=='string'||!d.title.trim()||d.title.length>120||typeof d.description!=='string'||d.description.length>1000||!Number.isInteger(d.price)||d.price<0||d.price>100000000||!Number.isInteger(d.question_count)||d.question_count<1||d.question_count>bank.length)fail('Thông tin bộ đề không hợp lệ.');
 if(d.id){const result=db.prepare('UPDATE products SET title=?,description=?,price=?,question_count=?,active=? WHERE id=?').run(d.title.trim(),d.description,d.price,d.question_count,d.active?1:0,Number(d.id));if(!result.changes)fail('Không tìm thấy bộ đề.',404);}else db.prepare('INSERT INTO products(title,description,price,question_count,active) VALUES(?,?,?,?,?)').run(d.title.trim(),d.description,d.price,d.question_count,d.active?1:0);return send({ok:true});}
 fail('Không tìm thấy API.',404);
 }catch(e){if(!e.status)console.error(e);send({error:e.status?e.message:'Có lỗi máy chủ. Vui lòng thử lại.'},e.status||500);}
});
if(require.main===module){
 server.listen(Number(process.env.PORT||3000),process.env.HOST||'127.0.0.1',()=>console.log('Đấu Thầu Academy: http://localhost:'+(process.env.PORT||3000)));
 const shutdown=()=>server.close(()=>{db.close();process.exit(0);});
 process.once('SIGTERM',shutdown);
 process.once('SIGINT',shutdown);
}
module.exports=server;
