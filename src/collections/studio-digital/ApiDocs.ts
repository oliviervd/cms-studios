import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";
import CodeSnippet from "../../blocks/Code";
import MainTitleBlock from "../../blocks/Title";
import richText from "../../blocks/RichText";
import APIEndpoints from "../../blocks/APIEndpoints";

const ApiDoc: CollectionConfig = {
    slug:"ApiDoc",
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
            maxRows: 100,
            blocks: [
                CodeSnippet,
                MainTitleBlock,
                richText,
                APIEndpoints,
            ],
        },
        {
            name:"subDoc",
            label: "subDocumentation API",
            type: "array",
            fields: [
                {
                    label: "subDoc",
                    name: "subDoc",
                    type: "relationship",
                    relationTo: "ApiDoc"
                }
            ]
        }

    ],
}

export default ApiDoc;