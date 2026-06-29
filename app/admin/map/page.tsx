import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AdminMap } from "@/components/admin/map"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

export default function MapPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Vehicle Tracking</h1>
        <Tabs defaultValue="live" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="live">Live View</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Vehicles</SelectItem>
            <SelectItem value="delivering">Delivering</SelectItem>
            <SelectItem value="idle">Idle</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Refresh</Button>
      </div>

      <Tabs defaultValue="live">
        <TabsContent value="live">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Live Map</CardTitle>
              <CardDescription>Real-time location of all vehicles in your fleet</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[600px] w-full">
                <AdminMap />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="routes">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Route Planning</CardTitle>
              <CardDescription>View and manage planned delivery routes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[600px] w-full">
                <AdminMap />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Historical Tracking</CardTitle>
              <CardDescription>View past vehicle movements and delivery routes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[600px] w-full">
                <AdminMap />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

