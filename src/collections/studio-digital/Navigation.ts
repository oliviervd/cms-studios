import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const NavigationSD:CollectionConfig = {
    slug: "navigationSD",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete : isAdmin
    },
    admin: {
        group: "Studio Digitaal"
    },
    fields: [
        {
            name: "pageGroup",
            label: "group",
            type:"text"
        },
        {
            type: "array",
            name: "pages",
            fields: [
                {
                    name: "page",
                    type: "relationship",
                    relationTo: "ApiDoc"
                }
            ]
        }
    ]
}

export default NavigationSD;