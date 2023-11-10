import { CollectionConfig } from "payload/types";

const StudioGraphicOutputType: CollectionConfig = {
  slug: "outputType",
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
