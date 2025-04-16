"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function LiveVisitors() {
  const [visitorCount, setVisitorCount] = useState(37)
  const [recentWinner, setRecentWinner] = useState({
    name: "Sarah T.",
    location: "Portland",
    showing: true,
  })

  // Randomly fluctuate visitor count
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 5) - 2 // -2 to +2
      setVisitorCount((prev) => Math.max(20, Math.min(50, prev + change)))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Cycle through recent winners
  useEffect(() => {
    const winners = [
      { name: "Sarah T.", location: "Portland" },
      { name: "Michael R.", location: "Austin" },
      { name: "Jennifer L.", location: "Chicago" },
      { name: "David M.", location: "Miami" },
    ]

    let index = 0

    const interval = setInterval(() => {
      setRecentWinner({ ...winners[index], showing: false })

      setTimeout(() => {
        index = (index + 1) % winners.length
        setRecentWinner({ ...winners[index], showing: true })
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-2">
      <div className="bg-white border shadow-md rounded-full px-3 py-1.5 flex items-center text-sm animate-fadeIn">
        <Users className="h-4 w-4 text-green-600 mr-2" />
        <span>
          <strong>{visitorCount}</strong> people viewing this offer right now
        </span>
      </div>

      <div
        className={`bg-green-600 text-white border shadow-md rounded-full px-3 py-1.5 flex items-center text-sm transition-opacity duration-500 ${recentWinner.showing ? "opacity-100" : "opacity-0"}`}
      >
        <span className="animate-pulse mr-2">●</span>
        <span>
          <strong>{recentWinner.name}</strong> from {recentWinner.location} just won $500!
        </span>
      </div>
    </div>
  )
}
