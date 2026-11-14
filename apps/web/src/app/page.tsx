import { QuizClient } from './quiz-client';
import { questionBank } from '../data/question-bank';

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Ngân hàng 430 câu</p>
        <h1>Hệ thống ôn luyện thi nghiệp vụ đấu thầu mới nhất</h1>
        <p className="lead">Bộ câu hỏi áp dụng theo thông báo mới nhất ngày 22/10/2026 của Cục quản lý đấu thầu- Bộ Tài Chính: 2775/TB-QLĐT. </p>
      </header>
      <QuizClient questions={questionBank} />
    </main>
  );
}
