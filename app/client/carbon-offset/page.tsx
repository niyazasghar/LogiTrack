import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export default function CarbonOffsetPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Carbon Offset</h1><p className="text-muted-foreground">Client-facing sustainability summary for eco-aware delivery programs.</p></div>
      <div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle className="text-sm">CO2 offset</CardTitle></CardHeader><CardContent className="text-2xl font-bold">125 kg</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Eco deliveries</CardTitle></CardHeader><CardContent className="text-2xl font-bold">24</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Trees equivalent</CardTitle></CardHeader><CardContent className="text-2xl font-bold">6</CardContent></Card></div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><Leaf className="h-5 w-5 text-emerald-600" />Environmental impact</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">LogiFlow can be extended with carbon accounting, preferred eco routes, and customer-facing sustainability reports.</CardContent></Card>
    </div>
  )
}
