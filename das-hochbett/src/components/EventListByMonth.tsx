import { Event } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";

type Props = {
  events: Event[];
};

export function EventListByMonth({ events }: Props) {
  const grouped = events.reduce((acc, event) => {
    if (!event.date) return acc;
    const month = new Date(event.date).toLocaleString("de-DE", {
      month: "long",
    });
    if (!acc[month]) acc[month] = [];
    acc[month].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className="event-list">
      {Object.entries(grouped).map(([month, events]) => (
        <section key={month} className="event-month">
          <h2 className="month-heading">{month}</h2>
          <ul className="events-grid">
            {events.map((event) => (
              <li className="event-card" key={event._id}>
                <Link
                  href={`/events/${event?.slug?.current}`}
                  className="event-link"
                >
                  <div className="event-info">
                    <h3 className="event-artist">{event.artist}</h3>
                    {event.subtitle && (
                      <p className="event-subtitle">{event.subtitle}</p>
                    )}
                    {event.date && (
                      <p className="event-date">
                        {new Date(event.date).toLocaleDateString("de-DE")}
                      </p>
                    )}
                  </div>
                  {"imageUrl" in event && event.imageUrl && (
                    <div className="event-image">
                      <Image
                        src={event.imageUrl}
                        alt={event.artist || "Event"}
                        width={120}
                        height={80}
                      />
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
