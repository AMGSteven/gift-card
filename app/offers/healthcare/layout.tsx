import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Offers - RewardsClaimer",
  description: "Find affordable healthcare options with our partner offers.",
}

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
