import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { badgeClass, shipments, type Shipment } from "@/lib/logiflow-data"
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, CreditCard, Package, Truck, Users } from "lucide-react"

export function StatusBadge({ value }: { value: string }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${badgeClass(value)}`}>{value}</span>
}

export function MetricCard({ label, value, trend, icon: Icon, accent = "bg-primary" }: { label: string; value: string; trend: string; icon: React.ComponentType<{ className?: string }>; accent?: string }) {
  return (
    <Card className="overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={`h-1 ${accent}`} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{label}</CardTitle>
        <span className="rounded-lg bg-slate-100 p-2 text-slate-600"><Icon className="h-4 w-4" /></span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <p className="mt-1 text-xs text-muted-foreground">{trend}</p>
      </CardContent>
    </Card>
  )
}

export function MiniBars({ data, labelKey = "label", valueKey = "value" }: { data: Array<Record<string, string | number>>; labelKey?: string; valueKey?: string }) {
  const max = Math.max(...data.map((item) => Number(item[valueKey] ?? item.shipments ?? 0)))
  return (
    <div className="space-y-3">
      {data.map((item) => {
        const label = String(item[labelKey] ?? item.zone ?? item.week)
        const value = Number(item[valueKey] ?? item.shipments ?? 0)
        return (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="font-medium text-slate-600">{label}</span>
              <span className="text-muted-foreground">{value.toLocaleString("en-IN")}</span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-primary" style={{ width: `${Math.max((value / max) * 100, 8)}%` }} /></div>
          </div>
        )
      })}
    </div>
  )
}

export function ShipmentTable({ rows = shipments, compact = false }: { rows?: Shipment[]; compact?: boolean }) {
  return (
    <div className="table-scroll rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/80">
            <TableHead>Tracking ID</TableHead>
            <TableHead>Client</TableHead>
            {!compact && <TableHead>Sender</TableHead>}
            <TableHead>Receiver</TableHead>
            <TableHead>Pickup Zone</TableHead>
            <TableHead>Delivery Zone</TableHead>
            {!compact && <TableHead>Driver</TableHead>}
            <TableHead>Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>ETA</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((shipment) => (
            <TableRow key={shipment.trackingId} className="hover:bg-slate-50">
              <TableCell className="font-semibold text-primary">{shipment.trackingId}</TableCell>
              <TableCell>{shipment.client}</TableCell>
              {!compact && <TableCell>{shipment.senderName}</TableCell>}
              <TableCell>{shipment.receiverName}</TableCell>
              <TableCell>{shipment.deliveryZone}</TableCell>
              <TableCell>{shipment.deliveryZone}</TableCell>
              {!compact && <TableCell>{shipment.assignedDriver}</TableCell>}
              <TableCell><StatusBadge value={shipment.status} /></TableCell>
              <TableCell><StatusBadge value={shipment.paymentStatus} /></TableCell>
              <TableCell>{shipment.estimatedDeliveryDate}</TableCell>
              <TableCell className="text-right"><Button variant="ghost" size="sm" asChild><Link href={`/admin/shipments/${shipment.trackingId}`}>View<ArrowRight className="ml-1 h-3 w-3" /></Link></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export const overviewMetrics = [
  { label: "Total Shipments", value: "1,248", trend: "+14% from last month", icon: Package, accent: "bg-sky-600" },
  { label: "Pending Pickups", value: "74", trend: "18 scheduled today", icon: Clock3, accent: "bg-amber-500" },
  { label: "In Transit", value: "286", trend: "Across 8 delivery zones", icon: Truck, accent: "bg-indigo-500" },
  { label: "Out for Delivery", value: "92", trend: "Final-mile routes active", icon: Truck, accent: "bg-violet-500" },
  { label: "Delivered", value: "874", trend: "92% on-time delivery", icon: CheckCircle2, accent: "bg-emerald-500" },
  { label: "Failed Deliveries", value: "14", trend: "Needs operations review", icon: AlertTriangle, accent: "bg-rose-500" },
  { label: "Active Clients", value: "128", trend: "7 priority accounts", icon: Users, accent: "bg-teal-500" },
  { label: "Monthly Revenue", value: "INR 4.68L", trend: "+11.2% this month", icon: CreditCard, accent: "bg-slate-900" },
  { label: "Open Support Tickets", value: "4", trend: "2 high priority", icon: AlertTriangle, accent: "bg-orange-500" },
  { label: "Delayed Shipments", value: "9", trend: "Monitor before SLA breach", icon: Clock3, accent: "bg-orange-500" },
]
