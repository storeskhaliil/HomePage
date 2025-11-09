import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRTMenu — نُبدع في تصميم القوائم الرقمية</title>
        <meta
          name="description"
          content="نصمم، نطوّر، ونُبدع مواقع رقمية حديثة للمطاعم والمقاهي بتصميم استثنائي وتجربة استخدام راقية."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main
        style={{
          fontFamily: "'Cairo', sans-serif",
          direction: "rtl",
          backgroundColor: "#0E0E0E",
          color: "#F5F5F5",
          margin: 0,
          padding: 0,
        }}
      >
        {/* HERO */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background:
              "linear-gradient(180deg, #111 0%, #0E0E0E 80%)",
            padding: "0 20px",
          }}
        >
          <h1
            style={{
              fontSize: "3.8rem",
              fontWeight: "800",
              letterSpacing: "-1px",
              marginBottom: "10px",
              color: "#FFF",
            }}
          >
            نصمم، نطوّر، نُبدع
          </h1>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "400",
              color: "#CFCFCF",
              marginBottom: "30px",
            }}
          >
            مواقع ويب متكاملة تلبي احتياجاتك وتبرز هوية مطعمك.
          </h2>
          <a
            href="#contact"
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              padding: "16px 50px",
              borderRadius: "8px",
              fontSize: "1.1rem",
              textDecoration: "none",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            اطلب موقعك الآن
          </a>
        </section>

        {/* SERVICES */}
        <section
          style={{
            padding: "120px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "60px",
            }}
          >
            خدماتنا
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {[
              {
                icon: "💻",
                title: "تصميم المواقع",
                desc: "نصمم مواقع عصرية أنيقة بتجربة استخدام فريدة.",
              },
              {
                icon: "⚙️",
                title: "برمجة القوائم الرقمية",
                desc: "تحويل قائمتك الورقية إلى تجربة رقمية جذابة وسهلة.",
              },
              {
                icon: "🚀",
                title: "إطلاق الموقع",
                desc: "نساعدك في رفع موقعك وتشغيله باحتراف على الإنترنت.",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#141414",
                  borderRadius: "10px",
                  padding: "40px 30px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>{s.title}</h3>
                <p style={{ color: "#B0B0B0", lineHeight: "1.8" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SHOWCASE */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            backgroundColor: "#101010",
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "60px",
            }}
          >
            عينات من أعمالنا
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#1A1A1A",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src={`/templates/example${i}.png`}
                  alt={`Template ${i}`}
                  width={500}
                  height={350}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
            لماذا CRTMenu؟
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#C0C0C0",
              lineHeight: "2",
            }}
          >
            لأننا نؤمن أن التفاصيل تصنع الفارق. كل موقع نقدمه مصمم بعناية ليعكس
            هوية عملك ويمنح عملاءك تجربة راقية. نعمل على أحدث التقنيات ونتعامل مع
            كل مشروع وكأنه عمل فني.
          </p>
        </section>

        {/* ABOUT */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            backgroundColor: "#141414",
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            من أنا
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#B0B0B0",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            أنا خالد، مؤسس CRTMenu، أُقدّم حلول تصميم وبرمجة للمطاعم والمقاهي.
            أصمم المواقع باهتمام فني وتقني عالي، وبأسلوب حديث وراقي.
            <br />
            <br />
            تصفح موقعي الشخصي:
            <br />
            <a
              href="https://khaliil.com"
              target="_blank"
              style={{
                color: "#1E90FF",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              www.khaliil.com
            </a>
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{
            padding: "120px 20px",
            textAlign: "center",
            background:
              "linear-gradient(180deg, #0E0E0E 0%, #111 100%)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            جاهز تبدأ؟
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#CFCFCF",
              marginBottom: "40px",
            }}
          >
            تواصل معي الآن لتحصل على موقع احترافي يعكس هوية مطعمك أو مشروعك.
          </p>
          <a
            href="https://wa.me/YOURNUMBER"
            target="_blank"
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              padding: "18px 60px",
              borderRadius: "8px",
              fontSize: "1.2rem",
              textDecoration: "none",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            تواصل عبر واتساب
          </a>
        </section>

        <footer
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#0A0A0A",
            color: "#777",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} CRTMenu — نُبدع في التفاصيل.
        </footer>
      </main>
    </>
  );
}