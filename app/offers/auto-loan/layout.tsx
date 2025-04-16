import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Loan Offers - RewardsClaimer",
  description: "Save money on your auto loan with exclusive offers from our partners.",
}

export default function AutoLoanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
