"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const publicLinks = [
  { title: "Features", href: "/#features" },
  { title: "Tracking", href: "/tracking" },
  { title: "Demo", href: "/admin" }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-1">
      {publicLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            pathname === link.href ? "bg-muted text-foreground" : ""
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}
