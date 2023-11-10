import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "outputType",
  admin: { group: "Studio Grafisch Ontwerp" },
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
