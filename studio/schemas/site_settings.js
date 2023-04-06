// notice the __experimental_actions part? This is where we disable the "create" and "delete" actions so that that particular file can only be created once.
// usefull for example when creating website settings etc.. which will only be created once

// Protip
// Make sure to enable `create` first and add a new document and publish it. Now come back and disable it. Otherwise, you won't be able to create any files.

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    /* "create", "delete", */
    'update',
    'publish',
  ],
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
