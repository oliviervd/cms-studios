import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"
import postCategory from "../fields/postCategory";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import publishedOn from "../fields/publishedOn";
import contentStatus from "../fields/contentStatus";

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
        {
            name: 'titleEn',
            label: 'Title (ENGLISH)',
            type: 'text',
            required: true
        },
        titles, //dutch and french
        {
            name:'coverImage',
            label: 'studio image (cover)',
            type: "relationship",
            relationTo: "media"
        },
        textBlock,
        // category
        postCategory,
        publishedOn,
        contentStatus
    ]
}

export default Studios