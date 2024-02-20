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
                "nl": "titel",
                "fr": "titre"
            },
            type: "text"
        },
        {
            name: "projectDescription",
            label: {
                "en": "description",
                "nl": "beschrijving",
                "fr": "description"
            },
            localized: true,
            type: "richText"
        },
        {
            name: "active",
            label: {
                "en": "active",
                "nl": "actief",
                "fr": "en cours"
            },
            type: "checkbox"
        }
    ]
}

export default StudioDigitalProjects