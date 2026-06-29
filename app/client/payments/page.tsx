import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { badgeClass, formatCurrency, invoices } from "@/lib/logiflow-data"

export default function ClientPaymentsPage() {
  const clientInvoices = invoices.filter((invoice) => invoice.client === "UrbanMart Retail")
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Invoices</h1><p className="text-muted-foreground">View shipment invoices and payment statuses.</p></div>
      <Card><CardHeader><CardTitle>Payment records</CardTitle></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Shipment</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead><TableHead>Due date</TableHead><TableHead>Method</TableHead></TableRow></TableHeader><TableBody>{clientInvoices.map((invoice) => <TableRow key={invoice.invoiceId}><TableCell className="font-medium">{invoice.invoiceId}</TableCell><TableCell>{invoice.shipmentId}</TableCell><TableCell>{formatCurrency(invoice.amount)}</TableCell><TableCell><span className={`rounded-full border px-2 py-1 text-xs font-medium ${badgeClass(invoice.paymentStatus)}`}>{invoice.paymentStatus}</span></TableCell><TableCell>{invoice.dueDate}</TableCell><TableCell>{invoice.paymentMethod}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
    </div>
  )
}
