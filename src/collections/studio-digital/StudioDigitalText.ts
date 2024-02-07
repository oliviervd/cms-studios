import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const StudioDigitalText: CollectionConfig = {
    slug:"StudioDigitalText",
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete : isAdmin
    },
    admin: {
        group: "Studio Digitaal"
    },
    fields : [
        {
            name: "content",
            label: "content",
            type: "richText",
            localized: true
        }
    ]
}

export default StudioDigitalText;