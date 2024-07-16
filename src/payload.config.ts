import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

import path from "path";
import Users from "./collections/admin/Users";
import Studios from "./collections/Studios";
import Media from "./collections/globals/Media";
import StudioGraphicOutput from "./collections/studio-graphic/StudioGraphicOutput";
import StudioGraphicOutputType from "./collections/studio-graphic/StudioGraphicOutputTypes";
import StudioGraphicMembers from "./collections/studio-graphic/StudioGraphicMembers";
import ApiDoc from "./collections/studio-digital/ApiDocs";
import NavigationSD from "./collections/studio-digital/Navigation"
import StudioDigitalProjects from "./collections/studio-digital/StudioDigitalProjects";
import Section from "./collections/design-fest-gent/Section";
import Works from "./collections/design-fest-gent/Works";
import Agents from "./collections/design-fest-gent/Agents";
import Content from "./collections/design-fest-gent/Content";
import Partners from "./collections/design-fest-gent/Partners";
import Navigation from "./collections/globals/Navigation";
import Globals from "./collections/design-fest-gent/Globals";
import Text from "./collections/globals/Text";
import Glossary from "./collections/studio-digital/Glossary";
import Trajectory from "./collections/studio-digital/Trajectories";

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
          generateFileURL: ({ filename, prefix }) => {
            return ["https://d2yoaaok6mt608.cloudfront.net", prefix, filename]
                .filter(Boolean)
                .join("/");
          },
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  rateLimit: {
    max: 5000,
  },
  cors: [
    "https://dmg-programstudios.vercel.app",
    "https://digitaal.designmuseumgent.be",
    "https://grafisch.designmuseumgent.be",
    "http://localhost:3000",
    "https://p01--admin-cms--qbt6mytl828m.code.run/",
    "vitals.vercel-insights.com",
    "https://de-grafische-studio.vercel.app", // Vercel for Studio Grafisch Ontwerp
    "https://studio-digitaal.vercel.app", // Vercel for Studio Digitaal
    "https://design-fest-gent.vercel.app"
  ],
  csrf: [
    "https://dmg-programstudios.vercel.app",
    "https://digitaal.designmuseumgent.be",
    "https://grafisch.designmuseumgent.be",
    "http://localhost:3000",
    "https://p01--admin-cms--qbt6mytl828m.code.run/",
    "vitals.vercel-insights.com",
    "https://de-grafische-studio.vercel.app", // vercel for Studio Grafisch Ontwerp
    "https://studio-digitaal.vercel.app", // Vercel for Studio Digitaal
    "https://design-fest-gent.vercel.app"
  ],
  collections: [
    // add new collections here.
    Users,
    Studios,
    // studio graphic
    StudioGraphicOutput,
    StudioGraphicOutputType,
    StudioGraphicMembers,
    // studio digitaal
    StudioDigitalProjects,
    ApiDoc,
    NavigationSD,
    Glossary,
    Trajectory,

    // globals
    Media,
    Navigation,
    Text
  ],
  localization: {
    locales: [
      {
        label: {
          en: 'English',
          nl: 'Engels',
          fr: 'Anglais'
        },
        code: 'en'
      },
      {
        label: {
          en: 'French',
          nl: 'Frans',
          fr: 'Francais'
        },
        code: 'fr'
      },
      {
        label: {
          en: "Dutch",
          nl: "Nederlands",
          fr: "Neerlandais"
        },
        code: "nl"
      }],
    defaultLocale: 'en',
    fallback:true
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
