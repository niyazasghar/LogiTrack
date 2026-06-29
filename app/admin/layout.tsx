import type React from "react"
import { Sidebar } from "@/components/admin/sidebar"
import { Bell, Search, UserCircle } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white/90 px-4 backdrop-blur md:px-6">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border bg-slate-50 px-3 py-2 text-sm text-muted-foreground md:max-w-md">
              <Search className="h-4 w-4" />Search shipments, clients, invoices
            </div>
            <div className="ml-3 flex items-center gap-3">
              <button className="relative rounded-lg border bg-white p-2 text-slate-600 hover:bg-slate-50"><Bell className="h-4 w-4" /><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-amber-500" /></button>
              <div className="hidden text-right sm:block"><div className="text-sm font-semibold">Operations Admin</div><div className="text-xs text-muted-foreground">admin@logiflow.dev</div></div>
              <UserCircle className="h-8 w-8 text-slate-600" />
            </div>
          </header>
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
