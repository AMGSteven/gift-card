"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { OfferPageLayout } from "@/components/offer-page-layout"
import { cn } from "@/lib/utils"

// Enhanced validation schema
const formSchema = z.object({
  homeOwner: z.enum(["yes", "no"], {
    required_error: "Please select whether you are a homeowner",
  }),
  interestedServices: z.array(z.string()).min(1, {
    message: "Please select at least one service you're interested in",
  }),
})

export default function HomeServicesOfferPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homeOwner: "yes",
      interestedServices: [],
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
        homeServices: values,
      }),
    )

    // Redirect to the next offer page
    setTimeout(() => {
      router.push("/offers/healthcare")
    }, 500)
  }

  return (
    <OfferPageLayout
      currentStep={3}
      totalSteps={8}
      title="Homeowners: Save Thousands on Home Expenses!"
      subtitle="Discover exclusive offers on home services"
      imageSrc="/offer-home-services.png"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="homeOwner"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-medium">Are you a homeowner?*</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />

          {form.watch("homeOwner") === "yes" && (
            <FormField
              control={form.control}
              name="interestedServices"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="font-medium">Which home services are you interested in?*</FormLabel>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Solar Panels", "Home Warranty", "Home Security", "HVAC Services", "Roofing", "Windows"].map(
                      (item) => (
                        <FormField
                          key={item}
                          control={form.control}
                          name="interestedServices"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item}
                                className={cn(
                                  "flex flex-row items-start space-x-3 space-y-0 border rounded-md p-3 transition-all duration-200",
                                  field.value?.includes(item)
                                    ? "border-green-500 bg-green-50"
                                    : "border-gray-200 hover:border-green-300",
                                )}
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item])
                                        : field.onChange(field.value?.filter((value) => value !== item))
                                    }}
                                    className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">{item}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ),
                    )}
                  </div>
                </FormItem>
              )}
            />
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-2">
            <p className="text-sm">
              By continuing, I agree to receive marketing communications via automated telephone calls, text messages,
              and emails from home service providers and their partners regarding home improvement offers at the phone
              number provided in my registration, even if my number is on a do-not-call list. I understand consent is
              not a condition of purchase. Message & data rates may apply.
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
              <Link href="/offers/healthcare" className="text-sm text-gray-500 hover:text-gray-700">
                Skip this offer
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </OfferPageLayout>
  )
}
