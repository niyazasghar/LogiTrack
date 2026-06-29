import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { drivers } from "@/lib/logiflow-data"
import { ArrowLeft } from "lucide-react"

export default function LegacyVehicleDetailPage() {
  return (
    <div className="space-y-6">
      <Button variant="outline" asChild><Link href="/admin/drivers"><ArrowLeft className="mr-2 h-4 w-4" />Back to Drivers</Link></Button>
      <Card>
        <CardHeader><CardTitle>Driver detail moved</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>LogiFlow now manages delivery team records under the Drivers module instead of the legacy vehicle route.</p>
          <div className="grid gap-2 md:grid-cols-2">{drivers.slice(0, 4).map((driver) => <div key={driver.id} className="rounded-md border p-3"><div className="font-medium text-foreground">{driver.driverName}</div><div>{driver.assignedZone}</div></div>)}</div>
        </CardContent>
      </Card>
    </div>
  )
}
