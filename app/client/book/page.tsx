"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { drivers, zones } from "@/lib/logiflow-data"
import { Calculator, PackagePlus, Truck } from "lucide-react"

export default function BookShipmentPage() {
  const router = useRouter()
  const [estimate, setEstimate] = useState<number | null>(null)
  const [trackingId, setTrackingId] = useState("")

  function calculateEstimate() {
    const nextEstimate = 1850
    const nextTrackingId = `LF-2406-${Math.floor(Math.random() * 9000 + 1000)}`
    setEstimate(nextEstimate)
    setTrackingId(nextTrackingId)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Book Shipment</h1>
        <p className="text-muted-foreground">Client-facing shipment booking workflow for pickup, delivery, package, zone, and driver assignment.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader><CardTitle>Shipment details</CardTitle><CardDescription>Create a structured booking request for operations review.</CardDescription></CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Sender name</Label><Input defaultValue="UrbanMart Retail" /></div>
            <div className="space-y-2"><Label>Receiver name</Label><Input placeholder="Receiver contact" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Pickup address</Label><Textarea defaultValue="Koramangala Fulfillment Hub, Bengaluru" /></div>
            <div className="space-y-2 md:col-span-2"><Label>Delivery address</Label><Textarea placeholder="Full delivery address" /></div>
            <div className="space-y-2"><Label>Package type</Label><Input placeholder="Retail carton" /></div>
            <div className="space-y-2"><Label>Weight</Label><Input placeholder="8.4 kg" /></div>
            <div className="space-y-2"><Label>Delivery zone</Label><Select><SelectTrigger><SelectValue placeholder="Select zone" /></SelectTrigger><SelectContent>{zones.map((zone) => <SelectItem key={zone} value={zone}>{zone}</SelectItem>)}</SelectContent></Select></div>
            <div className="space-y-2"><Label>Preferred driver</Label><Select><SelectTrigger><SelectValue placeholder="Optional assignment" /></SelectTrigger><SelectContent>{drivers.map((driver) => <SelectItem key={driver.id} value={driver.driverName}>{driver.driverName}</SelectItem>)}</SelectContent></Select></div>
          </CardContent>
          <CardFooter><Button onClick={calculateEstimate}><Calculator className="mr-2 h-4 w-4" />Calculate Estimate</Button></CardFooter>
        </Card>
        <Card>
          <CardHeader><CardTitle>Booking preview</CardTitle><CardDescription>Demo pricing and tracking ID generation.</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md border bg-muted/40 p-4"><PackagePlus className="mb-3 h-6 w-6 text-primary" /><div className="text-sm text-muted-foreground">Estimated shipment cost</div><div className="mt-1 text-3xl font-bold">{estimate ? `INR ${estimate.toLocaleString("en-IN")}` : "Pending"}</div></div>
            {trackingId && <div className="rounded-md border p-4"><div className="text-sm text-muted-foreground">Generated tracking ID</div><div className="mt-1 font-mono text-lg font-semibold">{trackingId}</div></div>}
          </CardContent>
          <CardFooter><Button className="w-full" disabled={!trackingId} onClick={() => router.push(`/tracking/${trackingId}`)}><Truck className="mr-2 h-4 w-4" />Create Demo Shipment</Button></CardFooter>
        </Card>
      </div>
    </div>
  )
}
