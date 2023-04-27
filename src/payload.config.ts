import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Studios from "./collections/Studios";
import Agents from "./collections/Agents";
import StudioPost from "./collections/StudioPost"
import studioEvent from "./collections/StudioEvent";
import Categories from "./collections/Categories";
import Media from "./collections/Media";

export default buildConfig({
    serverURL: process.env.PAYLOAD_URL,
    cors: [
        'https://dmg-programstudios.herokuapp.com',
        'https://dmg-programstudios.vercel.app',
        'http://localhost:3000',
        'https://p01--admin-cms--qbt6mytl828m.code.run/'
    ],
    csrf: [
        'https://dmg-programstudios.herokuapp.com',
        'https://dmg-programstudios.vercel.app',
        'http://localhost:3000',
        'https://p01--admin-cms--qbt6mytl828m.code.run/'
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
