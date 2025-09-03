import './styles.css'

export const metadata = {
  title: 'AVYA CLUB',
  description:
  'Avya Club is Nepal’s leading health and wellness center, offering fitness, recreation, and holistic well-being for individuals and families alike.',
}
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
