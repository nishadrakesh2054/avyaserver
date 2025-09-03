import { CollectionConfig } from 'payload'

const Service: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: 'CONTENT',
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
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content',
    },

    {
      name: 'checklist',
      type: 'array',
      label: 'Featured Items',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Featured Items',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Service image',
    },
       {
      name: 'serial',
      type: 'text',
      required: true,
      label: 'Serial No',
    },
  ],
}

export default Service
