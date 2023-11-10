import {Field} from "payload/types";

const textBlock: Field = {
    name: "textBlock",
    label: "description",
    type: "group",
    fields: [
        {
            name: 'descriptionNL',
            label: 'description (DUTCH)',
            type: 'richText',
            required: true
        },
        {
            name: 'descriptionEN',
            label: 'description (ENGLISH)',
            type: 'richText'
        },
        {
            name: 'descriptionFr',
            label: 'description (FRENCH)',
            type: 'richText'
        }
    ]
}

export default textBlock