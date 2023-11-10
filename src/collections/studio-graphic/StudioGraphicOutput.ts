import { CollectionConfig } from "payload/types";

const StudioGraphicOutput: CollectionConfig = {
  slug: "graphic design output",
  admin: {
    group: "Studio Grafisch Ontwerp",
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
      name: "info",
      type: "group",
      fields: [
        {
          name: "type",
          label: "type",
          type: "relationship",
          relationTo: "output type",
        },
        {
          name: "datePublished",
          label: "production date",
          type: "date",
          admin: {
            description:
              "date when the output was published/produced. Used to sort on the front end",
          },
        },
      ],
    },
    {
      name: "mainMedia",
      label: "media (main)",
      type: "relationship",
      relationTo: "media",
    },
  ],
};

export default StudioGraphicOutput;
