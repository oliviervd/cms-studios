import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Studios from "./collections/Studios";
import Agents from "./collections/Agents";
import Admins from "./collections/Admins";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
      Admins,
      Users,
      Studios,
      Agents
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
