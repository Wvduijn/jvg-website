import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'kzklufkv',
    dataset: 'production',
  },
  project: {
    basePath: '/studio',
  },
});
