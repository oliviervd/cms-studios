import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const Glossary:CollectionConfig = {
    slug: "glossary",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete : isAdmin
    },
    fields: [
        {
            name: "concept",
            label: "concept",
            type: "text"
        },
        {
            name: "description",
            label: "description",
            type: "richText"
        },
        {
            name: "relatesTo",
            label: "relates to",
            type: "relationship",
            relationTo:"glossary"
        }
    ]
}
export default Glossary