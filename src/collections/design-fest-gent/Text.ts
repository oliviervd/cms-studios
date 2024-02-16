import {CollectionConfig} from "payload/types";

const Texts:CollectionConfig = {
    slug:"texts",
    admin: {group: "Design Fest Gent"},
    access : {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },
    fields: [
        {
            name:"title",
            label: {
                en: "title",
                fr: "titre",
                nl: "titel"
            },
            localized: true,
            type: "text"
        },
        {
            name: "text",
            label: {
                en: "text",
                nl: "tekst",
                fr: "text"
            },
            localized: true,
            type: "richText"
        },
        {
            name: "type",
            label: "type",
            type: "select",
            options: [
                {
                    label: {
                        en: "about",
                        nl: "over",
                        fr: "a propos de"
                    },
                    value: "about"
                },
                {
                    label: {
                        en: "article",
                        nl: "artikel",
                        fr: "article"
                    },
                    value: "article"
                }
            ]
        }
    ]
}
export default Texts