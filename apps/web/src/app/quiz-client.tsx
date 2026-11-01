'use client';

import { useMemo, useState } from 'react';
import type { Answer, QuizQuestion } from '../data/question-bank';

type Props = { questions: QuizQuestion[] };

const letters: Answer[] = ['A', 'B', 'C', 'D'];

export function QuizClient({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [revealed, setRevealed] = useState(false);
  const question = questions[current]!;
  const selected = answers[question.id];
  const correctCount = useMemo(
    () => questions.reduce((count, item) => count + (answers[item.id] === item.answer ? 1 : 0), 0),
    [answers, questions],
  );

  function moveTo(index: number) {
    setCurrent(index);
    setRevealed(false);
  }

  function choose(answer: Answer) {
    setAnswers((previous) => { const next={ ...previous, [question.id]: answer }; localStorage.setItem('quiz-progress', JSON.stringify(Object.fromEntries(questions.filter(item => next[item.id] !== undefined).map(item => [item.id, next[item.id] === item.answer])))); return next; });
  }

  return (
    <div className="quizShell">
      <aside className="questionNav" aria-label="Đi đến câu hỏi">
        <div className="navHeading">
          <span>Danh sách câu</span>
          <strong>{correctCount}/{questions.length}</strong>
        </div>
        <div className="questionGrid">
          {questions.map((item, index) => {
            const answer = answers[item.id];
            const state = answer ? (answer === item.answer ? 'isCorrect' : 'isWrong') : '';
            return (
              <button key={item.id} className={`questionNumber ${index === current ? 'isActive' : ''} ${state}`} onClick={() => moveTo(index)}>
                {item.id}
              </button>
            );
          })}
        </div>
      </aside>

      <section className="questionCard" aria-live="polite">
        <p className="questionLabel">Câu {question.id} / {questions.length}</p>
        <h2>{question.question}</h2>
        <div className="answerList">
          {letters.map((letter) => {
            const isChosen = selected === letter;
            const showCorrect = revealed && question.answer === letter;
            const showWrong = revealed && isChosen && question.answer !== letter;
            return (
              <button
                className={`answerButton ${isChosen ? 'isSelected' : ''} ${showCorrect ? 'isCorrect' : ''} ${showWrong ? 'isWrong' : ''}`}
                key={letter}
                onClick={() => choose(letter)}
              >
                <span>{letter}</span>{question.options[letter]}
              </button>
            );
          })}
        </div>
        <div className="questionActions">
          <button className="secondaryButton" disabled={current === 0} onClick={() => moveTo(current - 1)}>Câu trước</button>
          <button className="revealButton" onClick={() => setRevealed(true)}>Xem đáp án</button>
          <button className="primaryButton" disabled={current === questions.length - 1} onClick={() => moveTo(current + 1)}>Câu sau</button>
        </div>
        {revealed && <p className="answerNotice">Đáp án đã chốt: <strong>{question.answer}</strong></p>}
      </section>
    </div>
  );
}
