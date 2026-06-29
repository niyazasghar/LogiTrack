import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader><CardTitle>Request Demo Access</CardTitle><CardDescription>Portfolio demo signup for logistics teams evaluating LogiFlow.</CardDescription></CardHeader>
          <CardContent className="space-y-4"><div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" /></div><div className="space-y-2"><Label>Company</Label><Input placeholder="Company name" /></div><div className="space-y-2"><Label>Email</Label><Input placeholder="you@example.com" /></div></CardContent>
          <CardFooter><Button className="w-full" asChild><Link href="/admin">Open Demo Workspace</Link></Button></CardFooter>
        </Card>
      </main>
    </div>
  )
}
