import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "outputType",
  admin: {
    group: "Studio Grafisch Ontwerp",
    useAsTitle: "type",
    description:
      "types used to classify (poster, billboard, coffeemug) output produced by the studio",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "type",
      type: "text",
    },
  ],
};

export default StudioGraphicOutputType;
