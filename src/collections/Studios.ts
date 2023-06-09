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
        useAsTitle: "EN",
        description: "collection containing basic on the four active studios including (title, short description, thumbnail (cover image))"
    },
    access: {
        read: hasAccessOrPublished,
        create: isAdmin,
        delete: isAdmin,
        update: isEditor
    },
    fields: [
        {
            name: 'EN',
            label: "Title (ENGLISH)",
            type: "text",
            required: true
        },
        {
            name: 'NL',
            label: "Title (DUTCH)",
            type: "text",
            required: true
        },
        {
            name: 'FR',
            label: 'Title (FRENCH)',
            type: 'text',
            required: true
        },
        {
            name:'studioImage',
            type: "relationship",
            relationTo: 'media'
        },
        textBlock,
        // category
        postCategory,
        publishedOn,
        contentStatus
    ]
}

export default Studios