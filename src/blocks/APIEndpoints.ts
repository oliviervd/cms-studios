import {Block} from "payload/types";
import CodeSnippet from "./Code";
import MainTitleBlock from "./Title";
import richText from "./RichText";

const APIEndpoints: Block = {
    slug: "APIEndpoints",
    interfaceName: "APIEndpoints",
    fields: [
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
        }
    ]
}

export default APIEndpoints;