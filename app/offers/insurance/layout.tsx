import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insurance Offers - RewardsClaimer",
  description: "Compare insurance quotes and save with our partner offers.",
}

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
