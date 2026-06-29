import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Package, Truck, BarChart3, CreditCard, Leaf, MapPin, Clock, Shield, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Modern Logistics Management Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your logistics operations with our all-in-one platform. Track deliveries, manage fleet,
                    and process payments with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup?role=client">Book a Parcel</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/signup?role=admin">Manage Logistics</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-20 blur-3xl"></div>
                  <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Logistics Dashboard"
                    className="relative z-10 rounded-lg border shadow-xl"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Modern Logistics
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your logistics operations efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Parcel Management</h3>
                <p className="text-center text-muted-foreground">
                  Track and manage all your parcels in real-time with detailed information.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fleet Management</h3>
                <p className="text-center text-muted-foreground">
                  Monitor your vehicles, track maintenance, and optimize routes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Real-time Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Track vehicles and parcels in real-time on an interactive map.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Gain insights with detailed analytics and reporting tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Payment Processing</h3>
                <p className="text-center text-muted-foreground">
                  Process payments with multiple options including crypto and fiat.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Eco Tokens</h3>
                <p className="text-center text-muted-foreground">
                  Earn and spend eco tokens for carbon-neutral deliveries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple process for both logistics companies and clients
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-center text-muted-foreground">Create an account as a logistics admin or client.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Book or Manage</h3>
                <p className="text-center text-muted-foreground">
                  Book parcels as a client or manage logistics as an admin.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Track & Pay</h3>
                <p className="text-center text-muted-foreground">
                  Track parcels in real-time and process payments securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <div className="mt-4 text-4xl font-bold">
                    $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">For small logistics operations</p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 100 parcels/month</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>5 vehicles</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 pt-0">
                  <Button>Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm bg-primary/5 border-primary/20">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <div className="mt-4 text-4xl font-bold">
                    $299<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">For growing logistics businesses</p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 1,000 parcels/month</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>20 vehicles</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Eco token system</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 pt-0">
                  <Button>Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="mt-4 text-4xl font-bold">Custom</div>
                  <p className="mt-2 text-muted-foreground">For large logistics operations</p>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited parcels</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited vehicles</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced eco token system</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 pt-0">
                  <Button>Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? Our team is here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Logistics Way, Shipping City, SC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@logitrack.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Monday - Friday: 9am - 5pm</span>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Logistics?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that have streamlined their logistics operations with LogiTrack.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link href="#features">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 LogiTrack. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Mail(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function Phone(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}

function Input(props) {
  return (
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}

function Textarea(props) {
  return (
    <textarea
      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  )
}

