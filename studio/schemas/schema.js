// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import activity_category from './activity_category';
import activity from './activity';
import news_post from './news_post';
import news_category from './news_category';
import author from './author';
import site_settings from './site_settings';
import gallery from './gallery';

import blockContent from './blockContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    activity_category,
    activity,
    news_post,
    news_category,
    author,
    site_settings,
    blockContent,
    gallery
  ]),
});
