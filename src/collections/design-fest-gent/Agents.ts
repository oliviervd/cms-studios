import {CollectionConfig} from "payload/types";

const Agents:CollectionConfig = {
    slug: "agents",
    admin: {
        group: "Design Fest Gent",
    },
    access : {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },
    fields: [
        {
            type:"row",
            fields: [
                {
                    name: "firstName",
                    label: {
                        en: "first name",
                        nl: "voornaam",
                        fr: "prénom"
                    },
                    type: "text"
                },
                {
                    name: "familyName",
                    label: {
                        en: "surname",
                        nl: "familienaam",
                        fr: "nom de famille"
                    },
                    type: "text"
                }
            ]
        },
        {
            name:"biography",
            label: {
                en: "biography",
                nl: "biografie",
                fr: "biographie"
            },
            type: "richText",
            localized: true
        },
        {
            name: "website",
            type: "text",
            label: {
                en: "website",
                fr: "website",
                nl: "webpagina"
            }
        },
        {
            name: "role",
            type: "select",
            hasMany: true,
            options: [
                {
                    value: "coCurator",
                    label: {
                        en: "co-curator"
                    }
                },
                {
                    value: "designer",
                    label: {
                        en: "designer"
                    }
                }
            ]
        }
    ]
}
export default Agents;