"use client"

import { createContext, useContext, useState, ReactNode } from "react"

// Define Vehicle interface
export interface Vehicle {
  id: string
  type: string
  model: string
  licensePlate: string
  driver: string
  status: string
  health: string
  lastMaintenance: string
  nextMaintenance: string
}

// Initial mock data
const initialVehicles: Vehicle[] = [
  {
    id: "VEH-001",
    type: "truck",
    model: "Ford F-150",
    licensePlate: "NY-12345",
    driver: "John Doe",
    status: "active",
    health: "good",
    lastMaintenance: "2023-12-15",
    nextMaintenance: "2024-06-15",
  },
  {
    id: "VEH-002",
    type: "van",
    model: "Mercedes Sprinter",
    licensePlate: "NY-67890",
    driver: "Jane Smith",
    status: "maintenance",
    health: "maintenance",
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-07-20",
  },
  {
    id: "VEH-003",
    type: "truck",
    model: "Chevrolet Silverado",
    licensePlate: "NJ-54321",
    driver: "Robert Johnson",
    status: "active",
    health: "good",
    lastMaintenance: "2024-02-05",
    nextMaintenance: "2024-08-05",
  },
  {
    id: "VEH-004",
    type: "motorcycle",
    model: "Honda CB500",
    licensePlate: "NY-MOTO1",
    driver: "Emily Brown",
    status: "active",
    health: "warning",
    lastMaintenance: "2024-01-10",
    nextMaintenance: "2024-04-10",
  },
  {
    id: "VEH-005",
    type: "van",
    model: "Ford Transit",
    licensePlate: "CT-12345",
    driver: "Michael Wilson",
    status: "inactive",
    health: "maintenance",
    lastMaintenance: "2023-12-28",
    nextMaintenance: "2024-06-28",
  },
  {
    id: "VEH-006",
    type: "truck",
    model: "RAM 1500",
    licensePlate: "PA-98765",
    driver: "Sarah Davis",
    status: "active",
    health: "good",
    lastMaintenance: "2024-02-18",
    nextMaintenance: "2024-08-18",
  },
  {
    id: "VEH-007",
    type: "motorcycle",
    model: "Yamaha MT-07",
    licensePlate: "NY-MOTO2",
    driver: "David Martinez",
    status: "maintenance",
    health: "maintenance",
    lastMaintenance: "2024-01-05",
    nextMaintenance: "2024-07-05",
  },
  {
    id: "VEH-008",
    type: "van",
    model: "Nissan NV200",
    licensePlate: "NJ-45678",
    driver: "Lisa Anderson",
    status: "active",
    health: "warning",
    lastMaintenance: "2024-02-10",
    nextMaintenance: "2024-05-10",
  },
]

// Define context type
interface VehiclesContextType {
  vehicles: Vehicle[]
  addVehicle: (vehicle: Vehicle) => void
  getVehicleById: (id: string) => Vehicle | undefined
}

// Create context
const VehiclesContext = createContext<VehiclesContextType | undefined>(undefined)

// Provider component
export function VehiclesProvider({ children }: { children: ReactNode }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles)

  const addVehicle = (vehicle: Vehicle) => {
    setVehicles((prevVehicles) => [vehicle, ...prevVehicles])
  }

  const getVehicleById = (id: string) => {
    return vehicles.find((vehicle) => vehicle.id === id)
  }

  return (
    <VehiclesContext.Provider value={{ vehicles, addVehicle, getVehicleById }}>
      {children}
    </VehiclesContext.Provider>
  )
}

// Custom hook to use the vehicles context
export function useVehicles() {
  const context = useContext(VehiclesContext)
  if (context === undefined) {
    throw new Error("useVehicles must be used within a VehiclesProvider")
  }
  return context
} 