import {Block} from "payload/types";

const RichText:Block = {
    slug: "RichTextBlock",
    interfaceName: "richText",
    fields: [
        {
            name: "richText",
            label: {
                "en": "rich text",
                "fr": "text libre",
                "nl": "rijke tekst"
            },
            type: "richText",
            required: true
        }
    ]
}
export default RichText
