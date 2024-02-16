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
            name: "year",
            type: "date",
            admin: {
                description: {
                    en: "add the year when the work is created",
                    fr: "ajouter l'année de création de l'œuvre",
                    nl: "voeg hier het jaar van vervaardiging toe"
                }
            },
            label: {
                en: "year",
                nl: "jaar",
                fr: "date"
            }
        },
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
            relationTo: "agents",
            hasMany: true
        }
    ]

}

export default Works;