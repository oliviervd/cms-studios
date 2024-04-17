import {Block} from "payload/types";

const CodeSnippet:Block = {
    slug: "codeSnippet",
    interfaceName: "codeSnippet",
    fields: [
        {
          type: "tabs",
            tabs: [
                {
                    name: "URL",
                    label: "URL",
                    fields: [
                        {
                            name: "snippet",
                            label: "snippet",
                            type: "code",
                            localized:true
                        }
                    ]
                },
                {
                    name: "JSONLD",
                    label: "JSON-LD",
                    fields: [
                        {
                            name: "snippet",
                            label: "snippet",
                            type: "code",
                            localized:true
                        }
                    ]
                },
                {
                    name: "Javascript",
                    label: "Javascript",
                    fields: [
                        {
                            name: "snippet",
                            label: "snippet",
                            type: "code",
                            localized:true
                        }
                    ]
                },
                {
                    name: "Python",
                    label: "Python",
                    fields: [
                        {
                            name: "snippet",
                            label: "snippet",
                            type: "code",
                            localized:true
                        }
                    ]
                },
                {
                    name: "Curl",
                    label: "Curl",
                    fields: [
                        {
                            name: "snippet",
                            label: "snippet",
                            type: "code",
                            localized:true
                        }
                    ]
                }
            ]
        }
    ]
}

export default CodeSnippet