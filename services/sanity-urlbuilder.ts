import imageUrlBuilder from '@sanity/image-url';
import client from '@lib/sanity';

// Get a pre-configured url-builder from the sanity client
const builder = imageUrlBuilder(client)

const buildUrl = (source: any) => {
  return builder.image(source);
};

export default buildUrl;
