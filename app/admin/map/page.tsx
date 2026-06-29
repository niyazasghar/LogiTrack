import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { badgeClass, drivers, shipments, topDeliveryZones } from "@/lib/logiflow-data"

export default function MapPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Delivery Zones</h1><p className="text-muted-foreground">A zone-focused operations view for delivery density, drivers, and active shipments.</p></div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
        <Card><CardHeader><CardTitle>Zone activity map</CardTitle></CardHeader><CardContent><div className="grid min-h-[480px] gap-3 rounded-md border bg-muted/30 p-4 md:grid-cols-3">{topDeliveryZones.map((zone) => <div key={zone.zone} className="flex flex-col justify-between rounded-md border bg-card p-4"><div><div className="font-medium">{zone.zone}</div><div className="text-sm text-muted-foreground">{zone.shipments} shipments this month</div></div><div className="mt-8 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-primary" style={{ width: `${Math.min(zone.shipments / 4, 100)}%` }} /></div></div>)}</div></CardContent></Card>
        <div className="space-y-4"><Card><CardHeader><CardTitle>Active drivers</CardTitle></CardHeader><CardContent className="space-y-3">{drivers.map((driver) => <div key={driver.id} className="rounded-md border p-3"><div className="font-medium">{driver.driverName}</div><div className="text-sm text-muted-foreground">{driver.assignedZone}</div><span className={`mt-2 inline-block rounded-full border px-2 py-1 text-xs ${badgeClass(driver.availabilityStatus)}`}>{driver.availabilityStatus}</span></div>)}</CardContent></Card><Card><CardHeader><CardTitle>Live shipments</CardTitle></CardHeader><CardContent className="space-y-2">{shipments.slice(0, 4).map((shipment) => <div key={shipment.trackingId} className="text-sm"><span className="font-medium">{shipment.trackingId}</span> - {shipment.lastUpdatedLocation}</div>)}</CardContent></Card></div>
      </div>
    </div>
  )
}
