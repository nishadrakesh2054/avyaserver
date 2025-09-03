// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import React from 'react'
// import { fileURLToPath } from 'url'

// import config from '@/payload.config'
// import './styles.css'

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   return (
//     <div className="home">
//       <div className="content">
//         <picture>
//           <source srcSet="/avyawhite.png" />
//           <Image alt="NSFL Logo" height={65} src="/avyawhite.png" width={100} />
//         </picture>
//         <h1 className="text-3xl font-bold  text-center">
//           {/* {user ? `Welcome back, ${user.email}` : 'Welcome to AYVA CLUB'} */}
//           Welcome to AYVA CLUB
//         </h1>

//         <p className="text-gray-600 text-md mt-4 max-w-2xl mx-auto">
//           Discover Nepal’s premier holistic wellness destination. From fitness and recreation to
//           relaxation and family-friendly experiences, Avya Club is your gateway to complete
//           well-being — mind, body, and spirit.
//         </p>

//         <div className="links mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             className="admin"
//             href={payloadConfig.routes.admin}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Go to Admin Panel
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/admin/login')
}
