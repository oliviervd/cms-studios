import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "output type",
  admin: {
    group: "Studio Grafisch Ontwerp",
    useAsTitle: "type",
    description:
      "collection of types of output produced by the Studio Grafisch Ontwerp. Used to classify and filter.",
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: "type",
      type: "text",
    },
  ],
};

export default StudioGraphicOutputType;
