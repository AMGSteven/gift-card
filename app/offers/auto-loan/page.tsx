"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { OfferPageLayout } from "@/components/offer-page-layout"
import { cn } from "@/lib/utils"

// Enhanced validation schema
const formSchema = z.object({
  hasCarLoan: z.enum(["yes", "no"], {
    required_error: "Please select whether you have a car loan",
  }),
  carYear: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}$/.test(val) || val === "older", {
      message: "Please select a valid year",
    }),
  loanAmount: z
    .string()
    .optional()
    .refine((val) => !val || ["less5k", "5k-10k", "10k-15k", "15k-25k", "25k+"].includes(val), {
      message: "Please select a valid loan amount",
    }),
  creditScore: z.string().min(1, { message: "Please select your credit score range" }),
})

export default function AutoLoanOfferPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasCarLoan: "yes",
      carYear: "",
      loanAmount: "",
      creditScore: "",
    },
    mode: "onChange", // Enable validation as user types
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // In a real application, you would submit this data to your backend
    console.log(values)

    // Store form data in session storage
    const existingData = sessionStorage.getItem("offerData")
      ? JSON.parse(sessionStorage.getItem("offerData") || "{}")
      : {}

    sessionStorage.setItem(
      "offerData",
      JSON.stringify({
        ...existingData,
        autoLoan: values,
      }),
    )

    // Redirect to the next offer page
    setTimeout(() => {
      router.push("/offers/debt-relief")
    }, 500)
  }

  return (
    <OfferPageLayout
      currentStep={1}
      totalSteps={8}
      title="Save Money on Auto Payments!"
      subtitle="See if you qualify for lower rates on your auto loan"
      imageSrc="/offer-auto-loan.png"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="hasCarLoan"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Do you currently have a car loan?*</FormLabel>
                <FormControl>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={field.value === "yes" ? "default" : "outline"}
                      className={cn(
                        field.value === "yes" ? "bg-green-600 hover:bg-green-700" : "",
                        "w-full transition-all duration-200",
                      )}
                      onClick={() => field.onChange("yes")}
                    >
                      Yes
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === "no" ? "default" : "outline"}
                      className={cn(
                        field.value === "no" ? "bg-green-600 hover:bg-green-700" : "",
                        "w-full transition-all duration-200",
                      )}
                      onClick={() => field.onChange("no")}
                    >
                      No
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          {form.watch("hasCarLoan") === "yes" && (
            <>
              <FormField
                control={form.control}
                name="carYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">What year is your vehicle?*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            "border-2 focus:border-green-500 h-11",
                            form.formState.errors.carYear ? "border-red-300" : "border-gray-200",
                          )}
                        >
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => {
                          const year = new Date().getFullYear() - i
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          )
                        })}
                        <SelectItem value="older">Older</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="loanAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Approximate remaining loan amount*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            "border-2 focus:border-green-500 h-11",
                            form.formState.errors.loanAmount ? "border-red-300" : "border-gray-200",
                          )}
                        >
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="less5k">Less than $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-15k">$10,000 - $15,000</SelectItem>
                        <SelectItem value="15k-25k">$15,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">More than $25,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="creditScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">What is your estimated credit score?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        "border-2 focus:border-green-500 h-11",
                        form.formState.errors.creditScore ? "border-red-300" : "border-gray-200",
                      )}
                    >
                      <SelectValue placeholder="Select credit score range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (720+)</SelectItem>
                    <SelectItem value="good">Good (680-719)</SelectItem>
                    <SelectItem value="fair">Fair (620-679)</SelectItem>
                    <SelectItem value="poor">Poor (580-619)</SelectItem>
                    <SelectItem value="bad">Bad (Below 580)</SelectItem>
                    <SelectItem value="unknown">I don't know</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2">
            <p className="text-sm">
              By continuing, I agree to receive marketing communications via automated telephone calls, text messages,
              and emails from auto loan providers and their partners regarding auto loan offers at the phone number
              provided in my registration, even if my number is on a do-not-call list. I understand consent is not a
              condition of purchase. Message & data rates may apply.
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || !form.formState.isValid}
              className={cn(
                "w-full py-4 rounded-lg text-lg font-bold transition-all duration-300",
                form.formState.isValid
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed",
              )}
            >
              {isSubmitting ? "Processing..." : "Continue to Next Offer"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex justify-center mt-4">
              <Link href="/offers/debt-relief" className="text-sm text-gray-500 hover:text-gray-700">
                Skip this offer
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </OfferPageLayout>
  )
}
