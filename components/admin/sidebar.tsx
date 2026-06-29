"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BrandMark } from "@/components/brand-mark"
import { BarChart3, ClipboardList, CreditCard, Headphones, LayoutDashboard, PackageSearch, Settings, Truck, Users } from "lucide-react"

const routes = [
  { title: "Overview", href: "/admin", icon: LayoutDashboard },
  { title: "Shipments", href: "/admin/shipments", icon: ClipboardList },
  { title: "Parcel Tracking", href: "/tracking", icon: PackageSearch },
  { title: "Clients", href: "/admin/clients", icon: Users },
  { title: "Drivers", href: "/admin/drivers", icon: Truck },
  { title: "Payments", href: "/admin/payments", icon: CreditCard },
  { title: "Support Issues", href: "/admin/support", icon: Headphones },
  { title: "Reports", href: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden min-h-screen w-72 border-r bg-white/90 md:block">
      <div className="sticky top-0 p-5">
        <BrandMark />
        <div className="mt-5 rounded-xl border bg-slate-50 p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">DevShuttle Lab Build</div>
          <div className="mt-1 text-sm font-medium">Operations workspace</div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-200"><div className="h-1.5 w-[72%] rounded-full bg-emerald-500" /></div>
        </div>
        <nav className="mt-5 grid gap-1">
          {routes.map((route) => {
            const Icon = route.icon
            const active = pathname === route.href || (route.href !== "/tracking" && pathname.startsWith(`${route.href}/`))
            return (
              <Link key={route.href} href={route.href} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950", active && "bg-primary/10 text-primary shadow-sm")}>
                <Icon className="h-4 w-4" />{route.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
