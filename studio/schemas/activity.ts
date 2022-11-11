import { BsCalendarEvent } from "react-icons/bs";

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
      title: 'Omschrijving', 
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
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
      title: 'Categorieën',
      name: 'category',
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
