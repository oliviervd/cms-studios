import {CollectionConfig} from "payload/types";

const Globals:CollectionConfig = {
    slug:"Globals",
    admin: {group: "Design Fest Gent"},
    access : {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },
    fields: [
        {
            name: "id",
            type:"text",
            label: "id",
        },
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
            name: "slug",
            label: {
                en: "summary/slug",
                nl: "synopsis/slug",
                fr: "slug"
            },
            type:"richText",
            localized: true,
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
export default Globals