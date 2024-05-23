'use client'

import { ReactNode, useState } from "react";
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { ArrowBigDownIcon, ArrowDown, MessageCircleIcon } from "lucide-react";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  // const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-60 bg-[#E5E5E5] p-5 min-h-screen">
          <div className="flex items-center space-x-2 mb-6">
            <div className="mx-auto">
              <img 
                src="/logo.png"
                className="h-[7rem] w-[5rem]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Link className="hover:text-[#3F562C]" href="/dashboard">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/dashboard') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/dashboard-icon.png"
                  alt="dashboard icon"
                  width="72"
                  height="72"
                />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/transaction">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/transaction') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/transaction-icon.png"
                  alt="transaction icon"
                  width="72"
                  height="72"
                />
                <span>Transactions</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/agent">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/agent') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/agent-icon.png"
                  alt="agent icon"
                  width="72"
                  height="72"
                />
                <span>Agents</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/user">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/user') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/user-icon.png"
                  alt="user icon"
                  width="72"
                  height="72"
                />
                <span>Users</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/group">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/group') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/group-icon.png"
                  alt="group icon"
                  width="72"
                  height="72"
                />
                <span>Groups</span>
              </div>              
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/card">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/card') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/card-icon.png"
                  alt="card icon"
                  width="72"
                  height="72"
                />
                <span>Cards</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/audit-log">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/audit-log') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/audit-icon.png"
                  alt="audit icon"
                  width="72"
                  height="72"
                />
                <span>Audit Logs</span>
              </div>
            </Link>
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/statistics">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/statistics') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/dashboard-icon.png"
                  alt="stats icon"
                  width="72"
                  height="72"
                />
                <span>Statistics</span>
              </div>
            </Link>
            <Separator className="bg-[#EC712E]/30 w-full my-3" />
            <Link className="text-[#A5A5A5] hover:text-[#3F562C]" href="/setting">
              <div className={`flex items-center p-3 space-x-3 ${isActive('/setting') ? 'text-[#3F562C]' : 'text-[#A5A5A5]'}`}>
                <Image 
                  className="h-5 w-5" 
                  src="/icons/audit-icon.png"
                  alt="settings icon"
                  width="72"
                  height="72"
                />
                <span>Settings</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-8 grainy">
          <div className="flex justify-between items-center mb-10">
            <label className="input input-ghost flex items-center gap-2 bg-[#E5E5E5] p-6 rounded-md w-1/3">
              <input type="text" className="grow" placeholder="Search anything here..." />
              <SearchIcon />
            </label>

            <div className="flex items-center space-x-4">
              <BellIcon className="h-10 w-10 text-gray-600 border rounded-2xl p-2 bg-[#E5E5E5]" />
              <Image 
                className="h-10 w-10 text-gray-600 border rounded-2xl p-2 bg-[#E5E5E5]" 
                src="/icons/message-square.png"
                alt="message notification icon"
                width="72"
                height="72"
              />
              <Avatar>
                {/* <AvatarImage alt="John Doe" src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="border">JD</AvatarFallback>
              </Avatar>
              <div className="flex items-center space-x-2">
                <div>
                  <div className="text-[#3F562C] font-medium text-sm">John Doe</div>
                  <div className="text-gray-500 text-xs">Admin</div>
                </div>
                <div>
                  <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                      <li><a>Sign out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

function SearchIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 16 16" 
      fill="currentColor" 
      className="w-4 h-4 opacity-70"
    >
      <path 
        fillRule="evenodd" 
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" 
        clipRule="evenodd" 
      />
    </svg>
  )
}

// function FlagIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   )
// }

// function LayoutDashboardIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="9" x="3" y="3" rx="1" />
//       <rect width="7" height="5" x="14" y="3" rx="1" />
//       <rect width="7" height="9" x="14" y="12" rx="1" />
//       <rect width="7" height="5" x="3" y="16" rx="1" />
//     </svg>
//   )
// }

// function WalletIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
//       <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
//       <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
//     </svg>
//   )
// }

// function UsersIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }

// function GroupIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 7V5c0-1.1.9-2 2-2h2" />
//       <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
//       <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
//       <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
//       <rect width="7" height="5" x="7" y="7" rx="1" />
//       <rect width="7" height="5" x="10" y="12" rx="1" />
//     </svg>
//   )
// }

// function WalletCardsIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" />
//       <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
//       <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
//     </svg>
//   )
// }

// function LogInIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//       <polyline points="10 17 15 12 10 7" />
//       <line x1="15" x2="3" y1="12" y2="12" />
//     </svg>
//   )
// }

// function BarChartIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="20" y2="10" />
//       <line x1="18" x2="18" y1="20" y2="4" />
//       <line x1="6" x2="6" y1="20" y2="16" />
//     </svg>
//   )
// }

// function SettingsIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

// function MoreVerticalIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="1" />
//       <circle cx="12" cy="5" r="1" />
//       <circle cx="12" cy="19" r="1" />
//     </svg>
//   )
// }
