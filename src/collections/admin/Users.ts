import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from "../../access/roles";

//todo: add user-collection for (favorite indexes, favorite objects, favorite exhibitions, favorite artists.)

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: "email",
    group: "admin",
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          type: "text",
        },
        {
          name: "lastName",
          type: "text",
        },
      ],
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      saveToJWT: true, // save to JW, so it can be used from "req.user".
      defaultValue: ["user"],
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
        {
          label: "User",
          value: "user",
        },
        {
          label: "Studio Grafisch Ontwerp",
          value: "member-studio-grafisch-ontwerp",
        },
        {
          label: "Studio Digitaal",
          value: "member-studio-digitaal"
        }
      ],
    },
  ],
};

export default Users;
