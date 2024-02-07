import { CollectionConfig } from "payload/types";
import { isAdmin } from "../../access/roles";

const StudioGraphicAbout: CollectionConfig = {
  slug: "StudioGraphicAbout",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: isAdmin,
  },
  admin: {
    group: "Studio Grafisch Ontwerp",
  },
  fields: [
    {
      name: "aboutNL",
      label: "about NL",
      type: "richText",
      required: true,
    },
    {
      name: "aboutEN",
      label: "about EN",
      type: "richText",
      required: true,
    },
    {
      name: "aboutFR",
      label: "about FR",
      type: "richText",
      required: true,
    },
  ],
};

export default StudioGraphicAbout;
