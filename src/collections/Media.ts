import { CollectionConfig } from "payload/types";
import path from "path";
import { isEditor } from "../access/isEditor";
import { isAdmin } from "../access/isAdmin";
import { hasAccessOrPublished } from "../access/hasAccessOrPublished";
import postCategory from "../fields/postCategory";
import contentStatus from "../fields/contentStatus";

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
  hooks: {
    beforeValidate: [
      (req): void => {
        const image = req.data;

        // todo: add limit of how big an image can be (image size)? - encourage to use bitmap? - this could be an action that is documented in the sustainability manifest.
        // todo: add function that creates derivative.

        if (image && image.width < 640) {
          throw new Error("Image must be at least 640px wide");
        }
      },
    ],
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
