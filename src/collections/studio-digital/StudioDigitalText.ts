import {CollectionConfig} from "payload/types";
import {isAdmin} from "../../access/roles";
import CodeCell from "payload/dist/admin/components/views/collections/List/Cell/field-types/Code";
import CodeSnippet from "../../blocks/Code";

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
            name: "content",
            label: "content",
            type: "richText",
            localized: true
        },
        {
            name: 'layout', // required
            type: 'blocks', // required
            minRows: 1,
            maxRows: 20,
            blocks: [
                // required
            ],
        },

    ],
}

export default StudioDigitalText;