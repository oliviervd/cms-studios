import {CollectionConfig} from "payload/types";
import postCategory from "../fields/postCategory";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import setCategory from "../fields/setCategory";
import contentStatus from "../fields/contentStatus";
import publishedOn from "../fields/publishedOn";

const StudioEvent: CollectionConfig = {
    slug: "studioEvent",
    admin: {
        useAsTitle:"eventTitle"
    },
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
        {
            type: "row",
            fields: [
                postCategory,
                setCategory,
                contentStatus
            ]
        },
        publishedOn
    ]
}

export default StudioEvent