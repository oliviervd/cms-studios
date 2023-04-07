import {CollectionConfig} from "payload/types";
import titles from "../fields/titles";
import textBlock from "../fields/textBlock";

const StudioPosts: CollectionConfig = {
    slug: 'studioPost',
    fields:[
        titles,
        textBlock,
        {
            name: "postCategory",
            label: "post category (studio)",
            type: "select",
            required: true,
            options: [
                "studioGraphic",
                "studioDigital",
                "studioCollection",
                "studioCare"
            ]
        }
    ]
}

export default StudioPosts