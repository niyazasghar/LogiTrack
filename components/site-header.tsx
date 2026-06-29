import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BrandMark } from "@/components/brand-mark"
import { LayoutDashboard } from "lucide-react"

const nav = [
  { label: "Features", href: "/#features" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Dashboard", href: "/#dashboard" },
  { label: "Tracking", href: "/tracking" },
  { label: "Demo", href: "/admin" },
]

interface SiteHeaderProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "client" | null
}

export function SiteHeader({ isLoggedIn = false, userRole = null }: SiteHeaderProps) {
  const dashboardHref = userRole === "client" ? "/client" : "/admin"

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <BrandMark />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href={isLoggedIn ? dashboardHref : "/admin"}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              View Demo
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
