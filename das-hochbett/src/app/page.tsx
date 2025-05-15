import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";

import type { Event } from "../sanity/types";
import { EventListByMonth } from "@/components/EventListByMonth";

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, artist, subtitle, slug, date, "imageUrl": image.asset->url}|order(date asc)`);

export default async function IndexPage() {
  const { data: events }: { data: Event[] } = await sanityFetch({
    query: EVENTS_QUERY,
  });

  return (
    <main className="main-page">
      <h1 className="main-title">
        Veranstaltungen <span className="year">{new Date().getFullYear()}</span>
      </h1>
      <EventListByMonth events={events} />
    </main>
  );
}
