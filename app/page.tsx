import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MiniBars, StatusBadge } from "@/components/logiflow/ui-kit"
import { deliveryStatusDistribution, revenueTrend, shipments, topDeliveryZones } from "@/lib/logiflow-data"
import { AlertTriangle, ArrowRight, BarChart3, CheckCircle2, ClipboardList, CreditCard, Headphones, MapPin, PackageSearch, Route, ShieldCheck, Truck, Users } from "lucide-react"

const problems = ["Shipment updates scattered across calls and WhatsApp", "Clients keep asking for delivery status", "No clear view of pending, delayed, and completed deliveries", "Payments and invoices are hard to track", "Drivers and delivery teams are difficult to coordinate", "Reports are manually prepared from spreadsheets"]
const features = [
  ["Shipment Booking", ClipboardList, "Track every shipment from booking to delivery with structured pickup, package, driver, and SLA fields."],
  ["Public Parcel Tracking", PackageSearch, "Give clients a clean tracking experience without manual follow-ups."],
  ["Delivery Status Workflow", Route, "Move shipments through pickup, transit, out-for-delivery, delivered, delayed, and failed states."],
  ["Client Management", Users, "Manage B2B clients, shipment history, account status, and invoice exposure."],
  ["Driver Assignment", Truck, "Coordinate active shipments, availability, zones, and workload at a glance."],
  ["Payment Visibility", CreditCard, "Monitor paid, pending, overdue, and failed invoices beside shipment records."],
  ["Support Issue Tracking", Headphones, "Capture delayed delivery, wrong address, damaged parcel, payment, and complaint tickets."],
  ["Operations Dashboard", BarChart3, "Monitor delayed shipments before they become client complaints."],
] as const
const workflow = ["Client books shipment", "Operations assigns pickup", "Driver updates delivery status", "Client tracks parcel", "Admin monitors revenue and delays"]
const roles = [
  ["Admin", "Full access to shipments, clients, drivers, payments, support, reports, and settings."],
  ["Operations Manager", "Manage pickup queues, driver assignment, delivery exceptions, and performance reports."],
  ["Client", "View own shipments, invoices, tracking timelines, and support requests."],
  ["Driver", "Review assigned deliveries, update status, and follow route summaries."],
]

