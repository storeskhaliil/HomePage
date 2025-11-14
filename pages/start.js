import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Start.module.css";

export default function StartPage() {
  return (
    <>
      <Head>
        <title>CrtMenu - ابدأ الآن</title>
        <meta
          name="description"
          content="اكتشف قوالبنا، اشترك بالخطة المناسبة، وتعرّف كيف يعمل كل شيء بسهولة."
        />
      </Head>

      <main className={styles.container}>
        {/* Intro */}
        <section className={styles.intro}>
          <p>بدك تعرف أكثر؟</p>
          <p>كثير بسيط!</p>
        </section>


        <section className={styles.howItWorks}>
          <h2>كيف يعمل كل شيء؟</h2>
          <ol>
            <li>تختار القالب المناسب لك.</li>
            <li>ترسل تفاصيل القائمة والعلامة التجارية.</li>
            <li>أقوم بتصميم الموقع وتسليمه لك.</li>
            <li>تستلم رمز QR لتضعه في مطعمك أو حسابك.</li>
            <li>كل تحديث تحتاجه، فقط أبلغني وسأطبقه.</li>
          </ol>
        </section>


<section className={styles.templates}>
  <h2>القوالب المتوفرة</h2>
  <div className={styles.templatesGrid}>
    <Link href="/tem1" className={styles.templateCard}>
      <span className={styles.templateTitle}>قالب 1</span>
      <img src="https://pub-ee2f104c723f43b28a9c1f7bb48535d2.r2.dev/Tem1.gif" alt="قالب 1" className={styles.templateImage} />
    </Link>
    <Link href="/tem2" className={styles.templateCard}>
      <span className={styles.templateTitle}>قالب 1</span>
      <img src="/images/tem2.jpg" alt="قالب 2" className={styles.templateImage} />
    </Link>
    <Link href="/tem3" className={styles.templateCard}>
      <span className={styles.templateTitle}>قالب 1</span>
      <img src="/images/tem3.jpg" alt="قالب 3" className={styles.templateImage} />
    </Link>
  </div>
</section>

        {/* Subscriptions */}
        <section className={styles.subscriptions}>
          <h2>الباقات والخطط</h2>
          <div className={styles.subGrid}>
            <div className={styles.subCard}>
              <h3>باقة شهرية</h3>
              <p>₪99/شهر — تحديثات ودعم مستمر</p>
            </div>
            <div className={styles.subCard}>
              <h3>باقة مرة واحدة</h3>
              <p>₪399 — تصميم كامل + تحديث واحد عند الطلب</p>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
