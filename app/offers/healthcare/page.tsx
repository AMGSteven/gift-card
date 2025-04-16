"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { OfferPageLayout } from "@/components/offer-page-layout"
import { cn } from "@/lib/utils"

// Enhanced validation schema
const formSchema = z.object({
  insuranceStatus: z.enum(["insured", "uninsured", "medicare", "medicaid"], {
    required_error: "Please select your insurance status",
  }),
  age: z.string().min(1, { message: "Please select your age range" }),
  healthConcerns: z.enum(["none", "minor", "chronic", "serious"], {
    required_error: "Please select your health concerns",
  }),
})

export default function HealthcareOfferPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuranceStatus: "uninsured",
      age: "",
      healthConcerns: "none",
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
        healthcare: values,
      }),
    )

    // Redirect to the next offer page
    setTimeout(() => {
      router.push("/offers/insurance")
    }, 500)
  }

  return (
    <OfferPageLayout
      currentStep={4}
      totalSteps={8}
      title="Find Affordable Healthcare Coverage"
      subtitle="Discover healthcare options tailored to your needs"
      imageSrc="/diverse-hands-healthcare.png"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="insuranceStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-medium">What is your current insurance status?*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-2"
                  >
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "insured" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="insured" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Privately Insured</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "uninsured" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="uninsured" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Uninsured</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "medicare" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="medicare" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Medicare</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "medicaid" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="medicaid" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Medicaid</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">What is your age range?*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        "border-2 focus:border-green-500 h-11",
                        form.formState.errors.age ? "border-red-300" : "border-gray-200",
                      )}
                    >
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="18-25">18-25</SelectItem>
                    <SelectItem value="26-35">26-35</SelectItem>
                    <SelectItem value="36-45">36-45</SelectItem>
                    <SelectItem value="46-55">46-55</SelectItem>
                    <SelectItem value="56-64">56-64</SelectItem>
                    <SelectItem value="65+">65 or older</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="healthConcerns"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-medium">Do you have any health concerns?*</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-2"
                  >
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "none" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">None</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "minor" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="minor" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Minor</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "chronic" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="chronic" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Chronic</FormLabel>
                    </FormItem>
                    <FormItem
                      className={cn(
                        "flex items-center space-x-3 space-y-0 rounded-md border p-3 transition-all duration-200",
                        field.value === "serious" ? "border-green-500 bg-green-50" : "border-gray-200",
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="serious" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Serious</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2">
            <p className="text-sm">
              By continuing, I agree to receive marketing communications via automated telephone calls, text messages,
              and emails from healthcare providers and their partners regarding healthcare options at the phone number
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
              <Link href="/offers/insurance" className="text-sm text-gray-500 hover:text-gray-700">
                Skip this offer
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </OfferPageLayout>
  )
}
