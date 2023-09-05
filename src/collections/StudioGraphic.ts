import {CollectionConfig} from "payload/types";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isStudioGraphic} from "../access/isStudioGraphic";
import {isAdmin} from "../access/isAdmin";
import textBlock from "../fields/textBlock";


const StudioGraphic: CollectionConfig = {
    slug: 'studioGraphic',
    admin: {
        useAsTitle: "titleNL",
        description: "collection of outputs from studio graphic"
    },
    access: {
        //todo: restrict access for studio Graphic to only this collection
        read: hasAccessOrPublished,
        create: isStudioGraphic || isAdmin,
        delete: isStudioGraphic || isAdmin,
        update: isStudioGraphic || isAdmin
    },
    fields : [
        {
            name: "titleEN",
            label: "title (ENGLISH)",
            type: "text",
            required: true
        },
        {
            name: "titleNL",
            label: "title (DUTCH)",
            type: "text",
            required: true
        },
        textBlock,
        {
            name: "mainMedia",
            label: "main media",
            type: "relationship",
            relationTo: 'media'
        },
        {
            name: "additionalMedia",
            label: "additional media",
            type: "relationship",
            hasMany: true,
            relationTo: 'media'
        }
    ]
}

export default StudioGraphic