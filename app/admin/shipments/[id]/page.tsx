"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { badgeClass, drivers, getShipmentByTrackingId } from "@/lib/logiflow-data"
import { ArrowLeft, CalendarDays, MapPin, Package, Truck, UserRound } from "lucide-react"

export default function ShipmentDetailsPage() {
  const params = useParams<{ id: string }>()
  const shipment = getShipmentByTrackingId(params.id)

  if (!shipment) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Shipment not found</h1>
        <Button asChild><Link href="/admin/shipments">Back to shipments</Link></Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" asChild><Link href="/admin/shipments"><ArrowLeft className="h-4 w-4" /></Link></Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{shipment.trackingId}</h1>
            <p className="text-muted-foreground">{shipment.senderName} to {shipment.receiverName}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Select defaultValue={shipment.status}><SelectTrigger className="w-48"><SelectValue /></SelectTrigger><SelectContent>{["Booked", "Pickup Pending", "Picked Up", "In Transit", "Out for Delivery", "Delivered", "Failed", "Cancelled"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
          <Select defaultValue={shipment.assignedDriver}><SelectTrigger className="w-48"><SelectValue /></SelectTrigger><SelectContent>{drivers.map((driver) => <SelectItem key={driver.id} value={driver.driverName}>{driver.driverName}</SelectItem>)}</SelectContent></Select>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Shipment timeline</CardTitle><CardDescription>Current status and delivery history for this tracking ID.</CardDescription></CardHeader>
          <CardContent>
            <div className="relative space-y-5 border-l pl-6">
              {shipment.timeline.map((event) => (
                <div key={`${event.label}-${event.time}`} className="relative">
                  <span className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full ${event.complete ? "bg-primary" : "bg-muted-foreground"}`} />
                  <div className="flex flex-col gap-1 rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{event.label}</span>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{event.location} - {event.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle>Shipment summary</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2"><Package className="h-4 w-4 text-muted-foreground" />{shipment.packageType} - {shipment.weight}</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-muted-foreground" />{shipment.assignedDriver}</div>
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-muted-foreground" />ETA {shipment.estimatedDeliveryDate}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" />{shipment.lastUpdatedLocation}</div>
              <div><span className={`rounded-full border px-2 py-1 text-xs font-medium ${badgeClass(shipment.status)}`}>{shipment.status}</span></div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Sender and receiver</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div><div className="flex items-center gap-2 font-medium"><UserRound className="h-4 w-4" />Sender</div><div className="mt-1 text-muted-foreground">{shipment.senderName}<br />{shipment.pickupAddress}</div></div>
              <div><div className="flex items-center gap-2 font-medium"><UserRound className="h-4 w-4" />Receiver</div><div className="mt-1 text-muted-foreground">{shipment.receiverName}<br />{shipment.deliveryAddress}</div></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
