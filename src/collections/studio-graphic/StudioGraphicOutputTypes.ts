import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "outputType",
  admin: {
    group: "Studio Grafisch Ontwerp",
    useAsTitle: "type",
    description: "types used to classify output produced by the studio",
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
    {
      name: "dimensions",
      type: "group",
      fields: [
        { name: "height", type: "number" },
        { name: "width", type: "number" },
      ],
    },
  ],
};

export default StudioGraphicOutputType;
