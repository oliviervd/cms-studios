import {Block} from "payload/types";

const MainTitleBlock: Block = {
    slug: "textBlock",
    interfaceName: "textBlock",
    fields: [
        {
            name: "type",
            label: "type",
            type: "select",
            options: [
                "main title",
                "title",
                "subtitle"
            ]
        },
        {
            name: "text",
            label: {
                "en": "text",
                "fr": "text",
                "nl": "tekst"
            },
            type: "text",
            required: true
        }
    ]
}

export default MainTitleBlock;