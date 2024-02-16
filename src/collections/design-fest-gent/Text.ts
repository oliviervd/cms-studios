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
        }
    ]
}
export default Texts