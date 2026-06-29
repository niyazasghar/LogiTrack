import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { badgeClass, shipments } from "@/lib/logiflow-data"
import { Eye } from "lucide-react"

export default function ClientShipmentsPage() {
  const clientShipments = shipments.filter((shipment) => shipment.client === "UrbanMart Retail")
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">My Shipments</h1><p className="text-muted-foreground">Client-facing shipment status and tracking visibility.</p></div>
      <Card><CardHeader><CardTitle>Shipment history</CardTitle></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead>Tracking ID</TableHead><TableHead>Receiver</TableHead><TableHead>Zone</TableHead><TableHead>Status</TableHead><TableHead>ETA</TableHead><TableHead className="text-right">Track</TableHead></TableRow></TableHeader><TableBody>{clientShipments.map((shipment) => <TableRow key={shipment.trackingId}><TableCell className="font-medium">{shipment.trackingId}</TableCell><TableCell>{shipment.receiverName}</TableCell><TableCell>{shipment.deliveryZone}</TableCell><TableCell><span className={`rounded-full border px-2 py-1 text-xs font-medium ${badgeClass(shipment.status)}`}>{shipment.status}</span></TableCell><TableCell>{shipment.estimatedDeliveryDate}</TableCell><TableCell className="text-right"><Button variant="ghost" size="icon" asChild><Link href={`/tracking/${shipment.trackingId}`}><Eye className="h-4 w-4" /></Link></Button></TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
    </div>
  )
}
