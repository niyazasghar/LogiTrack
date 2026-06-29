import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Search, Filter, Download, DollarSign, CreditCard, Wallet, TrendingUp, ArrowUpRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
const payments = [
  {
    id: "PAY-001",
    orderId: "ORD-001",
    client: "John Smith",
    amount: 125.5,
    method: "credit-card",
    status: "completed",
    date: "Mar 10, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-002",
    orderId: "ORD-002",
    client: "Sarah Johnson",
    amount: 89.99,
    method: "crypto",
    status: "completed",
    date: "Mar 8, 2024",
    transactionHash: "0x1a2b3c4d5e6f...",
  },
  {
    id: "PAY-003",
    orderId: "ORD-003",
    client: "Michael Brown",
    amount: 210.75,
    method: "bank-transfer",
    status: "pending",
    date: "Mar 12, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-004",
    orderId: "ORD-004",
    client: "Emily Davis",
    amount: 45.25,
    method: "credit-card",
    status: "completed",
    date: "Mar 11, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-005",
    orderId: "ORD-005",
    client: "Robert Wilson",
    amount: 150.0,
    method: "crypto",
    status: "failed",
    date: "Mar 9, 2024",
    transactionHash: "0x7e8d9c0b1a2...",
  },
  {
    id: "PAY-006",
    orderId: "ORD-006",
    client: "Jennifer Lee",
    amount: 175.25,
    method: "credit-card",
    status: "completed",
    date: "Mar 7, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-007",
    orderId: "ORD-007",
    client: "David Martinez",
    amount: 320.0,
    method: "bank-transfer",
    status: "pending",
    date: "Mar 13, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-008",
    orderId: "ORD-008",
    client: "Lisa Anderson",
    amount: 65.5,
    method: "crypto",
    status: "completed",
    date: "Mar 6, 2024",
    transactionHash: "0x3f4e5d6c7b8...",
  },
]

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
          <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
          <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+20.1% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$530.75</div>
            <div className="flex items-center pt-1 text-xs text-amber-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>2 payments awaiting clearance</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crypto Payments</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$305.49</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+15.3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search payments..." className="pl-8" />
        </div>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Statuses</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Payment ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.id}</TableCell>
                <TableCell>{payment.orderId}</TableCell>
                <TableCell>{payment.client}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {payment.method === "credit-card" ? (
                      <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : payment.method === "crypto" ? (
                      <Wallet className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : (
                      <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>
                      {payment.method === "credit-card"
                        ? "Credit Card"
                        : payment.method === "crypto"
                          ? "Cryptocurrency"
                          : "Bank Transfer"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      payment.status === "completed"
                        ? "success"
                        : payment.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {payment.status === "completed" ? "Completed" : payment.status === "pending" ? "Pending" : "Failed"}
                  </Badge>
                </TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/admin/payments/${payment.id}`}>
                      <Eye className="h-4 w-4" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="rounded-md border p-4 bg-muted/20">
        <h3 className="font-medium mb-2">Blockchain Transaction Logs</h3>
        <div className="space-y-2">
          {payments
            .filter((payment) => payment.method === "crypto" && payment.transactionHash)
            .map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-2 rounded-md bg-background">
                <div className="flex items-center">
                  <Wallet className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">
                      {payment.id} - ${payment.amount.toFixed(2)}
                    </div>
                    <div className="text-xs text-muted-foreground">Hash: {payment.transactionHash}</div>
                  </div>
                </div>
                <Badge variant={payment.status === "completed" ? "success" : "destructive"}>
                  {payment.status === "completed" ? "Confirmed" : "Failed"}
                </Badge>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

