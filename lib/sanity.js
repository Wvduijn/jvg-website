// client.js
import { config } from './config';
import sanityClient from '@sanity/client'

export default sanityClient(config)