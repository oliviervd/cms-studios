import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const Glossary:CollectionConfig = {
    slug: "glossary",
    admin: {
        group: "Studio Digitaal",
        useAsTitle: "concept"
    },
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
            type: "richText",
            localized:true,
        },
        {
            name: "relatesTo",
            label: "relates to",
            type: "relationship",
            relationTo:"glossary"
        },
        {
            name: "references",
            type: "array",
            label: "references",
            fields: [
                {
                    name: "url",
                    label: "url",
                    type: "text"
                },
                {
                    name: "source",
                    label: "source",
                    type: "text"
                }
            ]

        },
        {
            name: "media",
            label: "media",
            type: "relationship",
            relationTo: "media"
        },
        {
            name:"url",
            label:"url",
            type: "text",
            admin: {
                position: "sidebar"
            }
        }
    ]
}
export default Glossary