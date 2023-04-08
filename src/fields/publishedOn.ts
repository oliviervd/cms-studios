import {Field} from "payload/types";

const publishedOn: Field = {
    name: "publishedOn",
    type: "date",
    required: true,
    admin: {
        date: {
            pickerAppearance: 'dayAndTime'
        },
        position: "sidebar"
    }
}

export default publishedOn