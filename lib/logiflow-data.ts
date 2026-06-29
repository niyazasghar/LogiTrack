export type ShipmentStatus =
  | "Booked"
  | "Pickup Pending"
  | "Picked Up"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered"
  | "Failed"
  | "Cancelled"

export type PaymentStatus = "Paid" | "Pending" | "Overdue" | "Failed"
export type AccountStatus = "Active" | "Onboarding" | "Paused"
export type DriverAvailability = "Available" | "On Route" | "Off Duty" | "At Capacity"
export type TicketPriority = "Low" | "Medium" | "High" | "Critical"
export type TicketStatus = "Open" | "In Review" | "Resolved" | "Escalated"
export type DemoRole = "Admin" | "Operations Manager" | "Client" | "Driver"

export interface Shipment {
  trackingId: string
  senderName: string
  receiverName: string
  pickupAddress: string
  deliveryAddress: string
  packageType: string
  weight: string
  deliveryZone: string
  status: ShipmentStatus
  assignedDriver: string
  estimatedDeliveryDate: string
  paymentStatus: PaymentStatus
  client: string
  revenue: number
  lastUpdatedLocation: string
  timeline: Array<{
    label: ShipmentStatus
    time: string
    location: string
    note: string
    complete: boolean
  }>
}

export interface Client {
  id: string
  clientName: string
  company: string
  email: string
  phone: string
  totalShipments: number
  pendingInvoices: number
  accountStatus: AccountStatus
}

export interface Driver {
  id: string
  driverName: string
  phone: string
  assignedZone: string
  activeShipments: number
  availabilityStatus: DriverAvailability
  completedDeliveries: number
}

export interface Invoice {
  invoiceId: string
  client: string
  shipmentId: string
  amount: number
  paymentStatus: PaymentStatus
  dueDate: string
  paymentMethod: string
}

export interface SupportTicket {
  ticketId: string
  shipmentId: string
  issueType: string
  priority: TicketPriority
  assignedStaff: string
  status: TicketStatus
  notes: string
}

export const zones = [
  "Bengaluru Central",
  "Whitefield",
  "Electronic City",
  "Hyderabad West",
  "Mumbai South",
  "Delhi NCR"
]

