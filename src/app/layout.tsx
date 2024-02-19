import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Untitled UI',
    template: '%s | Untitled UI',
  },
  description: 'Fundamentos do tailwindCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="max-w-[100vw] bg-white px-4 pb-12 pt-24 text-zinc-900 lg:col-start-2 lg:px-8 lg:pt-8 dark:bg-zinc-900 dark:text-zinc-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
