import {CollectionConfig} from "payload/types";

const Section:CollectionConfig = {
    slug: "section",
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
            name: "title",
            label: {
                en: "title",
                nl: "titel",
                fr: "titre"
            },
            localized: true,
            type: "text"
        }
    ]
}

export default Section