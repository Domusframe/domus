import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Domus - Casas Modulares",
  description:
    "Steel frame e construção off-site com qualidade, rapidez e preço acessível. Em 15 dias você pode estar morando em seu novo lar.",
  keywords: "casas modulares, steel frame, construção off-site, casa própria, construção rápida",
  authors: [{ name: "Domus Casas Modulares" }],
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
