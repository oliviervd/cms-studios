import {CollectionConfig} from "payload/types";

const Admins: CollectionConfig = {
    slug: 'admins',
    fields: [
        {
            name: 'role',
            type: 'select',
            required: true,
            options: [
                'user',
                'admin',
                'editor'
            ]
        }
    ]
}

export default Admins