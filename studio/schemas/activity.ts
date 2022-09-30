export default {
  name: 'activity',
  type: 'document',
  title: 'Activiteit',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
    },
    {
      name: 'description',
      type: '',
      title: 'Omschrijving',
    },
    {
      name: 'activity-date',
      type: 'date',
      title: 'Activiteit Datum',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Categorieën',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
  ],
};
