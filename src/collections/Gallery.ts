import { CollectionConfig } from 'payload'

const Gallery: CollectionConfig = {
  slug: 'photos',
  admin: {
    useAsTitle: 'id',
    group: 'MEDIA',
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
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Gallery Image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Gym',
          value: 'Gym',
        },

        {
          label: 'Swimming',
          value: 'Swimming',
        },
        {
          label: 'Cafe',
          value: 'Cafe',
        },
        {
          label: 'Club',
          value: 'Club',
        },
        {
          label: 'Steam',
          value: 'Steam',
        },
        {
          label: 'Events',
          value: 'Events',
        },
        {
          label: 'Yoga',
          value: 'Yoga',
        },
        {
          label: 'Boxing',
          value: 'Boxing',
        },
        {
          label: 'Zumba',
          value: 'Zumba',
        },
        {
          label: 'Cardio',
          value: 'Cardio',
        },
        {
          label: 'CrossFit',
          value: 'CrossFit',
        },
      ],
      defaultValue: 'GYM', // Updated default to match available options
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
  ],
}

export default Gallery
