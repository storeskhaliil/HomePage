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
      <span className={styles.templateTitle}>التصميم الاساسي</span>
      <img src="https://pub-ee2f104c723f43b28a9c1f7bb48535d2.r2.dev/Tem1.gif" alt="قالب 1" className={styles.templateImage} />
    </Link>
  </div>
</section>


<section className={styles.subscriptions}>
  <h2>الباقات والخطط</h2>

  <div className={styles.subScroll}>
    <div className={styles.subCard}>
      <h3>الباقة الشهرية</h3>
      <p className={styles.price}>₪99/شهر</p>
      <ul className={styles.features}>
        <li>تحديثات مستمرة</li>
        <li>دعم فني دائم</li>
        <li>تحديثات سريعة عند الطلب</li>
      </ul>
      <Link href="/plans/monthly" className={styles.subLink}>المزيد / الاشتراك</Link>
    </div>

    <div className={styles.subCard}>
      <h3>باقة الدفع لمرة واحدة</h3>
      <p className={styles.price}>₪399</p>
      <ul className={styles.features}>
        <li>تصميم كامل</li>
        <li>تحديث واحد مجاني</li>
        <li>استضافة سنة كاملة</li>
      </ul>
      <Link href="/plans/one-time" className={styles.subLink}>المزيد / الاشتراك</Link>
    </div>

    <div className={styles.subCard}>
      <h3>باقة الأعمال</h3>
      <p className={styles.price}>₪199/شهر</p>
      <ul className={styles.features}>
        <li>تصميم مخصص</li>
        <li>إدارة المحتوى</li>
        <li>دعم优优优優</li>
      </ul>
      <Link href="/plans/business" className={styles.subLink}>المزيد / الاشتراك</Link>
    </div>
  </div>
</section>


      </main>
    </>
  );
}
