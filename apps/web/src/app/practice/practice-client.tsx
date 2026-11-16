'use client';

import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../data/question-bank';
import { QuizClient } from '../quiz-client';

function randomQuestions(questions: QuizQuestion[], count: number) {
  return [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function PracticeClient({ questions }: { questions: QuizQuestion[] }) {
  const [count, setCount] = useState(20);
  const [startedCount, setStartedCount] = useState<number | null>(null);
  const selectedQuestions = useMemo(
    () => startedCount === null ? [] : randomQuestions(questions, startedCount),
    [questions, startedCount],
  );

  if (startedCount !== null) {
    return (
      <main>
        <header className="hero practiceHeader">
          <p className="eyebrow">Luyện tập ngẫu nhiên</p>
          <h1>{startedCount} câu luyện tập</h1>
          <p className="lead">Bạn có thể xem đáp án ngay sau khi chọn và tạo bộ câu hỏi mới bất cứ lúc nào.</p>
          <button type="button" className="secondaryButton practiceReset" onClick={() => setStartedCount(null)}>Đổi số câu</button>
        </header>
        <QuizClient questions={selectedQuestions} />
      </main>
    );
  }

  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Luyện tập theo nhu cầu</p>
        <h1>Chọn số câu để luyện tập</h1>
        <p className="lead">Hệ thống sẽ chọn ngẫu nhiên từ ngân hàng 430 câu hỏi và tạo một bộ luyện tập riêng cho bạn.</p>
      </header>
      <section className="practicePicker" aria-labelledby="practice-picker-title">
        <h2 id="practice-picker-title">Bạn muốn làm bao nhiêu câu?</h2>
        <label htmlFor="question-count">Số câu: <strong>{count}</strong></label>
        <input id="question-count" type="range" min="10" max="100" step="10" value={count} onChange={(event) => setCount(Number(event.target.value))} />
        <div className="rangeLabels"><span>10 câu</span><span>100 câu</span></div>
        <button type="button" className="primaryButton practiceStart" onClick={() => setStartedCount(count)}>Bắt đầu luyện tập</button>
      </section>
    </main>
  );
}
