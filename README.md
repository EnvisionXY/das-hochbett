# Das Hochbett 🎶

**Das Hochbett** ist eine kuratierte Event-Plattform für Livemusik, Clubkultur und audiovisuelle Formate. Die Website wurde mit **Next.js (App Router)** entwickelt und nutzt **Sanity.io** als Headless CMS zur Inhaltspflege. Ziel ist es, Veranstaltungen ansprechend zu präsentieren und über eine schlanke, wartbare Architektur zu verwalten.

---

## 🔧 Tech-Stack

* **Frontend:** Next.js 14 (App Router)
* **Styling:** Klassisches CSS via CSS Modules (`.module.css`)
* **CMS:** [Sanity.io](https://www.sanity.io/)
* **Deployment:** Vercel
* **Bildoptimierung:** `next/image` mit Sanity CDN
* **Hosting CMS Studio:** sanity.studio oder lokal

---

## 📁 Projektstruktur

```
Das_Hochbett/
│
├── das-hochbett/              # Next.js Frontend
│   ├── app/                   # App Router Pages
│   │   ├── events/            # Slug-basierte Event-Seiten
│   │   ├── about/             # Über uns
│   │   ├── team/              # Team-Seite
│   │   ├── jobs/              # Jobs & Ausschreibungen
│   │   ├── kontakt/           # Kontaktformular & Infos
│   │   ├── layout.tsx         # Globales Layout
│   │   └── page.tsx           # Hauptseite mit Eventliste
│   ├── components/            # Wiederverwendbare Komponenten
│   ├── styles/                # CSS Module für jede Seite
│   └── public/img/            # Icons & statische Assets
│
├── Sanity/                    # Sanity Studio (CMS)
│   ├── schemas/               # Event-, Venue-, Artist-Schema etc.
│   └── schema.ts              # Sanity Typegen + Schema-Konfiguration
```

---

## 🚀 Setup & Entwicklung

### 1. Repository klonen

```bash
git clone https://github.com/EnvisionXY/das-hochbett.git
cd das-hochbett
```

### 2. Frontend installieren

```bash
cd das-hochbett
npm install
npm run dev
```

### 3. CMS installieren

```bash
cd ../Sanity
npm install
npm run dev
```

Falls du das Studio online deployen willst:

```bash
npm run deploy
```

> Du wirst beim ersten Deploy nach einem **Studio-Hostname** gefragt: z. B. `hochbett`

---

## 🧐 Features

### ✅ Eventverwaltung über Sanity

* `event`: Titel, Subtitle, Datum, Uhrzeit, Einlasszeit, Slug, Location, Tickets, Details (Portable Text)
* `venue`: Ort & Adresse

### ✅ Dynamische Slug-Seiten

* Jede Eventseite wird per `slug.current` aufgerufen.
* Inhalte werden über GROQ-Queries vom Sanity-Backend geladen.

### ✅ Monatsweise Gruppierung der Events

* Events werden in der Übersicht nach Monaten gruppiert (Mai, Juni, etc.).
* Jedes Event wird mit Bild, Subtitle, Uhrzeit & Link zur Detailseite dargestellt.

### ✅ Responsive Design

* Die Website ist für Desktop und Mobilgeräte optimiert.
* Bildkomponenten passen sich dem Seitenverhältnis des Originalbilds an.

### ✅ Deployment

* Das Frontend wird über **Vercel** gehostet:
  📍 [https://das-hochbett.vercel.app](https://das-hochbett.vercel.app)

* Das Studio kann ebenfalls über Sanity Studio gehostet oder lokal betrieben werden.

---

## 🛠 Webhooks & Updates

Wenn Inhalte in Sanity geändert werden, kann per **Webhook** ein Revalidation-Request an die Vercel-App geschickt werden, um Änderungen sofort live zu stellen.

Sanity → Settings → API → Webhooks

---

## 🦖 Todos / Weiterentwicklung

* [ ] Kontaktformular einbinden und in Sanity als eigene Dokumente speichern
* [ ] Passwortschutz / Auth für Adminbereiche
* [ ] Filter nach Event-Typ (live, virtuell)
* [ ] Darkmode

---

## 👤 Autor

**Will (EnvisionXY)**
Frontend & UI/UX Developer, Musikliebhaber & Designer
[https://github.com/EnvisionXY](https://github.com/EnvisionXY)

---

## 📄 Lizenz

MIT License – Nutzung & Anpassung erlaubt. Bitte bei Weiterverwendung auf den Autor verweisen.
