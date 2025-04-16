"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function MarketingPartners() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Marketing Partners</h3>
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

      <p className="text-sm text-gray-600 mb-4">
        By registering, you consent to receive communications from our marketing partners. Your information may be
        shared with these partners to bring you valuable offers.
      </p>

      {isExpanded && (
        <div className="border-t pt-4 mt-4">
          <h4 className="font-medium mb-2 text-sm">Current Marketing Partners:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Premium Rewards Group</li>
            <li>• Consumer Insights Network</li>
            <li>• Market Research Partners</li>
            <li>• Digital Offers Alliance</li>
            <li>• Shopper Rewards Program</li>
            <li>• Consumer Benefits Network</li>
            <li>• Financial Services Partners</li>
            <li>• Insurance Quote Network</li>
            <li>• Home Services Alliance</li>
            <li>• Travel Rewards Consortium</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            This list is subject to change. For a complete and up-to-date list, please refer to our privacy policy.
          </p>
        </div>
      )}
    </div>
  )
}
