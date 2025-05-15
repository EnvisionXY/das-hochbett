// src/app/kontakt/page.tsx
import Link from "next/link";
import styles from "@/styles/Kontakt.module.css";

export default function KontaktPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Kontakt</h1>

      <p className={styles.paragraph}>
        Du möchtest eine Veranstaltung bei uns organisieren, hast Fragen zum
        Programm oder möchtest einfach nur Hallo sagen? Schreib uns – wir freuen
        uns auf deine Nachricht!
      </p>

      <div className={styles.contactDetails}>
        <p>
          <img
            src="/img/pin-outline.svg"
            alt="Adresse"
            className={styles.icon}
          />
          <strong>Adresse:</strong> Hochbett Club, Friedrichstraße 99, 10117
          Berlin
        </p>
        <p>
          <img
            src="/img/mail-outline.svg"
            alt="E-Mail"
            className={styles.icon}
          />
          <strong>Email:</strong>{" "}
          <a href="mailto:kontakt@hochbett-club.de" className={styles.link}>
            kontakt@hochbett-club.de
          </a>
        </p>
        <p>
          <img
            src="/img/call-outline.svg"
            alt="Telefon"
            className={styles.icon}
          />
          <strong>Telefon:</strong> 030 123456789
        </p>
      </div>

      <p>
        Für Booking-Anfragen, technische Informationen oder Kooperationen
        besuche auch unsere{" "}
        <Link href="/jobs" className={styles.link}>
          Jobs-Seite
        </Link>{" "}
        oder schreib direkt an{" "}
        <a href="mailto:booking@hochbett-club.de" className={styles.link}>
          booking@hochbett-club.de
        </a>
        .
      </p>
    </main>
  );
}
