import {Field} from "payload/types";

const postCategory: Field = {
    name: "postCategory",
    label: "post category (studio)",
    type: "select",
    required: true,
    hasMany:true,
    options: [
        {
            label: "studio graphic",
            value: "studioGraphic"
        },
        {
            label: "studio digital",
            value: "studioDigital"
        },
        {
            label: "studio collection",
            value: "studioCollection"
        },
        {
            label: "studio care",
            value: "studioCare"
        },
        {
            label: "Design Fest Gent",
            value: "designfestgent"
        }
    ]
}

export default postCategory