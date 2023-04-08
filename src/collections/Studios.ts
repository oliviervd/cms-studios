import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"
import postCategory from "../fields/postCategory";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";

//todo: make studio labels global?
const Studios: CollectionConfig = {
    slug: 'studios',
    access: {
        read: hasAccessOrPublished,
        create: isAdmin,
        delete: isAdmin,
        update: isEditor
    },
    fields: [
        //titles
        titles,
        // introduction text (short)
        //todo: add media
        textBlock,
        // category
        postCategory
    ]
}

export default Studios