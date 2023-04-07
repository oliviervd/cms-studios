import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"
import postCategory from "../fields/postCategory";

const Studios: CollectionConfig = {
    slug: 'studios',
    fields: [
        //titles
        titles,
        // introduction text (short)
        textBlock,
        // category
        postCategory
    ]
}

export default Studios