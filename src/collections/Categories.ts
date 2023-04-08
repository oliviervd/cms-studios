import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";
import contentStatus from "../fields/contentStatus";

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
        contentStatus
    ]
}

export default categories