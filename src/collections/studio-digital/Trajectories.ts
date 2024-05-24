import {CollectionConfig} from "payload/types";

const Trajectory:CollectionConfig = {
    slug: "trajectory",
    fields: [
        // overview (introduction
        {
            title: "trajectoryTitle",
            label: "title trajectory",
            type: "text",
        },
        {
            title: "trajetoryDescription",
            label: "description trajectory",
            type: "richText",
        },
        // articles
        {
            title: "articles",
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