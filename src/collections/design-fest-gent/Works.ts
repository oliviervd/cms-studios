import {CollectionConfig} from "payload/types";
import title from "../../fields/titles";

const Works:CollectionConfig = {
    slug: "work",
    admin: {
      group: "Design Fest Gent"
    },
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },
    fields: [
        title,
        {
            name: "author",
            label: {
                en: "author",
                nl: "auteur",
                fr: "auteur"
            },
            admin: {
                description: {
                    en: "if relevant, add author(s) of the cited work here.",
                    nl: "indien relevant, voeg hier de auteur(s) van het geciteerde werk toe.",
                    fr: "le cas échéant, ajouter l'auteur ou les auteurs de l'ouvrage cité ici."
                }
            },
            type: "relationship",
            relationTo: "agents"
        }
    ]

}

export default Works;