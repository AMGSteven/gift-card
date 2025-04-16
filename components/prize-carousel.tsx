"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const prizes = [
  {
    id: 1,
    name: "Visa Gift Card",
    value: "$500",
    image: "/visa-gift-card.png",
    popular: true,
    remaining: 7,
  },
  {
    id: 2,
    name: "Amazon Gift Card",
    value: "$500",
    image: "/amazon-gift-card.png",
    popular: false,
    remaining: 5,
  },
  {
    id: 3,
    name: "Target Gift Card",
    value: "$500",
    image: "/target-gift-card.png",
    popular: false,
    remaining: 3,
  },
  {
    id: 4,
    name: "Walmart Gift Card",
    value: "$500",
    image: "/walmart-gift-card.png",
    popular: false,
    remaining: 4,
  },
]

export function PrizeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % prizes.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + prizes.length) % prizes.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mb-12 relative">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Prize</h2>

      <div className="relative overflow-hidden rounded-xl border shadow-md">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {prizes.map((prize) => (
            <div key={prize.id} className="w-full flex-shrink-0">
              <div className="bg-white p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative md:w-1/3">
                    {prize.popular && (
                      <div className="absolute -top-3 -left-3 bg-yellow-400 text-yellow-800 px-2 py-1 rounded-md text-xs font-bold z-10">
                        MOST POPULAR!
                      </div>
                    )}
                    <div className="relative">
                      <Image
                        src={prize.image || "/placeholder.svg"}
                        width={250}
                        height={150}
                        alt={prize.name}
                        className="rounded-lg object-contain mx-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-center text-xs py-1">
                        Only {prize.remaining} left today!
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{prize.name}</h3>
                    <p className="text-3xl font-bold text-green-600 mb-4">{prize.value}</p>
                    <p className="text-gray-600 mb-4">
                      This {prize.name} can be used anywhere {prize.name.split(" ")[0]} is accepted. Perfect for
                      shopping, dining, or whatever you desire!
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        <span className="font-bold">1,437 people</span> claimed this offer this week!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {prizes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-green-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
