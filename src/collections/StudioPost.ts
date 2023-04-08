import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";
import contentStatus from "../fields/contentStatus";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import setCategory from "../fields/setCategory";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
    access: {
        read: hasAccessOrPublished,
        update: isEditor,
        delete: isAdmin
    },
    versions: {
        drafts: true
    },
    fields:[
        titles,
        textBlock,
        {
            type: "row",
            fields: [
                postCategory,
                contentStatus,
                setCategory
            ]
        }
    ]
}

export default StudioPosts