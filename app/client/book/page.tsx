"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Package, Truck, Calculator, Leaf } from "lucide-react"
import { LocationInput } from "@/components/client/location-input"
import { LocationMap } from "@/components/client/location-map"
import { toast } from "@/components/ui/use-toast"

// Define Location interface
interface Location {
  name: string
  lat: string
  lon: string
}

// Define EstimatedCost interface
interface EstimatedCost {
  subtotal: string
  tax: string
  total: string
  eco: number
}

export default function BookParcelPage() {
  const router = useRouter()
  const [parcelDetails, setParcelDetails] = useState({
    weight: "",
    parcelType: "standard",
    urgency: "normal",
  })

  // Add state for pickup and drop locations
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null)
  const [dropLocation, setDropLocation] = useState<Location | null>(null)
  const [activeLocation, setActiveLocation] = useState<'pickup' | 'drop' | null>(null)

  const [estimatedCost, setEstimatedCost] = useState<EstimatedCost | null>(null)
  const [isBooking, setIsBooking] = useState(false)

  const handleCalculate = () => {
    // Check if locations are selected
    if (!pickupLocation || !dropLocation) {
      alert("Please select both pickup and drop locations");
      return;
    }

    // Mock calculation based on inputs
    const baseRate = 10
    const weightRate = Number.parseFloat(parcelDetails.weight) * 2
    const urgencyMultiplier = parcelDetails.urgency === "express" ? 1.5 : 1
    const typeMultiplier = parcelDetails.parcelType === "fragile" ? 1.2 : 1

    const total = (baseRate + weightRate) * urgencyMultiplier * typeMultiplier

    setEstimatedCost({
      subtotal: total.toFixed(2),
      tax: (total * 0.1).toFixed(2),
      total: (total * 1.1).toFixed(2),
      eco: Math.round(total * 0.05),
    })
  }

  // Function to handle booking the parcel
  const handleBookParcel = () => {
    if (!pickupLocation || !dropLocation || !estimatedCost) {
      alert("Please complete all required fields before booking");
      return;
    }

    setIsBooking(true);

    // Simulate API call to book the parcel
    setTimeout(() => {
      // Generate a random tracking ID
      const trackingId = `LT-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      
      // Navigate to the tracking page with the new tracking ID
      router.push(`/tracking/${trackingId}`);
      
      // Show success toast (if you have a toast component)
      if (typeof toast === 'function') {
        toast({
          title: "Parcel Booked Successfully!",
          description: `Your tracking ID is ${trackingId}`,
        });
      }
      
      setIsBooking(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Book a Parcel</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Parcel Details</CardTitle>
            <CardDescription>Enter the details of your parcel for shipping</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Replace the pickup address textarea with LocationInput */}
            <LocationInput
              id="pickup"
              label="Pickup Address"
              placeholder="Enter pickup location"
              value={pickupLocation?.name || ""}
              onChange={(location) => {
                setPickupLocation(location)
                if (location) setActiveLocation('pickup')
              }}
            />

            {/* Replace the drop address textarea with LocationInput */}
            <LocationInput
              id="drop"
              label="Drop Address"
              placeholder="Enter destination location"
              value={dropLocation?.name || ""}
              onChange={(location) => {
                setDropLocation(location)
                if (location) setActiveLocation('drop')
              }}
            />

            <div className="space-y-2">
              <Label htmlFor="weight">Parcel Weight (kg)</Label>
              <div className="flex">
                <Package className="mr-2 h-4 w-4 mt-3 text-muted-foreground" />
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter weight in kg"
                  value={parcelDetails.weight}
                  onChange={(e) => setParcelDetails({ ...parcelDetails, weight: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Parcel Type</Label>
              <RadioGroup
                defaultValue={parcelDetails.parcelType}
                onValueChange={(value) => setParcelDetails({ ...parcelDetails, parcelType: value })}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fragile" id="fragile" />
                  <Label htmlFor="fragile">Fragile</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="perishable" id="perishable" />
                  <Label htmlFor="perishable">Perishable</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Delivery Urgency</Label>
              <RadioGroup
                defaultValue={parcelDetails.urgency}
                onValueChange={(value) => setParcelDetails({ ...parcelDetails, urgency: value })}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="normal" />
                  <Label htmlFor="normal">Normal (3-5 days)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express (1-2 days)</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleCalculate} className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Cost
            </Button>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          {/* Add the map component */}
          <Card>
            <CardHeader>
              <CardTitle>Location Preview</CardTitle>
              <CardDescription>
                {activeLocation === 'pickup' 
                  ? 'Showing pickup location on the map' 
                  : activeLocation === 'drop' 
                    ? 'Showing drop location on the map'
                    : 'Select a location to see it on the map'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LocationMap 
                location={activeLocation === 'pickup' ? pickupLocation : activeLocation === 'drop' ? dropLocation : null} 
                height="300px"
              />
            </CardContent>
          </Card>

          {estimatedCost && (
            <Card>
              <CardHeader>
                <CardTitle>Cost Estimate</CardTitle>
                <CardDescription>Estimated cost for your shipment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${estimatedCost.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%):</span>
                  <span>${estimatedCost.tax}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${estimatedCost.total}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span className="flex items-center">
                    <Leaf className="mr-1 h-4 w-4" />
                    Eco Tokens Earned:
                  </span>
                  <span>{estimatedCost.eco}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleBookParcel}
                  disabled={isBooking}
                >
                  {isBooking ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Truck className="mr-2 h-4 w-4" />
                      Book Parcel
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

