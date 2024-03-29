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
            admin: {
                position: "sidebar"
            },
            label: {
                "en": "active",
                "nl": "actief",
                "fr": "en cours"
            },
            type: "checkbox"
        },
        {
            name: "heroImage",
            label: {
                "en": "main image",
                "nl": "hoofdafbeelding",
                "fr": "image principale"
            },
            type: "relationship",
            relationTo: "media"
        },
        {
            name: "gallery",
            label: {
                "en": "image gallery",
                "nl": "afbeeldingen gallerij",
                "fr": "galerie d'images"
            },
            type: "array",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: false,
                },
            ]
        }
    ]
}

export default StudioDigitalProjects