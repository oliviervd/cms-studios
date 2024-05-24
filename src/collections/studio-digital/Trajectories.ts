import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const Trajectory:CollectionConfig = {
    slug: "trajectory",
    access: {
        read:()=> true,
        create:()=> true,
        update:()=> true,
        delete: isAdmin
    },
    admin: {
        group: "Studio Digitaal"
    },
    fields: [
        // overview (introduction
        {
            name: "trajectoryTitle",
            label: "title trajectory",
            type: "text",
        },
        {
            name: "trajetoryDescription",
            label: "description trajectory",
            type: "richText",
        },
        // articles
        {
            name: "articles",
            label: "articles",
            type: "array",
            fields: [
                {
                    name: "article",
                    type: "relationship",
                    relationTo: "StudioDigitalProject"
                }
            ]
        }
    ]
}
export default Trajectory