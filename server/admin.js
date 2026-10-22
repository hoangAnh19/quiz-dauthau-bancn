const db=require('./db');
const {hash}=require('./auth');
const email=(process.env.ADMIN_EMAIL||'').trim().toLowerCase(), password=process.env.ADMIN_PASSWORD;
if(!email || !password || password.length<12) { console.error('Cần ADMIN_EMAIL và ADMIN_PASSWORD (ít nhất 12 ký tự).'); process.exit(1); }
db.prepare(`INSERT INTO users(name,email,password,role) VALUES(?,?,?,'admin') ON CONFLICT(email) DO UPDATE SET role='admin',password=excluded.password`).run('Quản trị viên',email,hash(password));
console.log('Đã thiết lập quản trị viên:',email);
