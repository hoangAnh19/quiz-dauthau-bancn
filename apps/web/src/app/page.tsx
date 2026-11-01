import { QuizClient } from './quiz-client';
import { questionBank } from '../data/question-bank';

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Ngân hàng 430 câu</p>
        <h1>Ôn luyện nghiệp vụ đấu thầu</h1>
        <p className="lead">Bộ câu hỏi áp dụng theo thông báo 2775/TB-QLĐT. Đáp án được đồng bộ theo bảng rà soát đã chốt ngày 01/11/2026.</p>
      </header>
      <QuizClient questions={questionBank} />
    </main>
  );
}
