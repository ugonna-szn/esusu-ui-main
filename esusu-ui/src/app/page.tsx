'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  })
})

export default function Home() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Function to handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true)

      if (data.email && data.password) {
        // console.log("Logging in with", { email, password });
        router.push('/dashboard');
      } else {
        console.log('Please enter both email and password');
      }

    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <div
        className="w-1/2 bg-no-repeat bg-cover bg-bottom p-12 text-white flex flex-col justify-between"
        style={{
          backgroundImage: 'url("/splashscreen/login_ui.png")',
        }}
      >
        {/* Content here if you want anything over the background image */}
      </div>
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <div className="self-end mb-5 inline-block cursor-pointer">
          <img 
            src="/logo.png"
            className="h-20 w-20"
          />
        </div>
        <div className="max-w-md mx-auto text-[#333333]">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="mb-6">We&apos;d love to meet you. Kindly provide your details.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-4 mb-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm font-medium" htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="xyz@mail.com" 
                          type="email"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field, fieldState: { error } }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-semibold text-xs">Password</FormLabel>
                        <div className="relative"> {/* Wrapper div */}
                          <FormControl>
                            <Input
                              id="password"
                              placeholder="Input Password" 
                              type={showPassword ? 'text' : 'password'}
                              {...field}
                              className="pr-10" // Add right padding to make space for the icon
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                            {showPassword ? (
                              <EyeOffIcon className="h-5 w-5 text-gray-400" onClick={togglePasswordVisibility} />
                            ) : (
                              <EyeIcon className="h-5 w-5 text-gray-400" onClick={togglePasswordVisibility} />
                            )}
                          </div>
                        </div>
                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                    </FormItem>
                  )}
                />
                <Link className="text-xs text-[#3F562C] hover:underline self-end" href="/forgot-password">
                  Forgot Password
                </Link>
              </div>
              <Button 
                className="w-full bg-[#3F562C] hover:bg-[#3F562C]/90 text-white"
                isLoading={isLoading}
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
