"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Search, Filter, Truck, Car, Bike, AlertTriangle, CheckCircle2, Calendar } from "lucide-react"
import { AddVehicleDialog } from "@/components/admin/add-vehicle-dialog"
import { toast } from "@/components/ui/use-toast"
import { useVehicles, Vehicle } from "@/context/vehicles-context"

export default function VehiclesPage() {
  const { vehicles, addVehicle } = useVehicles()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all-status")
  const [typeFilter, setTypeFilter] = useState("all-types")

  // Function to handle adding a new vehicle
  const handleAddVehicle = (newVehicle: Vehicle) => {
    addVehicle(newVehicle)
    
    // Show success toast
    toast({
      title: "Vehicle Added",
      description: `${newVehicle.model} has been added to your fleet.`,
    })
  }

  // Filter vehicles based on search query and filters
  const filteredVehicles = vehicles.filter((vehicle) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase())

    // Status filter
    const matchesStatus =
      statusFilter === "all-status" || vehicle.status === statusFilter

    // Type filter
    const matchesType = typeFilter === "all-types" || vehicle.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  // Calculate statistics
  const totalVehicles = vehicles.length
  const activeVehicles = vehicles.filter((v) => v.status === "active").length
  const maintenanceVehicles = vehicles.filter((v) => v.status === "maintenance").length
  
  // Calculate vehicles due for maintenance in the next 30 days
  const today = new Date()
  const thirtyDaysFromNow = new Date(today)
  thirtyDaysFromNow.setDate(today.getDate() + 30)
  
  const maintenanceDue = vehicles.filter((vehicle) => {
    const maintenanceDate = new Date(vehicle.nextMaintenance)
    return maintenanceDate <= thirtyDaysFromNow && maintenanceDate >= today
  }).length

  // Calculate fleet health score (percentage of vehicles in good health)
  const healthyVehicles = vehicles.filter((v) => v.health === "good").length
  const fleetHealthScore = Math.round((healthyVehicles / totalVehicles) * 100)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Vehicles</h1>
        <AddVehicleDialog onAddVehicle={handleAddVehicle} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalVehicles}</div>
            <p className="text-xs text-muted-foreground">
              {activeVehicles} active, {maintenanceVehicles} in maintenance
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{maintenanceDue}</div>
            <p className="text-xs text-muted-foreground">Due in the next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{fleetHealthScore}%</div>
            <p className="text-xs text-muted-foreground">Fleet health score</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search vehicles..." 
            className="pl-8" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select 
          defaultValue="all-status" 
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          defaultValue="all-types"
          value={typeFilter}
          onValueChange={setTypeFilter}
        >
          <SelectTrigger className="w-[180px]">
            <Truck className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            <SelectItem value="truck">Trucks</SelectItem>
            <SelectItem value="van">Vans</SelectItem>
            <SelectItem value="motorcycle">Motorcycles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>License Plate</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Health</TableHead>
              <TableHead>Next Maintenance</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVehicles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No vehicles found.
                </TableCell>
              </TableRow>
            ) : (
              filteredVehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {vehicle.type === "truck" ? (
                        <Truck className="mr-2 h-4 w-4 text-muted-foreground" />
                      ) : vehicle.type === "van" ? (
                        <Car className="mr-2 h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Bike className="mr-2 h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{vehicle.model}</span>
                    </div>
                  </TableCell>
                  <TableCell>{vehicle.licensePlate}</TableCell>
                  <TableCell>{vehicle.driver}</TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {vehicle.health === "good" ? (
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      ) : vehicle.health === "warning" ? (
                        <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                      ) : (
                        <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
                      )}
                      <span>
                        {vehicle.health === "good"
                          ? "Good"
                          : vehicle.health === "warning"
                            ? "Needs Attention"
                            : "Maintenance Required"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {vehicle.nextMaintenance}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`/admin/vehicles/${vehicle.id}`}>
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

