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

<p className={styles.temtext}>
القي نظرة على صفحة مطعمك المستقبلية!
</p>
  
<Link href="/tem1" className={styles.templateCard}> 
<iframe src="/tem1" style={{width: "100%", height: "250px", margin: "0 auto", marginTop: "30px", borderRadius: "10px" }}></iframe>
</Link>
</section>


<section className={styles.subscriptions}>
  <h2>الباقات والخطط</h2>

<div className={styles.subScroll}>
  <div className={styles.subCard}>
    <h3>STANDARD</h3>
    <p className={styles.price}>₪900/شهر</p>
    <ul className={styles.features}>
      <li>موقع جاهز مع تصميم أنيق وجاهز للاستخدام</li>
      <li>دعم فني دائم للرد على أي استفسار</li>
      <li>تحديثات محتوى سريعة عند الطلب</li>
      <li>رفع الموقع على Subdomain خاص بك</li>
      <li>QR Code جاهز للربط السريع</li>
    </ul>
    <Link href="/plans/standard" className={styles.subLink}>المزيد / الاشتراك</Link>
  </div>

  <div className={styles.subCard}>
    <h3>PRO</h3>
    <p className={styles.price}>₪1300/شهر</p>
    <ul className={styles.features}>
      <li>تصميم مخصص وحصري للزبون فقط</li>
      <li>تحديثات فورية وتنفيذ أي تعديل بسرعة</li>
      <li>تحسينات مستمرة للأداء والسرعة</li>
      <li>مراقبة كاملة للموقع وحل أي مشكلة فورًا</li>
      <li>ربط Domain خاص أو Subdomain حسب رغبتك</li>
      <li>QR Code متقدم وجاهز للاستخدام</li>
    </ul>
    <Link href="/plans/pro" className={styles.subLink}>المزيد / الاشتراك</Link>
  </div>
</div>


</section>


      </main>
    </>
  );
}
