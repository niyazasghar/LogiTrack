"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Eye, Search, Filter } from "lucide-react"
import { AddOrderDialog } from "@/components/admin/add-order-dialog"
import { useOrders } from "@/context/orders-context"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

export default function OrdersPage() {
  const { orders, addOrder } = useOrders()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Function to handle adding a new order
  const handleAddOrder = (newOrder: any) => {
    addOrder(newOrder)
    
    // Show success toast
    toast({
      title: "Order Added",
      description: `Order ${newOrder.id} has been added to the system.`,
    })
  }

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase())

    // Status filter
    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <AddOrderDialog onAddOrder={handleAddOrder} />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search orders by ID, client, location, or tracking number..." 
            className="pl-8" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select 
          defaultValue="all" 
          value={statusFilter}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in-transit">In Transit</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.from}</TableCell>
                  <TableCell>{order.to}</TableCell>
                  <TableCell>{order.weight}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "delivered" 
                          ? "outline" 
                          : order.status === "in-transit" 
                            ? "default" 
                            : "secondary"
                      }
                      className={order.status === "delivered" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                    >
                      {order.status === "delivered"
                        ? "Delivered"
                        : order.status === "in-transit"
                          ? "In Transit"
                          : "Pending"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/admin/orders/${order.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
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

