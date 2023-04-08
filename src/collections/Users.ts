import { CollectionConfig } from 'payload/types';

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
    // Email added by default
    // Add more fields as needed
    {
      name: "roles",
      type: "select",
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