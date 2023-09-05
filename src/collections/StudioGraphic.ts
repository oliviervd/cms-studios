import {CollectionConfig} from "payload/types";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isStudioGraphic} from "../access/isStudioGraphic";
import {isAdmin} from "../access/isAdmin";
import {isEditor} from "../access/isEditor";


const StudioGraphic: CollectionConfig = {
    slug: 'studio-graphic',
    admin: {
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
            name: "title-EN",
            label: "title (ENGLISH)",
            type: "text",
            required: true
        },
        {
            name: "title-NL",
            label: "title (DUTCH)",
            type: "text",
            required: true
        },
        {
            name: "image",
            type: "relationship",
            relationTo: 'media'
        }
    ]
}

export default StudioGraphic