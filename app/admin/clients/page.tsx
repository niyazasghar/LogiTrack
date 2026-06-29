"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/logiflow/ui-kit"
import { clients, shipments, formatCurrency } from "@/lib/logiflow-data"
import { Search, Users } from "lucide-react"

export default function ClientsPage() {
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    () => clients.filter((client) => `${client.clientName} ${client.company} ${client.email}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  )
  const selected = filtered[0] ?? clients[0]
  const selectedPrimaryZone = shipments.find((shipment) => shipment.client === selected.company)?.deliveryZone ?? "Bengaluru Central"
  const selectedMonthlySpend = selected.totalShipments * 430

  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-semibold uppercase tracking-wide text-primary">B2B accounts</div>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Client Management</h1>
        <p className="text-muted-foreground">Manage logistics customers, pending invoices, shipment history, and account health.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Card><CardHeader><CardTitle className="text-sm">Total clients</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{clients.length}</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm">Active accounts</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{clients.filter((client) => client.accountStatus === "Active").length}</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm">Pending invoices</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{clients.reduce((sum, client) => sum + client.pendingInvoices, 0)}</CardContent></Card>
        <Card><CardHeader><CardTitle className="text-sm">Monthly spend</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{formatCurrency(874000)}</CardContent></Card>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
        <Card className="bg-white">
          <CardHeader><div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search clients" className="pl-9" /></div></CardHeader>
          <CardContent className="table-scroll p-0">
            <Table><TableHeader><TableRow className="bg-slate-50"><TableHead>Client</TableHead><TableHead>Company</TableHead><TableHead>Contact</TableHead><TableHead>Total Shipments</TableHead><TableHead>Pending Invoices</TableHead><TableHead>Status</TableHead></TableRow></TableHeader><TableBody>{filtered.map((client) => <TableRow key={client.id} className="hover:bg-slate-50"><TableCell className="font-medium">{client.clientName}</TableCell><TableCell>{client.company}</TableCell><TableCell><div>{client.email}</div><div className="text-xs text-muted-foreground">{client.phone}</div></TableCell><TableCell>{client.totalShipments}</TableCell><TableCell>{client.pendingInvoices}</TableCell><TableCell><StatusBadge value={client.accountStatus} /></TableCell></TableRow>)}</TableBody></Table>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Client details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><div className="text-xl font-bold">{selected.company}</div><div className="text-sm text-muted-foreground">{selected.clientName} - {selected.email}</div></div>
            <div className="grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl border p-3"><div className="text-muted-foreground">Primary zone</div><div className="font-medium">{selectedPrimaryZone}</div></div><div className="rounded-xl border p-3"><div className="text-muted-foreground">Monthly spend</div><div className="font-medium">{formatCurrency(selectedMonthlySpend)}</div></div></div>
            <div className="space-y-2"><div className="font-medium">Shipment history</div>{shipments.filter((shipment) => shipment.client === selected.company).slice(0, 3).map((shipment) => <div key={shipment.trackingId} className="rounded-xl border p-3 text-sm"><div className="font-medium">{shipment.trackingId}</div><div className="text-muted-foreground">{shipment.receiverName} - {shipment.status}</div></div>)}</div>
            <Button className="w-full">Update Client</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
