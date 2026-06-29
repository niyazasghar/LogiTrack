import Link from "next/link"
import { Route } from "lucide-react"

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
        <Route className="h-5 w-5" />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
      </span>
      <span>
        <span className="block text-base font-bold leading-none tracking-tight">LogiFlow</span>
        <span className="text-xs text-muted-foreground">Operations Platform</span>
      </span>
    </Link>
  )
}
