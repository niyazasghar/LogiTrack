import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Wallet, Bell } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="LogiTrack Logistics" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Contact Person</Label>
                  <Input id="contact-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" defaultValue="Operations Manager" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="contact@logitrack.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" defaultValue="123 Logistics Way, Shipping City, SC 12345" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://logitrack.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                  <Input id="tax-id" defaultValue="US123456789" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Set your company's operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weekday-hours">Weekday Hours</Label>
                  <Input id="weekday-hours" defaultValue="9:00 AM - 5:00 PM" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weekend-hours">Weekend Hours</Label>
                  <Input id="weekend-hours" defaultValue="Closed" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="holiday-operations" />
                <Label htmlFor="holiday-operations">Operate on holidays</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Hours</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Integration</CardTitle>
              <CardDescription>Configure your payment processing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Payment Processors</Label>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Razorpay</p>
                        <p className="text-sm text-muted-foreground">Credit/Debit Card Processor</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Connected</Badge>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Coinbase Commerce</p>
                        <p className="text-sm text-muted-foreground">Cryptocurrency Processor</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Connected</Badge>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key">Razorpay API Key</Label>
                <Input id="api-key" type="password" defaultValue="rzp_test_1234567890abcdef" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" defaultValue="https://logitrack.com/api/webhooks/payments" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="test-mode" defaultChecked />
                <Label htmlFor="test-mode">Test Mode</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Payment Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Wallet Setup</CardTitle>
              <CardDescription>Configure your blockchain wallet for crypto payments and eco tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Ethereum Wallet Address</Label>
                <Input id="wallet-address" defaultValue="0x1a2b3c4d5e6f7g8h9i0j..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contract-address">Eco Token Contract Address</Label>
                <Input id="contract-address" defaultValue="0x9i8h7g6f5e4d3c2b1a0..." />
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
                    <Switch id="usdt-support" defaultChecked />
                    <Label htmlFor="usdt-support">Tether (USDT)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="dai-support" />
                    <Label htmlFor="dai-support">Dai (DAI)</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-convert" defaultChecked />
                <Label htmlFor="auto-convert">Auto-convert crypto to fiat</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Blockchain Settings</Button>
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
                      <Label htmlFor="new-order">New Order</Label>
                    </div>
                    <Switch id="new-order" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="payment-received">Payment Received</Label>
                    </div>
                    <Switch id="payment-received" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="delivery-status">Delivery Status Updates</Label>
                    </div>
                    <Switch id="delivery-status" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="vehicle-maintenance">Vehicle Maintenance Alerts</Label>
                    </div>
                    <Switch id="vehicle-maintenance" defaultChecked />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>SMS Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sms-new-order">New Order</Label>
                    </div>
                    <Switch id="sms-new-order" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor="sms-payment-received">Payment Received</Label>
                    </div>
                    <Switch id="sms-payment-received" />
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

function Badge({ variant, children }) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-green-500 text-white",
    destructive: "bg-destructive text-destructive-foreground",
    outline: "bg-background text-foreground border border-input",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant] || variantClasses.default}`}
    >
      {children}
    </span>
  )
}

