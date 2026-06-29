import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Leaf, TrendingUp, TrendingDown, Clock, MapPin } from "lucide-react"
import { ClientOrders } from "@/components/client/client-orders"

export default function ClientDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <a href="/client/book">Book New Parcel</a>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Parcels Sent</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +4
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <TrendingDown className="mr-1 h-3 w-3" />
                -2.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Saved</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125 kg</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Your most recent parcel shipments</CardDescription>
          </CardHeader>
          <CardContent>
            <ClientOrders />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Active Shipments</CardTitle>
            <CardDescription>Currently in-transit parcels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">ORD-001</div>
                <Badge variant="default">In Transit</Badge>
              </div>
              <div className="text-sm text-muted-foreground mb-4">Estimated delivery: Mar 15, 2024</div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>From: New York, NY</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>To: Boston, MA</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Last update: 2 hours ago</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/tracking/ORD-001">Track Parcel</a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">ORD-004</div>
                <Badge variant="default">In Transit</Badge>
              </div>
              <div className="text-sm text-muted-foreground mb-4">Estimated delivery: Mar 18, 2024</div>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>From: Houston, TX</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>To: Austin, TX</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Last update: 5 hours ago</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/tracking/ORD-004">Track Parcel</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Badge({ variant, children }) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    destructive: "bg-destructive text-destructive-foreground",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant] || variantClasses.default}`}
    >
      {children}
    </span>
  )
}

