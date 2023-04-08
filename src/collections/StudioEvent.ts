import {CollectionConfig} from "payload/types";
import postCategory from "../fields/postCategory";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";

const StudioEvent: CollectionConfig = {
    slug: "studioEvent",
    access: {
        read: hasAccessOrPublished
    },
    versions: {
        drafts: true
    },
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