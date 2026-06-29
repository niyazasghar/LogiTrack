"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShipmentTable, StatusBadge } from "@/components/logiflow/ui-kit"
import { clients, drivers, shipments, zones } from "@/lib/logiflow-data"
import { CalendarDays, Download, Filter, Plus, Search } from "lucide-react"

const statuses = ["All", "Booked", "Pickup Pending", "Picked Up", "In Transit", "Out for Delivery", "Delivered", "Failed", "Cancelled"]

export default function ShipmentsPage() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("All")
  const [client, setClient] = useState("all")
  const [zone, setZone] = useState("all")
  const [payment, setPayment] = useState("all")
  const [selectedId, setSelectedId] = useState(shipments[0]?.trackingId ?? "")
  const selected = shipments.find((shipment) => shipment.trackingId === selectedId) ?? shipments[0]

  const filtered = useMemo(() => shipments.filter((shipment) => {
    const search = query.toLowerCase()
    const matchesQuery = !query || [shipment.trackingId, shipment.client, shipment.receiverName, shipment.senderName, shipment.assignedDriver].some((item) => item.toLowerCase().includes(search))
    return matchesQuery && (status === "All" || shipment.status === status) && (client === "all" || shipment.client === client) && (zone === "all" || shipment.deliveryZone === zone) && (payment === "all" || shipment.paymentStatus === payment)
  }), [query, status, client, zone, payment])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div><div className="text-sm font-semibold uppercase tracking-wide text-primary">Shipment operations</div><h1 className="mt-1 text-3xl font-bold tracking-tight">Shipment Management</h1><p className="text-muted-foreground">Search, filter, assign drivers, update status, and inspect delivery history.</p></div>
        <div className="flex gap-2"><Button variant="outline"><Download className="mr-2 h-4 w-4" />Export</Button><Dialog><DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4" />Create Shipment</Button></DialogTrigger><DialogContent className="sm:max-w-2xl"><DialogHeader><DialogTitle>Create shipment</DialogTitle><DialogDescription>Capture operational fields needed to route and invoice a shipment.</DialogDescription></DialogHeader><div className="grid gap-4 py-2 md:grid-cols-2">{["Sender name", "Receiver name", "Pickup address", "Delivery address", "Package type", "Weight"].map((label) => <div key={label} className="space-y-2"><Label>{label}</Label><Input placeholder={label} /></div>)}<div className="space-y-2"><Label>Delivery zone</Label><Select><SelectTrigger><SelectValue placeholder="Select zone" /></SelectTrigger><SelectContent>{zones.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></div><div className="space-y-2"><Label>Assigned driver</Label><Select><SelectTrigger><SelectValue placeholder="Assign driver" /></SelectTrigger><SelectContent>{drivers.map((item) => <SelectItem key={item.id} value={item.driverName}>{item.driverName}</SelectItem>)}</SelectContent></Select></div></div><DialogFooter><Button>Create demo shipment</Button></DialogFooter></DialogContent></Dialog></div>
      </div>

      <Card className="border-slate-200 bg-white">
        <CardHeader className="space-y-4"><div className="flex flex-wrap gap-2">{statuses.map((item) => <button key={item} onClick={() => setStatus(item)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${status === item ? "border-primary bg-primary text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}>{item}</button>)}</div><CardTitle className="flex items-center gap-2 text-base"><Filter className="h-4 w-4" />Filters</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-6">
          <div className="relative md:col-span-2"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tracking, client, receiver, driver" className="pl-9" /></div>
          <div className="flex items-center gap-2 rounded-md border px-3 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" />Jun 1 - Jun 30</div>
          <Select value={client} onValueChange={setClient}><SelectTrigger><SelectValue placeholder="Client" /></SelectTrigger><SelectContent><SelectItem value="all">All clients</SelectItem>{clients.map((item) => <SelectItem key={item.id} value={item.company}>{item.company}</SelectItem>)}</SelectContent></Select>
          <Select value={zone} onValueChange={setZone}><SelectTrigger><SelectValue placeholder="Zone" /></SelectTrigger><SelectContent><SelectItem value="all">All zones</SelectItem>{zones.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
          <Select value={payment} onValueChange={setPayment}><SelectTrigger><SelectValue placeholder="Payment" /></SelectTrigger><SelectContent><SelectItem value="all">All payments</SelectItem>{["Paid", "Pending", "Overdue", "Failed"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>
        </CardContent>
      </Card>

      <div className="grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
        <div onMouseOver={(event) => { const row = (event.target as HTMLElement).closest("tr")?.querySelector("td")?.textContent; if (row?.startsWith("LF-")) setSelectedId(row) }}><ShipmentTable rows={filtered} /></div>
        <Card className="h-fit bg-white"><CardHeader><CardTitle>Shipment detail preview</CardTitle></CardHeader><CardContent className="space-y-4"><div><div className="text-2xl font-bold text-primary">{selected.trackingId}</div><div className="text-sm text-muted-foreground">{selected.senderName} to {selected.receiverName}</div></div><div className="grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl border p-3"><div className="text-muted-foreground">Driver</div><div className="font-medium">{selected.assignedDriver}</div></div><div className="rounded-xl border p-3"><div className="text-muted-foreground">ETA</div><div className="font-medium">{selected.estimatedDeliveryDate}</div></div></div><div className="flex gap-2"><StatusBadge value={selected.status} /><StatusBadge value={selected.paymentStatus} /></div><div className="space-y-3">{selected.timeline.slice(0, 4).map((event) => <div key={event.time} className="rounded-xl border p-3 text-sm"><div className="font-medium">{event.label}</div><div className="text-muted-foreground">{event.location} - {event.time}</div></div>)}</div><div className="grid gap-2"><Button>Update Status</Button><Button variant="outline">Assign Driver</Button><Button variant="outline">Create Issue</Button></div></CardContent></Card>
      </div>
    </div>
  )
}
