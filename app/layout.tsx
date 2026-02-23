import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  // Pastikan Title mengandung kata kunci utama dan nama brand
  title: {
    default: "Fabrikasi Metallic Nusantara | Professional Kitchen Equipment",
    template: "%s | Fabrikasi Metallic Nusantara"
  },
  description: 'Spesialis perlengkapan dapur profesional dan solusi catering dengan pengalaman 40+ tahun. Melayani custom equipment, exhaust systems, dan sistem pendingin.',
  
  // Metadata untuk Search Engine
  keywords: ['fabrikasi logam', 'kitchen equipment Indonesia', 'peralatan dapur industri', 'exhaust system stainless'],
  authors: [{ name: 'Fabrikasi Metallic Nusantara' }],
  
  // OpenGraph (Penting untuk tampilan di WhatsApp/Sosmed)
  openGraph: {
    title: 'Fabrikasi Metallic Nusantara - Solusi Dapur Profesional',
    description: 'Custom kitchen equipment berkualitas tinggi untuk kebutuhan industri dan catering.',
    url: 'https://fabrikasimetallicnusantara.com',
    siteName: 'Fabrikasi Metallic Nusantara',
    locale: 'id_ID',
    type: 'website',
  },

  // Robots (Instruksi untuk Google Bot)
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}