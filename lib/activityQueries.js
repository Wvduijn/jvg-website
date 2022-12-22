const activityFields = `
_id,
title, 
description,
excerpt, 
mainImage, 
publishedAt, 
slug,
activityDate,
activityTime,
"categories": categories[]->title
`;

const relatedActivityFields = `
_id,
title, 
excerpt, 
mainImage, 
publishedAt, 
slug,
activityDate,
"categories": categories[]->title
`;

export const indexQuery = `
*[_type == "activity"] | order(date desc, _updatedAt desc) {
  ${activityFields}
}`;

export const activityQuery = `
{
  "activities": *[_type == "activity" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${activityFields}
  },
  "moreActivities": *[_type == "activity" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${activityFields}
  },
  "relatedActivities":  *[_type == "activity" && slug.current == $slug][0]  {
    content,
    categories[]->,
    "relatedActivities": *[_type == "activity" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
      ${relatedActivityFields}
    }
    }
}`;

export const activitiesSlugsQuery = `
*[_type == "activity" && defined(slug.current)][].slug.current
`;

export const activityBySlugQuery = `
*[_type == "activity" && slug.current == $slug][0] {
  ${activityFields}
}
`;
