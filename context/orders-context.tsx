"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { shipments, type Shipment } from "@/lib/logiflow-data"

interface OrdersContextType {
  orders: Shipment[]
  addOrder: (order: Shipment) => void
  getOrderById: (id: string) => Shipment | undefined
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined)

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Shipment[]>(shipments)

  const addOrder = (order: Shipment) => setOrders((prevOrders) => [order, ...prevOrders])
  const getOrderById = (id: string) => orders.find((order) => order.trackingId === id)

  return <OrdersContext.Provider value={{ orders, addOrder, getOrderById }}>{children}</OrdersContext.Provider>
}

export function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) throw new Error("useOrders must be used within an OrdersProvider")
  return context
}
