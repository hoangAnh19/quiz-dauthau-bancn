import fs from "node:fs/promises";
import vm from "node:vm";
const root = "D:/2.Project/1.Web đấu thầu/quiz-dauthau-bancn";
const ctx = {}; vm.createContext(ctx);
vm.runInContext((await fs.readFile(`${root}/questions.js`, "utf8")) + ";globalThis.q=questions", ctx);
const old = ctx.q;
const news = JSON.parse(await fs.readFile(`${root}/tmp/pdfs/parsed.json`, "utf8"));
const norm=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
const dice=(a,b)=>{let A=new Set(norm(a).split(" ").filter(Boolean)),B=new Set(norm(b).split(" ").filter(Boolean)),c=0;for(const x of A)if(B.has(x))c++;return A.size+B.size?2*c/(A.size+B.size):0};
const opts=b=>{b=String(b).replace(/===== PAGE \d+ =====\s*\d*\s*/g," ").replace(/\s+/g," ").trim();let m=[...b.matchAll(/(?:^|\s)([A-D])\.\s/g)],o={};for(let i=0;i<m.length;i++)o[m[i][1]]=b.slice(m[i].index+m[i][0].length,i+1<m.length?m[i+1].index:b.length).trim();return o};
const oldExact=new Map(old.map((x,i)=>[norm(x.question),{...x,no:i+1}]));
const rows=[];
for(const n of news){
  let o=oldExact.get(norm(n.question)), kind="exact";
  if(!o){let best=null;for(let i=0;i<old.length;i++){let s=dice(n.question,old[i].question);if(!best||s>best.s)best={s,o:{...old[i],no:i+1}}}if(!best||best.s<.86)continue;o=best.o;kind="near"}
  const no=opts(n.block), oldCorrectText=o.options["ABCD".indexOf(o.correct)]||"";
  let bestOpt=null;for(const letter of "ABCD"){let s=dice(oldCorrectText,no[letter]);if(!bestOpt||s>bestOpt.s)bestOpt={letter,s,text:no[letter]}}
  const allSame=Object.keys(no).length===o.options.length&&o.options.every((v,i)=>norm(v)===norm(no["ABCD"[i]]));
  if(kind==="near"||!allSame) rows.push({newNo:n.n,oldNo:o.no,kind,question:n.question,oldAnswer:o.correct,oldCorrectText,newOptions:no,mappedAnswer:bestOpt.letter,mapScore:bestOpt.s,mappedText:bestOpt.text,answerChanged:bestOpt.letter!==o.correct});
}
await fs.writeFile(`${root}/tmp/pdfs/review_candidates.json`,JSON.stringify(rows,null,2));
console.log(JSON.stringify({total:rows.length,high:rows.filter(x=>x.mapScore>=.9).length,mid:rows.filter(x=>x.mapScore>=.75&&x.mapScore<.9).length,low:rows.filter(x=>x.mapScore<.75).length,changed:rows.filter(x=>x.answerChanged).map(x=>x.newNo)}));
