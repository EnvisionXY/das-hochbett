import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    ? urlFor(image)?.width(550).height(310).url()
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
    <main className="container mx-auto grid gap-12 p-12">
      <div className="mb-4">
        <Link href="/">← Zurück zur Übersicht</Link>
      </div>
      <div className="grid items-top gap-12 sm:grid-cols-2">
        <Image
          src={eventImageUrl || "https://placehold.co/550x310/png"}
          alt={artist || "Event"}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height={310}
          width={550}
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-4">
            {eventType && (
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm capitalize">
                {eventType === "live" ? "Live" : "Virtuell"}
              </div>
            )}
            {artist && (
              <h1 className="text-4xl font-bold tracking-tighter mb-2">
                {artist}
              </h1>
            )}
            {subtitle && <h2 className="text-lg text-gray-600">{subtitle}</h2>}
            <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
              <dd className="font-semibold">Datum</dd>
              <dt>{eventDate}</dt>
              <dd className="font-semibold">Uhrzeit</dd>
              <dt>{eventTime}</dt>
            </dl>
            {doorsOpenTime && (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <dd className="font-semibold">Einlass</dd>
                <dt>{doorsOpenTime}</dt>
              </dl>
            )}
            {location?.name && (
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <dd className="font-semibold">Location</dd>
                <dt>{location.name}</dt>
              </dl>
            )}
          </div>
          {details && details.length > 0 && (
            <div className="prose max-w-none">
              <PortableText value={details} />
            </div>
          )}
          {tickets && (
            <a
              className="flex items-center justify-center rounded-md bg-blue-500 p-4 text-white"
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
