import { buildConfig } from 'payload/config';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import path from 'path';
import Users from './collections/Users';
import Studios from "./collections/Studios";
import Agents from "./collections/Agents";
import StudioPost from "./collections/StudioPost"
import studioEvent from "./collections/StudioEvent";
import Categories from "./collections/Categories";
import Media from "./collections/Media";

const adapter = s3Adapter({
    config: {
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        }
        // ... Other S3 configuration
    },
    bucket: process.env.S3_BUCKET,
})

export default buildConfig({
    serverURL: process.env.PAYLOAD_URL,
    plugins: [
        cloudStorage({
            collections: {
                'my-collection-slug': {
                    adapter: adapter,
                },
            },
        }),
    ],
    cors: [
        'https://dmg-programstudios.vercel.app',
        'http://localhost:3000',
        'https://p01--admin-cms--qbt6mytl828m.code.run/',
        'vitals.vercel-insights.com'
    ],
    csrf: [
        'https://dmg-programstudios.vercel.app',
        'http://localhost:3000',
        'https://p01--admin-cms--qbt6mytl828m.code.run/',
        'vitals.vercel-insights.com'
    ],
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        Studios,
        StudioPost,
        studioEvent,
        Categories,
        Agents,
        Media
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});
