"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Package, CreditCard, Leaf, Settings, Home, Clock } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      href: "/client",
      icon: Home,
    },
    {
      title: "Book Parcel",
      href: "/client/book",
      icon: Package,
    },
    {
      title: "Orders",
      href: "/client/orders",
      icon: Clock,
    },
    {
      title: "Payments",
      href: "/client/payments",
      icon: CreditCard,
    },
    {
      title: "Carbon Offset",
      href: "/client/carbon-offset",
      icon: Leaf,
    },
    {
      title: "Settings",
      href: "/client/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex h-14 items-center border-b px-4 font-semibold">Client Dashboard</div>
        <nav className="grid gap-1 px-2 pt-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted",
                pathname === route.href ? "bg-muted" : "transparent",
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

