export default function Tem1() {
  return (
    <>

      <head>
        <title>Menu</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <div dir="rtl">

        <header className="header">
          <div className="store-in">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Logo"
            />
            <h2>[RESTU NAME]</h2>
          </div>
        </header>

        <div className="section-buttons">
          <button onClick={() => scrollToSection("جديد")}>جديد</button>
          <button onClick={() => scrollToSection("برجر")}>برجر</button>
          <button onClick={() => scrollToSection("desserts")}>تشيكن</button>
          <button onClick={() => scrollToSection("مشروبات")}>مشروبات</button>
        </div>

        {/* -------- SECTION 1 -------- */}
        <div className="menu-section" id="جديد">
          <h2>وجبات جديدة!</h2>

          <div className="side-scroll">

            {/* CARD */}
            <div
              className="menu-card"
              data-name="برجر نباتي"
              data-price="50₪"
              data-desc="كرات بطاطا البيريه مغطاه بالجبنة الذائبة"
              data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2"
            >
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="" />
              <div className="menu-info">
                <div className="menu-name">برجر نباتي</div>
                <div className="menu-price">50₪</div>
                <div className="menu-desc">كرات بطاطا البيريه مغطاه بالجبنة الذائبة</div>
              </div>
            </div>

            {/* Duplicate cards – keep as in your HTML */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="menu-card"
                data-name="برجر نباتي"
                data-price="50₪"
                data-desc="كرات بطاطا البيريه مغطاه بالجبنة الذائبة"
                data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              >
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="" />
                <div className="menu-info">
                  <div className="menu-name">برجر نباتي</div>
                  <div className="menu-price">50₪</div>
                  <div className="menu-desc">
                    كرات بطاطا البيريه مغطاه بالجبنة الذائبة
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- SECTION 2 -------- */}
        <div className="menu-section" id="برجر">
          <h2>برجر</h2>

          <div className="side-scroll">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="menu-card"
                data-name="برجر نباتي"
                data-price="50₪"
                data-desc="كرات بطاطا البيريه مغطاه بالجبنة الذائبة"
                data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              >
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="" />
                <div className="menu-info">
                  <div className="menu-name">برجر نباتي</div>
                  <div className="menu-price">50₪</div>
                  <div className="menu-desc">
                    كرات بطاطا البيريه مغطاه بالجبنة الذائبة
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- SECTION 3 -------- */}
        <div className="menu-section" id="مشروبات">
          <h2>مشروبات</h2>

          <div className="side-scroll">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="menu-card"
                data-name="مشروب"
                data-price="50₪"
                data-desc="مشروب لذيذ"
                data-img="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              >
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2" alt="" />
                <div className="menu-info">
                  <div className="menu-name">مشروب</div>
                  <div className="menu-price">50₪</div>
                  <div className="menu-desc">مشروب لذيذ</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="sc-links">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048..."/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0..."/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M1.885.511a1.745 1.745 0 0 1..."/></svg></a>
          </div>

          <p>&copy; 2025 [RESTU NAME]</p>
        </footer>
      </div>

      {/* SCROLL FUNCTION */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        `
      }} />

      {/* GLOBAL CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');

        :root {
          --bg: #fefefe;
          --card: #d7cfbf;
          --text: #877259;
          --muted: #6c5e4f;
          --accent: #1e394b;
          --divider: #111;
          --font: "Noto Sans Arabic", sans-serif;
        }

        html {
          scroll-padding-top: 100px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font);
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        /* ---- SAME STYLES AS YOUR HTML ---- */

        .header {
          position: relative;
          width: 100vw;
          height: 350px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .header .store-in img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .header .store-in h2 {
          position: relative;
          z-index: 1;
          color: #fff;
          padding-bottom: 20px;
          font-size: clamp(2rem, 5vw, 4rem);
        }

        .section-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 30px 0;
          position: sticky;
          top: 0;
          background: #fefefeb6;
          backdrop-filter: blur(5px);
          z-index: 9999;
          border-bottom: 1px solid #1112;
        }

        .section-buttons button {
          border: 1px solid #111;
          padding: 8px 15px;
          background: transparent;
          font-family: var(--font);
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          color: var(--muted);
          transition: transform 0.3s;
        }

        .section-buttons button:hover {
          transform: scale(1.05);
        }

        .menu-section {
          padding: 30px 0;
        }

        .menu-section h2 {
          text-align: center;
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 20px;
        }

        .side-scroll {
          display: flex;
          overflow-x: auto;
          gap: 25px;
          padding: 20px;
          scrollbar-width: none;
        }

        .side-scroll::-webkit-scrollbar { display: none; }

        .menu-card {
          flex: 0 0 260px;
          border-left: 1px solid #1112;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .menu-card:last-child {
          border-left: none;
        }

        .menu-card img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
        }

        .menu-info {
          padding: 15px;
          display: flex;
          flex-direction: column;
        }

        .menu-name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .menu-price {
          color: var(--accent);
          margin-bottom: 8px;
        }

        .menu-desc {
          font-size: 0.85rem;
          color: var(--muted);
        }

        footer {
          width: 90%;
          margin: 50px auto 0;
          padding: 40px 0 30px;
          text-align: center;
          border-top: 1px solid #1112;
        }

        .sc-links {
          display: flex;
          gap: 30px;
          justify-content: center;
          padding-bottom: 30px;
        }

        .sc-links a:hover {
          background: #0001;
        }
      `}</style>

    </>
  );
}
