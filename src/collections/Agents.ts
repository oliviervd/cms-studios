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
            label: 'last name (family name)',
            type: "text",
            required:true,
        }

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
        }
    ]
}

export default Agents