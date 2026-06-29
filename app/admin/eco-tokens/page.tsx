import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Search, Filter, Download, Leaf, TrendingUp, ArrowUpRight, BarChart3 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data
const ecoTokens = [
  {
    id: "ECO-001",
    orderId: "ORD-001",
    client: "John Smith",
    amount: 25,
    type: "earned",
    reason: "eco-delivery",
    date: "Mar 10, 2024",
    co2Offset: 2.5,
  },
  {
    id: "ECO-002",
    orderId: "ORD-002",
    client: "Sarah Johnson",
    amount: 15,
    type: "earned",
    reason: "eco-delivery",
    date: "Mar 8, 2024",
    co2Offset: 1.5,
  },
  {
    id: "ECO-003",
    orderId: null,
    client: "Michael Brown",
    amount: 50,
    type: "spent",
    reason: "carbon-offset",
    date: "Mar 12, 2024",
    co2Offset: 5.0,
  },
  {
    id: "ECO-004",
    orderId: "ORD-004",
    client: "Emily Davis",
    amount: 10,
    type: "earned",
    reason: "eco-delivery",
    date: "Mar 11, 2024",
    co2Offset: 1.0,
  },
  {
    id: "ECO-005",
    orderId: null,
    client: "Robert Wilson",
    amount: 30,
    type: "spent",
    reason: "carbon-offset",
    date: "Mar 9, 2024",
    co2Offset: 3.0,
  },
  {
    id: "ECO-006",
    orderId: "ORD-006",
    client: "Jennifer Lee",
    amount: 35,
    type: "earned",
    reason: "eco-delivery",
    date: "Mar 7, 2024",
    co2Offset: 3.5,
  },
  {
    id: "ECO-007",
    orderId: "ORD-007",
    client: "David Martinez",
    amount: 40,
    type: "earned",
    reason: "eco-delivery",
    date: "Mar 13, 2024",
    co2Offset: 4.0,
  },
  {
    id: "ECO-008",
    orderId: null,
    client: "Lisa Anderson",
    amount: 20,
    type: "spent",
    reason: "reward",
    date: "Mar 6, 2024",
    co2Offset: 0,
  },
]

export default function EcoTokensPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Eco Tokens</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="earned">Earned Tokens</TabsTrigger>
          <TabsTrigger value="spent">Spent Tokens</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Eco Tokens</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+18.7% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CO2 Offset</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">345.6 kg</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>Equivalent to planting 17 trees</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eco Deliveries</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+5.3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search eco tokens..." className="pl-8" />
        </div>
        <Select defaultValue="all-types">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            <SelectItem value="earned">Earned</SelectItem>
            <SelectItem value="spent">Spent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>CO2 Offset</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ecoTokens.map((token) => (
              <TableRow key={token.id}>
                <TableCell className="font-medium">{token.id}</TableCell>
                <TableCell>{token.orderId || "-"}</TableCell>
                <TableCell>{token.client}</TableCell>
                <TableCell>{token.amount}</TableCell>
                <TableCell>
                  <Badge variant={token.type === "earned" ? "success" : "secondary"}>
                    {token.type === "earned" ? "Earned" : "Spent"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {token.reason === "eco-delivery"
                    ? "Eco Delivery"
                    : token.reason === "carbon-offset"
                      ? "Carbon Offset"
                      : "Reward Redemption"}
                </TableCell>
                <TableCell>{token.co2Offset > 0 ? `${token.co2Offset} kg` : "-"}</TableCell>
                <TableCell>{token.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/admin/eco-tokens/${token.id}`}>
                      <Eye className="h-4 w-4" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Environmental Impact</CardTitle>
          <CardDescription>Total carbon offset through eco-friendly deliveries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500">345.6 kg</div>
                <div className="mt-2 text-muted-foreground">CO2 Offset</div>
                <div className="mt-4 flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">17</div>
                    <div className="text-xs text-muted-foreground">Trees Equivalent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1,248</div>
                    <div className="text-xs text-muted-foreground">Eco Deliveries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-xs text-muted-foreground">Eco Delivery Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

