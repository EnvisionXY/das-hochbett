import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/styles/SlugPage.module.css";

const EVENT_QUERY = defineQuery(`*[
  _type == "event" &&
  slug.current == $slug
][0]{
  _id,
  artist,
  subtitle,
  "date": coalesce(date, now()),
  "doorsOpen": coalesce(doorsOpen, 0),
  image,
  details,
  eventType,
  tickets,
  location->
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: event } = await sanityFetch({
    query: EVENT_QUERY,
    params: await params,
  });
  if (!event) {
    notFound();
  }

  const {
    artist,
    subtitle,
    date,
    image,
    details,
    eventType,
    doorsOpen,
    location,
    tickets,
  } = event;

  const eventImageUrl = image
    ? urlFor(image)?.auto("format").fit("max").quality(100).url()
    : null;

  const eventDate = new Date(date).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const eventTime = new Date(date).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const doorsOpenTime = new Date(
    new Date(date).getTime() - doorsOpen * 60000
  ).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className={styles.container}>
      <div className={styles.backLink}>
        <Link href="/">← Zurück zur Übersicht</Link>
      </div>

      <div className={styles.eventBox}>
        <div className={styles.imageWrapper}>
          <Image
            src={eventImageUrl || "https://placehold.co/550x310/png"}
            alt={artist || "Event"}
            width={800}
            height={533}
            style={{ width: "100%", height: "auto" }}
            className={styles.eventImage} // für z. B. object-fit
          />
        </div>

        <div className={styles.eventInfo}>
          <div>
            {eventType && (
              <div className={styles.eventType}>
                {eventType === "live" ? "Live" : "Virtuell"}
              </div>
            )}

            {artist && <h1 className={styles.eventTitle}>{artist}</h1>}

            {subtitle && <h2 className={styles.eventSubtitle}>{subtitle}</h2>}

            <dl className={styles.eventMeta}>
              <div className={styles.metaRow}>
                <dd>Datum</dd>
                <dt>{eventDate}</dt>
              </div>
              <div className={styles.metaRow}>
                <dd>Uhrzeit</dd>
                <dt>{eventTime}</dt>
              </div>
              {doorsOpenTime && (
                <div className={styles.metaRow}>
                  <dd>Einlass</dd>
                  <dt>{doorsOpenTime}</dt>
                </div>
              )}
              {location?.name && (
                <div className={styles.metaRow}>
                  <dd>Location</dd>
                  <dt>{location.name}</dt>
                </div>
              )}
            </dl>
          </div>

          {details?.length > 0 && (
            <div className={styles.eventDescription}>
              <PortableText value={details} />
            </div>
          )}

          {tickets && (
            <a
              className={styles.ticketButton}
              href={tickets}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tickets kaufen
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
