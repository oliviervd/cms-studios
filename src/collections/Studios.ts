import { CollectionConfig } from "payload/types";

const Studios: CollectionConfig = {
    slug: 'studios',
    fields: [

        //title (name of the studio)
        {
            name: 'titleNl',
            label: "Title (DUTCH)",
            type: "text",
            required: true
        },
        {
            name: 'titleEn',
            label: 'Title (ENGLISH)',
            type: 'text',
            required: true
        },
        {
            name: 'titleFr',
            label: 'Title (FRENCH)',
            type: 'text',
            required: true
        },

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