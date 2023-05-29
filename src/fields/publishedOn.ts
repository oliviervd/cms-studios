import {Field} from "payload/types";

const publishedOn: Field = {
    name: "publishedOn",
    type: "date",
    required: true,
    admin: {
        position: "sidebar"
    }
}

export default publishedOn