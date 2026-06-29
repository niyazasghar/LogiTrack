"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Package, MapPin, Calendar, Truck, User, FileText, Clock, CheckCircle2 } from "lucide-react"
import { useOrders } from "@/context/orders-context"
import dynamic from "next/dynamic"
import { Order } from "@/components/admin/add-order-dialog"

// Define location type
interface Location {
  name: string
  lat: string
  lon: string
}

// Define locations record type
interface LocationsRecord {
  [key: string]: Location
}

// Dynamically import the map component to avoid SSR issues
const ParcelTrackingMap = dynamic(() => import("@/components/client/parcel-tracking-map").then(mod => mod.ParcelTrackingMap), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center">Loading map...</div>
})

// Mock tracking history
const mockTrackingHistory = [
  { id: 1, date: "2024-03-01 08:30 AM", location: "New York, NY", status: "Picked up", description: "Package picked up from sender" },
  { id: 2, date: "2024-03-01 02:15 PM", location: "New York, NY", status: "In transit", description: "Package departed from origin facility" },
  { id: 3, date: "2024-03-02 09:45 AM", location: "Hartford, CT", status: "In transit", description: "Package arrived at intermediate facility" },
  { id: 4, date: "2024-03-02 04:30 PM", location: "Hartford, CT", status: "In transit", description: "Package departed from intermediate facility" },
  { id: 5, date: "2024-03-03 10:15 AM", location: "Boston, MA", status: "Out for delivery", description: "Package out for delivery" },
]

// Mock location data for the map
const mockLocations: LocationsRecord = {
  "New York, NY": { name: "New York, NY", lat: "40.7128", lon: "-74.0060" },
  "Boston, MA": { name: "Boston, MA", lat: "42.3601", lon: "-71.0589" },
  "Los Angeles, CA": { name: "Los Angeles, CA", lat: "34.0522", lon: "-118.2437" },
  "San Francisco, CA": { name: "San Francisco, CA", lat: "37.7749", lon: "-122.4194" },
  "Chicago, IL": { name: "Chicago, IL", lat: "41.8781", lon: "-87.6298" },
  "Detroit, MI": { name: "Detroit, MI", lat: "42.3314", lon: "-83.0458" },
  "Houston, TX": { name: "Houston, TX", lat: "29.7604", lon: "-95.3698" },
  "Austin, TX": { name: "Austin, TX", lat: "30.2672", lon: "-97.7431" },
  "Miami, FL": { name: "Miami, FL", lat: "25.7617", lon: "-80.1918" },
  "Orlando, FL": { name: "Orlando, FL", lat: "28.5383", lon: "-81.3792" },
  "Seattle, WA": { name: "Seattle, WA", lat: "47.6062", lon: "-122.3321" },
  "Portland, OR": { name: "Portland, OR", lat: "45.5051", lon: "-122.6750" },
  "Denver, CO": { name: "Denver, CO", lat: "39.7392", lon: "-104.9903" },
  "Salt Lake City, UT": { name: "Salt Lake City, UT", lat: "40.7608", lon: "-111.8910" },
  "Phoenix, AZ": { name: "Phoenix, AZ", lat: "33.4484", lon: "-112.0740" },
  "Las Vegas, NV": { name: "Las Vegas, NV", lat: "36.1699", lon: "-115.1398" },
  "Atlanta, GA": { name: "Atlanta, GA", lat: "33.7490", lon: "-84.3880" },
  "Nashville, TN": { name: "Nashville, TN", lat: "36.1627", lon: "-86.7816" },
  "Philadelphia, PA": { name: "Philadelphia, PA", lat: "39.9526", lon: "-75.1652" },
  "Washington, DC": { name: "Washington, DC", lat: "38.9072", lon: "-77.0369" },
  "Hartford, CT": { name: "Hartford, CT", lat: "41.7658", lon: "-72.6734" },
}

export default function OrderDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { getOrderById } = useOrders()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get the order from context
    const orderId = params.id as string
    const foundOrder = getOrderById(orderId)
    
    if (foundOrder) {
      setOrder(foundOrder)
    }
    
    setLoading(false)
  }, [params.id, getOrderById])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
        <p className="mb-4">The order with ID {params.id} could not be found.</p>
        <Button onClick={() => router.push('/admin/orders')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Orders
        </Button>
      </div>
    )
  }

  // Get location data for the map
  const sourceLocation = mockLocations[order.from] || null
  const destinationLocation = mockLocations[order.to] || null
  
  // For in-transit orders, show a current location
  let currentLocation: Location | null = null
  if (order.status === "in-transit") {
    // For demo purposes, use a location from the tracking history
    const midPoint = mockTrackingHistory[Math.floor(mockTrackingHistory.length / 2)]
    currentLocation = mockLocations[midPoint.location] || null
  } else if (order.status === "delivered") {
    // If delivered, current location is the destination
    currentLocation = destinationLocation
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => router.push('/admin/orders')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Orders
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Order {order.id}</h1>
        <Badge
          variant={
            order.status === "delivered" 
              ? "outline" 
              : order.status === "in-transit" 
                ? "default" 
                : "secondary"
          }
          className={order.status === "delivered" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
        >
          {order.status === "delivered"
            ? "Delivered"
            : order.status === "in-transit"
              ? "In Transit"
              : "Pending"}
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
            <CardDescription>Details about this order</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                <span className="font-medium">Order ID</span>
              </div>
              <span>{order.id}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                <span className="font-medium">Client</span>
              </div>
              <span>{order.client}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <Package className="mr-2 h-5 w-5" />
                <span className="font-medium">Weight</span>
              </div>
              <span>{order.weight}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Created At</span>
              </div>
              <span>{order.createdAt}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span className="font-medium">Estimated Delivery</span>
              </div>
              <span>{order.estimatedDelivery}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tracking Information</CardTitle>
            <CardDescription>Current status and tracking details</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                <span className="font-medium">Tracking Number</span>
              </div>
              <span>{order.trackingNumber}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="font-medium">From</span>
              </div>
              <span>{order.from}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="font-medium">To</span>
              </div>
              <span>{order.to}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                <span className="font-medium">Status</span>
              </div>
              <Badge
                variant={
                  order.status === "delivered" 
                    ? "outline" 
                    : order.status === "in-transit" 
                      ? "default" 
                      : "secondary"
                }
                className={order.status === "delivered" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
              >
                {order.status === "delivered"
                  ? "Delivered"
                  : order.status === "in-transit"
                    ? "In Transit"
                    : "Pending"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tracking">
        <TabsList>
          <TabsTrigger value="tracking">Tracking History</TabsTrigger>
          <TabsTrigger value="map">Tracking Map</TabsTrigger>
        </TabsList>
        <TabsContent value="tracking" className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-4">Tracking History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Date & Time</th>
                  <th className="text-left py-2 px-4">Location</th>
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                {mockTrackingHistory.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4">{item.location}</td>
                    <td className="py-2 px-4">
                      <Badge variant="outline">{item.status}</Badge>
                    </td>
                    <td className="py-2 px-4">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="map" className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-4">Parcel Location</h3>
          <div className="h-[400px] w-full">
            <ParcelTrackingMap 
              currentLocation={currentLocation}
              sourceLocation={sourceLocation}
              destinationLocation={destinationLocation}
              showRoute={true}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2">
        <Button variant="outline">Update Status</Button>
        <Button variant="outline">Print Label</Button>
        <Button variant="outline" className="text-red-500 hover:text-red-700 hover:bg-red-50">
          Cancel Order
        </Button>
      </div>
    </div>
  )
} 