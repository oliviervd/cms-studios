import {Field} from "payload/types";

const setCategory: Field = {
    name: "category",
    type: "relationship",
    relationTo: "categories", // slug to existing collection
}

export default setCategory