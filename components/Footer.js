import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} CrtMenu | صُمم بواسطة{" "}
        <a href="https://khaliil.com" target="_blank" rel="noreferrer">
          KHALIIL
        </a>
      </p>
    </footer>
  );
}
