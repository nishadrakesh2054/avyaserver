import { CollectionConfig } from 'payload'

const Counter: CollectionConfig = {
  slug: 'counters',
  admin: {
    useAsTitle: 'title',
    group: 'PERSONNEL',
  },
  access: {
    read: () => true,

    update: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },

    create: ({ req }) => {
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
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
        name: 'progress',
        type: 'number',
        required: true,
        label: 'Progress',
      },
  ],
}

export default Counter
