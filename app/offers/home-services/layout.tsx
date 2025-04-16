import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Services Offers - RewardsClaimer",
  description: "Save on home services with exclusive offers from our partners.",
}

export default function HomeServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
