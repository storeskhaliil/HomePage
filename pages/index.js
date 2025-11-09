import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRTMenu — مواقع قوائم رقمية للمطاعم</title>
        <meta
          name="description"
          content="مواقع قوائم رقمية احترافية للمطاعم والمقاهي. تصميم حديث وسهل الإدارة."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        style={{
          fontFamily: "'Cairo', sans-serif",
          direction: "rtl",
          margin: 0,
          padding: 0,
          backgroundColor: "#0E0E0E",
          color: "#EDEDED",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            textAlign: "center",
            padding: "120px 20px 100px",
            background:
              "radial-gradient(circle at top, #1a1a1a 0%, #0E0E0E 80%)",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            CRTMenu
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#B8B8B8",
              marginBottom: "40px",
            }}
          >
            إنشاء مواقع قوائم رقمية أنيقة للمطاعم — بسيطة، سريعة، وبتصميم حديث.
          </p>
          <a
            href="#contact"
            style={{
              padding: "15px 45px",
              backgroundColor: "#1E90FF",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "0.3s",
            }}
          >
            اطلب موقعك الآن
          </a>
        </section>

        {/* Templates Section */}
        <section
          style={{
            padding: "100px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "60px",
            }}
          >
            اختر التصميم الذي يناسبك
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              { name: "كلاسيكي", src: "/templates/classic.png" },
              { name: "داكن", src: "/templates/dark.png" },
              { name: "بسيط", src: "/templates/minimal.png" },
              { name: "حديث", src: "/templates/modern.png" },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#1A1A1A",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={t.src}
                  alt={t.name}
                  width={400}
                  height={280}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <h3 style={{ padding: "20px 0", fontWeight: "500" }}>
                  {t.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section
          style={{
            backgroundColor: "#141414",
            padding: "100px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            من أنا
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "#B0B0B0",
              lineHeight: "1.8",
            }}
          >
            أنا شاب عمري 17 سنة أقدّم خدمة تصميم مواقع للقوائم الرقمية للمطاعم
            والمقاهي. كل المواقع مصممة على أعلى مستوى، باستخدام تقنيات حديثة
            مثل Next.js وVercel وGitHub Pages.  
            <br />
            <br />
            يمكنك زيارة موقعي الشخصي لمعرفة المزيد عن أعمالي:
            <br />
            <a
              href="https://khaliil.com"
              target="_blank"
              style={{
                color: "#1E90FF",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              www.khaliil.com
            </a>
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{
            textAlign: "center",
            padding: "100px 20px",
            backgroundColor: "#0E0E0E",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            جاهز تبدأ؟
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#B8B8B8", marginBottom: "40px" }}>
            تواصل معي الآن عبر واتساب لتصميم قائمتك الرقمية باحتراف.
          </p>
          <a
            href="https://wa.me/YOURNUMBER"
            target="_blank"
            style={{
              padding: "15px 50px",
              backgroundColor: "#1E90FF",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "0.3s",
            }}
          >
            تواصل عبر واتساب
          </a>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "30px",
            backgroundColor: "#111",
            color: "#888",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} CRTMenu — جميع الحقوق محفوظة.
        </footer>
      </main>
    </>
  );
}