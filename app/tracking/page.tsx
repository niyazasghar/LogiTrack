"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { shipments } from "@/lib/logiflow-data"
import { MapPin, PackageSearch, ShieldCheck, Truck } from "lucide-react"

export default function TrackingLookupPage() {
  const router = useRouter()
  const [trackingId, setTrackingId] = useState(shipments[0].trackingId)
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container grid min-h-[calc(100vh-4rem)] gap-8 py-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-semibold text-primary">Customer tracking</div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950">Give clients a clean tracking experience.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Enter a LogiFlow tracking ID to view current status, estimated delivery, last updated location, sender/receiver summary, and delivery history.</p>
          <Card className="mt-8 bg-white product-shadow">
            <CardHeader><CardTitle>Track your shipment</CardTitle><CardDescription>Example tracking ID: {shipments[1].trackingId}</CardDescription></CardHeader>
            <CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="tracking">Tracking ID</Label><Input id="tracking" value={trackingId} onChange={(event) => setTrackingId(event.target.value)} /></div><Button className="w-full" onClick={() => router.push(`/tracking/${trackingId}`)}>Track Shipment</Button></CardContent>
          </Card>
        </div>
        <div className="rounded-3xl border bg-white p-5 product-shadow">
          <div className="rounded-2xl bg-slate-950 p-5 text-white"><div className="flex items-center justify-between"><div><div className="text-sm text-slate-300">Sample shipment</div><div className="text-2xl font-bold">{shipments[0].trackingId}</div></div><PackageSearch className="h-8 w-8 text-emerald-300" /></div></div>
          <div className="mt-4 grid gap-3 md:grid-cols-3"><div className="rounded-xl border p-4"><Truck className="mb-2 h-5 w-5 text-primary" /><div className="text-sm font-medium">Out for delivery</div></div><div className="rounded-xl border p-4"><MapPin className="mb-2 h-5 w-5 text-primary" /><div className="text-sm font-medium">Domlur Sorting Point</div></div><div className="rounded-xl border p-4"><ShieldCheck className="mb-2 h-5 w-5 text-primary" /><div className="text-sm font-medium">ETA verified</div></div></div>
        </div>
      </main>
    </div>
  )
}
