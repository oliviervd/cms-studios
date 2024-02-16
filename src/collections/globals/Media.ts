import { CollectionConfig } from "payload/types";
import path from "path";
import { isAdmin, isEditor } from "../../access/roles";
import postCategory from "../../fields/postCategory";

// media collection (storing images on S3)
const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "globals",
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../media"),
    staticURL: "/media",
    disableLocalStorage: true,
  },
  access: {
    create: isEditor,
    delete: isAdmin,
    read: () => true,
    update: isEditor,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      //required: true,
    },
    {
      name: "caption",
      type: "text",
    },
    {
      name: "credits",
      type: "text",
    },
    {
      name: "objectnumber",
      type: "text",
      admin: {
        description:
          "if relevant add the objectnumber of the object to which it relates.",
      },
    },
    {
      name: "project",
      type: "text",
      admin: {
        description: "if relevant add the project to which the media relates.",
      },
    },
    postCategory,
  ],
};

export default Media;
