import { buildConfig } from 'payload/config';
import path from 'path';
import Admins from './collections/Admins';
import Studios from "./collections/Studios";
import Agents from "./collections/Agents"

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Admins.slug,
  },
  collections: [
      Admins,
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
