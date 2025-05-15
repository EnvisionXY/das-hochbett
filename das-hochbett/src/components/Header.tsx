import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          DAS HOCHBETT
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Events
          </Link>
          <Link href="/about" className={styles.navLink}>
            Über uns
          </Link>
          <Link href="/team" className={styles.navLink}>
            Das Team
          </Link>
          <Link href="/jobs" className={styles.navLink}>
            Jobs
          </Link>
          <Link href="/kontakt" className={styles.navLink}>
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
