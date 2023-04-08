import { Field } from "payload/types";

const contentStatus: Field = {
    name: "_status",
    label: "status",
    type: "select",
    required: true,
    defaultValue: ["draft"],
    options: [
        "draft",
        "awaiting review",
        "published"
    ]
}

export default contentStatus