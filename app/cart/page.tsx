"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Minus, Plus, Trash2, ShoppingCart, CreditCard, Truck } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice: number
  quantity: number
  image: string
  condition: string
  warranty: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])


  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50000 ? 0 : 500
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Your Cart</h1>
            <p className="text-xl text-white/80">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <ShoppingCart className="h-24 w-24 text-econova-text-light mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-econova-primary mb-4">Your cart is empty</h2>
                <p className="text-econova-text-light mb-8">
                  Discover our amazing refurbished products and start saving money while helping the environment!
                </p>
                <Link href="/store">
                  <Button className="bg-econova-primary hover:bg-econova-primary-light text-white px-8 py-3">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <Card key={item.id} className="border-0 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full md:w-32 h-32 object-cover rounded-lg bg-gray-100"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold text-econova-primary mb-2">{item.name}</h3>
                              <div className="flex gap-2 mb-2">
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  {item.condition}
                                </Badge>
                                <Badge variant="outline">{item.warranty} warranty</Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-econova-primary">
                                  ₹{item.price.toLocaleString()}
                                </span>
                                <span className="text-lg text-gray-500 line-through">
                                  ₹{item.originalPrice.toLocaleString()}
                                </span>
                                <Badge className="bg-red-100 text-red-800">
                                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-2xl sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl text-econova-primary">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        You're saving ₹{savings.toLocaleString()} with refurbished products!
                      </p>
                    </div>
                    {shipping > 0 && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-800 text-sm">
                          <Truck className="h-4 w-4 inline mr-1" />
                          Add ₹{(50000 - subtotal).toLocaleString()} more for free shipping
                        </p>
                      </div>
                    )}
                    <Button className="w-full bg-econova-primary hover:bg-econova-primary-light text-white py-3 text-lg font-semibold">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Button>
                    <Link href="/store">
                      <Button variant="outline" className="w-full bg-transparent">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
