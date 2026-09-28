import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import Preloader from '@/components/preloader'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Set NEXT_PUBLIC_SITE_URL in your environment once the site has a
// production domain — this drives metadataBase, canonical URLs, and the
// og:url / og:image absolute paths below.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://juliustechhub.com'
const title = 'Julius Tech Hub — Full-Stack Developer'
const description = 'I help businesses build scalable web applications and digital products.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Julius Tech Hub',
  },
  description,
  keywords: [
    'full-stack developer',
    'web application development',
    'Next.js developer',
    'React developer',
    'MVP development',
    'freelance software developer',
  ],
  authors: [{ name: 'Julius' }],
  creator: 'Julius',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    // og:image / twitter:image are generated automatically from
    // app/opengraph-image.tsx and app/twitter-image.tsx.
    type: 'website',
    url: '/',
    siteName: 'Julius Tech Hub',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#050609',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {/* reducedMotion="user" makes every Framer Motion animation in the
            app honor the OS-level prefers-reduced-motion setting, without
            having to thread a check through every section component. */}
        <MotionConfig reducedMotion="user">
          <Preloader />
          {children}
        </MotionConfig>
      </body>
    </html>
  )
}
