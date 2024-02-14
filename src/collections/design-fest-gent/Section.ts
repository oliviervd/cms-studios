import {CollectionConfig} from "payload/types";
import title from "../../fields/titles";

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
        title,
    ]
}

export default Section