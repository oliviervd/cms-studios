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
            name: "textNL",
            label: "text NL",
            type: "richText",
        },
        {
            name: "textEN",
            label: "text EN",
            type: "richText"
        }
    ]
}

export default StudioDigitalText;