import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";
import contentStatus from "../fields/contentStatus";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
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