import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Registration Confirmed - RewardsClaimer",
  description: "Your entry has been confirmed. Thank you for registering!",
}

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
