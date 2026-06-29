"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Truck, Car, Bike } from "lucide-react"
import { Vehicle } from "@/context/vehicles-context"

interface AddVehicleDialogProps {
  onAddVehicle: (vehicle: Vehicle) => void
}

export function AddVehicleDialog({ onAddVehicle }: AddVehicleDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    type: "",
    model: "",
    licensePlate: "",
    driver: "",
    status: "active",
    health: "good",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.type || !formData.model || !formData.licensePlate || !formData.driver) {
      alert("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Generate a unique ID
    const id = `VEH-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`
    
    // Calculate maintenance dates
    const today = new Date()
    const lastMaintenance = today.toISOString().split('T')[0]
    
    // Next maintenance in 6 months
    const nextMaintenance = new Date(today)
    nextMaintenance.setMonth(today.getMonth() + 6)
    
    // Create new vehicle object
    const newVehicle: Vehicle = {
      id,
      ...formData,
      lastMaintenance,
      nextMaintenance: nextMaintenance.toISOString().split('T')[0],
    }

    // Add the vehicle
    onAddVehicle(newVehicle)
    
    // Reset form and close dialog
    setFormData({
      type: "",
      model: "",
      licensePlate: "",
      driver: "",
      status: "active",
      health: "good",
    })
    setIsSubmitting(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
            <DialogDescription>
              Enter the details of the new vehicle to add it to your fleet.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="vehicle-type" className="text-right">
                Type
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleChange("type", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="truck">
                      <div className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        Truck
                      </div>
                    </SelectItem>
                    <SelectItem value="van">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4" />
                        Van
                      </div>
                    </SelectItem>
                    <SelectItem value="motorcycle">
                      <div className="flex items-center">
                        <Bike className="mr-2 h-4 w-4" />
                        Motorcycle
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="model" className="text-right">
                Model
              </Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
                className="col-span-3"
                placeholder="e.g. Ford F-150"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="license-plate" className="text-right">
                License Plate
              </Label>
              <Input
                id="license-plate"
                value={formData.licensePlate}
                onChange={(e) => handleChange("licensePlate", e.target.value)}
                className="col-span-3"
                placeholder="e.g. NY-12345"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="driver" className="text-right">
                Driver
              </Label>
              <Input
                id="driver"
                value={formData.driver}
                onChange={(e) => handleChange("driver", e.target.value)}
                className="col-span-3"
                placeholder="e.g. John Doe"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleChange("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="health" className="text-right">
                Health
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.health}
                  onValueChange={(value) => handleChange("health", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select health status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="warning">Needs Attention</SelectItem>
                    <SelectItem value="maintenance">Maintenance Required</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Adding...
                </>
              ) : (
                "Add Vehicle"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 