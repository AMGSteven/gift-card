"use client"

import type React from "react"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight, Hand, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Helper function to format phone number as user types
const formatPhoneNumber = (value: string) => {
  if (!value) return value

  // Remove all non-digits
  const phoneNumber = value.replace(/[^\d]/g, "")

  // Format based on length
  if (phoneNumber.length < 4) return phoneNumber
  if (phoneNumber.length < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

// Helper function to format zip code
const formatZipCode = (value: string) => {
  if (!value) return value
  return value.replace(/[^\d]/g, "").slice(0, 5)
}

// Enhanced validation schema
const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .refine((val) => /^$$\d{3}$$ \d{3}-\d{4}$/.test(val) || /^\d{10}$/.test(val.replace(/[^\d]/g, "")), {
      message: "Phone number must be 10 digits",
    }),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .refine((val) => /^[a-zA-Z\s'-]+$/.test(val), {
      message: "First name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .refine((val) => /^[a-zA-Z\s'-]+$/.test(val), {
      message: "Last name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  city: z
    .string()
    .min(2, { message: "City is required" })
    .max(50, { message: "City name cannot exceed 50 characters" })
    .refine((val) => /^[a-zA-Z\s'-]+$/.test(val), {
      message: "City can only contain letters, spaces, hyphens, and apostrophes",
    }),
  state: z
    .string()
    .min(2, { message: "State is required" })
    .max(2, { message: "Please use 2-letter state code" })
    .refine((val) => /^[A-Z]{2}$/.test(val.toUpperCase()), {
      message: "Please enter a valid 2-letter state code",
    }),
  zipCode: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{5}$/.test(val), {
      message: "Zip code must be 5 digits",
    }),
})

export function TCPARegistrationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
    },
    mode: "onChange", // Enable validation as user types
  })

  // Add these custom handlers for phone, zip code and state formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formatted = formatPhoneNumber(value)
    form.setValue("phone", formatted, { shouldValidate: true })
  }

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formatted = value.replace(/[^\d]/g, "").slice(0, 5)
    form.setValue("zipCode", formatted, { shouldValidate: true })
  }

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    form.setValue("state", value.toUpperCase().slice(0, 2), { shouldValidate: true })
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // In a real application, you would submit this data to your backend
    console.log(values)

    // Store form data in session storage for the funnel
    sessionStorage.setItem("leadData", JSON.stringify(values))

    // Redirect to the first offer page
    setTimeout(() => {
      router.push("/offers/auto-loan")
    }, 500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Primary Data Collection Fields */}
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium flex items-center">
                  Email Address*
                  <span className="ml-1 text-xs text-green-600">(For confirmation)</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="your.email@example.com"
                      {...field}
                      className={cn(
                        "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                        form.formState.errors.email ? "border-red-300 focus:border-red-500" : "border-gray-200",
                      )}
                    />
                    {form.formState.errors.email ? (
                      <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                    ) : field.value && !form.formState.errors.email ? (
                      <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                    ) : null}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium flex items-center">
                  Phone Number*
                  <span className="ml-1 text-xs text-green-600">(Required for prize notification)</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="(555) 123-4567"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        handlePhoneChange(e)
                      }}
                      className={cn(
                        "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                        form.formState.errors.phone ? "border-red-300 focus:border-red-500" : "border-gray-200",
                      )}
                    />
                    {form.formState.errors.phone ? (
                      <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                    ) : field.value && !form.formState.errors.phone ? (
                      <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                    ) : null}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">First Name*</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="John"
                      {...field}
                      className={cn(
                        "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                        form.formState.errors.firstName ? "border-red-300 focus:border-red-500" : "border-gray-200",
                      )}
                    />
                    {form.formState.errors.firstName ? (
                      <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                    ) : field.value && !form.formState.errors.firstName ? (
                      <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                    ) : null}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">Last Name*</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Doe"
                      {...field}
                      className={cn(
                        "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                        form.formState.errors.lastName ? "border-red-300 focus:border-red-500" : "border-gray-200",
                      )}
                    />
                    {form.formState.errors.lastName ? (
                      <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                    ) : field.value && !form.formState.errors.lastName ? (
                      <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                    ) : null}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium">City*</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="New York"
                      {...field}
                      className={cn(
                        "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                        form.formState.errors.city ? "border-red-300 focus:border-red-500" : "border-gray-200",
                      )}
                    />
                    {form.formState.errors.city ? (
                      <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                    ) : field.value && !form.formState.errors.city ? (
                      <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                    ) : null}
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">State*</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="NY"
                        {...field}
                        maxLength={2}
                        onChange={(e) => {
                          field.onChange(e)
                          handleStateChange(e)
                        }}
                        className={cn(
                          "border-2 focus:border-green-500 h-11 pl-3 pr-10 uppercase",
                          form.formState.errors.state ? "border-red-300 focus:border-red-500" : "border-gray-200",
                        )}
                      />
                      {form.formState.errors.state ? (
                        <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                      ) : field.value && !form.formState.errors.state ? (
                        <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                      ) : null}
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs font-medium text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Zip*</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="10001"
                        {...field}
                        maxLength={5}
                        onChange={(e) => {
                          field.onChange(e)
                          handleZipChange(e)
                        }}
                        className={cn(
                          "border-2 focus:border-green-500 h-11 pl-3 pr-10",
                          form.formState.errors.zipCode ? "border-red-300 focus:border-red-500" : "border-gray-200",
                        )}
                      />
                      {form.formState.errors.zipCode ? (
                        <AlertCircle className="h-5 w-5 text-red-500 absolute right-3 top-3" />
                      ) : field.value && !form.formState.errors.zipCode ? (
                        <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-3" />
                      ) : null}
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs font-medium text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-md p-3 mt-2">
          <p className="text-sm">
            By submitting this form, I am providing my digital signature and expressly consenting to receive marketing
            communications via automated telephone calls, text messages, and emails from RewardsClaimer and our{" "}
            <Link
              href="https://jmcustomerprivacy.com/marketing-partners"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              marketing partners
            </Link>{" "}
            regarding offers for financial services, home services, insurance products, auto loans, credit card debt
            relief, sweepstakes, healthcare services including Medicare/ACA options, and other products at the phone
            number provided above, even if my number is on a do-not-call list. I understand consent is not a condition
            of purchase. Message & data rates may apply. I can opt-out at any time by texting STOP.
          </p>
        </div>

        <div className="pt-2">
          <div className="relative">
            <Button
              type="submit"
              disabled={isSubmitting || !form.formState.isValid}
              className={cn(
                "w-full py-6 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105",
                form.formState.isValid
                  ? "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white animate-pulse"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed",
              )}
            >
              {isSubmitting ? "Processing..." : "CLAIM YOUR $500 GIFT CARD NOW!"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Hand className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-8 w-8 text-yellow-500 animate-bounce hidden md:block" />
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Your information is secure and will be used in accordance with our{" "}
            <Link
              href="https://jmcustomerprivacy.com/privacy-policy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}
