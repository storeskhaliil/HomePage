import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>CRTMenu — Digital Menus for Restaurants</title>
        <meta name="description" content="Professional QR menu websites for restaurants. Easy, fast, and modern." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#fff', color: '#333' }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '120px 20px 80px',
          backgroundColor: '#FFEDE6'
        }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 20px' }}>CRTMenu</h1>
          <p style={{ fontSize: '1.5rem', margin: '0 0 40px' }}>
            Digital Menus for Restaurants — modern, fast, and always up-to-date.
          </p>
          <a href="#contact" style={{
            padding: '15px 40px',
            backgroundColor: '#6C4C48',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>Get Started</a>
        </section>

        {/* Templates Showcase */}
        <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px' }}>Choose Your Template</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Image src="/templates/classic.png" alt="Classic Template" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0' }}>Classic</h3>
            </div>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Image src="/templates/dark.png" alt="Dark Template" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0' }}>Dark</h3>
            </div>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Image src="/templates/minimal.png" alt="Minimal Template" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0' }}>Minimal</h3>
            </div>
            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <Image src="/templates/image.png" alt="Image-Heavy Template" width={400} height={300} />
              <h3 style={{ textAlign: 'center', padding: '15px 0' }}>Image-Heavy</h3>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#F8F8F8' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '60px' }}>Why Choose CRTMenu?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3>Fast Setup</h3>
              <p>Create your menu website in just a few days, ready to go with a QR code.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Always Updated</h3>
              <p>We handle every menu change for you — no tech skills required.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Mobile-First</h3>
              <p>Your menu will look perfect on any phone or tablet.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Multiple Templates</h3>
              <p>Choose the design that fits your restaurant’s style.</p>
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" style={{ padding: '80px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get Your Menu Online</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
            Contact us today and start serving your menu digitally!
          </p>
          <a href="https://wa.me/YOURNUMBER" target="_blank" style={{
            padding: '15px 40px',
            backgroundColor: '#6C4C48',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>Contact via WhatsApp</a>
        </section>
      </main>
    </>
  );
}
