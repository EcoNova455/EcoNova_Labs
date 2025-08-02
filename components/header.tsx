"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, ShoppingCart, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Schedule Pickup", href: "/schedule-pickup" },
    { name: "Store", href: "/store" },
    { name: "Business", href: "/business" },
    { name: "Track", href: "/track" },
    { name: "Careers", href: "/careers" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-white/10 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/email-logo.png"
                alt="EcoNova"
                className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{
                  filter: scrolled
                    ? "drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))"
                    : "drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-econova-accent to-econova-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-econova-primary" : "text-white"
              }`}
            >
              EcoNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled ? "text-econova-text hover:text-econova-primary" : "text-white/90 hover:text-white"
                } group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-econova-accent to-econova-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled ? "text-econova-text hover:bg-econova-light" : "text-white hover:bg-white/10"
                }`}
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled ? "text-econova-text hover:bg-econova-light" : "text-white hover:bg-white/10"
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart
              </Button>
            </Link>
            <Link href="/schedule-pickup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 ${scrolled ? "text-econova-primary" : "text-white"}`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter border-l border-white/20 w-80"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img src="/images/email-logo.png" alt="EcoNova" className="w-8 h-8 object-contain" />
                  <span className="text-xl font-bold text-white">EcoNova Labs</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t border-white/20 pt-4 space-y-3">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-white/10 animate-slide-in-right"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link href="/cart">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-white hover:bg-white/10 animate-slide-in-right"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart
                    </Button>
                  </Link>
                  <Link href="/schedule-pickup">
                    <Button
                      className="w-full bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white font-semibold animate-slide-in-right"
                      style={{ animationDelay: "0.8s" }}
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
