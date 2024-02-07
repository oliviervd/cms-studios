import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";

const StudioDigitalProjects:CollectionConfig = {
    slug: "StudioDigitalProject",
    access: {
        read:()=> true,
        create:()=> true,
        update:()=> true,
        delete: isAdmin
    },
    admin: {
        group: "Studio Digitaal"
    },
    fields:[
        {
            name: "projectTitle",
            label: {
                "en": "title",
                "nl": "titel"
            },
            type: "text"
        }
    ]

}

export default StudioDigitalProjects