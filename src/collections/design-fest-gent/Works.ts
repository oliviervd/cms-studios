import {CollectionConfig} from "payload/types";
import title from "../../fields/titles";

const Works:CollectionConfig = {
    slug: "work",
    admin: {
      group: "Design Fest Gent"
    },
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },
    fields: [
        title
    ]

}

export default Works;