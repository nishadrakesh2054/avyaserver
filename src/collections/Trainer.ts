import { CollectionConfig } from 'payload'

const Trainer: CollectionConfig = {
  slug: 'trainers',
  admin: {
    useAsTitle: 'name',
    group: 'PERSONNEL',
  },
  access: {
    read: () => true,
    create: () => true,

    update: ({ req }) => {
      return (
        req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
      )
    },
    // create: ({ req }) => {
    //   return (
    //     req.user?.role === 'admin' || req.user?.role === 'viewer' || req.user?.role === 'editor'
    //   )
    // },
    delete: ({ req }) => {
      return req.user?.role === 'admin'
    },
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Trainer Name',
    },
    {
      name: 'Profession',
      type: 'text',
      required: true,
      label: 'Trainer Specialist',
    },

    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Trainer Image',
    },
  ],
}

export default Trainer
