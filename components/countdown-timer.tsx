"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  hours: number
  minutes: number
  seconds: number
  small?: boolean
}

export function CountdownTimer({ hours, minutes, seconds, small = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1

        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds }
        }

        const newMinutes = prevTime.minutes - 1

        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 }
        }

        const newHours = prevTime.hours - 1

        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 }
        }

        clearInterval(timer)
        return { hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  if (small) {
    return (
      <div className="text-red-600 font-bold">
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded-md">
      <Clock className="h-4 w-4" />
      <div className="text-sm font-bold">
        Offer expires in: {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:
        {formatNumber(timeLeft.seconds)}
      </div>
    </div>
  )
}
