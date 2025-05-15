import styles from "@/styles/Jobs.module.css";

export default function JobsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Jobs</h1>
      <section className={styles.section}>
        <p>
          Das Hochbett ist ein Ort für Musik, Kunst und Begegnung. Damit unsere
          Veranstaltungen auf höchstem Niveau bleiben, suchen wir regelmäßig
          Unterstützung in verschiedenen Bereichen.
        </p>

        <h2 className={styles.subheading}>Aktuelle Stellenangebote</h2>
        <ul className={styles.list}>
          <li>
            <strong>Technik & Stagehand:</strong> Du kennst dich mit Ton- und
            Lichttechnik aus und liebst Live-Situationen? Dann melde dich bei
            uns!
          </li>
          <li>
            <strong>Bar & Service:</strong> Du arbeitest gern mit Menschen und
            behältst auch bei voller Bar den Überblick? Perfekt!
          </li>
          <li>
            <strong>Social Media & Promo:</strong> Du hast ein Gespür für
            Sprache, Bild und Reichweite? Hilf uns, sichtbarer zu werden.
          </li>
        </ul>

        <h2 className={styles.subheading}>Was wir bieten</h2>
        <ul className={styles.list}>
          <li>Ein herzliches Team mit viel Erfahrung im Kulturbereich</li>
          <li>Flexible Arbeitszeiten, faire Bezahlung</li>
          <li>Freier Eintritt zu allen Veranstaltungen</li>
        </ul>

        <p className={styles.contact}>
          Schick uns einfach eine formlose Bewerbung an
          <a href="mailto:booking@das-hochbett.de" className={styles.emailLink}>
            booking@das-hochbett.de
          </a>
           oder sprich uns direkt bei einer Veranstaltung an.
        </p>
      </section>
    </main>
  );
}
