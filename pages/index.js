import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>CrtMenu - مواقع مطاعم احترافية</title>
        <meta
          name="description"
          content="نصمم مواقع قوائم طعام رقمية احترافية للمطاعم والكافيهات — بسهولة، أناقة، وبدون تعقيد."
        />
      </Head>

      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1>صمم قائمتك الرقمية مع <span>CrtMenu</span></h1>
          <p>ابدأ رحلتك الرقمية — موقع أنيق لقائمتك خلال يوم واحد فقط</p>
          <Link href="/subscriptions" className={styles.cta}>
            <button>ابدأ الآن</button>
          </Link>
        </div>
      </div>

      <section className={styles.services}>
        <h2>خدماتي</h2>
        <div className={styles.grid}>
          <div>
            <h3>تصميم مواقع القوائم</h3>
            <p>أصمم لك موقعاً جذاباً يعرض قائمة الطعام بشكل مميز وسهل للزوار.</p>
          </div>
          <div>
            <h3>تحديثات وصيانة</h3>
            <p>كلما رغبت بتعديل أو إضافة جديدة، فقط أبلغني وسأتولى الباقي.</p>
          </div>
          <div>
            <h3>روابط و رموز QR</h3>
            <p>أحصل على رمز QR مخصص لموقع قائمتك لوضعه في متجرك أو حساباتك.</p>
          </div>
        </div>
      </section>

      <section className={styles.whyme}>
        <h2>لماذا تختارني؟</h2>
        <ul>
          <li>تصميم عصري وسريع الاستجابة لكل الأجهزة</li>
          <li>أتعامل مع كل التفاصيل بنفسي لضمان الجودة</li>
          <li>أسعار مناسبة ودفع آمن وسهل</li>
        </ul>
      </section>

      <section className={styles.templates}>
        <h2>اختر التصميم المناسب لك</h2>
        <div className={styles.templatesGrid}>
          <Link href="/tem1" className={styles.templateCard}>قالب 1</Link>
          <Link href="/tem2" className={styles.templateCard}>قالب 2</Link>
          <Link href="/tem3" className={styles.templateCard}>قالب 3</Link>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>تواصل معي</h2>
        <p>للطلبات والاستفسارات، راسلني مباشرة:</p>
        <a href="/contact" className={styles.contactBtn}>تواصل الآن</a>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} CrtMenu | صُمم بواسطة <a href="https://khaliil.com" target="_blank" rel="noreferrer">KHALIIL</a></p>
      </footer>
    </>
  );
}