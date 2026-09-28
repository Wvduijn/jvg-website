// Singleton document: create/delete are disabled in sanity.config.js

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      name: 'vacature',
      type: 'boolean',
      title: 'Vacature',
      initialValue: false
    },
    // other fields
    // ...
  ],
};
