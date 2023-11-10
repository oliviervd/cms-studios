import { CollectionConfig } from "payload/types";

const StudioGraphicMembers: CollectionConfig = {
  slug: "members",
  admin: {
    useAsTitle: "fullName",
    group: "Studio Graphic",
  },
  fields: [
    {
      name: "fullName",
      label: "full name",
      type: "text",
      required: true,
    },
    {
      name: "active",
      type: "group",
      fields: [
        {
          name: "memberFrom",
          label: "start date",
          type: "date",
          required: true,
          admin: {
            description: "date when the member joined Studio Grafisch Ontwerp",
          },
        },
        {
          name: "memberTill",
          label: "end date",
          type: "date",
          admin: {
            description: "date when the member left Studio Grafisch Ontwerp",
          },
        },
      ],
    },
    {
      name: "portfolio",
      label: "portfolio",
      type: "text",
      admin: {
        description: "URL to online portfolio",
      },
    },
  ],
};

export default StudioGraphicMembers;
