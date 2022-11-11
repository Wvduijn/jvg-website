import { BsTagsFill } from 'react-icons/bs';

export default {
  title: 'Nieuws Categorie',
  name: 'newsCategory',
  type: 'document',
  icon: BsTagsFill,
  fields: [
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
    },
    // add a unique slug field for queries, permalinks etc
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        // auto generates a slug from the title field
        source: 'title',
        auto: true,
      },
    },
    {
      name: 'description',
      title: 'Omschrijving',
      type: 'text',
    },
  ],
};
