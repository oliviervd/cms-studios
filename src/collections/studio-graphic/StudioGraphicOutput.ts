import { CollectionConfig } from "payload/types";

const StudioGraphicOutput: CollectionConfig = {
  slug: "graphicDesignOutput",
  admin: {
    group: "Studio Grafisch Ontwerp",
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "title",
      label: "title",
      required: true,
      type: "text",
    },
    {
      name: "designer",
      label: "designer(s)",
      required: true,
      type: "relationship",
      relationTo: "members",
      hasMany: true,
    },
    {
      name: "info",
      type: "group",
      fields: [
        {
          name: "type",
          label: "type",
          type: "relationship",
          relationTo: "outputType",
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
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default StudioGraphicOutput;
