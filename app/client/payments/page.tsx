import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Search, Filter, CreditCard, Wallet, DollarSign, Calendar } from "lucide-react"

// Mock data
const payments = [
  {
    id: "PAY-001",
    orderId: "ORD-001",
    amount: 125.5,
    method: "credit-card",
    status: "completed",
    date: "Mar 10, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-002",
    orderId: "ORD-002",
    amount: 89.99,
    method: "crypto",
    status: "completed",
    date: "Mar 8, 2024",
    transactionHash: "0x1a2b3c4d5e6f...",
  },
  {
    id: "PAY-003",
    orderId: "ORD-003",
    amount: 210.75,
    method: "bank-transfer",
    status: "pending",
    date: "Mar 12, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-004",
    orderId: "ORD-004",
    amount: 45.25,
    method: "credit-card",
    status: "completed",
    date: "Mar 11, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-005",
    orderId: "ORD-005",
    amount: 150.0,
    method: null,
    status: "pending",
    date: "Mar 13, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-006",
    orderId: "ORD-006",
    amount: 175.25,
    method: "credit-card",
    status: "completed",
    date: "Mar 7, 2024",
    transactionHash: null,
  },
  {
    id: "PAY-007",
    orderId: "ORD-007",
    amount: 320.0,
    method: "crypto",
    status: "completed",
    date: "Mar 9, 2024",
    transactionHash: "0x7e8d9c0b1a2...",
  },
  {
    id: "PAY-008",
    orderId: "ORD-008",
    amount: 65.5,
    method: null,
    status: "pending",
    date: "Mar 14, 2024",
    transactionHash: null,
  },
]

export default function ClientPaymentsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234.56</div>
                <p className="text-xs text-muted-foreground">Across 24 orders</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$426.25</div>
                <p className="text-xs text-muted-foreground">3 payments to complete</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Methods</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Credit Card, Crypto, Bank Transfer</p>
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
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Order ID</TableHead>
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
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      {payment.method ? (
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
                      ) : (
                        <Badge variant="secondary">Not Selected</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={payment.status === "completed" ? "success" : "secondary"}>
                        {payment.status === "completed" ? "Completed" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        {payment.date}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {payment.status === "pending" ? (
                        <Button size="sm" asChild>
                          <a href={`/client/payments/${payment.id}`}>Pay Now</a>
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={`/client/payments/${payment.id}`}>
                            <Eye className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Pending Payments</CardTitle>
                <CardDescription>Complete your pending payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {payments
                    .filter((payment) => payment.status === "pending")
                    .map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-1">
                          <div className="font-medium">{payment.orderId}</div>
                          <div className="text-sm text-muted-foreground">${payment.amount.toFixed(2)}</div>
                        </div>
                        <Button size="sm" asChild>
                          <a href={`/client/payments/${payment.id}`}>Pay Now</a>
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Credit Card</div>
                        <div className="text-sm text-muted-foreground">**** **** **** 4242</div>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <Wallet className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Cryptocurrency Wallet</div>
                        <div className="text-sm text-muted-foreground">0x1a2b...3c4d</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Set Default
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments
                  .filter((payment) => payment.status === "completed")
                  .map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.orderId}</TableCell>
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
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {payment.date}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" asChild>
                          <a href={`/client/payments/${payment.id}`}>
                            <Eye className="h-4 w-4" />
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 pt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments
                  .filter((payment) => payment.status === "pending")
                  .map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.orderId}</TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          {payment.date}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" asChild>
                          <a href={`/client/payments/${payment.id}`}>Pay Now</a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Complete Your Payments</CardTitle>
              <CardDescription>Select a payment method to complete your pending payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
                    <CreditCard className="mb-2 h-8 w-8 text-primary" />
                    <div className="font-medium">Credit Card</div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
                    <Wallet className="mb-2 h-8 w-8 text-primary" />
                    <div className="font-medium">Cryptocurrency</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="font-medium mb-2">Pay Multiple Orders</div>
                  <div className="space-y-2">
                    {payments
                      .filter((payment) => payment.status === "pending")
                      .map((payment) => (
                        <div key={payment.id} className="flex items-center">
                          <input type="checkbox" id={payment.id} className="mr-2" />
                          <label htmlFor={payment.id} className="text-sm">
                            {payment.orderId} - ${payment.amount.toFixed(2)}
                          </label>
                        </div>
                      ))}
                  </div>
                  <Button className="mt-4 w-full">Pay Selected Orders</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

