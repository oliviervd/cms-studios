import {CollectionConfig} from "payload/types";
import postCategory from "../fields/postCategory";

const StudioEvent: CollectionConfig = {
    slug: "studioEvent",
    fields: [
        {
            name: "eventTitle",
            label: "title",
            type: "text",
            required: true
        },
        {
            name: "startDate",
            label: "start date",
            type: "date",
            required: true
        },
        {
            name: "endDate",
            label: "end date",
            type: "date",
        },
        postCategory
    ]
}

export default StudioEvent