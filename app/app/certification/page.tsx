"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CertificationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-econova-primary via-econova-primary-light to-econova-primary-lighter flex flex-col">
      <Header />

      <section className="flex-grow flex flex-col items-center justify-center py-20 px-6 text-center">
        <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm">
          📜 Certification Portal
        </Badge>
        <h1 className="text-5xl font-bold text-white mb-6">
          Get Recognized for Your <span className="text-econova-accent">E-Waste Impact</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl">
          Choose the certification that fits your journey – whether you’re an individual making responsible disposal choices or a business driving sustainable change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Individual Certificate Card */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-300">
            <Image
              src="/images/Certificate_for_individuals.png"
              alt="Individual Certificate"
              width={500}
              height={350}
              className="rounded-xl mb-6"
            />
            <h2 className="text-2xl font-semibold text-econova-primary mb-4">Individual Certification</h2>
            <p className="text-econova-text-light mb-6">
              Receive a personalized digital certificate for your responsible e-waste disposal. Perfect for individuals and families.
            </p>
            <Button
              className="bg-econova-accent hover:bg-econova-accent/90 text-white px-6 py-3 text-lg font-semibold"
              onClick={() => router.push("/schedule-pickup")}
            >
              Schedule Pickup
            </Button>
          </div>

          {/* Corporate Certificate Card */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-300">
            <Image
              src="/images/Certificate_for_corporate.png"
              alt="Corporate Certificate"
              width={500}
              height={350}
              className="rounded-xl mb-6"
            />
            <h2 className="text-2xl font-semibold text-econova-primary mb-4">Corporate Certification</h2>
            <p className="text-econova-text-light mb-6">
              Designed for organizations seeking environmental recognition, bulk disposal, and sustainability credentials.
            </p>
            <Button
              className="bg-econova-accent hover:bg-econova-accent/90 text-white px-6 py-3 text-lg font-semibold"
              onClick={() => router.push("/business")}
            >
              View Corporate Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
