"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

export default function ConfirmationPage() {
  const [leadData, setLeadData] = useState<any>(null)

  useEffect(() => {
    // Get lead data from session storage
    const data = sessionStorage.getItem("leadData")
    if (data) {
      setLeadData(JSON.parse(data))
    }
  }, [])

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
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Congratulations!</h1>
              <p className="text-xl text-gray-600">Your gift card entry has been verified!</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-center text-green-800">
                <strong>Thank you for completing all the offers!</strong> Your entry has been confirmed and is now in
                the drawing for the $500 gift card.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/elegant-gold-gift-card.png"
                  width={250}
                  height={150}
                  alt="$500 Gift Card"
                  className="rounded-lg shadow-md"
                />
              </div>

              {leadData && (
                <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                  <h3 className="font-medium mb-2">Entry Details:</h3>
                  <p className="text-sm text-gray-600">
                    <strong>Name:</strong> {leadData.firstName} {leadData.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {leadData.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Entry Date:</strong> {new Date().toLocaleDateString()}
                  </p>
                </div>
              )}

              <div className="text-center">
                <p className="text-gray-600 mb-2">Winner will be announced on:</p>
                <p className="text-xl font-bold text-green-600">May 15, 2025</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-bold text-center mb-4">Double Your Chances!</h3>
              <p className="text-center text-gray-600 mb-4">
                Share this contest with friends to earn an additional entry!
              </p>
              <div className="flex justify-center mb-6">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share with Friends
                </Button>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Explore More Offers</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Check out these exclusive partner offers while you wait for the drawing results!
                </p>
                <Link href="/offers/more">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View More Exclusive Offers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              <Link href="/rules" className="text-xs text-gray-500 hover:text-gray-700">
                Contest Rules
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
