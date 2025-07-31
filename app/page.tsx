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
      {/* ESG & PRO Impact Section */}
<section
  id="esg-pro"
  data-animate
  className={`py-24 bg-gradient-to-b from-white to-econova-lighter/10 relative overflow-hidden ${
    visibleSections.has("esg-pro") ? "animate-fade-in" : "opacity-0"
  }`}
>
  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-20 left-10 w-60 h-60 bg-green-100/20 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-float-delayed" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      
      <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-4">
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-econova-accent to-econova-secondary">ESG & PRO</span> Impact
      </h2>
      <p className="text-xl text-econova-text-light max-w-3xl mx-auto">
        How we measure our environmental and social responsibility
      </p>
    </div>

    {/* ESG Explained */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div className="animate-slide-left">
        <h3 className="text-3xl font-bold text-econova-primary mb-6 flex items-center">
          <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mr-4">
            <TreePine className="text-green-500 w-6 h-6" />
          </div>
          What is ESG?
        </h3>
        <p className="text-lg text-econova-text mb-6 leading-relaxed">
          ESG stands for <span className="font-semibold text-econova-primary">Environmental, Social, and Governance</span> - 
          the three pillars we use to measure our sustainable impact.
        </p>
        
        <div className="space-y-6">
        {[
  {
    icon: <TreePine className="w-5 h-5" />,
    title: "Environmental",
    desc: "Reducing e-waste pollution and carbon footprint",
    stats: "3.2M kg e-waste diverted annually",
    gradient: "bg-gradient-to-r from-[#8BAA70] to-[#6BA55D]"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Social",
    desc: "Creating jobs and safe working conditions",
    stats: "200+ green jobs created",
    gradient: "bg-gradient-to-r from-[#6E2844] to-[#8A3451]"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Governance",
    desc: "Ethical business practices and transparency",
    stats: "100% certified recycling partners",
    gradient: "bg-gradient-to-r from-[#6E737D] to-[#8C92AC]"
  }
].map((item, index) => (
  <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
    <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group-hover:scale-[1.02] relative overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${item.gradient} opacity-10`}></div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start gap-6">
          {/* Animated Icon */}
          <div className={`w-16 h-16 ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse`}>
            {React.cloneElement(item.icon, { 
              className: "w-8 h-8 text-white" 
            })}
          </div>
          
          <div>
            <CardTitle className="text-xl text-econova-primary group-hover:text-econova-secondary transition-colors duration-300">
              {item.title}
            </CardTitle>
            <CardDescription className="text-econova-text mt-2 mb-3">
              {item.desc}
            </CardDescription>
            <div className="text-sm font-medium bg-white/80 px-3 py-1 rounded-full inline-block border border-gray-200 group-hover:bg-white transition-colors">
              <span className={`bg-clip-text text-transparent ${item.gradient}`}>
                {item.stats}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
))}

      {/* Interactive ESG Donut Chart */}
      <div className="animate-slide-right">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full group relative">
          {/* Your ESG Donut Chart Image */}
          <img 
            src="/images/ESG-graph.png" 
            alt="ESG Framework" 
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Hover Overlays */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-econova-primary/5 to-econova-secondary/5 rounded-xl" />
            
            {/* Environmental Highlight */}
            <div 
              className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-green-500/50 pointer-events-none transition-all duration-700"
              style={{
                transform: 'translate(-50%, -50%) scale(0)',
                opacity: 0
              }}
            />
            
            {/* Social Highlight */}
            <div 
              className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border-4 border-blue-500/50 pointer-events-none transition-all duration-700 delay-100"
              style={{
                transform: 'translate(50%, -50%) scale(0)',
                opacity: 0
              }}
            />
            
            {/* Governance Highlight */}
            <div 
              className="absolute bottom-1/4 left-1/2 w-24 h-24 rounded-full border-4 border-purple-500/50 pointer-events-none transition-all duration-700 delay-200"
              style={{
                transform: 'translate(-50%, 50%) scale(0)',
                opacity: 0
              }}
            />
          </div>
          
          {/* Legend */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { color: "bg-[#8BAA70]", label: "Environmental" },
              { color: "bg-[#6E2844]", label: "Social" },
              { color: "bg-[#6E737D]", label: "Governance" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-1 transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* PRO Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
      {/* PRO Visual */}
      <div className="animate-slide-left">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
          <div className="relative h-96 w-full">
            {/* PRO Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-econova-accent/10 to-econova-secondary/10 border-8 border-econova-accent/20 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-econova-accent to-econova-secondary flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      PRO
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-econova-primary">Producer Responsibility Organization</h4>
                <p className="text-econova-text">Compliant with E-Waste Management Rules</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-slide-right">
        <h3 className="text-3xl font-bold text-econova-primary mb-6 flex items-center">
          <div className="w-12 h-12 rounded-lg bg-econova-accent/10 flex items-center justify-center mr-4">
            <Recycle className="text-econova-accent w-6 h-6" />
          </div>
          Our PRO Commitment
        </h3>
        <p className="text-lg text-econova-text mb-6 leading-relaxed">
          As a <span className="font-semibold text-econova-primary">Producer Responsibility Organization (PRO)</span>, 
          we ensure compliance with India's E-Waste Management Rules while creating value from waste.
        </p>
        
        <div className="space-y-4">
          {[
            {
              icon: <Shield className="text-green-500 w-5 h-5" />,
              title: "Compliance",
              desc: "Meeting all regulatory requirements for e-waste handling"
            },
            {
              icon: <Settings className="text-blue-500 w-5 h-5" />,
              title: "Collection Network",
              desc: "Pan-India infrastructure for e-waste collection"
            },
            {
              icon: <BarChart3 className="text-purple-500 w-5 h-5" />,
              title: "Reporting",
              desc: "Transparent documentation for authorities and clients"
            },
            {
              icon: <Sparkles className="text-yellow-500 w-5 h-5" />,
              title: "Innovation",
              desc: "Developing new recycling technologies and processes"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-2 rounded-lg bg-econova-lighter/50">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-econova-primary">{item.title}</h4>
                <p className="text-econova-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Impact Stats */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { 
          value: "3.2M+", 
          label: "Kg e-waste recycled", 
          icon: <Recycle className="w-6 h-6 text-econova-accent" />,
          animation: "animate-bounce-in"
        },
        { 
          value: "200+", 
          label: "Green jobs created", 
          icon: <Users className="w-6 h-6 text-blue-500" />,
          animation: "animate-bounce-in delay-100"
        },
        { 
          value: "100%", 
          label: "Compliance rate", 
          icon: <CheckCircle className="w-6 h-6 text-green-500" />,
          animation: "animate-bounce-in delay-200"
        },
        { 
          value: "50+", 
          label: "PRO partners", 
          icon: <Truck className="w-6 h-6 text-purple-500" />,
          animation: "animate-bounce-in delay-300"
        }
      ].map((stat, index) => (
        <div 
          key={index} 
          className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 ${stat.animation}`}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-econova-lighter/50">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-econova-primary">{stat.value}</div>
              <div className="text-sm text-econova-text-light">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
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
                link: "/app/certification",
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
     {/* Founders Section */}

<section
  id="founders"
  data-animate
  className={`py-20 bg-white relative overflow-hidden ${
    visibleSections.has("founders") ? "animate-fade-in" : "opacity-0"
  }`}
>
  {/* Floating decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-econova-primary/5"
        style={{
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          filter: "blur(40px)",
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
          animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-econova-primary mb-4 animate-slide-up">
        Founders
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-econova-accent to-econova-secondary mx-auto mb-6 animate-scale-x" />
      <p className="text-xl text-econova-text-light animate-slide-up" style={{ animationDelay: "0.1s" }}>
        The visionaries behind this Smart Startup
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          name: "Nimisha Bhatnagar",
          title: "Co-Founder",
          linkedin: "https://www.linkedin.com/in/nimisha838/",
        },
        {
          name: "Eshani Raj Verma",
          title: "Founder",
          linkedin: "https://www.linkedin.com/in/eshani-raj-verma-409b25226/",
        },
        {
          name: "Lavy Kumari",
          title: "Co-Founder",
          linkedin: "https://www.linkedin.com/in/lavy1004/",
        },
      ].map((founder, index) => (
        <div 
          key={index}
          className="group perspective-1000 animate-slide-up"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="relative h-full transition-all duration-500 group-hover:transform group-hover:scale-105">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-econova-primary/10 to-econova-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative bg-white p-8 rounded-2xl shadow-lg h-full border border-gray-100 group-hover:border-econova-primary/30 transition-all duration-300 flex flex-col items-center">
              {/* Animated initial circle */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-econova-primary to-econova-secondary flex items-center justify-center text-white text-3xl font-bold mb-6 
                transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                {founder.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-xl font-bold text-econova-primary mb-1 group-hover:text-econova-secondary transition-colors duration-300">
                {founder.name}
              </h3>
              <p className="text-econova-accent font-medium mb-6">{founder.title}</p>
              
              {/* Animated LinkedIn button */}
              <Link href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-econova-primary text-econova-primary hover:bg-econova-primary hover:text-white 
                  transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="mr-2 transition-transform duration-300 group-hover:scale-125"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
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
