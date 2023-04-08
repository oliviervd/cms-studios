import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";
import contentStatus from "../fields/contentStatus";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import setCategory from "../fields/setCategory";
import publishedOn from "../fields/publishedOn";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
    admin: {
        useAsTitle:"titleEn"
    },
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
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                position: "sidebar"
            }
        },
        {
            type: "row",
            fields: [
                postCategory,
                contentStatus,
                setCategory
            ]
        },
        publishedOn
    ]
}

export default StudioPosts