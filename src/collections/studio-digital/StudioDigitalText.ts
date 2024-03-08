import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";
import CodeSnippet from "../../blocks/Code";
import MainTitleBlock from "../../blocks/Title";

const StudioDigitalText: CollectionConfig = {
    slug:"StudioDigitalText",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete : isAdmin
    },
    admin: {
        group: "Studio Digitaal"
    },
    fields : [
        {
            name: "content",
            label: "content",
            type: "richText",
            localized: true
        },
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [
                CodeSnippet,
                MainTitleBlock
            ],
        },

    ],
}

export default StudioDigitalText;