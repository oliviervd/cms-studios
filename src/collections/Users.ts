import { CollectionConfig } from 'payload/types';
import {isAdmin, isAdminFieldLevel} from "../access/isAdmin";

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // only admins can create users
    read: () => true,
  },
  fields: [
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
          value: "admin"
        },
        {
          label: "Editor",
          value: "editor"
        },
        {
          label: "User",
          value: "user"
        }
      ]
    }
  ],
};

export default Users;