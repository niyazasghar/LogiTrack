import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/logiflow/ui-kit"
import { drivers, shipments } from "@/lib/logiflow-data"
import { Route, Truck } from "lucide-react"

function workloadFor(activeShipments: number) {
  return Math.min(activeShipments * 12 + 22, 96)
}

export default function DriversPage() {
  return (
    <div className="space-y-6">
      <div><div className="text-sm font-semibold uppercase tracking-wide text-primary">Delivery team</div><h1 className="mt-1 text-3xl font-bold tracking-tight">Drivers</h1><p className="text-muted-foreground">Monitor availability, zone ownership, workload, and active shipment assignments.</p></div>
      <div className="grid gap-4 md:grid-cols-4"><Card><CardHeader><CardTitle className="text-sm">Drivers</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{drivers.length}</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Available</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{drivers.filter((driver) => driver.availabilityStatus === "Available").length}</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Active shipments</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{drivers.reduce((sum, driver) => sum + driver.activeShipments, 0)}</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Completed</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{drivers.reduce((sum, driver) => sum + driver.completedDeliveries, 0).toLocaleString("en-IN")}</CardContent></Card></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{drivers.map((driver) => { const workload = workloadFor(driver.activeShipments); return <Card key={driver.id} className="bg-white"><CardHeader className="flex flex-row items-center justify-between"><CardTitle className="text-lg">{driver.driverName}</CardTitle><Truck className="h-5 w-5 text-primary" /></CardHeader><CardContent className="space-y-4"><div className="flex justify-between text-sm"><span className="text-muted-foreground">Zone</span><span className="font-medium">{driver.assignedZone}</span></div><div className="flex justify-between text-sm"><span className="text-muted-foreground">Active shipments</span><span className="font-medium">{driver.activeShipments}</span></div><StatusBadge value={driver.availabilityStatus} /><div><div className="mb-1 flex justify-between text-xs"><span>Workload</span><span>{workload}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-primary" style={{ width: `${workload}%` }} /></div></div><Button variant="outline" className="w-full"><Route className="mr-2 h-4 w-4" />Assign shipment</Button></CardContent></Card> })}</div>
      <Card><CardHeader><CardTitle>Active assignments</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-2">{shipments.filter((shipment) => shipment.status !== "Delivered").map((shipment) => <div key={shipment.trackingId} className="rounded-xl border p-3"><div className="font-medium">{shipment.assignedDriver}</div><div className="text-sm text-muted-foreground">{shipment.trackingId} - {shipment.deliveryZone}</div></div>)}</CardContent></Card>
    </div>
  )
}
