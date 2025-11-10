import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/contact">تواصل معي</Link>
        <Link href="/">
          <img src="/logo.png" alt="Logo" id="logo-img" />
        </Link>
        <Link href="/about">تعرف علي</Link>
      </header>

      <footer className={styles.footer}>
        
        <div className={styles.links}>
        <Link href="/terms">الشروط والاحكام</Link>
        </div>
        
        <p>
          © {new Date().getFullYear()} CRTMenu | {" "}
          <a href="https://khaliil.com" target="_blank" rel="noreferrer">
            KHALIIL.COM
          </a>
        </p>
      </footer>
    </>
  );
}
