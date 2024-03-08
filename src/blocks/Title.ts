import {Block} from "payload/types";

const MainTitleBlock: Block = {
    slug: "titleMain",
    interfaceName: "main title",
    fields: [
        {
            name: "title",
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