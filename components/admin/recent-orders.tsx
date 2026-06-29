import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye } from "lucide-react"

// Mock data
const orders = [
  {
    id: "ORD-001",
    client: "John Smith",
    from: "New York, NY",
    to: "Boston, MA",
    weight: "5.2 kg",
    status: "in-transit",
  },
  {
    id: "ORD-002",
    client: "Sarah Johnson",
    from: "Los Angeles, CA",
    to: "San Francisco, CA",
    weight: "3.7 kg",
    status: "delivered",
  },
  {
    id: "ORD-003",
    client: "Michael Brown",
    from: "Chicago, IL",
    to: "Detroit, MI",
    weight: "8.1 kg",
    status: "pending",
  },
  {
    id: "ORD-004",
    client: "Emily Davis",
    from: "Houston, TX",
    to: "Austin, TX",
    weight: "2.3 kg",
    status: "in-transit",
  },
  {
    id: "ORD-005",
    client: "Robert Wilson",
    from: "Miami, FL",
    to: "Orlando, FL",
    weight: "4.5 kg",
    status: "pending",
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Weight</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.client}</TableCell>
            <TableCell>{order.from}</TableCell>
            <TableCell>{order.to}</TableCell>
            <TableCell>{order.weight}</TableCell>
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
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

