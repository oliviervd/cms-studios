import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Studios from "./collections/Studios";
import Agents from "./collections/Agents";
import StudioPost from "./collections/StudioPost"
import studioEvent from "./collections/StudioEvent";
import Categories from "./collections/Categories";
import Media from "./collections/Media";
import About from "./collections/About";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  cors: ["https://dmg-programstudios.herokuapp.com"].filter(Boolean),
  admin: {
    user: Users.slug,
  },
  collections: [
      Users,
      About,
      Studios,
      StudioPost,
      studioEvent,
      Categories,
      Media,
      Agents
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
