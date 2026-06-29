import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { Sidebar } from "@/components/client/sidebar"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader isLoggedIn={true} userRole="client" />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

