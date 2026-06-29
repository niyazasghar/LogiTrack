"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/logiflow/ui-kit"
import { getShipmentByTrackingId } from "@/lib/logiflow-data"
import { ArrowLeft, CalendarDays, CheckCircle2, Headphones, MapPin, Package, UserRound } from "lucide-react"

export default function PublicTrackingPage() {
  const params = useParams<{ id: string }>()
  const shipment = getShipmentByTrackingId(params.id)
  if (!shipment) return <div className="min-h-screen"><SiteHeader /><main className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4"><h1 className="text-2xl font-bold">Tracking ID not found</h1><p className="text-muted-foreground">Check the ID and try again.</p><Button asChild><Link href="/tracking">Search again</Link></Button></main></div>
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-8">
        <Button variant="outline" asChild><Link href="/tracking"><ArrowLeft className="mr-2 h-4 w-4" />Track another shipment</Link></Button>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <Card className="bg-white product-shadow">
            <CardHeader className="border-b"><div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><div><CardTitle className="text-2xl">Shipment {shipment.trackingId}</CardTitle><p className="mt-1 text-sm text-muted-foreground">Estimated delivery: {shipment.estimatedDeliveryDate}</p></div><StatusBadge value={shipment.status} /></div></CardHeader>
            <CardContent className="pt-6"><div className="relative space-y-5 border-l pl-6">{shipment.timeline.map((event) => <div key={`${event.label}-${event.time}`} className="relative"><span className={`absolute -left-[31px] top-1 flex h-4 w-4 rounded-full border-2 border-white ${event.complete ? "bg-primary" : "bg-slate-300"}`} /><div className="rounded-xl border bg-white p-4"><div className="flex justify-between gap-3"><span className="font-medium">{event.label}</span><span className="text-xs text-muted-foreground">{event.time}</span></div><div className="mt-1 text-sm text-muted-foreground">{event.location} - {event.note}</div></div></div>)}</div></CardContent>
          </Card>
          <div className="space-y-4">
            <Card className="bg-white"><CardHeader><CardTitle>Current status</CardTitle></CardHeader><CardContent className="space-y-3"><div className="rounded-xl border bg-slate-50 p-4"><div className="flex items-center gap-2 font-medium"><MapPin className="h-4 w-4 text-primary" />{shipment.lastUpdatedLocation}</div><p className="mt-1 text-sm text-muted-foreground">Last updated from driver route scan.</p></div><div className="rounded-xl border p-4 text-sm"><div className="flex items-center gap-2 font-medium"><CalendarDays className="h-4 w-4" />Estimated delivery</div><div className="mt-1 text-muted-foreground">{shipment.estimatedDeliveryDate}</div></div></CardContent></Card>
            <Card className="bg-white"><CardHeader><CardTitle>Sender and receiver</CardTitle></CardHeader><CardContent className="space-y-4 text-sm"><div><div className="flex items-center gap-2 font-medium"><UserRound className="h-4 w-4" />Sender</div><div className="mt-1 text-muted-foreground">{shipment.senderName}<br />{shipment.pickupAddress}</div></div><div><div className="flex items-center gap-2 font-medium"><Package className="h-4 w-4" />Receiver</div><div className="mt-1 text-muted-foreground">{shipment.receiverName}<br />{shipment.deliveryAddress}</div></div></CardContent></Card>
            <Card className="border-primary/20 bg-primary/5"><CardContent className="p-4"><div className="flex items-center gap-2 font-medium"><Headphones className="h-4 w-4 text-primary" />Need help?</div><p className="mt-1 text-sm text-muted-foreground">Contact support with this tracking ID for delivery assistance.</p><Button className="mt-4 w-full" variant="outline">Contact Support</Button></CardContent></Card>
          </div>
        </div>
      </main>
    </div>
  )
}
