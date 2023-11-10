import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "output type",
  admin: {
    group: "Studio Grafisch Ontwerp",
    description:
      "collection of types of output produced by the Studio Grafisch Ontwerp. Used to classify and filter.",
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
        {
          name: "height",
          type: "text",
        },
        {
          name: "width",
          type: "text",
        },
      ],
    },
  ],
};

export default StudioGraphicOutputType;
