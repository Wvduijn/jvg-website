import imageUrlBuilder from '@sanity/image-url';
import client from '@lib/sanity';

const buildUrl = (source: any) => {
  return imageUrlBuilder(client).image(source);
};

export default buildUrl;
