import {Field} from "payload/types";

const titles: Field = {
    name: 'titles',
    label: 'titles',
    type: 'group',
    fields: [
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
        }
    ]
}

export default titles