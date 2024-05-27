import { CollectionConfig } from "payload/types";
import richText from "../../blocks/RichText";

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
      label: "description",
      name: "descriptiion",
      type: "richText"
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
      name: "status",
      label: "status",
      type: "checkbox",
      admin: {
        description:
          "check this box if this output can be published on the website, uncheck to remove.",
        position: "sidebar",
      },
    },
    {
      name: "uri",
      label: "uri",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "string used to construct URL",
      },
    },
    {
      name: "info",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "type",
              label: "type",
              type: "relationship",
              admin: {
                description:
                  "assign type of the output (poster, billboard, mug, ... )",
              },
              relationTo: "outputType",
            },
            {
              name: "printFormat",
              label: "print format",
              admin: {
                description: "assign print format (if relevant)",
              },
              required: false,
              type: "select",
              options: [
                {
                  label: "A0",
                  value: "A0",
                },
                {
                  label: "A1",
                  value: "A1",
                },
                {
                  label: "A2",
                  value: "A2",
                },
                {
                  label: "A3",
                  value: "A3",
                },
                {
                  label: "A4",
                  value: "A4",
                },
                {
                  label: "A5",
                  value: "A5",
                },
                {
                  label: "A6",
                  value: "A6",
                },
              ],
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
          type: "row",
          fields: [
            {
              name: "width",
              label: "width",
              type: "number",
              admin: { description: "width in cm" },
            },
            {
              name: "height",
              label: "height",
              type: "number",
              admin: { description: "height in cm" },
            },
            {
              name: "series",
              label: "series",
              type: "checkbox",
              admin: {
                description:
                  "check if this work is part of a series, leave unchecked it its a single output",
              },
            },
          ],
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
