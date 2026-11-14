'use client';

import { useMemo, useState } from 'react';
import type { Answer, QuizQuestion } from '../../data/question-bank';

const letters: Answer[] = ['A', 'B', 'C', 'D'];

export function MockExam({ questions, initialExam }: { questions: QuizQuestion[]; initialExam: QuizQuestion[] }) {
  const [exam, setExam] = useState<QuizQuestion[]>(initialExam);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = useMemo(() => exam.filter((question) => answers[question.id]).length, [answers, exam]);
  const score = useMemo(() => exam.filter((question) => answers[question.id] === question.answer).length, [answers, exam]);

  function reset() {
    setExam([...questions].sort(() => Math.random() - 0.5).slice(0, 70));
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToQuestion(index: number) {
    document.getElementById(`exam-question-${index + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Thi thử</p>
        <h1>Đề ngẫu nhiên 70 câu</h1>
        <p className="lead">Chọn đáp án, sau đó nộp bài để xem kết quả.</p>
      </header>

      <div className="mockExamLayout">
        <aside className="questionNav examQuestionNav" aria-label="Danh sách câu thi thử">
          <div className="navHeading">
            <span>Danh sách câu</span>
            <strong>{answeredCount}/{exam.length}</strong>
          </div>
          <p className="examProgressText">Đã làm {answeredCount} · Chưa làm {exam.length - answeredCount}</p>
          <div className="questionGrid">
            {exam.map((question, index) => {
              const answer = answers[question.id];
              const resultState = submitted && answer
                ? (answer === question.answer ? 'isCorrect' : 'isWrong')
                : '';
              const answerState = answer ? 'isAnswered' : '';
              const status = answer ? 'đã làm' : 'chưa làm';

              return (
                <button
                  type="button"
                  key={question.id}
                  className={`questionNumber ${answerState} ${resultState}`}
                  aria-label={`Câu ${index + 1}, ${status}`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="examLegend" aria-hidden="true">
            <span><i className="legendAnswered" />Đã làm</span>
            <span><i />Chưa làm</span>
          </div>
        </aside>

        <section className="examCard mockExamCard">
          {submitted && (
            <div className="examResult">
              <strong>{score}/{exam.length} câu đúng</strong>
              <button type="button" className="primaryButton" onClick={reset}>Tạo đề mới</button>
            </div>
          )}
          {exam.map((question, index) => (
            <article className="examQuestion" id={`exam-question-${index + 1}`} key={question.id}>
              <h2>{index + 1}. {question.question}</h2>
              {letters.map((letter) => (
                <label key={letter} className={submitted && question.answer === letter ? 'correctChoice' : ''}>
                  <input
                    type="radio"
                    name={`q${question.id}`}
                    disabled={submitted}
                    checked={answers[question.id] === letter}
                    onChange={() => setAnswers((old) => ({ ...old, [question.id]: letter }))}
                  />
                  <b>{letter}.</b> {question.options[letter]}
                </label>
              ))}
            </article>
          ))}
          {!submitted && (
            <button type="button" className="primaryButton examSubmitButton" onClick={() => setSubmitted(true)}>
              Nộp bài ({answeredCount}/{exam.length})
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
