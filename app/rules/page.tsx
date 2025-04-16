import Link from "next/link"
import { Gift } from "lucide-react"

export default function RulesPage() {
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
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">REWARDS CLAIMER INSTANT WIN SWEEPSTAKES</h1>
            <h2 className="text-xl font-bold mb-6 text-center">OFFICIAL RULES</h2>

            <div className="prose prose-sm max-w-none">
              <p className="font-medium text-center mb-6">
                NO PURCHASE OR PAYMENT IS NECESSARY TO ENTER OR WIN. A PURCHASE OR PAYMENT OF ANY KIND WILL NOT INCREASE
                YOUR CHANCES OF WINNING.
              </p>

              <div className="mb-6">
                <p className="font-medium">1. Eligibility.</p>
                <p>
                  Only open to residents of the 50 United States (and DC), age 18 and older. Void where prohibited or
                  restricted by law. Employees of Sponsor and its affiliates, its dealers, its advertising and
                  promotional agencies, its judging organization, manufacturers or distributors of Sweepstakes and their
                  immediate families in the same household are not eligible. All federal, state and local laws and
                  regulations apply. This sweepstakes is intended for viewing in the United States only and shall only
                  be construed and evaluated according to United States law. You are not authorized to participate in
                  the Sweepstakes if you are not located within the United States.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">2. Timing.</p>
                <p>
                  The Sweepstakes starts at 12:00 AM CST on the first of the month or once the last winner was finalized
                  and ends the sooner of: i) once the prize has been awarded; or ii) the last day of the month at 11:59
                  PM CST (the "Entry Period"). The Sweepstakes automatically renews at the end of each Entry Period
                  until the Sponsor terminates the Sweepstakes, which it may do in its sole discretion, at any time at
                  the conclusion of any Entry Period.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">3. To Enter.</p>
                <p>
                  To enter, go to prizestash.com and enter by providing your email address, name, phone number, gender,
                  address and date of birth. No mechanically reproduced entries will be accepted. Limit one entry per
                  person and per e-mail address during the Entry Period. Sponsor will not verify receipt of entries. In
                  case of dispute, entries will be declared made by the authorized account holder of the e-mail address
                  submitted at the time of entry. "Authorized account holder" is defined as the natural person who is
                  assigned to an e-mail address by an Internet Access Provider, on-line service provider, or other
                  organization (e.g., business, educational institution, etc.) that is responsible for assigning e-mail
                  addresses for the domain associated with the submitted e-mail address. Entries become property of
                  Sponsor and will not be returned. Automated entries are prohibited, and any use of such automated
                  devices will cause disqualification. Sponsor and its advertising and promotions agencies are not
                  responsible for lost, late, illegible, misdirected or stolen entries or transmissions, or problems of
                  any kind whether mechanical, human or electronic. Sweepstakes entries are the property of Sponsor and
                  will not be returned.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">4. Drawing and Awarding of Prize.</p>
                <p>
                  One entrant will be randomly selected during the Entry Period. Sponsor's decisions are final on all
                  matters relating to this Sweepstakes. Winner of the Sweepstakes will be notified by email on or about
                  the date of the winner determination. If potential winner cannot be reached within two (2) calendar
                  days from the first notification attempt, then such person shall be disqualified and an alternate
                  winner will be selected. Winner will be required to sign an affidavit of eligibility and
                  liability/publicity release within 5 days after notification is mailed, or prize will be forfeited and
                  awarded to an alternate winner.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">5. Odds.</p>
                <p>
                  Odds of winning are determined based on the number of entries received and the time at which entry
                  occurs compared to randomly selected time.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">6. Grand Prize.</p>
                <p>
                  One (1) grand prize will be awarded. Grand prize winner will receive five hundred dollars ($500).
                  Prize cannot be transferred, substituted except at Sponsor's sole discretion. Prize is not
                  transferable. All federal, state, and local tax liabilities, as well as any other costs and expenses
                  not specified herein as being awarded are the sole responsibility of the Winner. Winner may be
                  required to complete and return an IRS W-9 form (i.e. Request for Taxpayer Identification Number and
                  Certification). Prize will be awarded only if the potential prize winner fully complies with these
                  Official Rules. Sponsor reserves the right to substitute a prize with a prize of equal or greater
                  value.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">7. General Conditions.</p>
                <p>
                  Sponsor and its subsidiaries, affiliates, divisions, partners, representatives, agents, successors,
                  assigns, employees, officers and directors shall not have any obligation or responsibility, including
                  any responsibility to award any prize to entrants, with regard to: (a) entries that contain inaccurate
                  information or do not comply with or violate the Official Rules; (b) entries, prize claims or
                  notifications that are lost, late, incomplete, illegible, unintelligible, damaged or otherwise not
                  received by the intended recipient, in whole or in part, due to computer, human or technical error of
                  any kind; (c) entrants who have committed fraud or deception in entering or participating in the
                  Sweepstakes or claiming the prize; (d) telephone, electronic, hardware, software, network, Internet or
                  computer malfunctions, failures or difficulties; (e) any inability of the winner to accept the prize
                  for any reason; (f) if a prize cannot be awarded due to delays or interruptions due to Acts of God,
                  natural disasters, terrorism, weather or any other similar event beyond Sponsor's reasonable control;
                  or (g) any damages, injuries or losses of any kind caused by any prize or resulting from awarding,
                  acceptance, possession, use, misuse, loss or misdirection of any prize or resulting from participating
                  in this Sweepstakes or any promotion or prize related activities.
                </p>
                <p className="mt-2">
                  Sponsor reserves the right, in its sole discretion, to disqualify any individual it finds to be (a)
                  tampering with the entry process or the operation of the Sweepstakes, or with any Website promoting
                  the Sweepstakes; (b) acting in violation of the Official Rules; or (c) entering or attempting to enter
                  the Sweepstakes multiple times through the use of multiple email addresses or the use of any robotic
                  or automated devices to submit entries. If Sponsor determines, in its sole discretion, that technical
                  difficulties or unforeseen events compromise the integrity or viability of the Sweepstakes, Sponsor
                  reserves the right to void the entries at issue, and/or terminate the relevant portion of the
                  Sweepstakes, including the entire Sweepstakes, and/or modify the Sweepstakes and/or award the prize
                  from all eligible entries received as of the termination date. In the event there is a discrepancy or
                  inconsistency between disclosures or other statements contained in any Sweepstakes-related materials,
                  privacy policy or terms of use on any website, social media platform or application and/or the terms
                  and conditions of the Official Rules, the Official Rules shall prevail, govern and control and the
                  discrepancy will be resolved in Sponsor's sole and absolute discretion.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">8. Limitation of Liability.</p>
                <p>
                  Winners agree that (except where prohibited) Sponsor may use winner's name, picture, portrait,
                  likeness and voice for advertising and promotional purposes without further compensation. Sponsor, its
                  promotional and advertising agencies, and all respective officers directors, employees,
                  representatives and agents shall have no liability and shall be held harmless by winners for any
                  damage, loss or liability to person or property, due in whole or part, directly or indirectly, by
                  reason of the acceptance, possession, use or misuse of prize or participation in this Sweepstakes. Any
                  and all disputes, claims and causes of action arising out of or connected with this Sweepstakes, or
                  any prizes awarded, shall be resolved individually, without resort to any form of class action, and
                  exclusively by arbitration. Any and all claims, judgments and awards shall be limited to actual
                  out-of- pocket costs incurred, including costs associated with entering this Sweepstakes, but in no
                  event attorney's fees.
                </p>
                <p className="mt-2">
                  Sponsor reserves the right, in its sole discretion, to cancel or suspend part or all of this
                  Sweepstakes should virus, bugs, non-authorized human intervention or other causes beyond the control
                  of Sponsor corrupt or impair the administration, security, fairness or proper play of the Sweepstakes.
                  In such an event, Sponsor may award prizes in a random drawing from all eligible entries received up
                  to the date of cancellation or suspension. Sponsor and its promotion and advertising agencies are not
                  responsible for technical, hardware, software or telephone failures of any kind, lost or unavailable
                  network connections, fraud, incomplete, garbled or delayed computer transmissions, whether caused by
                  the Sponsor, users or by any of the equipment or programming associated with or utilized in the
                  promotion or by any technical or human error which may occur in the processing of submissions which
                  may damage a user's system or limit a participant's ability to participate in the promotion. Sponsor
                  may prohibit an entrant from participating in the Sweepstakes or winning a prize if, in its sole
                  discretion, it determines that said entrant is attempting to undermine the legitimate operation of the
                  Sweepstakes by cheating, hacking, deception, or other unfair playing practices (including the use of
                  automated quick entry programs) or intending to annoy, abuse, threaten or harass any other entrants or
                  Sponsor representatives.
                </p>
              </div>

              <div className="mb-6">
                <p className="font-medium">9. Winners List.</p>
                <p>
                  For Sweepstakes results, send an email with the subject line of "Winners List" to
                  support@rewardsclaimer.com. Requests for the Winner's List must be received within three months of the
                  conclusion of the respective Entry Period.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-green-600 hover:underline">
                Return to Home Page
              </Link>
            </div>
          </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
