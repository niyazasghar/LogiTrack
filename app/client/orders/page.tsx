import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Search, Filter, Package, MapPin, Calendar, Clock } from "lucide-react"

// Mock data
const orders = [
  {
    id: "ORD-001",
    pickup: "New York, NY",
    drop: "Boston, MA",
    status: "in-transit",
    date: "Mar 10, 2024",
    estimatedDelivery: "Mar 15, 2024",
    weight: "5.2 kg",
    cost: "$125.50",
    paymentStatus: "paid",
  },
  {
    id: "ORD-002",
    pickup: "Los Angeles, CA",
    drop: "San Francisco, CA",
    status: "delivered",
    date: "Mar 5, 2024",
    estimatedDelivery: "Mar 8, 2024",
    weight: "3.7 kg",
    cost: "$89.99",
    paymentStatus: "paid",
  },
  {
    id: "ORD-003",
    pickup: "Chicago, IL",
    drop: "Detroit, MI",
    status: "pending",
    date: "Mar 12, 2024",
    estimatedDelivery: "Mar 17, 2024",
    weight: "8.1 kg",
    cost: "$210.75",
    paymentStatus: "pending",
  },
  {
    id: "ORD-004",
    pickup: "Houston, TX",
    drop: "Austin, TX",
    status: "in-transit",
    date: "Mar 11, 2024",
    estimatedDelivery: "Mar 14, 2024",
    weight: "2.3 kg",
    cost: "$45.25",
    paymentStatus: "paid",
  },
  {
    id: "ORD-005",
    pickup: "Miami, FL",
    drop: "Orlando, FL",
    status: "pending",
    date: "Mar 13, 2024",
    estimatedDelivery: "Mar 18, 2024",
    weight: "4.5 kg",
    cost: "$150.00",
    paymentStatus: "pending",
  },
  {
    id: "ORD-006",
    pickup: "Seattle, WA",
    drop: "Portland, OR",
    status: "delivered",
    date: "Mar 7, 2024",
    estimatedDelivery: "Mar 10, 2024",
    weight: "6.8 kg",
    cost: "$175.25",
    paymentStatus: "paid",
  },
  {
    id: "ORD-007",
    pickup: "Denver, CO",
    drop: "Salt Lake City, UT",
    status: "in-transit",
    date: "Mar 9, 2024",
    estimatedDelivery: "Mar 13, 2024",
    weight: "9.2 kg",
    cost: "$320.00",
    paymentStatus: "paid",
  },
  {
    id: "ORD-008",
    pickup: "Phoenix, AZ",
    drop: "Las Vegas, NV",
    status: "pending",
    date: "Mar 14, 2024",
    estimatedDelivery: "Mar 19, 2024",
    weight: "3.1 kg",
    cost: "$65.50",
    paymentStatus: "pending",
  },
]

export default function ClientOrdersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Orders</h1>
        <Button asChild>
          <a href="/client/book">Book New Parcel</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">8 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Currently in transit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivered</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21</div>
            <p className="text-xs text-muted-foreground">Successfully delivered</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="pl-8" />
        </div>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in-transit">In Transit</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Delivery</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{order.pickup}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span>{order.drop}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "delivered" ? "success" : order.status === "in-transit" ? "default" : "secondary"
                    }
                  >
                    {order.status === "delivered"
                      ? "Delivered"
                      : order.status === "in-transit"
                        ? "In Transit"
                        : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div className="flex items-center text-xs">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>Ordered: {order.date}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>Delivery: {order.estimatedDelivery}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{order.cost}</span>
                    <span className="text-xs text-muted-foreground">
                      {order.paymentStatus === "paid" ? "Paid" : "Pending"}
                    </span>
                  </div>
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
      </div>
    </div>
  )
}

function Truck(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

function CheckCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

