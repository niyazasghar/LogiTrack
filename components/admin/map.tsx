"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Truck } from "lucide-react"

export function AdminMap() {
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  // Mock data for vehicles
  const vehicles = [
    { id: 1, name: "Truck 001", status: "delivering", lat: 40, lng: -74 },
    { id: 2, name: "Truck 002", status: "idle", lat: 40.05, lng: -74.1 },
    { id: 3, name: "Truck 003", status: "delivering", lat: 40.1, lng: -74.05 },
    { id: 4, name: "Truck 004", status: "maintenance", lat: 40.15, lng: -74.15 },
  ]

  return (
    <div className="relative h-full w-full overflow-hidden rounded-b-lg">
      <div className="absolute inset-0 bg-muted/50">
        {/* Map placeholder with grid lines to simulate a map */}
        <div className="h-full w-full bg-slate-100 dark:bg-slate-800 relative">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`col-${i}`} className="border-r border-slate-200 dark:border-slate-700 h-full"></div>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`row-${i}`} className="border-b border-slate-200 dark:border-slate-700 w-full"></div>
            ))}
          </div>

          {/* City labels */}
          <div className="absolute top-1/4 left-1/4 text-xs text-slate-500 dark:text-slate-400">New York</div>
          <div className="absolute top-1/3 right-1/3 text-xs text-slate-500 dark:text-slate-400">Boston</div>
          <div className="absolute bottom-1/4 left-1/3 text-xs text-slate-500 dark:text-slate-400">Philadelphia</div>
          <div className="absolute bottom-1/3 right-1/4 text-xs text-slate-500 dark:text-slate-400">Washington DC</div>

          {/* Roads */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-slate-300 dark:bg-slate-600 transform rotate-45"></div>
          <div className="absolute top-1/3 left-1/4 w-1/2 h-1 bg-slate-300 dark:bg-slate-600 transform -rotate-15"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1 bg-slate-300 dark:bg-slate-600"></div>

          {/* Vehicle markers */}
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(vehicle.lng + 74.2) * 200}px`,
                top: `${(40.2 - vehicle.lat) * 200}px`,
              }}
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div
                className={`rounded-full p-1 ${
                  vehicle.status === "delivering"
                    ? "bg-green-500"
                    : vehicle.status === "idle"
                      ? "bg-blue-500"
                      : "bg-red-500"
                }`}
              >
                <Truck className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}

          {/* Selected vehicle info */}
          {selectedVehicle && (
            <div
              className="absolute bg-background p-2 rounded shadow-md z-10"
              style={{
                left: `${(selectedVehicle.lng + 74.2) * 200 + 20}px`,
                top: `${(40.2 - selectedVehicle.lat) * 200}px`,
              }}
            >
              <div className="text-sm font-medium">{selectedVehicle.name}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Badge
                  variant={
                    selectedVehicle.status === "delivering"
                      ? "default"
                      : selectedVehicle.status === "idle"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {selectedVehicle.status}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-2 left-2 z-10 flex space-x-2">
        <Badge variant="outline" className="bg-background">
          <div className="mr-1 h-2 w-2 rounded-full bg-green-500"></div> Delivering
        </Badge>
        <Badge variant="outline" className="bg-background">
          <div className="mr-1 h-2 w-2 rounded-full bg-blue-500"></div> Idle
        </Badge>
        <Badge variant="outline" className="bg-background">
          <div className="mr-1 h-2 w-2 rounded-full bg-red-500"></div> Maintenance
        </Badge>
      </div>
    </div>
  )
}

