import { CollectionConfig } from 'payload'

const Membership: CollectionConfig = {
  slug: 'membership',
  admin: {
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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
      required: true,
    },
    {
      name: 'plan',
      type: 'text',
      required: true,
    },
    {
      name: 'priceOption',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'time',
      type: 'text', // using text because Payload doesn't have 'time' type
      required: true,
    },
    {
      name: 'people',
      type: 'number',
      required: true,
      min: 1,
    },
    {
      name: 'agree',
      type: 'checkbox',
      required: true,
    },
  ],
}

export default Membership
