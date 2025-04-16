"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered && !sessionStorage.getItem("exitPopupShown")) {
        setIsVisible(true)
        setHasTriggered(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    // Add a delay before enabling the exit intent detection
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasTriggered])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-gradient-to-r from-green-600 to-green-400 p-4 text-white text-center">
          <h3 className="text-xl font-bold">WAIT!</h3>
          <p>Your $500 Gift Card is Still Reserved For You!</p>
        </div>

        <div className="p-6">
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Image
                src="/elegant-gold-gift-card.png"
                width={128}
                height={128}
                alt="$500 Gift Card"
                className="relative rounded-lg"
              />
            </div>
          </div>

          <h4 className="text-lg font-bold text-center mb-2">Don't Miss Your Chance!</h4>
          <p className="text-gray-600 text-center mb-4">
            You were selected for this exclusive offer. Complete your registration now before someone else claims your
            gift card!
          </p>

          <Button
            onClick={() => setIsVisible(false)}
            className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white py-6 rounded-lg text-lg font-bold"
          >
            YES! I WANT TO WIN!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="text-center mt-4">
            <button onClick={() => setIsVisible(false)} className="text-sm text-gray-500 hover:text-gray-700">
              No thanks, I don't want a chance to win $500
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
