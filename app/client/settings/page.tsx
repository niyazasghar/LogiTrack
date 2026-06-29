import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ClientSettingsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold tracking-tight">Client Settings</h1><p className="text-muted-foreground">Demo account settings for client profile, contacts, and delivery preferences.</p></div>
      <Card><CardHeader><CardTitle>Profile</CardTitle></CardHeader><CardContent className="grid gap-4 md:grid-cols-2"><div className="space-y-2"><Label>Company</Label><Input defaultValue="UrbanMart Retail" /></div><div className="space-y-2"><Label>Contact</Label><Input defaultValue="Riya Kapoor" /></div><div className="space-y-2"><Label>Email</Label><Input defaultValue="ops@urbanmart.example" /></div><div className="space-y-2"><Label>Phone</Label><Input defaultValue="+91 98765 41001" /></div></CardContent><CardFooter><Button>Save changes</Button></CardFooter></Card>
    </div>
  )
}
