import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Das Hochbett
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Events</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/team">Das Team</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}
