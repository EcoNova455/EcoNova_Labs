"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CertificationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-4xl font-bold text-econova-primary mb-8">Choose Certification Type</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Individual Path */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200">
          <Image
            src="/images/sample-certificate.png"
            alt="Sample Certificate"
            width={500}
            height={350}
            className="rounded-xl mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4 text-econova-primary">Individual Certification</h2>
          <p className="text-econova-text-light mb-6">
            Receive a personalized digital certificate for your e-waste disposal. Ideal for households and small-scale contributions.
          </p>
          <Button
            className="bg-econova-accent hover:bg-econova-accent/90 text-white px-6 py-3"
            onClick={() => router.push("/schedule-pickup")}
          >
            Schedule Pickup
          </Button>
        </div>

        {/* Corporate Path */}
        <div className="p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-econova-primary">Corporate Certification</h2>
          <p className="text-econova-text-light mb-6">
            For businesses seeking official certification, impact reporting, and bulk processing.
          </p>
          <Button
            className="bg-econova-primary hover:bg-econova-primary-light text-white px-6 py-3"
            onClick={() => router.push("/business")}
          >
            View Corporate Plans
          </Button>
        </div>
      </div>
    </div>
  )
}

