"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ContestRules() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Contest Rules</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-green-600 hover:text-green-800 flex items-center"
        >
          {isExpanded ? (
            <>
              <span className="text-sm mr-1">Hide</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span className="text-sm mr-1">View</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-start space-x-3 mb-4">
        <AlertCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-600">
          <strong>NO PURCHASE NECESSARY TO ENTER OR WIN.</strong> A purchase will not increase your chances of winning.
        </p>
      </div>

      {!isExpanded && (
        <p className="text-sm text-gray-600">
          Users must view marketing offers to gain entry. Prizes are non-transferable and cannot be redeemed for cash.{" "}
          <Link href="/rules" className="text-green-600 hover:underline">
            View complete rules
          </Link>
        </p>
      )}

      {isExpanded && (
        <div className="space-y-4 text-xs text-gray-600 max-h-60 overflow-y-auto pr-2">
          <p>
            The Sweepstakes is open to legal residents of the United States who are at least 18 years of age at the time
            of entry. Odds of winning: 1 in 1,000,000. Limit one entry per person.
          </p>
          <p>
            Prize limitations: One (1) $500 Generic Gift Card will be awarded. Prize substitution may occur at the
            discretion of the contest administrators. Prizes are non-transferable and cannot be redeemed for cash.
          </p>
          <p>
            Winner selection: Winner will be selected in a random drawing from among all eligible entries once the
            minimum entry threshold is reached. Winner will be notified via email and/or phone within 10 days of the
            drawing.
          </p>
          <p className="pt-2">
            <Link href="/rules" className="text-green-600 hover:underline">
              View complete contest rules
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}
