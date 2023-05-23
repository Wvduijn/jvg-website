export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'display',
        type: 'string',
        title: 'Display as',
        description: 'Hoe moeten we de images tonen?',
        options: {
          list: [
            { title: 'Gestapeld op elkaar', value: 'stacked' },
            { title: 'In-line', value: 'inline' },
            { title: 'Carousel', value: 'carousel' },
          ],
          layout: 'radio', // <-- defaults to 'dropdown'
        },
      },
      {
        name: 'zoom',
        type: 'boolean',
        title: 'Zoom enabled',
        description: 'Zoom van de images enablen?',
      },
    ],
    preview: {
      select: {
        images: 'images',
        image: 'images.0',
      },
      prepare(selection) {
        const { images, image } = selection;
  
        return {
          title: `Gallery block of ${Object.keys(images).length} images`,
          subtitle: `Alt text: ${image.alt}`,
          media: image,
        };
      },
    },
  };