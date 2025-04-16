"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle, ArrowRight, ChevronLeft, Hand } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { BonusOffers } from "./bonus-offers"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
  marketingConsent: z.boolean().default(true),
  partnerConsent: z.boolean().default(true),
})

export function RegistrationFormMultiStep() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const totalSteps = 3

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      termsAccepted: false,
      marketingConsent: true,
      partnerConsent: true,
    },
  })

  function nextStep() {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would submit this data to your backend
    console.log(values)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return <BonusOffers />
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step > index + 1
                  ? "bg-green-600 text-white"
                  : step === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {step > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-center mb-4">Tell us about yourself</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                      {field.value && <p className="text-xs text-green-600 mt-1">Great! Almost there!</p>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                      {field.value && <p className="text-xs text-green-600 mt-1">Perfect! Keep going!</p>}
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john.doe@example.com"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                      {field.value && field.value.includes("@") && (
                        <p className="text-xs text-green-600 mt-1">Valid email! You're doing great!</p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        Phone Number*
                        <span className="ml-1 text-xs text-green-600">(Required for prize notification)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(555) 123-4567"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                      {field.value && field.value.length >= 10 && (
                        <p className="text-xs text-green-600 mt-1">We'll only call if you win!</p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end mt-6">
                <div className="relative">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white py-6 px-8 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Hand className="absolute -right-8 top-1/2 transform -translate-y-1/2 h-8 w-8 text-yellow-500 animate-bounce" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-center mb-4">Where should we send your prize?</h3>
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123 Main St"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="New York"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="NY"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="10001"
                          {...field}
                          className="transition-all focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-between mt-6">
                <Button type="button" onClick={prevStep} variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white py-6 px-8 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-medium text-center mb-4">Final Step - Almost Done!</h3>

              <FormField
                control={form.control}
                name="marketingConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-gray-50">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-green-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Yes! I want to receive special offers and promotions via email.</FormLabel>
                      <FormDescription>We'll send you exclusive deals and offers from our partners.</FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="partnerConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-gray-50">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-green-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Yes! I agree to receive communications from marketing partners.</FormLabel>
                      <FormDescription>
                        Our partners may contact you with relevant offers and promotions.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-white">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-green-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and consent to receive communications from marketing partners.
                      </FormLabel>
                      <FormDescription>
                        By checking this box, you acknowledge that you have read and agree to our contest rules and
                        privacy policy.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-between mt-6">
                <Button type="button" onClick={prevStep} variant="outline" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white py-6 px-8 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  CLAIM YOUR GIFT CARD NOW!
                </Button>
              </div>
            </div>
          )}

          <p className="text-xs text-center text-gray-500 mt-4">
            Your information is secure and will be used in accordance with our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </Form>
    </div>
  )
}
