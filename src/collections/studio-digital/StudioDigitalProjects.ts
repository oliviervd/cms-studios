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
        useAsTitle: "projectTitle",
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
            type: "text",
            localized: true,
        },
        {
            name: "path",
            label:"path",
            type: "text",
            admin: {
                position: "sidebar"
            }
        },
        {
            name: "projectBrief",
            label: "brief description",
            type: "richText",
            localized: true,
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
            name:"subProjects",
            label: "Sub projects",
            type: "array",
            fields: [
                {
                    label: "project",
                    name: "project",
                    type: "relationship",
                    relationTo: "StudioDigitalProject"
                }
            ]
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