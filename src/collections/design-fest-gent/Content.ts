import {CollectionConfig} from "payload/types";
import MainTitleBlock from "../../blocks/Title";

const Content:CollectionConfig = {
    slug: "content",
    admin: {
        group: "design-fest-gent"
    },
    fields: [
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [
                // required
                MainTitleBlock,
            ],
        },
    ],

}

export default Content;