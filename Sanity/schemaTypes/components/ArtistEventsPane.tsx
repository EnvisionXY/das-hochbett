import React, {useEffect, useState} from 'react'
import {Card, Stack, Text} from '@sanity/ui'
import {useClient} from 'sanity'

type Event = {
  _id: string
  artist: string
  subtitle?: string
  date?: string
}

const ArtistEventsPane = ({document}: {document: {displayed?: {_id?: string; name?: string}}}) => {
  const client = useClient()
  const artistName = document?.displayed?.name
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    if (!artistName) return

    const query = `*[_type == "event" && artist == $name]{_id, artist, subtitle, date}`
    client.fetch(query, {name: artistName}).then(setEvents).catch(console.error)
  }, [artistName, client])

  if (!artistName) {
    return (
      <Card padding={4}>
        <Text>Bitte zuerst speichern.</Text>
      </Card>
    )
  }

  return (
    <Card padding={4}>
      <Stack space={4}>
        <Text size={2} weight="bold">
          Events mit: {artistName}
        </Text>

        {events.length === 0 ? (
          <Text muted>Keine Events gefunden.</Text>
        ) : (
          <Stack space={3}>
            {events.map((e) => (
              <Card
                key={e._id}
                padding={3}
                radius={2}
                shadow={1}
                tone="transparent"
                style={{border: '1px solid var(--card-border-color)'}}
              >
                <Stack space={2}>
                  <Text size={2} weight="medium">
                    {e.subtitle || '(kein Subtitle)'}
                  </Text>
                  <Text size={1} muted>
                    {e.date ? new Date(e.date).toLocaleDateString('de-DE') : 'kein Datum'}
                  </Text>
                </Stack>
              </Card>
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}

export default ArtistEventsPane
