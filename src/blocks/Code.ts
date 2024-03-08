import {Block} from "payload/types";

const CodeSnippet:Block = {
    slug: "codeSnippet",
    interfaceName: "code snippet",
    fields: [
        {
            name: "snippet",
            label: "snippet",
            type: "code",
        }
    ]
}

export default CodeSnippet