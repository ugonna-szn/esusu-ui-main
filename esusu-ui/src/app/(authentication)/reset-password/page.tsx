import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function page () {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <div
        className="w-1/2 bg-no-repeat bg-cover bg-bottom p-12 text-white flex flex-col justify-between"
        style={{
          backgroundImage: 'url("/splashscreen/reset_password_ui.png")',
        }}
      >
        {/* Content here if you want anything over the background image */}
      </div>
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <Link className="text-sm self-end text-[#3F562C] hover:underline mb-8 inline-block cursor-pointer" href="/">
          Back to Homepage
        </Link>
        <div className="max-w-md mx-auto text-[#333333]">
          <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
          <p className="mb-6">Your email has been confirmed. Kindly provide your details.</p>
          <form>
            <div className="flex flex-col space-y-7 mb-6">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <Input id="password" placeholder="Input Password" type="password" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="password">
                  Confirm Password
                </label>
                <Input id="confirmPassword" placeholder="Confirm Password" type="password" />
              </div>
            </div>
            <Button className="w-full bg-[#3F562C] text-white">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}