import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { badgeClass, invoices, shipments } from "@/lib/logiflow-data"

const clientShipments = shipments.filter((shipment) => shipment.client === "UrbanMart Retail")

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><h1 className="text-3xl font-bold tracking-tight">Client Dashboard</h1><p className="text-muted-foreground">UrbanMart Retail shipment visibility, invoices, and support status.</p></div><Button asChild><Link href="/tracking">Track Shipment</Link></Button></div>
      <div className="grid gap-4 md:grid-cols-3"><Card><CardHeader><CardTitle className="text-sm">Total shipments</CardTitle></CardHeader><CardContent className="text-2xl font-bold">428</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Active shipments</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{clientShipments.filter((shipment) => shipment.status !== "Delivered").length}</CardContent></Card><Card><CardHeader><CardTitle className="text-sm">Pending invoices</CardTitle></CardHeader><CardContent className="text-2xl font-bold">2</CardContent></Card></div>
      <Card><CardHeader><CardTitle>Recent shipments</CardTitle></CardHeader><CardContent className="space-y-3">{clientShipments.map((shipment) => <div key={shipment.trackingId} className="flex items-center justify-between rounded-md border p-3"><div><div className="font-medium">{shipment.trackingId}</div><div className="text-sm text-muted-foreground">{shipment.receiverName} - {shipment.deliveryZone}</div></div><span className={`rounded-full border px-2 py-1 text-xs font-medium ${badgeClass(shipment.status)}`}>{shipment.status}</span></div>)}</CardContent></Card>
      <Card><CardHeader><CardTitle>Invoice snapshot</CardTitle></CardHeader><CardContent className="space-y-2">{invoices.filter((invoice) => invoice.client === "UrbanMart Retail").map((invoice) => <div key={invoice.invoiceId} className="flex items-center justify-between text-sm"><span>{invoice.invoiceId}</span><span className={`rounded-full border px-2 py-1 text-xs ${badgeClass(invoice.paymentStatus)}`}>{invoice.paymentStatus}</span></div>)}</CardContent></Card>
    </div>
  )
}
