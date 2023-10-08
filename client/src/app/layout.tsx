import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import {Sidebar} from '@/components/sidebar'
import {Row} from '@/components/ui/row'
import {Header} from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'Watch',
  description: 'Enjoy the newest movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className={'flex'}>
        <Sidebar />

        <main className={'w-full'}>
          <Header />
          {children}
        </main>
      </div>
      </body>
    </html>
  )
}
