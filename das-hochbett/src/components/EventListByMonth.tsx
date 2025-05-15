import { Event } from "@/sanity/types";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventList.module.css";

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
    <div className={styles.eventList}>
      {Object.entries(grouped).map(([month, events]) => (
        <section key={month} className="event-month">
          <h2 className={styles.monthHeading}>{month}</h2>
          <ul className={styles.eventsGrid}>
            {events.map((event) => (
              <li className={styles.eventCard} key={event._id}>
                <Link
                  href={`/events/${event?.slug?.current}`}
                  className={styles.eventLink}
                >
                  <div className={styles.eventInfo}>
                    <h3 className={styles.eventArtist}>{event.artist}</h3>
                    {event.subtitle && (
                      <p className={styles.eventSubtitle}>{event.subtitle}</p>
                    )}
                    {event.date && (
                      <p className={styles.eventDate}>
                        {new Date(event.date).toLocaleDateString("de-DE")}
                      </p>
                    )}
                  </div>
                  {"imageUrl" in event && event.imageUrl && (
                    <div className={styles.eventImage}>
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
