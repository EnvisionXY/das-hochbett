import styles from "@/styles/About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Über uns</h1>

      <p className={styles.paragraph}>
        Das Hochbett ist eine Plattform für Livemusik, Clubkultur und
        audiovisuelle Formate. Wir veranstalten regelmäßig Konzerte, Listening
        Sessions, DJ-Sets und hybride Formate zwischen Klangkunst und
        Performance.
      </p>

      <p className={styles.paragraph}>
        Unser Raum ist ein Ort für musikalische Entdeckungen, jenseits
        ausgetretener Genrepfade – für Acts, die Geschichten erzählen,
        Atmosphären schaffen und das Publikum mitnehmen auf eine Reise. Wir
        glauben an die Kraft der Musik, Verbindungen zu schaffen, Perspektiven
        zu öffnen und Räume zu gestalten.
      </p>

      <p className={styles.paragraph}>
        Das Hochbett wird kuratiert von Musikern, Künstlern und Szenemenschen –
        mit einem Faible für Sounds zwischen Post-Rock, Electronica, Spoken Word
        und Jazz.
      </p>

      <p className={styles.paragraph}>
        Wir lieben DIY-Kultur, ehrliche Leidenschaft und musikalische Tiefe.
        Unser Ziel: besondere Abende schaffen, die in Erinnerung bleiben.
      </p>
    </main>
  );
}
