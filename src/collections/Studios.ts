import { CollectionConfig } from "payload/types";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";
import { isAdmin, isEditor } from "../access/roles";
import { hasAccessOrPublished } from "../access/hasAccessOrPublished";
import publishedOn from "../fields/publishedOn";
import contentStatus from "../fields/contentStatus";

//todo: make studio labels global?
const Studios: CollectionConfig = {
  slug: "studios",
  admin: {
    useAsTitle: "EN",
    group: "globals",
    description:
      "collection containing basic on the four active studios including (title, short description, thumbnail (cover image))",
  },
  access: {
    read: hasAccessOrPublished,
    create: isAdmin,
    delete: isAdmin,
    update: isEditor,
  },
  fields: [
    {
      name: "URI",
      label: "URI",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      localized: true
    },
    {
      name: "description",
      type: "richText",
      localized: true
    },
    //todo: make group.
    {
      name: "EN",
      label: "Title (ENGLISH)",
      type: "text",
      required: true,
    },
    {
      name: "NL",
      label: "Title (DUTCH)",
      type: "text",
      required: true,
    },
    {
      name: "FR",
      label: "Title (FRENCH)",
      type: "text",
      required: true,
    },
    {
      name: "studioImage",
      type: "relationship",
      relationTo: "media",
    },
    textBlock,
    postCategory,
    publishedOn,
    contentStatus,
  ],
};

export default Studios;

