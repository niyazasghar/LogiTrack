import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MiniBars, MetricCard, ShipmentTable, StatusBadge, overviewMetrics } from "@/components/logiflow/ui-kit"
import { deliveryStatusDistribution, failedDeliveryReasons, formatCurrency, invoices, shipments, supportTickets, topDeliveryZones, weeklyShipmentVolume } from "@/lib/logiflow-data"
import { AlertTriangle, CalendarDays, CreditCard, PackageCheck, Route, Truck } from "lucide-react"

export default function AdminDashboard() {
  const delayed = shipments.filter((shipment) => shipment.status === "Failed" || shipment.status === "Pickup Pending")
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-primary">Overview</div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">Logistics operations control center</h1>
          <p className="mt-1 text-muted-foreground">Track every shipment from booking to delivery, reduce manual follow-ups, and monitor operational risk.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-4">
          <Select defaultValue="30d"><SelectTrigger><CalendarDays className="mr-2 h-4 w-4" /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="7d">Last 7 days</SelectItem><SelectItem value="30d">Last 30 days</SelectItem><SelectItem value="90d">Last 90 days</SelectItem></SelectContent></Select>
          <Select defaultValue="all"><SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem><SelectItem value="delayed">Delayed only</SelectItem><SelectItem value="transit">In transit</SelectItem></SelectContent></Select>
          <Select defaultValue="all-clients"><SelectTrigger><SelectValue placeholder="Client" /></SelectTrigger><SelectContent><SelectItem value="all-clients">All clients</SelectItem><SelectItem value="urbanmart">UrbanMart Retail</SelectItem><SelectItem value="freshroute">FreshRoute Foods</SelectItem></SelectContent></Select>
          <Button asChild><Link href="/admin/shipments">Manage Shipments</Link></Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {overviewMetrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
        <Card className="border-orange-200 bg-orange-50/70">
          <CardHeader className="flex flex-row items-center justify-between"><CardTitle className="flex items-center gap-2 text-orange-900"><AlertTriangle className="h-5 w-5" />Delayed shipment alert</CardTitle><StatusBadge value="Delayed" /></CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {delayed.map((shipment) => <div key={shipment.trackingId} className="rounded-xl border border-orange-200 bg-white p-4"><div className="font-semibold text-slate-950">{shipment.trackingId}</div><div className="mt-1 text-sm text-muted-foreground">{shipment.client} - {shipment.lastUpdatedLocation}</div><div className="mt-3 flex items-center justify-between"><StatusBadge value={shipment.status} /><span className="text-xs text-orange-700">ETA {shipment.estimatedDeliveryDate}</span></div></div>)}
          </CardContent>
        </Card>
        <Card><CardHeader><CardTitle>Today&apos;s pickup queue</CardTitle></CardHeader><CardContent className="space-y-3">{shipments.slice(0, 4).map((shipment) => <div key={shipment.trackingId} className="flex items-center justify-between rounded-xl border p-3"><div><div className="font-semibold">{shipment.trackingId}</div><div className="text-sm text-muted-foreground">{shipment.deliveryZone} - {shipment.assignedDriver}</div></div><StatusBadge value={shipment.status} /></div>)}</CardContent></Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        <Card><CardHeader><CardTitle>Shipment volume by week</CardTitle></CardHeader><CardContent><MiniBars data={weeklyShipmentVolume.map((item) => ({ label: item.week, value: item.value }))} /></CardContent></Card>
        <Card><CardHeader><CardTitle>Delivery status distribution</CardTitle></CardHeader><CardContent><MiniBars data={deliveryStatusDistribution} /></CardContent></Card>
        <Card><CardHeader><CardTitle>Top delivery zones</CardTitle></CardHeader><CardContent><MiniBars data={topDeliveryZones.slice(0, 5).map((item) => ({ label: item.zone, value: item.shipments }))} /></CardContent></Card>
        <Card><CardHeader><CardTitle>Failed delivery reasons</CardTitle></CardHeader><CardContent><MiniBars data={failedDeliveryReasons ?? [{ label: "Receiver unavailable", value: 38 }, { label: "Wrong address", value: 24 }, { label: "Payment hold", value: 18 }]} /></CardContent></Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
        <Card><CardHeader className="flex flex-row items-center justify-between"><CardTitle>Recent shipments</CardTitle><Button variant="outline" size="sm" asChild><Link href="/admin/shipments">View all</Link></Button></CardHeader><CardContent><ShipmentTable rows={shipments.slice(0, 5)} compact /></CardContent></Card>
        <div className="space-y-4">
          <Card><CardHeader><CardTitle>Driver workload summary</CardTitle></CardHeader><CardContent className="space-y-3">{["Arjun Mehta", "Faisal Khan", "Rohit Sharma"].map((driver, index) => <div key={driver}><div className="mb-1 flex justify-between text-sm"><span>{driver}</span><span>{[82, 58, 94][index]}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-primary" style={{ width: `${[82, 58, 94][index]}%` }} /></div></div>)}</CardContent></Card>
          <Card><CardHeader><CardTitle>Recent payments</CardTitle></CardHeader><CardContent className="space-y-3">{invoices.slice(0, 4).map((invoice) => <div key={invoice.invoiceId} className="flex items-center justify-between text-sm"><div><div className="font-medium">{invoice.invoiceId}</div><div className="text-muted-foreground">{invoice.client}</div></div><div className="text-right"><div className="font-semibold">{formatCurrency(invoice.amount)}</div><StatusBadge value={invoice.paymentStatus} /></div></div>)}</CardContent></Card>
          <Card><CardHeader><CardTitle>Recent activity</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground">{supportTickets.slice(0, 3).map((ticket) => <div key={ticket.ticketId} className="rounded-xl border p-3"><span className="font-medium text-slate-900">{ticket.ticketId}</span> {ticket.notes}</div>)}</CardContent></Card>
        </div>
      </div>
    </div>
  )
}
