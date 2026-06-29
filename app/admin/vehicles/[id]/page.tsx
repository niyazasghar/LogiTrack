"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Truck, Car, Bike, Calendar, CheckCircle2, AlertTriangle, User, FileText, MapPin, Clock } from "lucide-react"
import { useVehicles } from "@/context/vehicles-context"

// Mock maintenance history
const mockMaintenanceHistory = [
  { id: 1, date: "2023-12-15", type: "Regular Maintenance", description: "Oil change, filter replacement, brake inspection", cost: "$350" },
  { id: 2, date: "2023-06-10", type: "Tire Replacement", description: "Replaced all four tires", cost: "$800" },
  { id: 3, date: "2023-01-22", type: "Regular Maintenance", description: "Oil change, filter replacement", cost: "$250" },
  { id: 4, date: "2022-08-05", type: "Repair", description: "Fixed transmission issue", cost: "$1,200" },
]

// Mock trip history
const mockTripHistory = [
  { id: 1, date: "2024-03-01", from: "New York, NY", to: "Boston, MA", distance: "215 miles", driver: "John Doe" },
  { id: 2, date: "2024-02-25", from: "Boston, MA", to: "New York, NY", distance: "215 miles", driver: "John Doe" },
  { id: 3, date: "2024-02-20", from: "New York, NY", to: "Philadelphia, PA", distance: "95 miles", driver: "John Doe" },
  { id: 4, date: "2024-02-15", from: "Philadelphia, PA", to: "New York, NY", distance: "95 miles", driver: "John Doe" },
]

export default function VehicleDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { getVehicleById } = useVehicles()
  const [vehicle, setVehicle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get the vehicle from context
    const vehicleId = params.id as string
    const foundVehicle = getVehicleById(vehicleId)
    
    if (foundVehicle) {
      setVehicle(foundVehicle)
    }
    
    setLoading(false)
  }, [params.id, getVehicleById])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
        <p className="mb-4">The vehicle with ID {params.id} could not be found.</p>
        <Button onClick={() => router.push('/admin/vehicles')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Vehicles
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => router.push('/admin/vehicles')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Vehicles
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{vehicle.model}</h1>
        <Badge
          variant={
            vehicle.status === "active"
              ? "outline"
              : vehicle.status === "maintenance"
                ? "destructive"
                : "secondary"
          }
          className={vehicle.status === "active" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
        >
          {vehicle.status === "active"
            ? "Active"
            : vehicle.status === "maintenance"
              ? "Maintenance"
              : "Inactive"}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Information</CardTitle>
            <CardDescription>Details about this vehicle</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                {vehicle.type === "truck" ? (
                  <Truck className="mr-2 h-5 w-5" />
                ) : vehicle.type === "van" ? (
                  <Car className="mr-2 h-5 w-5" />
                ) : (
                  <Bike className="mr-2 h-5 w-5" />
                )}
                <span className="font-medium">Type</span>
              </div>
              <span className="capitalize">{vehicle.type}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                <span className="font-medium">ID</span>
              </div>
              <span>{vehicle.id}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="font-medium">License Plate</span>
              </div>
              <span>{vehicle.licensePlate}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                <span className="font-medium">Driver</span>
              </div>
              <span>{vehicle.driver}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                {vehicle.health === "good" ? (
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                ) : vehicle.health === "warning" ? (
                  <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                ) : (
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                )}
                <span className="font-medium">Health</span>
              </div>
              <span>
                {vehicle.health === "good"
                  ? "Good"
                  : vehicle.health === "warning"
                    ? "Needs Attention"
                    : "Maintenance Required"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Next Maintenance</span>
              </div>
              <span>{vehicle.nextMaintenance}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
            <CardDescription>Upcoming and past maintenance</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Last Maintenance</span>
              </div>
              <span>{vehicle.lastMaintenance}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Next Maintenance</span>
              </div>
              <span>{vehicle.nextMaintenance}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span className="font-medium">Maintenance Interval</span>
              </div>
              <span>6 months</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="maintenance">
        <TabsList>
          <TabsTrigger value="maintenance">Maintenance History</TabsTrigger>
          <TabsTrigger value="trips">Trip History</TabsTrigger>
        </TabsList>
        <TabsContent value="maintenance" className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-4">Maintenance History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Date</th>
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Description</th>
                  <th className="text-left py-2 px-4">Cost</th>
                </tr>
              </thead>
              <tbody>
                {mockMaintenanceHistory.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4">{item.type}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    <td className="py-2 px-4">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="trips" className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-4">Trip History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Date</th>
                  <th className="text-left py-2 px-4">From</th>
                  <th className="text-left py-2 px-4">To</th>
                  <th className="text-left py-2 px-4">Distance</th>
                  <th className="text-left py-2 px-4">Driver</th>
                </tr>
              </thead>
              <tbody>
                {mockTripHistory.map((trip) => (
                  <tr key={trip.id} className="border-b">
                    <td className="py-2 px-4">{trip.date}</td>
                    <td className="py-2 px-4">{trip.from}</td>
                    <td className="py-2 px-4">{trip.to}</td>
                    <td className="py-2 px-4">{trip.distance}</td>
                    <td className="py-2 px-4">{trip.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2">
        <Button variant="outline">Edit Vehicle</Button>
        <Button variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
          Schedule Maintenance
        </Button>
      </div>
    </div>
  )
} 