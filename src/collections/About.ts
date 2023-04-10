import {CollectionConfig} from "payload/types";
import {hasAccessOrPublished} from "../access/hasAccessOrPublished";
import {isEditor} from "../access/isEditor";
import {isAdmin} from "../access/isAdmin";
import Titles from "../fields/titles";
import textBlock from "../fields/textBlock";
import contentStatus from "../fields/contentStatus";

const About:CollectionConfig = {
    slug: "about",
    admin: {
        useAsTitle: "titleEn"
    },
    access: {
        read: hasAccessOrPublished,
        update: isEditor,
        create: isAdmin,
        delete: isAdmin
    },
    fields:[
        {
            name: 'titleEn',
            label: 'Title (ENGLISH)',
            type: 'text',
            required: true
        },
        Titles,
        textBlock,
        contentStatus
    ]
}

export default About
