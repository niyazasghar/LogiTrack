import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { Sidebar } from "@/components/admin/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader isLoggedIn={true} userRole="admin" />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

