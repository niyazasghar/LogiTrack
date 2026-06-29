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
import { Plus, Package } from "lucide-react"

export interface Order {
  id: string
  client: string
  from: string
  to: string
  weight: string
  status: string
  createdAt: string
  estimatedDelivery: string
  trackingNumber: string
}

interface AddOrderDialogProps {
  onAddOrder: (order: Order) => void
}

export function AddOrderDialog({ onAddOrder }: AddOrderDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    client: "",
    from: "",
    to: "",
    weight: "",
    status: "pending",
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
    if (!formData.client || !formData.from || !formData.to || !formData.weight) {
      alert("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    // Generate a unique ID and tracking number
    const id = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`
    const trackingNumber = `TRK-${Math.floor(Math.random() * 1000000).toString().padStart(8, '0')}`
    
    // Calculate dates
    const today = new Date()
    const createdAt = today.toISOString().split('T')[0]
    
    // Estimated delivery in 3-5 days
    const deliveryDays = Math.floor(Math.random() * 3) + 3 // Random between 3-5 days
    const estimatedDelivery = new Date(today)
    estimatedDelivery.setDate(today.getDate() + deliveryDays)
    
    // Create new order object
    const newOrder: Order = {
      id,
      ...formData,
      createdAt,
      estimatedDelivery: estimatedDelivery.toISOString().split('T')[0],
      trackingNumber,
    }

    // Add the order
    onAddOrder(newOrder)
    
    // Reset form and close dialog
    setFormData({
      client: "",
      from: "",
      to: "",
      weight: "",
      status: "pending",
    })
    setIsSubmitting(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Order
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Order</DialogTitle>
            <DialogDescription>
              Enter the details of the new order to add it to the system.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="client" className="text-right">
                Client
              </Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => handleChange("client", e.target.value)}
                className="col-span-3"
                placeholder="e.g. John Smith"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="from" className="text-right">
                From
              </Label>
              <Input
                id="from"
                value={formData.from}
                onChange={(e) => handleChange("from", e.target.value)}
                className="col-span-3"
                placeholder="e.g. New York, NY"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="to" className="text-right">
                To
              </Label>
              <Input
                id="to"
                value={formData.to}
                onChange={(e) => handleChange("to", e.target.value)}
                className="col-span-3"
                placeholder="e.g. Boston, MA"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Weight
              </Label>
              <Input
                id="weight"
                value={formData.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                className="col-span-3"
                placeholder="e.g. 5.2 kg"
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
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
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
                "Add Order"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 