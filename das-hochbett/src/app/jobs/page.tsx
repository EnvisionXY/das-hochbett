export default function JobsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Jobs</h1>
      <section className="space-y-4">
        <p>
          Das Hochbett ist ein Ort für Musik, Kunst und Begegnung. Damit unsere
          Veranstaltungen auf höchstem Niveau bleiben, suchen wir regelmäßig
          Unterstützung in verschiedenen Bereichen.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Aktuelle Stellenangebote
        </h2>
        <ul className="list-disc pl-6 space-y-2">
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

        <h2 className="text-2xl font-semibold mt-6">Was wir bieten</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ein herzliches Team mit viel Erfahrung im Kulturbereich</li>
          <li>Flexible Arbeitszeiten, faire Bezahlung</li>
          <li>Freier Eintritt zu allen Veranstaltungen</li>
        </ul>

        <p className="mt-6">
          Schick uns einfach eine formlose Bewerbung an
          <a
            href="mailto:booking@das-hochbett.de"
            className="text-blue-500 underline ml-1"
          >
            booking@das-hochbett.de
          </a>
           oder sprich uns direkt bei einer Veranstaltung an.
        </p>
      </section>
    </main>
  );
}
