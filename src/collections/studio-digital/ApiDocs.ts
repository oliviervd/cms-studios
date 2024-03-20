import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";
import CodeSnippet from "../../blocks/Code";
import MainTitleBlock from "../../blocks/Title";

const ApiDoc: CollectionConfig = {
    slug:"StudioDigitalText",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete : isAdmin
    },
    admin: {
        group: "Studio Digitaal",
        useAsTitle: "title",
    },
    fields : [
        {
            name: "title",
            label: {
                "en": "title",
                "nl": "titel",
                "fr": "titre"
            },
            type: "text",
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

export default ApiDoc;