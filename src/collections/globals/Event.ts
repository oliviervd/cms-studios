import {CollectionConfig} from "payload/types";
import postCategory from "../../fields/postCategory";
import {hasAccessOrPublished} from "../../access/hasAccessOrPublished";
import setCategory from "../../fields/setCategory";
import contentStatus from "../../fields/contentStatus";

const Event: CollectionConfig = {
    slug: "event",
    admin: {
        useAsTitle:"eventTitle",
        group: "globals"
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
            required: true,
            localized: true
        },
        {
            name: "startDate",
            label: "start date",
            type: "date",
            required: true,
            admin: {
                date: {
                    pickerAppearance: "dayOnly"
                }
            }
        },
        {
            name: "endDate",
            label: "end date",
            type: "date",
            admin: {
                date: {
                    pickerAppearance: "dayOnly"
                }
            }
        },
        {
            type: "row",
            fields: [
                postCategory,
                setCategory,
                contentStatus
            ]
        }
    ]
}

export default Event