import {Field} from "payload/types";

const titles: Field = {
    name: 'titles',
    label: 'titles',
    type: 'group',
    fields: [
        {
            name: 'EN',
            label: "Title (ENGLISH)",
            type: "text",
            required: true
        },
        {
            name: 'NL',
            label: "Title (DUTCH)",
            type: "text",
            required: true
        },
        {
            name: 'FR',
            label: 'Title (FRENCH)',
            type: 'text',
            required: true
        }
    ]
}

export default titles