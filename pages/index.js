import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>CRTMenu — قوائم رقمية للمطاعم</title>
        <meta name="description" content="مواقع قوائم رقمية احترافية للمطاعم. سريعة، عصرية، وسهلة التحديث." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main style={{
        fontFamily: "'Cairo', sans-serif",
        margin: 0,
        padding: 0,
        direction: 'rtl',
        backgroundColor: '#FFF7F2',
        color: '#6C4C48'
      }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '120px 20px',
          background: 'linear-gradient(135deg, #FFD8C2 0%, #FFEDE6 100%)'
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>CRTMenu</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
            قوائم رقمية احترافية للمطاعم — عصرية، سريعة، وسهلة التحديث
          </p>
          <a href="#contact" style={{
            padding: '15px 50px',
            backgroundColor: '#6C4C48',
            color: '#fff',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>ابدأ الآن</a>
        </section>

        {/* Templates Showcase */}
        <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px', fontWeight: '700' }}>اختر تصميمك</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Image src="/templates/classic.png" alt="تصميم كلاسيكي" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0', fontWeight: '600' }}>كلاسيكي</h3>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Image src="/templates/dark.png" alt="تصميم داكن" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0', fontWeight: '600' }}>داكن</h3>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Image src="/templates/minimal.png" alt="تصميم بسيط" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0', fontWeight: '600' }}>بسيط</h3>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.1)', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <Image src="/templates/image.png" alt="تصميم بالصور" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0', fontWeight: '600' }}>صور</h3>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#FFF0E5' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px', fontWeight: '700' }}>لماذا تختار CRTMenu؟</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '12px', backgroundColor: '#FFEDE6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '15px' }}>سريع</h3>
              <p>قمنا بإعداد موقع قائمتك خلال أيام قليلة مع رمز QR جاهز للطباعة.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '12px', backgroundColor: '#FFEDE6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '15px' }}>تحديث دائم</h3>
              <p>نقوم بإدارة كل التعديلات على قائمتك — لا حاجة لأي مهارات تقنية.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '12px', backgroundColor: '#FFEDE6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '15px' }}>متجاوب</h3>
              <p>تظهر قائمتك بشكل مثالي على أي هاتف أو جهاز لوحي.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '12px', backgroundColor: '#FFEDE6', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '15px' }}>تصاميم متعددة</h3>
              <p>اختر التصميم الذي يناسب أسلوب مطعمك.</p>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FFF7F2' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: '700' }}>ابدأ الآن مع CRTMenu</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            تواصل معنا اليوم لتجهيز قائمتك الرقمية!
          </p>
          <a href="https://wa.me/YOURNUMBER" target="_blank" style={{
            padding: '15px 50px',
            backgroundColor: '#6C4C48',
            color: '#fff',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>تواصل عبر واتساب</a>
        </section>
      </main>
    </>
  );
}
