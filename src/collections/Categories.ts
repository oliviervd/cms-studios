import {CollectionConfig} from "payload/types";
import title from "../fields/titles";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin, isEditor} from "../access/roles";
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
        title, //dutch and french
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