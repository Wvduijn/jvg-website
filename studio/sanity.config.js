import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { schemaTypes } from './schemas';
import { structure } from './structure';

// Site Settings is a singleton: it can't be created from the "new document" menu or deleted/duplicated
const singletonTypes = new Set(['siteSettings']);
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  name: 'default',
  title: 'Jeugd van Gisteren',
  projectId: 'kzklufkv',
  dataset: 'production',
  plugins: [structureTool({ structure }), visionTool(), unsplashImageAsset()],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
