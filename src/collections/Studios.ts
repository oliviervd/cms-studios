import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"
import postCategory from "../fields/postCategory";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import publishedOn from "../fields/publishedOn";

//todo: make studio labels global?
const Studios: CollectionConfig = {
    slug: 'studios',
    admin: {
        useAsTitle: "titleEn"
    },
    access: {
        read: hasAccessOrPublished,
        create: isAdmin,
        delete: isAdmin,
        update: isEditor
    },
    fields: [
        //titles (DUTCH + FR)
        titles,
        // introduction text (short)
        //todo: add media
        textBlock,
        // category
        postCategory,
        publishedOn
    ]
}

export default Studios