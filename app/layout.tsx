import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { VehiclesProvider } from "@/context/vehicles-context"
import { OrdersProvider } from "@/context/orders-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LogiTrack - Logistics Management Platform",
  description: "Modern logistics management platform for warehouses and logistics centers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <VehiclesProvider>
            <OrdersProvider>
              {children}
              <Toaster />
            </OrdersProvider>
          </VehiclesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'