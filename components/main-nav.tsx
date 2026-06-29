"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Package, Truck, BarChart3, CreditCard, Leaf, Settings, Home, LogIn, UserPlus } from "lucide-react"

interface MainNavProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "client" | null
}

export function MainNav({ isLoggedIn = false, userRole = null }: MainNavProps) {
  const pathname = usePathname()

  const adminLinks = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      title: "Vehicles",
      href: "/admin/vehicles",
      icon: <Truck className="mr-2 h-4 w-4" />,
    },
    {
      title: "Analytics",
      href: "/admin/analytics",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Payments",
      href: "/admin/payments",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Eco Tokens",
      href: "/admin/eco-tokens",
      icon: <Leaf className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  const clientLinks = [
    {
      title: "Dashboard",
      href: "/client",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Book Parcel",
      href: "/client/book",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      title: "Orders",
      href: "/client/orders",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      title: "Payments",
      href: "/client/payments",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Carbon Offset",
      href: "/client/carbon-offset",
      icon: <Leaf className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/client/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  const publicLinks = [
    {
      title: "Login",
      href: "/login",
      icon: <LogIn className="mr-2 h-4 w-4" />,
    },
    {
      title: "Sign Up",
      href: "/signup",
      icon: <UserPlus className="mr-2 h-4 w-4" />,
    },
  ]

  const links = isLoggedIn ? (userRole === "admin" ? adminLinks : clientLinks) : publicLinks

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {links.map((link) => (
        <Button key={link.href} variant={pathname === link.href ? "default" : "ghost"} asChild>
          <Link
            href={link.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors border border-gray-300 rounded-md px-2 py-1",
              pathname === link.href ? "text-primary-foreground" : "text-muted-foreground hover:text-primary",
            )}
          >
            {link.icon}
            {link.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

