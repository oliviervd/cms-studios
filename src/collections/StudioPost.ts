import { CollectionConfig } from "payload/types";
import {formatSlug} from "../fields/slug"

const StudioPost: CollectionConfig = {
    fields: [
        {
            name: 'titlenl',
            label: "title (DUTCH)",
            type: "text"

        }
    ]
}

export default StudioPost;