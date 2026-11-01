'use client';
import { useMemo, useState } from 'react';
import type { Answer, QuizQuestion } from '../../data/question-bank';
const letters: Answer[] = ['A','B','C','D'];
export function MockExam({ questions }: { questions: QuizQuestion[] }) {
 const [exam, setExam] = useState<QuizQuestion[]>(() => [...questions].sort(() => Math.random() - .5).slice(0, 70)); const [answers, setAnswers] = useState<Record<number, Answer>>({}); const [submitted, setSubmitted] = useState(false);
 const score = useMemo(() => exam.filter(q => answers[q.id] === q.answer).length, [answers, exam]);
 const reset = () => { setExam([...questions].sort(() => Math.random() - .5).slice(0,70)); setAnswers({}); setSubmitted(false); };
 return <main><header className="hero"><p className="eyebrow">Thi thử</p><h1>Đề ngẫu nhiên 70 câu</h1><p className="lead">Chọn đáp án, sau đó nộp bài để xem kết quả.</p></header><section className="examCard">{submitted && <div className="examResult"><strong>{score}/70 câu đúng</strong><button className="primaryButton" onClick={reset}>Tạo đề mới</button></div>}{exam.map((q,index)=><article className="examQuestion" key={q.id}><h2>{index+1}. {q.question}</h2>{letters.map(letter=><label key={letter} className={submitted && q.answer===letter ? 'correctChoice' : ''}><input type="radio" name={`q${q.id}`} disabled={submitted} checked={answers[q.id]===letter} onChange={()=>setAnswers(old=>({...old,[q.id]:letter}))}/><b>{letter}.</b> {q.options[letter]}</label>)}</article>)}{!submitted && <button className="primaryButton" onClick={()=>setSubmitted(true)}>Nộp bài ({Object.keys(answers).length}/70)</button>}</section></main>;
}