export const shipments: Shipment[] = [
  {
    trackingId: "LF-2406-0182",
    senderName: "UrbanMart Retail",
    receiverName: "Aarav Menon",
    pickupAddress: "Koramangala Fulfillment Hub, Bengaluru",
    deliveryAddress: "Indiranagar 12th Main, Bengaluru",
    packageType: "Retail carton",
    weight: "8.4 kg",
    deliveryZone: "Bengaluru Central",
    status: "Out for Delivery",
    assignedDriver: "Arjun Mehta",
    estimatedDeliveryDate: "2026-06-30",
    paymentStatus: "Paid",
    client: "UrbanMart Retail",
    revenue: 1840,
    lastUpdatedLocation: "Domlur Sorting Point",
    timeline: [
      { label: "Booked", time: "29 Jun, 09:10", location: "Koramangala Hub", note: "Shipment booked by client portal", complete: true },
      { label: "Picked Up", time: "29 Jun, 10:30", location: "Koramangala Hub", note: "Package scanned and loaded", complete: true },
      { label: "In Transit", time: "29 Jun, 12:20", location: "Domlur Sorting Point", note: "Moved to delivery route", complete: true },
      { label: "Out for Delivery", time: "29 Jun, 15:05", location: "Indiranagar Route", note: "Driver started final delivery", complete: true },
      { label: "Delivered", time: "30 Jun, ETA 11:00", location: "Customer address", note: "Awaiting delivery confirmation", complete: false }
    ]
  },
  {
    trackingId: "LF-2406-0207",
    senderName: "FreshRoute Foods",
    receiverName: "Cloud Pantry Whitefield",
    pickupAddress: "FreshRoute Cold Store, KR Puram",
    deliveryAddress: "ITPL Main Road, Whitefield",
    packageType: "Temperature controlled",
    weight: "32 kg",
    deliveryZone: "Whitefield",
    status: "In Transit",
    assignedDriver: "Faisal Khan",
    estimatedDeliveryDate: "2026-06-29",
    paymentStatus: "Pending",
    client: "FreshRoute Foods",
    revenue: 4200,
    lastUpdatedLocation: "Mahadevapura Checkpoint",
    timeline: [
      { label: "Booked", time: "29 Jun, 07:45", location: "KR Puram", note: "Cold chain pickup requested", complete: true },
      { label: "Pickup Pending", time: "29 Jun, 08:15", location: "KR Puram", note: "Vehicle assigned", complete: true },
      { label: "Picked Up", time: "29 Jun, 09:05", location: "FreshRoute Cold Store", note: "Temperature seal verified", complete: true },
      { label: "In Transit", time: "29 Jun, 10:10", location: "Mahadevapura", note: "Running 12 minutes ahead of SLA", complete: true },
      { label: "Delivered", time: "29 Jun, ETA 13:30", location: "Whitefield", note: "Pending receiver scan", complete: false }
    ]
  },
  {
    trackingId: "LF-2406-0239",
    senderName: "Northline Traders",
    receiverName: "MetroBuild Procurement",
    pickupAddress: "Bhiwandi Warehouse Cluster",
    deliveryAddress: "Lower Parel Commercial Dock",
    packageType: "Industrial supplies",
    weight: "118 kg",
    deliveryZone: "Mumbai South",
    status: "Pickup Pending",
    assignedDriver: "Rohit Sharma",
    estimatedDeliveryDate: "2026-07-01",
    paymentStatus: "Overdue",
    client: "Northline Traders",
    revenue: 7600,
    lastUpdatedLocation: "Bhiwandi Dispatch Queue",
    timeline: [
      { label: "Booked", time: "28 Jun, 18:20", location: "Bhiwandi", note: "Bulk shipment created", complete: true },
      { label: "Pickup Pending", time: "29 Jun, 08:00", location: "Bhiwandi", note: "Awaiting dock release", complete: true },
      { label: "Picked Up", time: "30 Jun, ETA 09:00", location: "Bhiwandi", note: "Driver scheduled", complete: false }
    ]
  },
  {
    trackingId: "LF-2406-0274",
    senderName: "PrimeCare Supplies",
    receiverName: "Apollo Clinic West",
    pickupAddress: "Madhapur Medical Logistics Center",
    deliveryAddress: "Gachibowli Healthcare Park",
    packageType: "Medical supplies",
    weight: "14.7 kg",
    deliveryZone: "Hyderabad West",
    status: "Delivered",
    assignedDriver: "Imran Ali",
    estimatedDeliveryDate: "2026-06-28",
    paymentStatus: "Paid",
    client: "PrimeCare Supplies",
    revenue: 3100,
    lastUpdatedLocation: "Gachibowli Healthcare Park",
    timeline: [
      { label: "Booked", time: "28 Jun, 08:30", location: "Madhapur", note: "Priority medical delivery created", complete: true },
      { label: "Picked Up", time: "28 Jun, 09:15", location: "Madhapur", note: "Driver verified cold pouch", complete: true },
      { label: "Out for Delivery", time: "28 Jun, 11:40", location: "Gachibowli", note: "Final delivery route", complete: true },
      { label: "Delivered", time: "28 Jun, 12:08", location: "Apollo Clinic West", note: "Received by front desk", complete: true }
    ]
  },
  {
    trackingId: "LF-2406-0301",
    senderName: "BuildCore Hardware",
    receiverName: "Site Manager Sector 62",
    pickupAddress: "Okhla Industrial Area",
    deliveryAddress: "Noida Sector 62 Site Office",
    packageType: "Hardware crate",
    weight: "64 kg",
    deliveryZone: "Delhi NCR",
    status: "Failed",
    assignedDriver: "Karan Singh",
    estimatedDeliveryDate: "2026-06-29",
    paymentStatus: "Failed",
    client: "BuildCore Hardware",
    revenue: 5200,
    lastUpdatedLocation: "Noida Sector 62 Gate 3",
    timeline: [
      { label: "Booked", time: "29 Jun, 06:40", location: "Okhla", note: "Shipment booked from admin desk", complete: true },
      { label: "Picked Up", time: "29 Jun, 08:00", location: "Okhla", note: "Loaded onto route vehicle", complete: true },
      { label: "Out for Delivery", time: "29 Jun, 11:25", location: "Noida Sector 62", note: "Receiver unavailable", complete: true },
      { label: "Failed", time: "29 Jun, 12:10", location: "Site Gate 3", note: "Delivery attempt failed. Support ticket opened.", complete: true }
    ]
  },
  {
    trackingId: "LF-2406-0334",
    senderName: "UrbanMart Retail",
    receiverName: "Meera Nair",
    pickupAddress: "Peenya Distribution Center",
    deliveryAddress: "Electronic City Phase 1",
    packageType: "Consumer electronics",
    weight: "3.2 kg",
    deliveryZone: "Electronic City",
    status: "Booked",
    assignedDriver: "Arjun Mehta",
    estimatedDeliveryDate: "2026-07-02",
    paymentStatus: "Pending",
    client: "UrbanMart Retail",
    revenue: 1250,
    lastUpdatedLocation: "Peenya Distribution Center",
    timeline: [
      { label: "Booked", time: "29 Jun, 16:25", location: "Peenya", note: "Shipment booked and awaiting pickup slot", complete: true },
      { label: "Pickup Pending", time: "30 Jun, ETA 09:30", location: "Peenya", note: "Pickup scheduled", complete: false }
    ]
  }
]

