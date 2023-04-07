import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import postCategory from "../fields/postCategory";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
    fields:[
        titles,
        textBlock,
        postCategory
    ]
}

export default StudioPosts