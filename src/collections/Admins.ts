import { CollectionConfig } from 'payload/types';

const Admins: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
    tokenExpiration: 7200, // how long (seconds) to keep the user logged in.
    verify: true,
    maxLoginAttempts: 3,
    lockTime: 600 * 1000, // time period to allow max login attempts.
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
          'user',
          'admin',
          'editor',
          'developer'
      ]
    }
  ],
};

export default Admins;