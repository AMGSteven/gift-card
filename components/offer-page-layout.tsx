import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Gift } from "lucide-react"

interface OfferPageLayoutProps {
  children: React.ReactNode
  currentStep: number
  totalSteps: number
  title: string
  subtitle: string
  imageSrc: string
}

export function OfferPageLayout({
  children,
  currentStep,
  totalSteps,
  title,
  subtitle,
  imageSrc,
}: OfferPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b bg-white py-2">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-green-600 text-white flex items-center justify-center">
              <Gift className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">RewardsClaimer</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2 text-sm">
              <span>Processing your entry</span>
              <span>
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md border p-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="md:w-1/3">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    width={300}
                    height={200}
                    alt={title}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} RewardsClaimer. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link
                href="https://jmcustomerprivacy.com/terms-conditions"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </Link>
              <Link
                href="https://jmcustomerprivacy.com/privacy-policy"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://jmcustomerprivacy.com/marketing-partners"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marketing Partners
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
