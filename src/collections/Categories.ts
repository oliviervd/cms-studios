import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import contentStatus from "../fields/contentStatus";
import publishedOn from "../fields/publishedOn";

const categories: CollectionConfig = {
    slug: "categories",
    admin: {
        useAsTitle:"titleEn",
        description: "categories used to sort and cluster events or content such as blog posts"
    },
    access: {
        read: hasAccessOrPublished,
        create: isEditor,
        update: isEditor,
        delete: isAdmin
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
            type: "row",
            fields: [
                contentStatus
            ]
        },
        publishedOn
    ]
}

export default categories