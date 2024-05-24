import {CollectionConfig} from "payload/types";

const Trajectory:CollectionConfig = {
    slug: "trajectory",
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