import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ClientSupportPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Support Requests</h1><p className="text-muted-foreground">Open an issue for delayed delivery, wrong address, damaged parcel, payment questions, or customer complaints.</p></div>
      <Card><CardHeader><CardTitle>Create request</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><div className="space-y-2"><Label>Shipment ID</Label><Input placeholder="LF-2406-0182" /></div><div className="space-y-2"><Label>Issue type</Label><Input placeholder="Delayed delivery" /></div><div className="space-y-2 md:col-span-2"><Label>Notes</Label><Input placeholder="Describe the issue" /></div><Button className="w-fit">Submit request</Button></CardContent></Card>
    </div>
  )
}
