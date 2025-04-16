"use client"

import { useState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function BonusOffers() {
  const [surveyCompleted, setSurveyCompleted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleSurveySubmit = () => {
    if (selectedAnswer !== null) {
      setSurveyCompleted(true)
    }
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">Your entry has been received and is being processed!</p>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 inline-block">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Complete the bonus offers below to maximize your chances of winning!
          </p>
        </div>
      </div>

      {!surveyCompleted ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="text-xl font-bold mb-4 text-center">Quick Survey - Double Your Chances!</h4>
          <p className="text-gray-600 mb-6 text-center">Answer one question to double your chances of winning!</p>

          <div className="space-y-3 mb-6">
            <p className="font-medium">Which of these products are you most interested in?</p>
            {["Home Insurance", "Auto Insurance", "Credit Cards", "Personal Loans"].map((option, index) => (
              <div
                key={index}
                className={`border rounded-lg p-3 cursor-pointer transition-all ${
                  selectedAnswer === index ? "border-blue-500 bg-blue-50" : "hover:border-blue-300"
                }`}
                onClick={() => setSelectedAnswer(index)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedAnswer === index ? "border-blue-500 bg-blue-500" : "border-gray-300"
                    }`}
                  >
                    {selectedAnswer === index && <CheckCircle className="h-4 w-4 text-white" />}
                  </div>
                  <span className="ml-3">{option}</span>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleSurveySubmit}
            disabled={selectedAnswer === null}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Submit & Double Your Chances
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-2" />
            <p className="text-green-800 font-medium">Your chances have been doubled!</p>
          </div>

          <h4 className="text-xl font-bold mb-4">Exclusive Partner Offers</h4>
          <p className="text-gray-600 mb-6">
            Check out these special offers from our partners while we process your entry!
          </p>

          <div className="grid gap-4">
            {[
              {
                title: "Save up to $500 on Home Insurance",
                image: "/offer-home-insurance.png",
                description: "Compare quotes from top providers and save hundreds!",
                cta: "Get Free Quote",
              },
              {
                title: "Earn 50,000 Bonus Points",
                image: "/offer-credit-card.png",
                description: "Apply for our premium credit card and earn bonus points on first purchase",
                cta: "Apply Now",
              },
              {
                title: "Personal Loans up to $50,000",
                image: "/offer-personal-loan.png",
                description: "Low rates, fast approval, funds as soon as tomorrow",
                cta: "Check Your Rate",
              },
            ].map((offer, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 bg-gray-100 p-4 flex items-center justify-center">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      width={120}
                      height={120}
                      alt={offer.title}
                      className="object-contain"
                    />
                  </div>
                  <div className="sm:w-2/3 p-4">
                    <h5 className="font-bold mb-2">{offer.title}</h5>
                    <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      {offer.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="text-blue-600 hover:underline">
              Skip offers and return to homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
