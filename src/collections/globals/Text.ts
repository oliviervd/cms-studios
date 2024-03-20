import {CollectionConfig} from "payload/types";
import RichText from "../../blocks/RichText";
import CodeSnippet from "../../blocks/Code";
import MainTitleBlock from "../../blocks/Title";

const Text:CollectionConfig = {
    slug: "Text",
    admin: {
        group: "globals"
    },
    fields: [
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks:[
                //required
                RichText
            ],
        },
    ]
}
export default Text;