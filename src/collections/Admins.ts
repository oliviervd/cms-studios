import {CollectionConfig} from "payload/types";
import {isAdmin} from "../access/isAdmin";

const Admins: CollectionConfig = {
    slug: 'admins',
    access: {
        read: isAdmin,
        update: isAdmin,

    },
    fields: [

    ]
}

export default Admins