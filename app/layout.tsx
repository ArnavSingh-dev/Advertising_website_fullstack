import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ranjeet Outdoor Advertising - Quality Printing Solutions",
  description:
    "Professional printing services including flex banners, sunboards, signages, and outdoor advertising materials. Quality printing solutions since 2010.",
  generator: "v0.app",
  keywords: "printing, flex banners, sunboards, signages, outdoor advertising, digital printing, vehicle graphics",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
