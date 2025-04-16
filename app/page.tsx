import Image from "next/image"
import Link from "next/link"
import { TCPARegistrationForm } from "@/components/tcpa-registration-form"
import { ContestRules } from "@/components/contest-rules"
import { LiveVisitors } from "@/components/live-visitors"
import { CountdownTimer } from "@/components/countdown-timer"
import { Shield, Clock, Gift, CheckCircle } from "lucide-react"
import { Star } from "lucide-react"

export default function GiftCardLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b bg-white py-2">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-green-600 text-white flex items-center justify-center">
              <Gift className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">RewardsClaimer</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <CountdownTimer hours={23} minutes={59} seconds={59} />
            </div>
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              LIMITED TIME OFFER
            </div>
          </div>
        </div>
      </header>

      <LiveVisitors />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="text-center mb-2">
            <p className="text-xs text-gray-400">
              *Generic Gift Card is not affiliated with any contests or sweepstakes on RewardsClaimer
            </p>
          </div>

          {/* Hero Section with Form as Central Focus */}
          <section className="mb-8 md:mb-12 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-6">
                <div className="inline-block bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                  CONGRATULATIONS!
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
                  You've Been Selected to WIN a{" "}
                  <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                    $500 Gift Card
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-2">Limited Time Offer - Complete Form Below NOW!</p>
              </div>

              {/* Central Form Container */}
              <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg border-2 border-green-200 p-6 md:p-8 max-w-3xl mx-auto">
                <div className="absolute -top-4 -right-4 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-bold shadow-md animate-pulse">
                  CLAIM NOW
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur-xl opacity-30 animate-pulse"></div>
                      <Image
                        src="/elegant-gold-gift-card.png"
                        width={300}
                        height={200}
                        alt="$500 Gift Card"
                        className="relative rounded-xl shadow-lg"
                        priority
                      />
                      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-green-400 text-white py-2 px-4 rounded-lg shadow-md transform rotate-3 animate-bounce">
                        <span className="text-lg font-bold">$500 Value!</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="mb-4 text-center">
                      <h2 className="text-2xl font-bold">Secure your entry below</h2>
                      <div className="flex justify-center mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1 text-green-600" />
                          <span>Only takes 30 seconds!</span>
                        </div>
                      </div>
                    </div>

                    <TCPARegistrationForm />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 justify-center">
                  <div className="flex items-center bg-white border rounded-full px-3 py-1 text-xs">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                    <span>Verified Giveaway</span>
                  </div>
                  <div className="flex items-center bg-white border rounded-full px-3 py-1 text-xs">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                    <span>1,437 Claimed This Week</span>
                  </div>
                  <div className="flex items-center bg-white border rounded-full px-3 py-1 text-xs">
                    <CheckCircle className="h-3 w-3 text-green-600 mr-1" />
                    <span>30-Second Registration</span>
                  </div>
                  <div className="flex items-center bg-white border rounded-full px-3 py-1 text-xs">
                    <Shield className="h-3 w-3 text-green-600 mr-1" />
                    <span>Secure Form</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow p-4 border flex items-start">
                  <div className="mr-3">
                    <Image src={`/winner-${i}.png`} width={50} height={50} alt="Winner" className="rounded-full" />
                  </div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm font-medium mt-1">
                      "I never win anything! Thank you so much for my gift card!"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Sarah T. - Portland, OR</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contest Rules */}
          <section className="mb-8 max-w-4xl mx-auto">
            <ContestRules />
          </section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} RewardsClaimer. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link
                href="https://jmcustomerprivacy.com/terms-conditions"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </Link>
              <Link
                href="https://jmcustomerprivacy.com/privacy-policy"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://jmcustomerprivacy.com/marketing-partners"
                className="text-xs text-gray-500 hover:text-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marketing Partners
              </Link>
              <Link href="/rules" className="text-xs text-gray-500 hover:text-gray-700">
                Contest Rules
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t max-w-4xl mx-auto">
              <p className="text-[10px] text-gray-500 leading-tight">
                OFFICIAL SWEEPSTAKES DISCLAIMER: NO PURCHASE NECESSARY TO ENTER OR WIN. ODDS OF WINNING: 1 in 1,000,000.
                Limit one (1) entry per person. Not all entrants will win. Only one (1) winner will be selected per
                1,000,000 eligible entries received. Winner will be selected at random from all eligible entries. Prize:
                One (1) $500 Generic Gift Card. ARV: $500.00. Sweepstakes open to legal residents of the United States,
                18 years or older. Void where prohibited by law. Sponsor reserves the right to substitute prize of equal
                or greater value. Winner responsible for all taxes.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
