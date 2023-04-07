import {CollectionConfig} from "payload/types";

const Admins: CollectionConfig = {
    slug: 'admins',
    fields: [
        {
            name: 'email',
            type: 'email',
            required:true
        },
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