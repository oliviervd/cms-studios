import {Field} from "payload/types";

const postCategory: Field = {
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

export default postCategory