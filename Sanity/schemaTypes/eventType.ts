import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import {DoorsOpenInput} from './components/DoorsOpenInput'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'artist',
      title: 'Artist / Liveact',
      type: 'string',
      group: ['details', 'editorial'],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'artist'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.artist,
      group: 'details',
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['live', 'virtual'],
        layout: 'radio',
      },
      hidden: ({document}) => !document?.artist,
      group: 'details',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      hidden: ({document}) => !document?.artist,
      group: 'details',
    }),
    defineField({
      name: 'doorsOpen',
      description: 'Number of minutes before the start time of the admission',
      type: 'number',
      initialValue: 60,
      hidden: ({document}) => !document?.artist,
      group: 'details',
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: 'location',
      type: 'reference',
      to: [{type: 'venue'}],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      hidden: ({document}) => !document?.artist,
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'virtual') {
            return 'Only live events can have a venue'
          }
          return true
        }),
      group: 'details',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      hidden: ({document}) => !document?.artist,
      group: 'details',
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'editorial',
    }),
    defineField({
      name: 'tickets',
      type: 'url',
      group: 'details',
    }),
  ],
  preview: {
    select: {
      artist: 'artist',
      subtitle: 'subtitle',
      date: 'date',
      image: 'image',
      venue: 'venue.name',
    },
    prepare({artist, subtitle, date, image, venue}) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : 'Kein Datum'

      return {
        title: artist || 'Unbenannter Act',
        subtitle: subtitle
          ? `${subtitle} · ${formattedDate}${venue ? ` @ ${venue}` : ''}`
          : `${formattedDate}${venue ? ` @ ${venue}` : ''}`,
        media: image || CalendarIcon,
      }
    },
  },
})
