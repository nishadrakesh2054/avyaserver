import { CollectionConfig } from 'payload'

const Newsletter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'id',
    group: 'SUPPORT',
  },
  access: {
    read: () => true,
    create: () => true,

    update: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },
    delete: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
        name: 'status',
        type: 'select',
        label: 'Status',
        defaultValue: 'pending',
        options: [
          {
            label: 'Pending',
            value: 'pending',
          },
          {
            label: 'Read',
            value: 'read',
          },
        ],
        admin: {
          position: 'sidebar', // optional, shows in sidebar
        },
      },

  ],
}

export default Newsletter
