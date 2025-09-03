import { CollectionConfig } from 'payload'

const Testimonial: CollectionConfig = {
  slug: 'feedbacks',
  admin: {
    useAsTitle: 'name',
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
      name: 'name',
      type: 'text',
      required: true,
      label: ' Name',
    },
    {
        name: 'profession',
        type: 'text',
        required: false,
        label: 'Profession',
      },
    {
      name: 'feedback',
      type: 'textarea',
      required: false,
      label: 'Feedback',
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: ' Logo',
    },
  ],
}

export default Testimonial
