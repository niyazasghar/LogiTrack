"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", parcels: 120 },
  { name: "Feb", parcels: 90 },
  { name: "Mar", parcels: 150 },
  { name: "Apr", parcels: 85 },
  { name: "May", parcels: 60 },
  { name: "Jun", parcels: 75 },
  { name: "Jul", parcels: 105 },
  { name: "Aug", parcels: 120 },
  { name: "Sep", parcels: 145 },
  { name: "Oct", parcels: 180 },
  { name: "Nov", parcels: 210 },
  { name: "Dec", parcels: 250 },
]

export function ParcelChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip
            formatter={(value) => [`${value}`, "Parcels"]}
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
            }}
          />
          <Bar dataKey="parcels" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

