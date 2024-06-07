import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";
import CodeSnippet from "../../blocks/Code";
import MainTitleBlock from "../../blocks/Title";
import richText from "../../blocks/RichText";

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
                richText
            ],
        },
        {
            type: "tabs",
            required: false,
            tabs: [
                {
                    name: "object",
                    label: "object",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            minRows: 1,
                            maxRows:20,
                            blocks : [
                                CodeSnippet,
                                MainTitleBlock,
                                richText
                            ]
                        }
                    ]
                },{
                    name: "agent",
                    label: "agent",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            minRows: 1,
                            maxRows:20,
                            blocks : [
                                CodeSnippet,
                                MainTitleBlock,
                                richText
                            ]
                        }
                    ]
                },{
                    name: "exhibition",
                    label: "exhibition",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            minRows: 1,
                            maxRows:20,
                            blocks : [
                                CodeSnippet,
                                MainTitleBlock,
                                richText
                            ]
                        }
                    ]
                },
                {
                    name: "concept",
                    label: "concept",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            minRows: 1,
                            maxRows:20,
                            blocks : [
                                CodeSnippet,
                                MainTitleBlock,
                                richText
                            ]
                        }
                    ]
                }
            ]
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