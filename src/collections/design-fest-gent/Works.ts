import {CollectionConfig} from "payload/types";
import title from "../../fields/titles";

const Works:CollectionConfig = {
    slug: "work",
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