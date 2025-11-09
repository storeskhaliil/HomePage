import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>الصفحة التي تبحث عنها غير موجودة.</p>
      <Link href="/">العودة إلى الصفحة الرئيسية</Link>
    </div>
  );
}
