import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import { getTodayDate } from '@services/date';
// move to services
const todayDate = getTodayDate();

import { myStructure } from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'structure-builder-playground',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: todayDate, // or today's date for latest
  plugins: [
    deskTool({
      structure: myStructure,
    }),
  ],
})