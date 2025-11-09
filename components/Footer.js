import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} CRTMenu | صُمم بواسطة{" "}
        <a href="https://khaliil.com" target="_blank" rel="noreferrer">
          KHALIIL
        </a>
      </p>
    </footer>

      <header className={styles.header}>
        <Link href="/contact">تواصل معي</Link>
        <Link href="/">
          <img src="/logo.png" alt="Logo" id="logo-img" />
        </Link>
        <Link href="/about">تعرف علي</Link>
      </header>
  );
}
