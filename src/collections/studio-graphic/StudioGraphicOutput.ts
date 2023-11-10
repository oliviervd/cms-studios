import { CollectionConfig } from "payload/types";

const StudioGraphicOutput: CollectionConfig = {
  slug: "graphic design output",
  admin: {
    group: "Studio Graphic",
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "title",
      required: true,
      type: "text",
    },
    {
      name: "type",
      label: "type",
      type: "relationship",
      relationTo: "outputType",
    },
  ],
};

export default StudioGraphicOutput;
