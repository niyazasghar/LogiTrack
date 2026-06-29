"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Truck, Clock, CheckCircle2, CircleDashed, User, Phone, Mail } from "lucide-react"
import { ParcelTrackingMap } from "@/components/client/parcel-tracking-map"

// Define Location interface
interface Location {
  name: string
  lat: string
  lon: string
}

interface ParcelTimeline {
  status: string
  date: string
  time: string
  location: string
  completed: boolean
}

interface ParcelData {
  id: string
  status: string
  from: string
  to: string
  weight: string
  estimatedDelivery: string
  customer: string
  customerEmail: string
  customerPhone: string
  timeline: ParcelTimeline[]
  currentLocation: {
    lat: number
    lng: number
    lastUpdated: string
  }
}

export default function TrackingPage({ params }: { params: { id: string } }) {
  const [parcel, setParcel] = useState<ParcelData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [sourceLocation, setSourceLocation] = useState<Location | null>(null)
  const [destinationLocation, setDestinationLocation] = useState<Location | null>(null)

  useEffect(() => {
    // Mock API call to get parcel data
    setTimeout(() => {
      const parcelData: ParcelData = {
        id: params.id,
        status: "in-transit",
        from: "New York, NY",
        to: "Boston, MA",
        weight: "5.2 kg",
        estimatedDelivery: "Mar 15, 2024",
        customer: "John Smith",
        customerEmail: "john@example.com",
        customerPhone: "+1 (555) 123-4567",
        timeline: [
          {
            status: "booked",
            date: "Mar 10, 2024",
            time: "09:15 AM",
            location: "New York, NY",
            completed: true,
          },
          {
            status: "picked-up",
            date: "Mar 11, 2024",
            time: "10:30 AM",
            location: "New York, NY",
            completed: true,
          },
          {
            status: "in-transit",
            date: "Mar 12, 2024",
            time: "08:45 AM",
            location: "Hartford, CT",
            completed: true,
          },
          {
            status: "delivered",
            date: "Mar 15, 2024 (Est.)",
            time: "By 6:00 PM",
            location: "Boston, MA",
            completed: false,
          },
        ],
        currentLocation: {
          lat: 41.85,
          lng: -72.65,
          lastUpdated: "2 hours ago",
        },
      }
      
      setParcel(parcelData)
      
      // Set the current location for the map
      setCurrentLocation({
        name: "Current Parcel Location - Hartford, CT",
        lat: parcelData.currentLocation.lat.toString(),
        lon: parcelData.currentLocation.lng.toString()
      })
      
      // Set source location (New York)
      setSourceLocation({
        name: "New York, NY",
        lat: "40.7128",
        lon: "-74.0060"
      })
      
      // Set destination location (Boston)
      setDestinationLocation({
        name: "Boston, MA",
        lat: "42.3601",
        lon: "-71.0589"
      })
      
      setLoading(false)
    }, 1000)
  }, [params.id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading tracking information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Track Your Parcel</h1>
        <p className="text-muted-foreground">
          Tracking ID: <span className="font-medium">{parcel?.id}</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Shipment Status</CardTitle>
              <Badge
                variant={
                  parcel?.status === "delivered" ? "outline" : parcel?.status === "in-transit" ? "default" : "secondary"
                }
                className={parcel?.status === "delivered" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
              >
                {parcel?.status === "in-transit"
                  ? "In Transit"
                  : parcel?.status === "delivered"
                    ? "Delivered"
                    : "Pending"}
              </Badge>
            </div>
            <CardDescription>Estimated delivery: {parcel?.estimatedDelivery}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-muted-foreground">From</p>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">{parcel?.from}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">To</p>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">{parcel?.to}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-muted"></div>
                {parcel?.timeline.map((event, index) => (
                  <div key={index} className="relative mb-6 last:mb-0 pl-10">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border">
                      {event.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <CircleDashed className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {event.status === "booked"
                          ? "Parcel Booked"
                          : event.status === "picked-up"
                            ? "Picked Up"
                            : event.status === "in-transit"
                              ? "In Transit"
                              : "Delivery"}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <span className="hidden sm:inline mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Location</CardTitle>
              <CardDescription>Last updated {parcel?.currentLocation.lastUpdated}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {/* Use our specialized ParcelTrackingMap component */}
              <ParcelTrackingMap 
                currentLocation={currentLocation}
                sourceLocation={sourceLocation}
                destinationLocation={destinationLocation}
                height="300px"
                showRoute={true}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Parcel Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Weight:</span>
                <span>{parcel?.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Tracking ID:</span>
                <span>{parcel?.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Service:</span>
                <span>Standard Delivery</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{parcel?.customer}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{parcel?.customerEmail}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{parcel?.customerPhone}</span>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full">Contact Support</Button>
        </div>
      </div>
    </div>
  )
}

