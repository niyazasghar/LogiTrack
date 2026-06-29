import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf } from "lucide-react"

export default function EcoTokensPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Sustainability Snapshot</h1><p className="text-muted-foreground">Optional carbon reporting layer for logistics operators that want greener delivery visibility.</p></div>
      <div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle className="text-sm">CO2 offset tracked</CardTitle></CardHeader><CardContent className="text-2xl font-bold">345.6 kg</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Eco deliveries</CardTitle></CardHeader><CardContent className="text-2xl font-bold">78%</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Client reports</CardTitle></CardHeader><CardContent className="text-2xl font-bold">24</CardContent></Card></div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><Leaf className="h-5 w-5 text-emerald-600" />Environmental reporting</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-3">{["Reforestation offsets", "EV route optimization", "Client sustainability reports"].map((item) => <div key={item} className="rounded-md border p-4"><Badge variant="success">Active</Badge><div className="mt-3 font-medium">{item}</div><p className="mt-1 text-sm text-muted-foreground">Demo reporting module for portfolio storytelling.</p></div>)}</CardContent></Card>
    </div>
  )
}
