"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, CheckCircle } from "lucide-react"

type Winner = {
  name: string
  location: string
  prize: string
  date: string
  image: string
  verified: boolean
}

export function RecentWinners() {
  const [winners, setWinners] = useState<Winner[]>([
    {
      name: "Sarah T.",
      location: "Portland, OR",
      prize: "$500 Gift Card",
      date: "2 days ago",
      image: "/winner-1.png",
      verified: true,
    },
    {
      name: "Michael R.",
      location: "Austin, TX",
      prize: "$500 Gift Card",
      date: "5 days ago",
      image: "/winner-2.png",
      verified: true,
    },
    {
      name: "Jennifer L.",
      location: "Chicago, IL",
      prize: "$500 Gift Card",
      date: "1 week ago",
      image: "/winner-3.png",
      verified: true,
    },
    {
      name: "David M.",
      location: "Miami, FL",
      prize: "$500 Gift Card",
      date: "2 weeks ago",
      image: "/winner-4.png",
      verified: true,
    },
  ])

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <h3 className="text-lg font-bold mb-4">Recent Winners</h3>

      <div className="space-y-4">
        {winners.map((winner, index) => (
          <div key={index} className="flex items-center space-x-3 border-b pb-3 last:border-0 last:pb-0">
            <div className="relative flex-shrink-0">
              <Image
                src={winner.image || "/placeholder.svg"}
                width={50}
                height={50}
                alt={winner.name}
                className="rounded-full object-cover"
              />
              {winner.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-100 rounded-full p-0.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">{winner.name}</p>
                <p className="text-xs text-gray-500">{winner.date}</p>
              </div>
              <p className="text-sm text-gray-600">{winner.location}</p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-green-600 ml-2">Won {winner.prize}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t text-center">
        <p className="text-sm text-gray-600">
          <span className="font-bold text-green-600">1,437 people</span> claimed this offer this week!
        </p>
      </div>
    </div>
  )
}
