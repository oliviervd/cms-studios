import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"
import postCategory from "../fields/postCategory";

//todo: make studio labels global?
const Studios: CollectionConfig = {
    slug: 'studios',
    access: {
        read: () => true
    },
    fields: [
        //titles
        titles,
        // introduction text (short)
        //todo: add media
        textBlock,
        // category
        postCategory
    ]
}

export default Studios