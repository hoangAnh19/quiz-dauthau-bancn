import type { Metadata } from 'next';
import Link from 'next/link';
import './styles.css';

export const metadata: Metadata = {
  title: 'Hệ thống ôn luyện thi nghiệp vụ đấu thầu',
  description: 'Ngân hàng câu hỏi và bài thi thử nghiệp vụ đấu thầu.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <div className="appFrame">
          <aside className="appSidebar" aria-label="Chức năng chính">
            <Link className="brand" href="/"><span>ĐT</span> Ôn luyện đấu thầu</Link>
            <nav>
              <Link href="/">Luyện tập <small>430 câu</small></Link>
              {/* <Link href="/admin">Quản trị câu hỏi <small>Nội bộ</small></Link> */}
              <Link href="/mock-exam">Thi thử <small>70 câu</small></Link>
              <Link href="/search">Tra cứu <small>430 câu</small></Link>
              <Link href="/progress">Tiến độ học <small>Thiết bị này</small></Link>
              <Link href="/support">Ủng hộ tác giả <small>Cảm ơn</small></Link>
            </nav>
            <p className="sidebarNote">Dữ liệu: ngân hàng 430 câu đã rà soát.</p>
          </aside>
          <div className="appContent">{children}</div>
        </div>
      </body>
    </html>
  );
}
