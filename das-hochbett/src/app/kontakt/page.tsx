// src/app/kontakt/page.tsx
import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="container mx-auto max-w-3xl p-6 space-y-8">
      <h1 className="text-4xl font-bold tracking-tighter">Kontakt</h1>

      <p className="text-lg">
        Du möchtest eine Veranstaltung bei uns organisieren, hast Fragen zum
        Programm oder möchtest einfach nur Hallo sagen? Schreib uns – wir freuen
        uns auf deine Nachricht!
      </p>

      <div className="space-y-2 text-base">
        <p>
          📍 <strong>Adresse:</strong> Hochbett Club, Friedrichstraße 99, 10117
          Berlin
        </p>
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:kontakt@hochbett-club.de"
            className="text-blue-600 underline"
          >
            kontakt@hochbett-club.de
          </a>
        </p>
        <p>
          📞 <strong>Telefon:</strong> 030 123456789
        </p>
      </div>

      <p>
        Für Booking-Anfragen, technische Informationen oder Kooperationen
        besuche auch unsere{" "}
        <Link href="/jobs" className="text-blue-600 underline">
          Jobs-Seite
        </Link>{" "}
        oder schreib direkt an{" "}
        <a
          href="mailto:booking@hochbett-club.de"
          className="text-blue-600 underline"
        >
          booking@hochbett-club.de
        </a>
        .
      </p>
    </main>
  );
}
