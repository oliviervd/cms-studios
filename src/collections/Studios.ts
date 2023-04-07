import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock"

const Studios: CollectionConfig = {
    slug: 'studios',
    fields: [

        //titles
        titles,

        // introduction text (short)
        textBlock

    ]
}

export default Studios