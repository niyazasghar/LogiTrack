import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Download,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  Package,
  Truck,
  DollarSign,
  Leaf,
} from "lucide-react"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { ParcelChart } from "@/components/admin/parcel-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="eco">Eco Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Kilometers</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,543 km</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    <TrendingDown className="mr-1 h-3 w-3" />
                    -3.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Tokens</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,456</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +18.7%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the past year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Parcels Delivered</CardTitle>
                <CardDescription>Monthly parcels for the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <ParcelChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Delivery Performance</CardTitle>
                  <CardDescription>On-time delivery rate</CardDescription>
                </div>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[300px]">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className="text-primary stroke-current"
                        strokeWidth="10"
                        strokeDasharray="352"
                        strokeDashoffset="35.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-3xl font-bold">90%</div>
                      <div className="text-xs text-muted-foreground">On-time</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-xs text-muted-foreground">Urban Areas</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold">85%</div>
                    <div className="text-xs text-muted-foreground">Rural Areas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Vehicle Utilization</CardTitle>
                  <CardDescription>Fleet efficiency metrics</CardDescription>
                </div>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        <span>Trucks</span>
                      </div>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4" />
                        <span>Vans</span>
                      </div>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Bike className="mr-2 h-4 w-4" />
                        <span>Motorcycles</span>
                      </div>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Revenue by service type and payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Revenue analytics charts will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operations" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Operational Metrics</CardTitle>
              <CardDescription>Delivery times, vehicle utilization, and efficiency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Operations analytics charts will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eco" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>Carbon footprint and eco-friendly initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Eco impact analytics charts will be displayed here
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Car(props) {
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
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  )
}

function Bike(props) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}

