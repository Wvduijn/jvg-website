import { BsCalendarEvent } from 'react-icons/bs';

export default {
  name: 'activity',
  type: 'document',
  title: 'Activiteit',
  icon: BsCalendarEvent,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      description: 'Schrijf een korte samenvatting van deze post (voor SEO)',
      title: 'Excerpt',
      rows: 5,
      type: 'text',
      validation: (Rule) =>
        Rule.max(160).error(
          'SEO descriptions zijn meestal maximaal 160 karakters'
        ),
    },
    {
      title: 'Omschrijving',
      name: 'description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Belangrijk voor SEO en Accessibility',
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'activityDate',
      type: 'date',
      title: 'Activiteit Datum',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'activityTime',
      type: 'string',
      title: 'Activiteit Tijd',
    },
    {
      title: 'Categorieën',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'activityCategory' }],
        },
      ],
    },
  ],
};
