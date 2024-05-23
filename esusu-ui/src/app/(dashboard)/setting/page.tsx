'use client'

import { useState } from 'react';
import { Button2 } from "@/components/ui/button2";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/DateRangePicker";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { currentDate } from "@/helper/date";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CalendarDays, MoreVerticalIcon } from 'lucide-react';

const Page = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { name: 'Profile', clickable: true },
    { name: 'Notifications', clickable: false },
    { name: 'Team Member', clickable: true },
    { name: 'Security', clickable: false },
    { name: 'Limits', clickable: true }
  ];

  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium">Settings</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 border bg-white px-3 py-1">
            <span><CalendarDays className="h-4 w-4" /></span>
            <span>{currentDate()}</span>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mb-6">
          <DatePickerWithRange />
          <Input className="bg-[#B3B3B3]/50 border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div>
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <Button2
              key={tab.name}
              className={`text-sm font-normal ${activeTab === tab.name.toLowerCase() ? 'text-black' : 'text-[#B3B3B3]'}`}
              variant="ghost"
              onClick={() => tab.clickable && setActiveTab(tab.name.toLowerCase())}
              disabled={!tab.clickable}
            >
              {tab.name}
            </Button2>
          ))}
        </div>
        <Separator className="bg-[#d4d1d1]" />

        {activeTab === 'profile' && (
          <Card className="bg-white p-[5rem] rounded-lg shadow-lg mt-5 h-[30rem]">
            <div className="flex items-center space-x-6 mb-10">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <div className="font-semibold uppercase text-xl">JOHN DOE S.</div>
                <div className="text-[#B3B3B3] text-sm">johndoe@gmail.com</div>
              </div>
              <div><Badge className="text-xs text-zinc-100 bg-[#EC712E]">Overall Admin</Badge></div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Name</span>
                  <span className="font-medium">JOHN DOE S.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Phone Number</span>
                  <span className="font-medium">08123456789</span>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Admin ID</span>
                  <span className="font-medium">#00001ABCDEF</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Role</span>
                  <span className="font-medium">Overall Admin</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'notifications' && (
          <Card className="bg-white p-[5rem] rounded-lg shadow-lg mt-5 h-[30rem]">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Name</span>
                  <span className="font-medium">JOHN DOE S.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Phone Number</span>
                  <span className="font-medium">08123456789</span>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Admin ID</span>
                  <span className="font-medium">#00001ABCDEF</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Role</span>
                  <span className="font-medium">Overall Admin</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'team member' && (
          <Table className="mt-5 table table-xs">
            <TableHeader className="bg-[#d9d8d8] hover:bg-[#d9d8d8] cursor-pointer">
              <TableRow>
                <TableHead className="w-[150px]">USER NAME</TableHead>
                <TableHead className="w-[100px]">USER ID</TableHead>
                <TableHead className="w-[100px]">USER ROLE</TableHead>
                <TableHead className="w-[200px]">EMAIL ADDRESS</TableHead>
                <TableHead className="w-[150px]">PHONE NUMBER</TableHead>
                <TableHead className="w-[150px]">ADDRESS</TableHead>
                <TableHead className="w-[150px]">REGION/STATE</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-500">
              <TableRow className="bg-zinc-100">
                <TableCell className="font-medium">JOHN DOE S.</TableCell>
                <TableCell>20245W14</TableCell>
                <TableCell>viewer</TableCell>
                <TableCell>johndoe@xyz.com</TableCell>
                <TableCell>+2348123456789</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>Lagos West/ Lagos</TableCell>
                <TableCell>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow className="bg-[#ECB1B1]/10">
                <TableCell className="font-medium">JOHN DOE S.</TableCell>
                <TableCell>20245W14</TableCell>
                <TableCell>viewer</TableCell>
                <TableCell>johndoe@xyz.com</TableCell>
                <TableCell>+2348123456789</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>Lagos West/ Lagos</TableCell>
                <TableCell>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow className="bg-zinc-100">
                <TableCell className="font-medium">JOHN DOE S.</TableCell>
                <TableCell>20245W14</TableCell>
                <TableCell>viewer</TableCell>
                <TableCell>johndoe@xyz.com</TableCell>
                <TableCell>+2348123456789</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>Lagos West/ Lagos</TableCell>
                <TableCell>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow className="bg-[#ECB1B1]/10">
                <TableCell className="font-medium">JOHN DOE S.</TableCell>
                <TableCell>20245W14</TableCell>
                <TableCell>viewer</TableCell>
                <TableCell>johndoe@xyz.com</TableCell>
                <TableCell>+2348123456789</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>Lagos West/ Lagos</TableCell>
                <TableCell>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow className="bg-zinc-100">
                <TableCell className="font-medium">JOHN DOE S.</TableCell>
                <TableCell>20245W14</TableCell>
                <TableCell>viewer</TableCell>
                <TableCell>johndoe@xyz.com</TableCell>
                <TableCell>+2348123456789</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>Lagos West/ Lagos</TableCell>
                <TableCell>
                  <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}

        {activeTab === 'security' && (
          <Card className="bg-white p-[5rem] rounded-lg shadow-lg mt-5 h-[30rem]">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Name</span>
                  <span className="font-medium">JOHN DOE S.</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Phone Number</span>
                  <span className="font-medium">08123456789</span>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Admin ID</span>
                  <span className="font-medium">#00001ABCDEF</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#B3B3B3]">Role</span>
                  <span className="font-medium">Overall Admin</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'limits' && (
          <Card className="bg-white p-[5rem] rounded-lg shadow-lg mt-5 h-[30rem]">
            <div>
              <h1 className='text-2xl font-semibold tracking-wide'>Notification Settings</h1>
              <h2 className='text-sm font-medium text-[#B3B3B3] tracking-wide'>Personalise your notifications</h2>
            </div>
          </Card>
        )}
      </Card>
    </div>
  )
}

export default Page;
