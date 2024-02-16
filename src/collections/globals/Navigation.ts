import {CollectionConfig} from "payload/types";

const Navigation:CollectionConfig = {
    slug: "navigation",
    admin: {
        group: "globals"
    },
    access: {
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
            name: "label",
            type: "text",
            label: "label",
            localized:true,
        },
        {
            name: "type",
            type: "select",
            label: "type",
            options: [
                {
                    label: "menu",
                    value: "menu"
                }
            ]
        }
    ]
}
export default Navigation