export const clients: Client[] = [
  { id: "CL-1001", clientName: "Riya Kapoor", company: "UrbanMart Retail", email: "ops@urbanmart.example", phone: "+91 98765 41001", totalShipments: 428, pendingInvoices: 2, accountStatus: "Active" },
  { id: "CL-1002", clientName: "Neil D'Souza", company: "FreshRoute Foods", email: "logistics@freshroute.example", phone: "+91 98765 41002", totalShipments: 186, pendingInvoices: 4, accountStatus: "Active" },
  { id: "CL-1003", clientName: "Sana Qureshi", company: "Northline Traders", email: "dispatch@northline.example", phone: "+91 98765 41003", totalShipments: 93, pendingInvoices: 3, accountStatus: "Paused" },
  { id: "CL-1004", clientName: "Dev Malhotra", company: "PrimeCare Supplies", email: "supply@primecare.example", phone: "+91 98765 41004", totalShipments: 251, pendingInvoices: 1, accountStatus: "Active" },
  { id: "CL-1005", clientName: "Anika Rao", company: "BuildCore Hardware", email: "projects@buildcore.example", phone: "+91 98765 41005", totalShipments: 137, pendingInvoices: 5, accountStatus: "Onboarding" }
]

export const drivers: Driver[] = [
  { id: "DRV-301", driverName: "Arjun Mehta", phone: "+91 90000 30101", assignedZone: "Bengaluru Central", activeShipments: 8, availabilityStatus: "On Route", completedDeliveries: 1184 },
  { id: "DRV-302", driverName: "Faisal Khan", phone: "+91 90000 30102", assignedZone: "Whitefield", activeShipments: 6, availabilityStatus: "Available", completedDeliveries: 942 },
  { id: "DRV-303", driverName: "Rohit Sharma", phone: "+91 90000 30103", assignedZone: "Mumbai South", activeShipments: 5, availabilityStatus: "At Capacity", completedDeliveries: 1532 },
  { id: "DRV-304", driverName: "Imran Ali", phone: "+91 90000 30104", assignedZone: "Hyderabad West", activeShipments: 3, availabilityStatus: "Available", completedDeliveries: 802 },
  { id: "DRV-305", driverName: "Karan Singh", phone: "+91 90000 30105", assignedZone: "Delhi NCR", activeShipments: 7, availabilityStatus: "On Route", completedDeliveries: 1276 }
]

