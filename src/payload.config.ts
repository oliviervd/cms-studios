import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

import path from "path";
import Users from "./collections/Users";
import Studios from "./collections/Studios";
import Agents from "./collections/Agents";
import StudioPost from "./collections/StudioPost";
import studioEvent from "./collections/StudioEvent";
import Categories from "./collections/Categories";
import Media from "./collections/Media";
import StudioGraphic from "./collections/StudioGraphic";
import StudioGraphicOutput from "./collections/studio-graphic/StudioGraphicOutput";
import StudioGraphicOutputType from "./collections/studio-graphic/StudioGraphicOutputTypes";
import StudioGraphicMembers from "./collections/studio-graphic/StudioGraphicMembers";
import StudioGraphicAbout from "./collections/studio-graphic/StudioGraphicAbout";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  cors: [
    "https://dmg-programstudios.vercel.app",
    "http://localhost:3000",
    "https://p01--admin-cms--qbt6mytl828m.code.run/",
    "vitals.vercel-insights.com",
    "https://dmg-studio-grafisch-ontwerp.vercel.app/", // Vercel for Studio Grafisch Ontwerp
    "https://studio-grafisch-ontwerp-ym63.vercel.app/",
  ],
  csrf: [
    "https://dmg-programstudios.vercel.app",
    "http://localhost:3000",
    "https://p01--admin-cms--qbt6mytl828m.code.run/",
    "vitals.vercel-insights.com",
    "https://dmg-studio-grafisch-ontwerp.vercel.app/", // vercel for Studio Grafisch Ontwerp
    "https://studio-grafisch-ontwerp-ym63.vercel.app/",
  ],
  collections: [
    // add new collections here.
    Users,
    Studios,
    //StudioPost,
    //studioEvent,
    //StudioGraphic,
    StudioGraphicOutput,
    StudioGraphicOutputType,
    StudioGraphicMembers,
    StudioGraphicAbout,
    //Categories,
    //Agents,
    Media,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
