"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data
const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
  { name: "Aug", revenue: 4000 },
  { name: "Sep", revenue: 5000 },
  { name: "Oct", revenue: 6000 },
  { name: "Nov", revenue: 7000 },
  { name: "Dec", revenue: 9000 },
]

export function RevenueChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <YAxis className="text-xs" tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value) => [`$${value}`, "Revenue"]}
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
            }}
          />
          <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

