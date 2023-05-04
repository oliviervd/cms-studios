import {CollectionConfig} from "payload/types";

const Agents: CollectionConfig = {
    slug: 'agents',
    fields: [

        // name of the author (required)
        {
            name: 'firstName',
            label: 'first name',
            type: "text",
            required: true
        },
        {
            name: 'familyName',
            label: 'last name (family name) - if not organisation',
            type: "text",
            required:false
        },

        // bio (not required)
        {
            name: 'bioNL',
            label: 'biografie (NL)',
            type: "richText"
        },
        {
            name: 'bioEN',
            label: 'biography (EN)',
            type: "richText"
        },
        {
            name: 'bioFR',
            label: 'biography (FR)',
            type: "richText"
        },
        // related to (other actors)
        {
            name:"relatedTo",
            type: "relationship",
            relationTo: "agents"
        },
        {
            name:"media",
            type:"relationship",
            relationTo:"media"
        }

    ]
}

export default Agents