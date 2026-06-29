import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { demoCredentials } from "@/lib/logiflow-data"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader><CardTitle>Demo Login</CardTitle><CardDescription>Use any demo credential to explore the simulated role-based platform.</CardDescription></CardHeader>
          <CardContent className="space-y-4"><div className="space-y-2"><Label>Email</Label><Input defaultValue="admin@logiflow.dev" /></div><div className="space-y-2"><Label>Password</Label><Input type="password" defaultValue="demo1234" /></div><div className="rounded-md bg-muted p-3 text-xs text-muted-foreground">{demoCredentials.map((item) => <div key={item.role}>{item.role}: {item.email} / {item.password}</div>)}</div></CardContent>
          <CardFooter><Button className="w-full" asChild><Link href="/admin">Enter Demo Dashboard</Link></Button></CardFooter>
        </Card>
      </main>
    </div>
  )
}
