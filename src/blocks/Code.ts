import {Block} from "payload/types";

const CodeSnippet:Block = {
    slug: "codeSnippet",
    interfaceName: "codeSnippet",
    fields: [
        {
            name: "snippet",
            label: "snippet",
            type: "code",
            localized:true
        }
    ]
}

export default CodeSnippet