export const invoices: Invoice[] = [
  { invoiceId: "INV-9021", client: "UrbanMart Retail", shipmentId: "LF-2406-0182", amount: 1840, paymentStatus: "Paid", dueDate: "2026-07-04", paymentMethod: "UPI" },
  { invoiceId: "INV-9022", client: "FreshRoute Foods", shipmentId: "LF-2406-0207", amount: 4200, paymentStatus: "Pending", dueDate: "2026-07-05", paymentMethod: "Bank Transfer" },
  { invoiceId: "INV-9023", client: "Northline Traders", shipmentId: "LF-2406-0239", amount: 7600, paymentStatus: "Overdue", dueDate: "2026-06-25", paymentMethod: "Net Banking" },
  { invoiceId: "INV-9024", client: "PrimeCare Supplies", shipmentId: "LF-2406-0274", amount: 3100, paymentStatus: "Paid", dueDate: "2026-06-30", paymentMethod: "Card" },
  { invoiceId: "INV-9025", client: "BuildCore Hardware", shipmentId: "LF-2406-0301", amount: 5200, paymentStatus: "Failed", dueDate: "2026-06-29", paymentMethod: "UPI" }
]

export const supportTickets: SupportTicket[] = [
  { ticketId: "SUP-711", shipmentId: "LF-2406-0301", issueType: "delayed delivery", priority: "High", assignedStaff: "Nisha Patel", status: "Escalated", notes: "Receiver unavailable. Operations team coordinating second attempt." },
  { ticketId: "SUP-712", shipmentId: "LF-2406-0239", issueType: "payment issue", priority: "Medium", assignedStaff: "Rahul Iyer", status: "In Review", notes: "Invoice overdue. Shipment pickup paused until account team confirms release." },
  { ticketId: "SUP-713", shipmentId: "LF-2406-0207", issueType: "customer complaint", priority: "Low", assignedStaff: "Aisha Khan", status: "Open", notes: "Client requested temperature log before delivery confirmation." }
]

export const weeklyShipmentVolume = [
  { week: "W1", value: 182 },
  { week: "W2", value: 214 },
  { week: "W3", value: 236 },
  { week: "W4", value: 268 }
]

export const deliveryStatusDistribution = [
  { label: "Delivered", value: 54 },
  { label: "In Transit", value: 24 },
  { label: "Pending", value: 16 },
  { label: "Failed", value: 6 }
]

export const revenueTrend = [
  { label: "Feb", value: 320000 },
  { label: "Mar", value: 358000 },
  { label: "Apr", value: 392000 },
  { label: "May", value: 421000 },
  { label: "Jun", value: 468000 }
]

export const topDeliveryZones = [
  { zone: "Bengaluru Central", shipments: 342 },
  { zone: "Whitefield", shipments: 286 },
  { zone: "Delhi NCR", shipments: 248 },
  { zone: "Mumbai South", shipments: 221 },
  { zone: "Hyderabad West", shipments: 198 }
]

export const demoCredentials = [
  { role: "Admin", email: "admin@logiflow.dev", password: "demo1234" },
  { role: "Operations Manager", email: "ops@logiflow.dev", password: "demo1234" },
  { role: "Client", email: "client@logiflow.dev", password: "demo1234" },
  { role: "Driver", email: "driver@logiflow.dev", password: "demo1234" }
]

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount)
}

export function getShipmentByTrackingId(id: string) {
  return shipments.find((shipment) => shipment.trackingId.toLowerCase() === id.toLowerCase())
}

export function badgeClass(value: string) {
  const normalized = value.toLowerCase()
  if (["delivered", "paid", "active", "available", "resolved"].includes(normalized)) {
    return "border-emerald-200 bg-emerald-50 text-emerald-700"
  }
  if (["failed", "overdue", "critical", "paused", "escalated"].includes(normalized)) {
    return "border-rose-200 bg-rose-50 text-rose-700"
  }
  if (["pending", "pickup pending", "open", "onboarding", "in review"].includes(normalized)) {
    return "border-amber-200 bg-amber-50 text-amber-700"
  }
  if (["in transit", "out for delivery", "on route", "picked up"].includes(normalized)) {
    return "border-sky-200 bg-sky-50 text-sky-700"
  }
  return "border-slate-200 bg-slate-50 text-slate-700"
}

export const failedDeliveryReasons = [
  { label: "Receiver unavailable", value: 38 },
  { label: "Wrong address", value: 24 },
  { label: "Payment hold", value: 18 },
  { label: "Damaged parcel", value: 12 },
  { label: "Failed pickup", value: 8 },
]
