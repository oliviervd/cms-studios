import {CollectionConfig} from "payload/types";
import path from "path";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import postCategory from "../fields/postCategory";

const Media: CollectionConfig = {
    slug: "media",
    upload: {
        staticDir: path.resolve(__dirname, "../../media")
    },
    access: {
        create: isEditor,
        delete: isAdmin,
        read: hasAccessOrPublished,
        update: isEditor
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: "text"
        },
        {
            name: 'credits',
            type: "text"
        },
        postCategory
    ]
}

export default Media