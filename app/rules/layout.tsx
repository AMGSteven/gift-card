import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contest Rules - RewardsClaimer",
  description: "Official rules for the RewardsClaimer $500 gift card sweepstakes.",
}

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
