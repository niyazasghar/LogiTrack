import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Search, Filter, Plus, User, Package, DollarSign, Mail, Phone, Calendar } from "lucide-react"

// Mock data
const clients = [
  {
    id: "CLT-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    totalOrders: 12,
    totalSpent: 1250.5,
    status: "active",
    joinDate: "Jan 15, 2023",
  },
  {
    id: "CLT-002",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    totalOrders: 8,
    totalSpent: 890.75,
    status: "active",
    joinDate: "Feb 20, 2023",
  },
  {
    id: "CLT-003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 (555) 345-6789",
    totalOrders: 5,
    totalSpent: 520.25,
    status: "inactive",
    joinDate: "Mar 10, 2023",
  },
  {
    id: "CLT-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 456-7890",
    totalOrders: 15,
    totalSpent: 1875.0,
    status: "active",
    joinDate: "Dec 5, 2022",
  },
  {
    id: "CLT-005",
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    phone: "+1 (555) 567-8901",
    totalOrders: 3,
    totalSpent: 320.5,
    status: "active",
    joinDate: "Apr 18, 2023",
  },
  {
    id: "CLT-006",
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    phone: "+1 (555) 678-9012",
    totalOrders: 10,
    totalSpent: 1150.25,
    status: "active",
    joinDate: "Nov 30, 2022",
  },
  {
    id: "CLT-007",
    name: "David Martinez",
    email: "david.martinez@example.com",
    phone: "+1 (555) 789-0123",
    totalOrders: 7,
    totalSpent: 780.0,
    status: "inactive",
    joinDate: "May 22, 2023",
  },
  {
    id: "CLT-008",
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    phone: "+1 (555) 890-1234",
    totalOrders: 9,
    totalSpent: 950.75,
    status: "active",
    joinDate: "Feb 8, 2023",
  },
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">120 active, 8 inactive</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">Avg. 9.75 orders per client</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">Avg. $353.37 per client</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search clients..." className="pl-8" />
        </div>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Total Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center text-xs">
                      <Mail className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Phone className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span>{client.phone}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{client.totalOrders}</TableCell>
                <TableCell>${client.totalSpent.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={client.status === "active" ? "success" : "secondary"}>
                    {client.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {client.joinDate}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/admin/clients/${client.id}`}>
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

