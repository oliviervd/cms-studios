import {Field} from "payload/types";

const textBlock: Field = {
    name: "textBlock",
    label: "text block",
    type: "group",
    fields: [
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

export default textBlock