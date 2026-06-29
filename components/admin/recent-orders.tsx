import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { badgeClass, shipments } from "@/lib/logiflow-data"
import { Eye } from "lucide-react"

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tracking ID</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Zone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Driver</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shipments.slice(0, 5).map((shipment) => (
          <TableRow key={shipment.trackingId}>
            <TableCell className="font-medium">{shipment.trackingId}</TableCell>
            <TableCell>{shipment.client}</TableCell>
            <TableCell>{shipment.deliveryZone}</TableCell>
            <TableCell><span className={`rounded-full border px-2 py-1 text-xs font-medium ${badgeClass(shipment.status)}`}>{shipment.status}</span></TableCell>
            <TableCell>{shipment.assignedDriver}</TableCell>
            <TableCell className="text-right"><Button variant="ghost" size="icon" asChild><Link href={`/admin/shipments/${shipment.trackingId}`}><Eye className="h-4 w-4" /></Link></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
