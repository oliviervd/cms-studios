import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";
import contentStatus from "../fields/contentStatus";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
    access: {
        read: () => true, // change to only make public when published, otherwise use access control.
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
                contentStatus
            ]
        }
    ]
}

export default StudioPosts