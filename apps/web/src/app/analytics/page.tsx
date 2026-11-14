import { SystemStats } from '../system-stats';

export default function AnalyticsPage() {
  return <main>
    <header className="hero">
      <p className="eyebrow">Google Analytics 4</p>
      <h1>Thống kê website</h1>
      <p className="lead">Số liệu thật lấy trực tiếp từ thuộc tính QuizDauthau trong Google Analytics 4, phạm vi 2 năm gần nhất.</p>
    </header>
    <SystemStats />
  </main>;
}
