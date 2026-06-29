import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, TrendingUp, BarChart3, ArrowUpRight, TreesIcon as Tree, Wind, Droplets } from "lucide-react"

export default function CarbonOffsetPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Carbon Offset</h1>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="purchase">Purchase Offsets</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total CO2 Offset</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125 kg</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+12% from last month</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Tokens</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">250</div>
                <div className="flex items-center pt-1 text-xs text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  <span>1 token = 0.5 kg CO2</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Delivery Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <div className="flex items-center pt-1 text-xs text-green-500">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+5% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Environmental Impact</CardTitle>
              <CardDescription>Total carbon offset through eco-friendly deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-500">125 kg</div>
                    <div className="mt-2 text-muted-foreground">CO2 Offset</div>
                    <div className="mt-4 flex justify-center space-x-8">
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <Tree className="h-8 w-8 text-green-500 mb-2" />
                          <div className="text-2xl font-bold">6</div>
                          <div className="text-xs text-muted-foreground">Trees Equivalent</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <Wind className="h-8 w-8 text-blue-500 mb-2" />
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-xs text-muted-foreground">Eco Deliveries</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <Droplets className="h-8 w-8 text-blue-500 mb-2" />
                          <div className="text-2xl font-bold">1,250</div>
                          <div className="text-xs text-muted-foreground">Liters of Water Saved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
                <CardDescription>Understanding carbon offsets and eco tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">What are Eco Tokens?</h3>
                  <p className="text-sm text-muted-foreground">
                    Eco Tokens are our platform's way of tracking and rewarding environmentally friendly choices. Each
                    token represents approximately 0.5 kg of CO2 offset.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">How to Earn Tokens</h3>
                  <p className="text-sm text-muted-foreground">
                    You earn Eco Tokens automatically when you choose eco-friendly delivery options. The amount earned
                    depends on the distance, weight, and delivery method.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Using Your Tokens</h3>
                  <p className="text-sm text-muted-foreground">
                    You can use your tokens to purchase additional carbon offsets or redeem them for discounts on future
                    deliveries.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Projects</CardTitle>
                <CardDescription>Projects supported by your carbon offsets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <Tree className="h-5 w-5 text-green-500" />
                    <h3 className="font-medium">Reforestation Project</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Supporting tree planting initiatives in deforested areas to restore ecosystems and capture carbon.
                  </p>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "65%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>65% of your offsets</span>
                    <span>81.25 kg CO2</span>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <Wind className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">Renewable Energy</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Investing in wind and solar energy projects to reduce reliance on fossil fuels.
                  </p>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-blue-500" style={{ width: "35%" }}></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>35% of your offsets</span>
                    <span>43.75 kg CO2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="purchase" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Carbon Offsets</CardTitle>
              <CardDescription>Offset your carbon footprint by purchasing eco tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Your Eco Token Balance</div>
                  <div className="text-sm text-muted-foreground">Available for carbon offset</div>
                </div>
                <div className="text-2xl font-bold">250</div>
              </div>

              <div className="space-y-4">
                <div className="font-medium">Select Offset Package</div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Basic</div>
                      <Badge variant="outline">$10</Badge>
                    </div>
                    <div className="mt-2 text-2xl font-bold">20 kg</div>
                    <div className="mt-1 text-sm text-muted-foreground">CO2 Offset</div>
                    <div className="mt-4 text-xs text-muted-foreground">Equivalent to planting 1 tree</div>
                  </div>

                  <div className="rounded-lg border border-primary bg-primary/5 p-4 cursor-pointer hover:bg-primary/10">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Standard</div>
                      <Badge variant="outline" className="border-primary">
                        $25
                      </Badge>
                    </div>
                    <div className="mt-2 text-2xl font-bold">50 kg</div>
                    <div className="mt-1 text-sm text-muted-foreground">CO2 Offset</div>
                    <div className="mt-4 text-xs text-muted-foreground">Equivalent to planting 2.5 trees</div>
                  </div>

                  <div className="rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Premium</div>
                      <Badge variant="outline">$50</Badge>
                    </div>
                    <div className="mt-2 text-2xl font-bold">100 kg</div>
                    <div className="mt-1 text-sm text-muted-foreground">CO2 Offset</div>
                    <div className="mt-4 text-xs text-muted-foreground">Equivalent to planting 5 trees</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-medium">Custom Amount</div>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Enter amount in kg" />
                  <Button>Calculate</Button>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Estimated Cost</div>
                      <div className="text-sm text-muted-foreground">Based on current rates</div>
                    </div>
                    <div className="text-xl font-bold">$0.00</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full">Purchase Offset</Button>
              <Button variant="outline" className="w-full">
                Use Eco Tokens
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Offset History</CardTitle>
              <CardDescription>Your carbon offset transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Eco Delivery Offset</div>
                        <div className="text-sm text-muted-foreground">Mar 10, 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">+25 kg</div>
                      <div className="text-xs text-muted-foreground">Order: ORD-001</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Eco Delivery Offset</div>
                        <div className="text-sm text-muted-foreground">Mar 8, 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">+15 kg</div>
                      <div className="text-xs text-muted-foreground">Order: ORD-002</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tree className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Purchased Offset</div>
                        <div className="text-sm text-muted-foreground">Mar 5, 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">+50 kg</div>
                      <div className="text-xs text-muted-foreground">Standard Package</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Eco Delivery Offset</div>
                        <div className="text-sm text-muted-foreground">Mar 1, 2024</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">+35 kg</div>
                      <div className="text-xs text-muted-foreground">Order: ORD-006</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
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

