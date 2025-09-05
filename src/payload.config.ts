// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Contact from './collections/Contact'
import Blog from './collections/Blog'
import Testimonial from './collections/Testimonial'
import Trainer from './collections/Trainer'
import Notice from './collections/Notice'
import Faq from './collections/Faq'
import Gallery from './collections/Gallery'
import Service from './collections/Service'
import Counter from './collections/Counter'
import Membership from './collections/Membership'
import Landingpage from './collections/Landingpage'
import Newsletter from './collections/Newsletter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' - Avya Club Admin',
      description: 'The best Fitness in the POKHARA',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/avyawhite.png',
        },
      ],
    },

    components: {
      Nav: '../src/components/Nav.tsx',
      graphics: {
        Logo: '../src/components/LoginLogo.tsx',
        Icon: '../src/components/NsflLogo.tsx',
      },
      header: ['../src/components/Header.tsx'],
    },
  },
  cors: ['http://localhost:3000', 'http://172.16.5.206:3000', 'http://103.186.196.140:3000','https://avyaserver.onrender.com'],
  collections: [
    Blog,
    Service,
    Landingpage,
    Notice,
    Media,
    Gallery,
    Contact,
    Newsletter,
    Membership,
    Faq,
    Counter,
    Testimonial,
    Trainer,
    Users,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
