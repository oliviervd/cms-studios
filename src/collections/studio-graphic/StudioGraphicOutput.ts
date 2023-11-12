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
          required: true,
          admin: {
            description:
              "date when the output was published/produced. Used to sort on the front end",
          },
        },
      ],
    },
    {
      name: "mainMedia",
      type: "upload",
      label: "main media",
      relationTo: "media",
      required: true,
      admin: {
        description:
          "main media of the output. If you want more images to support, add them in the gallery below.",
      },
    },
    {
      name: "gallery",
      type: "array",
      admin: {
        description: "gallery to add extra media.",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
    },
  ],
};

export default StudioGraphicOutput;
