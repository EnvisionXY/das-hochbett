export default function TeamPage() {
  return (
    <main className="container mx-auto p-12">
      <h1 className="text-4xl font-bold mb-8">Das Team</h1>
      <p className="mb-4">
        Unser Team besteht aus Musikliebhaber*innen, Techniker*innen,
        Veranstalter*innen und Kreativen, die das Hochbett mit Leben füllen.
        Jeder bringt seine eigene Leidenschaft und Perspektive ein. Zusammen
        schaffen wir einen Ort für besondere Live-Erlebnisse.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Beispiel-Profile */}
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-semibold">Alex M.</h2>
          <p className="text-sm text-gray-600">Booking & Kurator</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-semibold">Jules R.</h2>
          <p className="text-sm text-gray-600">Lichtdesign & Visuals</p>
        </div>
        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="text-xl font-semibold">Selin K.</h2>
          <p className="text-sm text-gray-600">Technik & Produktion</p>
        </div>
      </div>
    </main>
  );
}
