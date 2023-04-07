import { CollectionConfig } from "payload/types";
import titles from "../fields/titles";

const Studios: CollectionConfig = {
    slug: 'studios',
    fields: [
        //titles
        titles,
        // introduction text (short)

        {
            name: 'introductionNl',
            label: 'Introduction (DUTCH)',
            type: 'richText'
        },
        {
            name: 'introductionEn',
            label: 'Introduction (ENGLISH)',
            type: 'richText'
        },
        {
            name: 'introductionFr',
            label: 'Introduction (FRENCH)',
            type: 'richText'
        }
    ]
}

export default Studios