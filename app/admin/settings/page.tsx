import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1><p className="text-muted-foreground">Demo configuration for company profile, roles, billing, and notifications.</p></div>
      <Tabs defaultValue="company"><TabsList className="grid w-full grid-cols-4"><TabsTrigger value="company">Company</TabsTrigger><TabsTrigger value="roles">Roles</TabsTrigger><TabsTrigger value="billing">Billing</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger></TabsList><TabsContent value="company"><Card><CardHeader><CardTitle>Company profile</CardTitle><CardDescription>Internal demo workspace settings.</CardDescription></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><div className="space-y-2"><Label>Workspace name</Label><Input defaultValue="LogiFlow Operations" /></div><div className="space-y-2"><Label>Creator</Label><Input defaultValue="DevShuttle Lab Build" /></div><div className="space-y-2 md:col-span-2"><Label>Support email</Label><Input defaultValue="support@logiflow.dev" /></div></CardContent><CardFooter><Button>Save settings</Button></CardFooter></Card></TabsContent><TabsContent value="roles"><Card><CardHeader><CardTitle>Demo roles</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Admin, Operations Manager, Client, and Driver roles are simulated for portfolio demonstration.</CardContent></Card></TabsContent><TabsContent value="billing"><Card><CardHeader><CardTitle>Billing integrations</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Razorpay, bank transfer, card, and UPI flows are represented as demo data.</CardContent></Card></TabsContent><TabsContent value="notifications"><Card><CardHeader><CardTitle>Notifications</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Shipment status, payment, and support alerts can be wired to email/SMS providers in a production build.</CardContent></Card></TabsContent></Tabs>
    </div>
  )
}
