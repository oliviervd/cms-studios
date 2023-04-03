import { CollectionConfig } from "payload/types";

const Studios: CollectionConfig = {
    slug: 'studios',
    fields: [

        //title (name of the studio)
        {
            name: 'titlenl',
            label: "Title (DUTCH)",
            type: "text"
        },
        {
            name: 'titleen',
            label: 'Title (ENGLISH)',
            type: 'text'
        },
        {
            name: 'titlefr',
            label: 'Title (FRENCH)',
            type: 'text'
        },

        // introduction text (short)
        {
            name: 'introductionnl',
            label: 'Introduction (DUTCH)',
            type: 'richText'
        },
        {
            name: 'introductionen',
            label: 'Introduction (ENGLISH)',
            type: 'richText'
        },
        {
            name: 'introductionfr',
            label: 'Introduction (FRENCH)',
            type: 'richText'
        }
    ]
}

export default Studios