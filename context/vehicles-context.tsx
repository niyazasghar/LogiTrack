"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { drivers, type Driver } from "@/lib/logiflow-data"

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

const initialVehicles: Vehicle[] = drivers.map((driver, index) => ({
  id: driver.id.replace("DRV", "FLT"),
  type: index % 2 === 0 ? "truck" : "van",
  model: ["Tata Ultra Logistics", "Ashok Leyland Partner", "Eicher Pro Delivery", "BharatBenz City Cargo", "Mahindra Bolero Maxx"][index] ?? "LogiFlow Fleet Vehicle",
  licensePlate: ["KA-05-LF-1821", "KA-03-LF-2074", "MH-04-LF-2390", "TS-09-LF-2741", "DL-01-LF-3018"][index] ?? "LF-DEMO",
  driver: driver.driverName,
  status: driver.availabilityStatus === "Off Duty" ? "inactive" : driver.availabilityStatus === "At Capacity" ? "maintenance" : "active",
  health: driver.availabilityStatus === "At Capacity" ? "warning" : "good",
  lastMaintenance: "2026-05-20",
  nextMaintenance: "2026-08-20"
}))

interface VehiclesContextType {
  vehicles: Vehicle[]
  addVehicle: (vehicle: Vehicle) => void
  getVehicleById: (id: string) => Vehicle | undefined
}

const VehiclesContext = createContext<VehiclesContextType | undefined>(undefined)

export function VehiclesProvider({ children }: { children: ReactNode }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles)
  const addVehicle = (vehicle: Vehicle) => setVehicles((prevVehicles) => [vehicle, ...prevVehicles])
  const getVehicleById = (id: string) => vehicles.find((vehicle) => vehicle.id === id)

  return <VehiclesContext.Provider value={{ vehicles, addVehicle, getVehicleById }}>{children}</VehiclesContext.Provider>
}

export function useVehicles() {
  const context = useContext(VehiclesContext)
  if (!context) throw new Error("useVehicles must be used within a VehiclesProvider")
  return context
}
