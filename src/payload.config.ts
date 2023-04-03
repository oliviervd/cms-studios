import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Studios from "./collections/Studios";
import StudioPost from "./collections/StudioPost";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Studios,
    StudioPost
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