function HeroMockup() {
  const latest = shipments.slice(0, 4)
  return (
    <div className="product-shadow rounded-2xl border bg-white p-4">
      <div className="flex items-center justify-between border-b pb-3">
        <div><div className="text-sm font-semibold">Operations Control Center</div><div className="text-xs text-muted-foreground">Today, 29 June 2026</div></div>
        <Badge variant="info">Live demo</Badge>
      </div>
      <div className="grid gap-3 py-4 sm:grid-cols-3">
        {[["Shipments", "1,248"], ["Delayed", "9"], ["Revenue", "INR 4.68L"]].map(([label, value]) => <div key={label} className="rounded-xl border bg-slate-50 p-3"><div className="text-xs text-muted-foreground">{label}</div><div className="mt-1 text-xl font-bold">{value}</div></div>)}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
        <div className="rounded-xl border">
          <div className="flex items-center justify-between border-b bg-slate-50 px-3 py-2 text-sm font-medium"><span>Shipment status table</span><span className="text-xs text-muted-foreground">4 active</span></div>
          <div className="divide-y">
            {latest.map((shipment) => <div key={shipment.trackingId} className="grid grid-cols-[1fr_auto] gap-3 px-3 py-3 text-sm"><div><div className="font-semibold text-primary">{shipment.trackingId}</div><div className="text-muted-foreground">{shipment.client} to {shipment.deliveryZone}</div></div><StatusBadge value={shipment.status} /></div>)}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border p-3"><div className="mb-2 text-sm font-medium">Top delivery zones</div><MiniBars data={topDeliveryZones.slice(0, 4).map((item) => ({ label: item.zone, value: item.shipments }))} /></div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-3"><div className="flex items-center gap-2 text-sm font-semibold text-orange-800"><AlertTriangle className="h-4 w-4" />Delayed shipments alert</div><p className="mt-1 text-xs text-orange-700">9 shipments need review before SLA breach.</p></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="logistics-grid border-b bg-white">
          <div className="container grid gap-10 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
            <div className="flex flex-col justify-center">
              <Badge variant="outline" className="w-fit border-slate-300 bg-white">DevShuttle Lab Build</Badge>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Run shipments, tracking, clients, and delivery operations from one clean platform.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">LogiFlow helps logistics teams manage parcel booking, delivery status, client visibility, payment tracking, and operational workflows without scattered spreadsheets or manual follow-ups.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link href="/admin">View Demo Dashboard<ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button size="lg" variant="outline" asChild><Link href={`/tracking/${shipments[0].trackingId}`}>Track a Sample Shipment</Link></Button></div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm"><div><div className="font-bold">92%</div><div className="text-muted-foreground">on-time delivery</div></div><div><div className="font-bold">8 zones</div><div className="text-muted-foreground">active coverage</div></div><div><div className="font-bold">4 roles</div><div className="text-muted-foreground">demo access</div></div></div>
            </div>
            <HeroMockup />
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-2xl"><Badge variant="warning">Operational pain</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">Logistics operations become messy when everything is tracked manually.</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{problems.map((problem) => <Card key={problem} className="border-slate-200"><CardContent className="flex gap-3 p-5"><AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" /><span className="text-sm font-medium text-slate-700">{problem}</span></CardContent></Card>)}</div>
        </section>

        <section id="features" className="border-y bg-slate-50 py-16"><div className="container"><div className="max-w-2xl"><Badge variant="info">Solution</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">One platform for booking, tracking, clients, payments, and delivery workflows.</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map(([title, Icon, copy]) => <Card key={title} className="bg-white"><CardHeader><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><CardTitle className="text-base">{title}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{copy}</CardContent></Card>)}</div></div></section>

        <section id="workflow" className="container py-16"><div className="max-w-2xl"><Badge variant="outline">Workflow</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">From booking to delivery confirmation.</h2></div><div className="mt-8 grid gap-4 md:grid-cols-5">{workflow.map((step, index) => <div key={step} className="rounded-2xl border bg-white p-5 shadow-sm"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</div><div className="mt-4 text-sm font-semibold">{step}</div></div>)}</div></section>

        <section id="dashboard" className="border-y bg-white py-16"><div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><Badge variant="success">Dashboard preview</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">A control center for shipments, delays, drivers, and payments.</h2><p className="mt-3 text-muted-foreground">Use dashboard cards, status distribution, revenue trend, delayed shipment alerts, driver workload, and recent payment records to keep operations moving.</p></div><div className="grid gap-4 md:grid-cols-2"><Card><CardHeader><CardTitle>Delivery status chart</CardTitle></CardHeader><CardContent><MiniBars data={deliveryStatusDistribution} /></CardContent></Card><Card><CardHeader><CardTitle>Revenue trend</CardTitle></CardHeader><CardContent><MiniBars data={revenueTrend.map((item) => ({ label: item.label, value: Math.round(item.value / 1000) }))} /></CardContent></Card></div></div></section>

        <section className="container grid gap-8 py-16 lg:grid-cols-2"><div><Badge variant="info">Tracking experience</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">A customer-facing parcel tracking flow that feels real.</h2><p className="mt-3 text-muted-foreground">Customers can enter a tracking ID, see current status, estimated delivery, last updated location, sender/receiver summary, and delivery history.</p><Button className="mt-6" asChild><Link href={`/tracking/${shipments[0].trackingId}`}>Open tracking preview</Link></Button></div><Card><CardHeader><CardTitle>{shipments[0].trackingId}</CardTitle></CardHeader><CardContent className="space-y-4"><StatusBadge value={shipments[0].status} /><div className="rounded-xl border bg-slate-50 p-4"><div className="flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4 text-primary" />{shipments[0].lastUpdatedLocation}</div><p className="mt-1 text-sm text-muted-foreground">Estimated delivery: {shipments[0].estimatedDeliveryDate}</p></div>{shipments[0].timeline.slice(0, 4).map((event) => <div key={event.time} className="flex gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-600" /><div><div className="font-medium">{event.label}</div><div className="text-muted-foreground">{event.location} - {event.time}</div></div></div>)}</CardContent></Card></section>

        <section className="border-y bg-slate-50 py-16"><div className="container"><div className="max-w-2xl"><Badge variant="outline">Role-based access</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">Designed for every logistics workflow owner.</h2></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{roles.map(([role, copy]) => <Card key={role} className="bg-white"><CardHeader><ShieldCheck className="h-6 w-6 text-primary" /><CardTitle>{role}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{copy}</CardContent></Card>)}</div></div></section>

        <section className="container py-16"><div className="rounded-3xl bg-slate-950 p-8 text-white md:p-12"><div className="max-w-2xl"><h2 className="text-3xl font-bold tracking-tight">See how LogiFlow manages real delivery operations.</h2><p className="mt-3 text-slate-300">Explore the demo dashboard and tracking flow to see how shipments, clients, drivers, payments, and delivery updates connect in one platform.</p><Button className="mt-6" variant="secondary" asChild><Link href="/admin">View Demo Dashboard</Link></Button></div></div></section>
      </main>
      <footer className="border-t bg-white"><div className="container py-8 text-sm text-muted-foreground">LogiFlow is a DevShuttle Lab Build created to demonstrate logistics workflow automation, dashboard development, and operations platform engineering.</div></footer>
    </div>
  )
}
