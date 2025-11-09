import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRTMenu — نصمم القوائم بأسلوب يليق بك</title>
        <meta
          name="description"
          content="تصميم مواقع قوائم رقمية للمطاعم والمقاهي، بتصميم عصري راقٍ وأداء سريع."
        />
      </Head>

      <main
        style={{
          fontFamily: "'Cairo', sans-serif",
          direction: "rtl",
          backgroundColor: "#0B0B0B",
          color: "#F8F8F8",
          margin: 0,
          overflowX: "hidden",
        }}
      >
        {/* HERO SECTION */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 20px",
            background:
              "radial-gradient(circle at 50% 0%, rgba(30,144,255,0.08), transparent 60%)",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              letterSpacing: "-1px",
              marginBottom: "15px",
              background:
                "linear-gradient(90deg, #FFF 0%, #1E90FF 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CRTMenu
          </h1>
          <h2
            style={{
              fontSize: "1.7rem",
              color: "#BFBFBF",
              maxWidth: "700px",
              marginBottom: "50px",
              lineHeight: "1.8",
            }}
          >
            نصمم مواقع قوائم إلكترونية تجعل تجربة مطعمك فريدة، وواجهة أنيقة
            تليق بعلامتك.
          </h2>
          <Link
            href="#templates"
            style={{
              backgroundColor: "#1E90FF",
              color: "#fff",
              padding: "16px 50px",
              borderRadius: "6px",
              fontWeight: "600",
              fontSize: "1.1rem",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            اكتشف القوالب
          </Link>
        </section>

        {/* TEMPLATES */}
        <section
          id="templates"
          style={{
            padding: "120px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.4rem",
              fontWeight: "700",
              marginBottom: "80px",
            }}
          >
            القوالب الجاهزة
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "50px",
            }}
          >
            {[
              { id: 1, name: "قالب حديث", link: "/tem1", img: "/templates/tem1.png" },
              { id: 2, name: "قالب كلاسيكي", link: "/tem2", img: "/templates/tem2.png" },
              { id: 3, name: "قالب فاخر", link: "/tem3", img: "/templates/tem3.png" },
            ].map((t) => (
              <Link
                key={t.id}
                href={t.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#111",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 25px rgba(0,0,0,0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      backgroundImage: `url(${t.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div
                    style={{
                      padding: "25px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        marginBottom: "10px",
                        color: "#FFF",
                      }}
                    >
                      {t.name}
                    </h3>
                    <p style={{ color: "#999" }}>اضغط لعرض القالب</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          style={{
            backgroundColor: "#0E0E0E",
            padding: "120px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: "700",
              marginBottom: "25px",
            }}
          >
            عن المشروع
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#BEBEBE",
              lineHeight: "2",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            CRTMenu هو مشروع شخصي أسسته لأقدّم للمطاعم والمقاهي تجربة رقمية راقية.
            كل موقع نصممه يجمع بين البساطة، الجمال، والسرعة.  
            كل شيء تحت إشرافي الكامل — من التصميم حتى الإطلاق والتحديثات.
          </p>

          <div style={{ marginTop: "50px" }}>
            <p style={{ color: "#AAA" }}>تعرف عليّ أكثر من خلال موقعي الشخصي:</p>
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
          </div>
        </section>

        {/* CONTACT */}
        <section
          style={{
            padding: "140px 20px",
            textAlign: "center",
            background:
              "linear-gradient(180deg, #0B0B0B 0%, #101010 100%)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            اطلب موقعك الآن
          </h2>
          <p
            style={{
              color: "#BFBFBF",
              fontSize: "1.2rem",
              marginBottom: "50px",
            }}
          >
            أرسل لي تفاصيلك عبر واتساب، وسأبدأ تصميم موقعك فورًا.
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
            تواصل الآن
          </a>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#080808",
            color: "#777",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} CRTMenu — تصميم راقٍ بتفاصيل دقيقة.
        </footer>
      </main>
    </>
  );
}