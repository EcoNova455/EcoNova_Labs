"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Recycle,
  ArrowRight,
  Users,
  TreePine,
  CheckCircle,
  Sparkles,
  Truck,
  DollarSign,
  ShoppingBag,
  Palette,
  Bot,
  CreditCard,
  Shield,
  Calendar,
  Settings,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TruckLoader } from "@/components/truck-loader"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))

            // Handle video sound when section is visible
            if (entry.target.id === "ewaste-crisis") {
              if (video1Ref.current) {
                video1Ref.current.muted = false
              }
              if (video2Ref.current) {
                video2Ref.current.muted = false
              }
            }
          } else {
            // Mute videos when section is not visible
            if (entry.target.id === "ewaste-crisis") {
              if (video1Ref.current) {
                video1Ref.current.muted = true
              }
              if (video2Ref.current) {
                video2Ref.current.muted = true
              }
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return <TruckLoader isLoading={isLoading} message="Welcome to EcoNova Labs" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter relative overflow-hidden">
      <AnimatedBackground />
      <FloatingElements />
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        data-animate
        className={`container mx-auto px-4 py-32 text-center relative z-10 ${
          visibleSections.has("hero") ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img
                src="/images/email-logo.png"
                alt="EcoNova"
                className="w-24 h-24 object-contain animate-bounce-in group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))",
                  animationDelay: "0.5s",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-econova-accent to-econova-secondary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          <Badge className="mb-8 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm animate-scale-in px-6 py-2 text-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            India's Leading AI-Powered E-Waste Management Platform
          </Badge>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform E-Waste into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-econova-accent to-econova-secondary">
              Cash & Impact
            </span>{" "}
            with EcoNova
          </h1>

          <p
            className="text-xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            AI-powered price evaluation, doorstep pickup, instant cash payments, and certified disposal. Join the
            gamified revolution in sustainable e-waste management.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/schedule-pickup">
              <Button
                size="lg"
                className="w-72 bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              >
                Schedule a Pickup
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/store">
              <Button
                size="lg"
                variant="outline"
                className="w-72 border-2 border-white text-white hover:bg-white hover:text-econova-primary px-12 py-6 text-xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              >
                Shop Refurbished Parts
                <ShoppingBag className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>

          
        </div>
      </section>

      {/* How EcoNova Lab Works */}
      <section
        id="how-it-works"
        data-animate
        className={`py-32 bg-white relative overflow-hidden ${
          visibleSections.has("how-it-works") ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-6 animate-slide-up">
              How EcoNova Lab Works? 🚀
            </h2>
            <p
              className="text-2xl text-econova-text-light max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Simple, transparent, and rewarding e-waste management in 6 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Calendar,
                title: "🚀 1. Schedule a Pickup",
                desc: "Book a pickup through our website or app in just a few clicks. Choose your time, location, and device type.",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "2",
                icon: Truck,
                title: "🚚 2. We Pick Up from Your Doorstep",
                desc: "Our team arrives at your scheduled time to safely collect your e-waste — no hassle, no hidden fees.",
                color: "from-green-500 to-green-600",
              },
              {
                step: "3",
                icon: Bot,
                title: "🤖 3. AI-Powered Evaluation",
                desc: "Your device is assessed using our smart system to determine reusable parts and market value.",
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "4",
                icon: DollarSign,
                title: "💸 4. Get Paid or Donate",
                desc: "Receive instant payment or choose to donate your e-waste to artists or eco-projects. You'll always get a Safe Disposal Certificate.",
                color: "from-yellow-500 to-orange-600",
              },
              {
                step: "5",
                icon: Settings,
                title: "🛠️ 5. Refurbish & Reuse",
                desc: "Usable parts are refurbished and sold affordably. Non-reusable parts are responsibly recycled in certified facilities.",
                color: "from-teal-500 to-cyan-600",
              },
              {
                step: "6",
                icon: BarChart3,
                title: "🧾 6. Track Your Impact",
                desc: "Access your account to view environmental impact stats, download certificates, and earn rewards.",
                color: "from-pink-500 to-rose-600",
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <Card className="h-full hover:shadow-3xl transition-all duration-500 border-0 shadow-xl group-hover:scale-105 relative overflow-hidden">
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-econova-accent to-econova-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>

                    <CardHeader className="pb-6 pt-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce mx-auto`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl text-econova-primary group-hover:text-econova-secondary transition-colors duration-300 text-center">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-econova-text-light text-base leading-relaxed">
                        {step.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1s" }}>
            <Link href="/schedule-pickup">
              <Button
                size="lg"
                className="w-72 bg-gradient-to-r from-econova-primary to-econova-primary-light hover:from-econova-primary-light hover:to-econova-primary text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              >
                Take the First Step
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section
        id="core-services"
        data-animate
        className={`py-32 bg-gradient-to-br from-econova-lighter to-white relative overflow-hidden ${
          visibleSections.has("core-services") ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-6 animate-slide-up">
              🛠️ EcoNova Core Services
            </h2>
            <p
              className="text-2xl text-econova-text-light max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive AI-powered e-waste management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "🚚 Doorstep E-Waste Pickup",
                desc: "Easy scheduling via app or website with real-time tracking",
                features: ["Home & office pickup", "Real-time updates", "Flexible scheduling"],
                color: "from-blue-500 to-purple-600",
              },
              {
                icon: Bot,
                title: "🤖 AI-Powered Price Evaluation",
                desc: "Smart system assesses device value based on condition and potential",
                features: ["Instant price estimates", "Fair valuation", "Transparent pricing"],
                color: "from-green-500 to-teal-600",
              },
              {
                icon: CreditCard,
                title: "💸 Cash for E-Waste",
                desc: "Fair payment based on component value via UPI, wallet, or credits",
                features: ["UPI payments", "Wallet credits", "Store credits"],
                color: "from-yellow-500 to-orange-600",
              },
              {
                icon: ShoppingBag,
                title: "🛍️ Refurbished Component Store",
                desc: "High-quality tested components at 20-30% lower cost",
                features: ["Quality tested", "B2B bulk orders", "DIY friendly"],
                color: "from-emerald-500 to-green-600",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Card className="h-full hover:shadow-3xl transition-all duration-500 border-0 shadow-xl group-hover:scale-105">
                    <CardHeader className="pb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-econova-primary group-hover:text-econova-secondary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-econova-text-light">{service.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-econova-text">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                          >
                            <CheckCircle className="h-4 w-4 text-econova-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section
        id="specialized-services"
        data-animate
        className={`py-32 bg-white relative ${
          visibleSections.has("specialized-services") ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-6 animate-slide-up">
              🧩 Specialized Services
            </h2>
            <p
              className="text-2xl text-econova-text-light max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Tailored solutions for businesses and creative communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Shield,
                title: "🧾 Safe E-Waste Disposal Certification",
                subtitle: "For Individuals & Corporates",
                desc: "EcoNova provides official certificates of safe e-waste disposal to recognize and reward environmentally responsible behavior.",
                features: [
                  "🎯 Ensures eco-compliant processing through authorized channels",
                  "👤 Digital certificates for individuals with impact tracking",
                  "🏢 Quarterly/annual bulk certification reports for corporates",
                  "🟢 Custom branding and team-level reports available",
                ],
                link: "/certification",
                buttonText: "Get Certified",
              },
              {
                icon: Palette,
                title: "🎨 Creativity Corner",
                subtitle: "E-Waste for Artists & Creators",
                desc: "Donate usable components to creators, upcyclers, and artists for innovative eco-art projects.",
                features: [
                  "Creative component donation program",
                  "Eco-art initiatives and workshops",
                  "Artist collaboration support",
                  "Exhibition partnerships and showcases",
                ],
                link: "/artists",
                buttonText: "Join Program",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group perspective-1000 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="h-full hover:shadow-3xl transition-all duration-500 border-0 shadow-xl group-hover:scale-105 preserve-3d">
                    <CardHeader className="pb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-econova-secondary to-econova-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-econova-primary group-hover:text-econova-secondary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-econova-accent mb-3">{service.subtitle}</div>
                      <CardDescription className="text-econova-text-light text-lg">{service.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-econova-text mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                          >
                            <CheckCircle className="h-5 w-5 text-econova-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={service.link}>
                        <Button className="w-full bg-gradient-to-r from-econova-primary to-econova-primary-light hover:from-econova-primary-light hover:to-econova-primary text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105">
                          {service.buttonText}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* E-Waste Crisis in India */}
      <section
        id="ewaste-crisis"
        data-animate
        className={`py-32 bg-gradient-to-br from-econova-lighter to-white relative ${visibleSections.has("ewaste-crisis") ? "animate-slide-up" : "opacity-0"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-6 animate-slide-up">
              India's E-Waste Crisis
            </h2>
            <p
              className="text-2xl text-econova-text-light max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Understanding the massive challenge we're solving together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Videos Section */}
            <div className="space-y-8">
              <div className="relative">
                <video
                 className="w-full h-64 object-cover rounded-3xl shadow-2xl border-4 border-red-200"
                  autoPlay
                  loop
                 muted
                 playsInline
                 poster="/placeholder.svg?height=256&width=400&text=E-Waste+Video+1"
                  >
                 <source src="/videos/ewaste2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                 </video>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white font-bold text-sm">Crisis</span>
                </div>
              </div>

              <div className="relative">
                <video
                className="w-full h-64 object-cover rounded-3xl shadow-2xl border-4 border-orange-200"
                autoPlay
                loop
                muted
                playsInline
                poster="/placeholder.svg?height=256&width=400&text=E-Waste+Video+2"
               >
              <source src="/videos/ewaste3.mp4" type="video/mp4" />
               Your browser does not support the video tag.
              </video>
                  
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xs text-center">
                    Impact
                    <br />
                    Reality
                  </span>
                </div>
              </div>
            </div>

            {/* Crisis Statistics */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    stat: "3.2 Million Tons",
                    desc: "E-waste generated annually in India",
                    color: "from-red-500 to-red-600",
                    icon: "📱",
                  },
                  {
                    stat: "Only 20%",
                    desc: "Properly recycled through formal channels",
                    color: "from-orange-500 to-orange-600",
                    icon: "♻️",
                  },
                  {
                    stat: "80% Informal",
                    desc: "Handled by unorganized sector causing pollution",
                    color: "from-yellow-500 to-yellow-600",
                    icon: "⚠️",
                  },
                  {
                    stat: "₹1,00,000 Cr",
                    desc: "Economic value lost due to improper disposal",
                    color: "from-purple-500 to-purple-600",
                    icon: "💰",
                  },
                ].map((crisis, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${crisis.color} rounded-2xl flex items-center justify-center text-2xl`}
                    >
                      {crisis.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-econova-primary">{crisis.stat}</div>
                      <div className="text-econova-text-light">{crisis.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-econova-accent to-econova-secondary p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">EcoNova's Solution</h3>
                <p className="text-white/90">
                  We're bridging the gap with AI-powered pricing, formal recycling channels, and transparent processes
                  that benefit both users and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className={`py-32 bg-gradient-to-r from-econova-primary via-econova-primary-light to-econova-primary-lighter text-white relative overflow-hidden ${
          visibleSections.has("cta") ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <AnimatedBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-12">
            <img
              src="/images/email-logo.png"
              alt="EcoNova"
              className="w-20 h-20 object-contain mx-auto animate-bounce-in"
              style={{
                filter: "drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))",
              }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">Ready to Turn E-Waste into Cash?</h2>
          <p
            className="text-2xl mb-16 opacity-90 max-w-3xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of Indians earning money while creating a sustainable future. Get AI-powered pricing, instant
            payments, and gamified rewards!
          </p>

          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-econova-accent via-white to-econova-secondary mb-4 tracking-wider">
              "WASTE is not WASTE
            </div>
            <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-econova-secondary via-econova-accent to-white tracking-wider">
              until we WASTE it!!"
            </div>
            <div className="text-lg text-white/80 mt-6 italic">- EcoNova Philosophy</div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/schedule-pickup">
              <Button
                size="lg"
                className="w-72 px-12 py-6 text-xl font-semibold bg-gradient-to-r from-econova-accent to-econova-secondary hover:from-econova-accent/90 hover:to-econova-secondary/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              >
                Schedule Pickup
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/store">
              <Button
                size="lg"
                variant="outline"
                className="w-72 border-2 border-white text-white hover:bg-white hover:text-econova-primary px-12 py-6 text-xl font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              >
                Shop Refurbished Parts
                <ShoppingBag className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
