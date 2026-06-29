"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/logiflow/ui-kit"
import { invoices, formatCurrency } from "@/lib/logiflow-data"
import { Download, Search } from "lucide-react"

export default function PaymentsPage() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("all")
  const filtered = useMemo(() => invoices.filter((invoice) => `${invoice.invoiceId} ${invoice.client} ${invoice.shipmentId}`.toLowerCase().includes(query.toLowerCase()) && (status === "all" || invoice.paymentStatus === status)), [query, status])
  return <div className="space-y-6"><div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><div className="text-sm font-semibold uppercase tracking-wide text-primary">Billing</div><h1 className="mt-1 text-3xl font-bold tracking-tight">Payments and Invoices</h1><p className="text-muted-foreground">Track invoice status, due dates, methods, and shipment-linked payment risk.</p></div><Button variant="outline"><Download className="mr-2 h-4 w-4" />Export invoices</Button></div><div className="grid gap-4 md:grid-cols-4">{["Paid","Pending","Overdue","Failed"].map(statusName=><Card key={statusName}><CardHeader><CardTitle className="text-sm">{statusName}</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{formatCurrency(invoices.filter(i=>i.paymentStatus===statusName).reduce((s,i)=>s+i.amount,0))}</CardContent></Card>)}</div><Card className="bg-white"><CardHeader className="grid gap-3 md:grid-cols-3"><div className="relative md:col-span-2"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search invoice, shipment, client" className="pl-9" /></div><Select value={status} onValueChange={setStatus}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem>{["Paid","Pending","Overdue","Failed"].map(item=><SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select></CardHeader><CardContent className="table-scroll p-0"><Table><TableHeader><TableRow className="bg-slate-50"><TableHead>Invoice ID</TableHead><TableHead>Client</TableHead><TableHead>Shipment ID</TableHead><TableHead>Amount</TableHead><TableHead>Payment Status</TableHead><TableHead>Due Date</TableHead><TableHead>Payment Method</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader><TableBody>{filtered.map(invoice=><TableRow key={invoice.invoiceId} className="hover:bg-slate-50"><TableCell className="font-semibold text-primary">{invoice.invoiceId}</TableCell><TableCell>{invoice.client}</TableCell><TableCell>{invoice.shipmentId}</TableCell><TableCell>{formatCurrency(invoice.amount)}</TableCell><TableCell><StatusBadge value={invoice.paymentStatus} /></TableCell><TableCell>{invoice.dueDate}</TableCell><TableCell>{invoice.paymentMethod}</TableCell><TableCell><Button variant="ghost" size="sm">View</Button></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></div>
}

