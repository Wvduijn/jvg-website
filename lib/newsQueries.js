const postFields = `
_id,
title, 
body,
excerpt, 
mainImage, 
publishedAt, 
slug,
"authorName": author->name,
"authorImage": author->image,
"categories": categories[]->title
`;

const relatedPostFields = `
_id,
title, 
excerpt, 
mainImage, 
publishedAt, 
slug,
"authorName": author->name,
"authorImage": author->image,
"categories": categories[]->title
`;

export const indexQuery = `
*[_type == "newsPost"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "news": *[_type == "newsPost" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "moreNews": *[_type == "newsPost" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  },
  "relatedNews":  *[_type == "newsPost" && slug.current == $slug][0]  {
    content,
    categories[]->,
    "relatedNews": *[_type == "newsPost" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
      ${relatedPostFields}
    }
    }
}`;

export const postSlugsQuery = `
*[_type == "newsPost" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "newsPost" && slug.current == $slug][0] {
  ${postFields}
}
`;
