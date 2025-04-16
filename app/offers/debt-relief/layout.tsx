import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Debt Relief Offers - RewardsClaimer",
  description: "Find debt relief solutions and save thousands with our partner offers.",
}

export default function DebtReliefLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
