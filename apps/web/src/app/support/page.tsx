import Image from 'next/image';

export default function SupportPage() {
  return (
    <main className="support-page">
      <header className="support-hero">
        <span className="support-badge">💚 Ủng hộ tác giả</span>

        <h1>
          Sự đồng hành của bạn
          <br />
          <span>là động lực để phát triển.</span>
        </h1>

        <p className="support-lead">
          Nếu ngân hàng câu hỏi hữu ích với bạn, một lời động viên
          hoặc sự ủng hộ nhỏ sẽ giúp mình duy trì hệ thống và tiếp tục
          xây dựng thêm nhiều nội dung chất lượng.
        </p>
      </header>

      <section className="donation-card" aria-labelledby="donation-title">
        <div className="qr-panel">
          <span className="section-label">QUÉT MÃ ĐỂ ỦNG HỘ</span>

          <div className="qr-frame">
            <Image
              src="/donate-qr.png"
              alt="Mã QR chuyển khoản ủng hộ tác giả qua Vietcombank"
              width={628}
              height={998}
              sizes="(max-width: 640px) 80vw, 280px"
              priority
              className="donation-image"
            />
          </div>

          <p>Mỗi sự ủng hộ đều được trân trọng 💚</p>
        </div>

        <div className="donation-details">
          <span className="section-label">CÙNG DUY TRÌ & PHÁT TRIỂN</span>
          <h2 id="donation-title">Gửi một chút động lực</h2>
          <p className="section-description">
            Khoản ủng hộ của bạn góp phần chi trả chi phí vận hành
            và cải thiện trải nghiệm học tập mỗi ngày.
          </p>

          <dl className="bank-details">
            <div>
              <dt>Ngân hàng</dt>
              <dd>Vietcombank</dd>
            </div>
            <div>
              <dt>Số tài khoản</dt>
              <dd className="account-number">1015468972</dd>
            </div>
          </dl>

          <div className="thank-you">
            <span aria-hidden="true">✦</span>
            <p>
              Cảm ơn bạn đã tin tưởng, sử dụng và đồng hành cùng dự án.
              Một lời góp ý cũng là sự hỗ trợ rất đáng quý!
            </p>
          </div>

          <a className="feedback-link" href="mailto:thabka99@gmail.com">
            Gửi lời nhắn hoặc góp ý <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="collaboration-card" aria-labelledby="contact-title">
        <div className="collaboration-content">
          <span className="section-label">KẾT NỐI & HỢP TÁC</span>
          <h2 id="contact-title">Cùng biến ý tưởng thành sản phẩm</h2>
          <p>
            Bạn đang tìm giải pháp website, ứng dụng hoặc công cụ hỗ trợ
            công việc và doanh nghiệp? Hãy kết nối để cùng trao đổi
            và tìm hướng triển khai phù hợp.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="contact-button primary"
            href="https://www.facebook.com/2022anh1k"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kết nối Facebook <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-button secondary"
            href="mailto:thabka99@gmail.com"
          >
            Email : thabka99@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <style>{`
        .support-page,
        .support-page * {
          box-sizing: border-box;
        }

        .support-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 24px;
          color: #16362b;
          font-family: inherit;
        }

        .support-hero {
          max-width: 780px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .support-badge {
          display: inline-flex;
          padding: 9px 16px;
          border: 1px solid #cde7d9;
          border-radius: 999px;
          background: #eff9f2;
          color: #246b45;
          font-size: 14px;
          font-weight: 700;
        }

        .support-hero h1 {
          margin: 24px 0 20px;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -1.5px;
        }

        .support-hero h1 span {
          color: #248342;
        }

        .support-lead {
          max-width: 650px;
          margin: 0 auto;
          color: #61736b;
          font-size: 17px;
          line-height: 1.8;
        }

        .donation-card {
          display: grid;
          grid-template-columns: 360px minmax(0, 1fr);
          overflow: hidden;
          border: 1px solid #dce9df;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 60px rgba(26, 75, 44, 0.08);
        }

        .qr-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 28px;
          background: linear-gradient(150deg, #eff8e8, #e6f4ee);
        }

        .section-label {
          display: block;
          color: #42754e;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.6;
          letter-spacing: 1.8px;
        }

        .qr-frame {
          width: 100%;
          max-width: 280px;
          margin-top: 20px;
          padding: 12px;
          border: 1px solid #e0eadd;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 10px 28px rgba(31, 77, 45, 0.08);
        }

        .donation-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .qr-panel > p {
          margin: 18px 0 0;
          color: #486650;
          font-size: 12px;
          line-height: 1.6;
          text-align: center;
        }

        .donation-details {
          align-self: center;
          padding: 40px;
        }

        .support-page h2 {
          margin: 12px 0;
          font-size: clamp(24px, 3vw, 30px);
          line-height: 1.3;
          letter-spacing: -0.7px;
        }

        .section-description,
        .collaboration-content > p {
          margin: 0;
          color: #61736b;
          font-size: 15px;
          line-height: 1.8;
        }

        .bank-details {
          margin: 26px 0;
          padding: 4px 20px;
          border: 1px solid #e4ece6;
          border-radius: 16px;
          background: #f8fbf8;
        }

        .bank-details > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px 16px;
          padding: 16px 0;
        }

        .bank-details > div + div {
          border-top: 1px solid #e4ece6;
        }

        .bank-details dt {
          color: #61736b;
          font-size: 14px;
        }

        .bank-details dd {
          margin: 0;
          font-weight: 750;
        }

        .bank-details .account-number {
          color: #23733d;
          font-size: 23px;
          font-variant-numeric: tabular-nums;
          letter-spacing: 1px;
          overflow-wrap: anywhere;
          user-select: all;
        }

        .thank-you {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #4e6757;
        }

        .thank-you > span {
          color: #71a444;
          font-size: 24px;
        }

        .thank-you p {
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
        }

        .feedback-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
          color: #216e3c;
          font-size: 14px;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .collaboration-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 32px;
          margin-top: 24px;
          padding: 36px;
          border: 1px solid #233f37;
          border-radius: 24px;
          background: linear-gradient(120deg, #142e26, #244b3c);
          color: #fff;
        }

        .collaboration-card .section-label {
          color: #b8dd95;
        }

        .collaboration-content > p {
          max-width: 580px;
          color: #d0dfd6;
        }

        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 235px;
        }

        .contact-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 18px;
          border: 1px solid transparent;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 160ms ease, background 160ms ease;
        }

        .contact-button.primary {
          background: #d3f5a4;
          color: #173824;
        }

        .contact-button.secondary {
          border-color: #658071;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
        }

        .contact-button:hover {
          transform: translateY(-2px);
        }

        .contact-button.primary:hover {
          background: #e1ffb9;
        }

        .contact-button.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .support-page a:focus-visible {
          outline: 3px solid #72b64d;
          outline-offset: 5px;
        }

        @media (max-width: 800px) {
          .donation-card {
            grid-template-columns: 300px minmax(0, 1fr);
          }

          .donation-details {
            padding: 28px;
          }

          .collaboration-card {
            grid-template-columns: 1fr;
          }

          .contact-actions {
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .support-page {
            padding: 40px 16px;
          }

          .support-hero {
            margin-bottom: 28px;
          }

          .support-hero h1 {
            letter-spacing: -1px;
          }

          .support-lead {
            font-size: 15px;
          }

          .donation-card {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .qr-panel {
            padding: 28px 24px;
          }

          .donation-details {
            padding: 28px 22px;
          }

          .collaboration-card {
            gap: 24px;
            padding: 28px 22px;
          }

          .contact-actions {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}