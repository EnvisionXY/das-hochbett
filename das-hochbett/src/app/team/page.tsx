import styles from "@/styles/Team.module.css";

export default function TeamPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Das Team</h1>
      <p className={styles.intro}>
        Unser Team besteht aus Musikliebhabern, Technikern, Veranstaltern und
        Kreativen, die das Hochbett mit Leben füllen. Jeder bringt seine eigene
        Leidenschaft und Perspektive ein. Zusammen schaffen wir einen Ort für
        besondere Live-Erlebnisse.
      </p>
      <div className={styles.grid}>
        <div className={styles.profileCard}>
          <h2 className={styles.profileName}>Alex M.</h2>
          <p className={styles.profileRole}>Booking & Kurator</p>
        </div>
        <div className={styles.profileCard}>
          <h2 className={styles.profileName}>Jules R.</h2>
          <p className={styles.profileRole}>Lichtdesign & Visuals</p>
        </div>
        <div className={styles.profileCard}>
          <h2 className={styles.profileName}>Selin K.</h2>
          <p className={styles.profileRole}>Technik & Produktion</p>
        </div>
      </div>
    </main>
  );
}
