"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { CreditCard, Headphones, LayoutDashboard, Leaf, PackageCheck, Search, Settings } from "lucide-react"

const routes = [
  { title: "Dashboard", href: "/client", icon: LayoutDashboard },
  { title: "My Shipments", href: "/client/orders", icon: PackageCheck },
  { title: "Invoices", href: "/client/payments", icon: CreditCard },
  { title: "Track", href: "/tracking", icon: Search },
  { title: "Support", href: "/client/support", icon: Headphones },
  { title: "Carbon Offset", href: "/client/carbon-offset", icon: Leaf },
  { title: "Settings", href: "/client/settings", icon: Settings }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r bg-card md:block">
      <div className="p-4">
        <div className="rounded-md border bg-muted/50 p-3">
          <div className="text-sm font-semibold">Client Portal</div>
          <div className="mt-1 text-xs text-muted-foreground">UrbanMart Retail</div>
        </div>
        <nav className="mt-4 grid gap-1">
          {routes.map((route) => {
            const Icon = route.icon
            const active = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  active ? "bg-primary/10 text-primary" : ""
                )}
              >
                <Icon className="h-4 w-4" />
                {route.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
