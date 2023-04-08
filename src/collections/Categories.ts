import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import contentStatus from "../fields/contentStatus";
import publishedOn from "../fields/publishedOn";

const categories: CollectionConfig = {
    slug: "categories",
    access: {
        read: hasAccessOrPublished,
        create: isEditor,
        update: isEditor,
        delete: isAdmin
    },
    fields: [
        titles,
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