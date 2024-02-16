import {CollectionConfig} from "payload/types";

const Partners:CollectionConfig = {
    slug: "partners",
    fields: [
        {
            name: "logo",
            label: "logo",
            type: "relationship",
            relationTo: "media"
        },
        {
            name: "partnerName",
            label: {
                en: "partner name",
                fr: "nom partner",
                nl: "naam partner"
            },
            localized: true,
            type: "text"
        },
        {
            name:"showLogo",
            label: {
                en: "show logo",
                nl: "toon logo",
                fr: "afficher le logo"
            },
            type: "checkbox",
            admin: {
                position: "sidebar"
            }
        },
        {
            name: "website",
            label: "website",
            type: "text"
        }
    ]
}

export default Partners