"use client"

import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { CalendarDays, Loader, MoreVerticalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"
import { currentDate } from "@/helper/date"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const columns: ColumnDef<Agent>[] = [
  {
    accessorKey: 'agentName',
    header: 'Agent Name'
  },
  {
    accessorKey: 'agentId',
    header: 'Agent ID'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone Number'
  },
  {
    accessorKey: 'agentType',
    header: 'Agent Type',
    // Cell: ({ value }) => `$${value.toFixed(2)}`
  },
  {
    accessorKey: 'address',
    header: 'Address'
  },
  {
    accessorKey: 'state',
    header: 'Region/State'
  },
  {
    accessorKey: 'createdAt',
    header: 'Date/Time'
  },
  {
    id: 'viewProfile',
    header: 'Actions',
    cell: (info) => (
      <div className="flex space-x-2">
        <MoreVerticalIcon
          className="text-gray-600 cursor-pointer w-5 h-5"
        />
      </div>
    ),
  },
];

async function fetchData() {
  // Simulate an API call
  return [
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
    {
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "email": "johndoe@xyz.com",
      "phone": "+2348123456789",
      "agentType": "Sub-Agent",
      "address": "No. 5, Herbert Macaulay way, Ikotun",
      "state": "Lagos West/ Lagos",
      "createdAt": "7/02/2024"
    },
  ]
}

const Page = () => {

  const [data, setData] = useState<Agent[]>([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <Table className="table table-xs">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow 
              key={headerGroup.id}
              className="bg-[#d9d8d8]"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-gray-500">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={row.index % 2 ? "bg-[#ECB1B1]/10" : "bg-zinc-100" }
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {!data.length && (
                    <div className="text-center p-4 text-zinc-200 text-sm h-14">
                      <span>
                        Loading page
                        <span className="tracking-widest">...</span>
                      </span>
                      <div className="inline-block ml-2">
                        <Loader />
                      </div>
                    </div>
                  )}
                  {!data.length && (
                    <div className="text-center p-4 text-zinc-200 text-sm h-14">
                      <span>No record found</span>
                    </div>
                  )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    )
  }

  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-medium">Agents</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 border bg-white px-3 py-1">
            <span><CalendarDays className="h-4 w-4" /></span>
            <span>{currentDate()}</span>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mb-6">
          <div>
            <DatePickerWithRange />
          </div>
          <Input className="bg-[#B3B3B3]/50 border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div>

        <div className="flex space-x-2">
          <Button className="text-xs text-[#3F562C] underline font-extralight" variant="ghost">
            All
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Incoming
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Outgoing
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Failed
          </Button>
        </div>

        <DataTable columns={columns} data={data || []} />
      </Card>
    </div>
  )
}

export default Page