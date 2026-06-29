import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Wallet, Bell } from "lucide-react"

export default function ClientSettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" defaultValue="John Smith" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.smith@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" defaultValue="123 Main St, Apt 4B, New York, NY 10001" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Preferences</CardTitle>
              <CardDescription>Set your default delivery preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-address">Default Delivery Address</Label>
                <Textarea id="default-address" defaultValue="123 Main St, Apt 4B, New York, NY 10001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-instructions">Delivery Instructions</Label>
                <Textarea id="delivery-instructions" placeholder="Special instructions for delivery (optional)" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="eco-delivery" defaultChecked />
                <Label htmlFor="eco-delivery">Prefer eco-friendly delivery options when available</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Saved Payment Methods</Label>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Default</Badge>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Ethereum Wallet</p>
                        <p className="text-sm text-muted-foreground">0x1a2b3c4d5e6f...</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Set Default
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blockchain Wallet Setup</CardTitle>
              <CardDescription>Configure your blockchain wallet for crypto payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Ethereum Wallet Address</Label>
                <Input id="wallet-address" defaultValue="0x1a2b3c4d5e6f7g8h9i0j..." />
              </div>
              <div className="space-y-2">
                <Label>Supported Cryptocurrencies</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="eth-support" defaultChecked />
                    <Label htmlFor="eth-support">Ethereum (ETH)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="usdc-support" defaultChecked />
                    <Label htmlFor="usdc-support">USD Coin (USDC)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="usdt-support" />
                    <Label htmlFor="usdt-support">Tether (USDT)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="dai-support" />
                    <Label htmlFor="dai-support">Dai (DAI)</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Wallet Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Email Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="order-updates">Order Status Updates</Label>
                    </div>
                    <Switch id="order-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="payment-confirmations">Payment Confirmations</Label>
                    </div>
                    <Switch id="payment-confirmations" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="delivery-notifications">Delivery Notifications</Label>
                    </div>
                    <Switch id="delivery-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="marketing-emails">Marketing & Promotions</Label>
                    </div>
                    <Switch id="marketing-emails" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>SMS Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sms-order-updates">Order Status Updates</Label>
                    </div>
                    <Switch id="sms-order-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sms-delivery-notifications">Delivery Notifications</Label>
                    </div>
                    <Switch id="sms-delivery-notifications" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="session-timeout" defaultChecked />
                <Label htmlFor="session-timeout">Auto-logout after 30 minutes of inactivity</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Security Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Badge({ variant, children, className = "" }) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "bg-background text-foreground border border-input",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {children}
    </span>
  )
}

