"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CreditCard, Wallet, DollarSign, Package, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentDetailPage({ params }: { params: { id: string } }) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [paymentComplete, setPaymentComplete] = useState(false)

  // Mock payment data
  const payment = {
    id: params.id,
    orderId: "ORD-003",
    amount: 210.75,
    status: "pending",
    date: "Mar 12, 2024",
  }

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentComplete(true)
    }, 1500)
  }

  if (paymentComplete) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
            <CardDescription>Your payment has been processed successfully</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Payment ID:</span>
                  <span>{payment.id}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span>{payment.orderId}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Amount:</span>
                  <span>${payment.amount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Method:</span>
                  <span>
                    {paymentMethod === "credit-card"
                      ? "Credit Card"
                      : paymentMethod === "crypto"
                        ? "Cryptocurrency"
                        : "Bank Transfer"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button asChild className="w-full">
              <Link href={`/tracking/${payment.orderId}`}>Track Order</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/client/orders">Back to Orders</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/client/payments">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Payments
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Complete Payment</CardTitle>
          <CardDescription>Select a payment method to complete your order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center space-x-4">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">{payment.orderId}</div>
                <div className="text-sm text-muted-foreground">Pending payment</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>${(payment.amount * 0.9).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%):</span>
                <span>${(payment.amount * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex items-center justify-between font-medium">
                <span>Total:</span>
                <span>${payment.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Select Payment Method</Label>
            <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="credit-card">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="crypto">
                  <Wallet className="mr-2 h-4 w-4" />
                  Crypto
                </TabsTrigger>
                <TabsTrigger value="bank-transfer">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Bank
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credit-card" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="save-card" className="rounded border-gray-300" />
                  <Label htmlFor="save-card" className="text-sm">
                    Save card for future payments
                  </Label>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4 pt-4">
                <div className="rounded-lg border p-4">
                  <div className="text-center">
                    <div className="font-medium mb-2">Pay with Cryptocurrency</div>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Send exactly</div>
                      <div className="font-mono font-bold">0.0072 ETH</div>
                      <div className="text-xs text-muted-foreground mt-1">to the address below</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Wallet Address</div>
                      <div className="font-mono text-sm break-all">0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Payment will be confirmed after 1 network confirmation
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="save-wallet" className="rounded border-gray-300" />
                  <Label htmlFor="save-wallet" className="text-sm">
                    Save wallet for future payments
                  </Label>
                </div>
              </TabsContent>

              <TabsContent value="bank-transfer" className="space-y-4 pt-4">
                <div className="rounded-lg border p-4">
                  <div className="space-y-2">
                    <div className="font-medium">Bank Transfer Details</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Account Name:</div>
                      <div>LogiTrack Inc.</div>
                      <div className="text-muted-foreground">Account Number:</div>
                      <div>1234567890</div>
                      <div className="text-muted-foreground">Routing Number:</div>
                      <div>987654321</div>
                      <div className="text-muted-foreground">Bank:</div>
                      <div>Example Bank</div>
                      <div className="text-muted-foreground">Reference:</div>
                      <div>{payment.id}</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Please include the payment ID as reference when making the transfer. Payments typically take 1-3
                  business days to process.
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handlePayment}>
            Pay ${payment.amount.toFixed(2)}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

