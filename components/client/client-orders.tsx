import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye } from "lucide-react"

// Mock data
const orders = [
  {
    id: "ORD-001",
    pickup: "New York, NY",
    drop: "Boston, MA",
    status: "in-transit",
    date: "Mar 10, 2024",
  },
  {
    id: "ORD-002",
    pickup: "Los Angeles, CA",
    drop: "San Francisco, CA",
    status: "delivered",
    date: "Mar 5, 2024",
  },
  {
    id: "ORD-003",
    pickup: "Chicago, IL",
    drop: "Detroit, MI",
    status: "pending",
    date: "Mar 12, 2024",
  },
  {
    id: "ORD-004",
    pickup: "Houston, TX",
    drop: "Austin, TX",
    status: "in-transit",
    date: "Mar 11, 2024",
  },
]

export function ClientOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Pickup</TableHead>
          <TableHead>Drop</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.pickup}</TableCell>
            <TableCell>{order.drop}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "delivered" ? "success" : order.status === "in-transit" ? "default" : "secondary"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" asChild>
                <a href={`/tracking/${order.id}`}>
                  <Eye className="h-4 w-4" />
                </a>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

