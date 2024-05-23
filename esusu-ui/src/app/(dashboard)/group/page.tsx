"use client"

import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { CalendarDays, Loader, MoreHorizontalIcon, MoreVerticalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { currentDate } from "@/helper/date"
import { useEffect, useState } from "react"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

const columns: ColumnDef<Group>[] = [
  {
    accessorKey: 'groupName',
    header: 'Group Name'
  },
  {
    accessorKey: 'groupId',
    header: 'Group ID'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'members',
    header: 'Members',
    cell: (info) => {
      const members: Member[] = info.getValue<Member[]>();
      return (
        <div className="flex space-x-2">
          {members.slice(0, 4).map((member) => (
            <Avatar key={member.id} className="w-8 h-8">
              {member.avatarUrl ? (
                <AvatarImage src={member.avatarUrl} alt={member.name} />
              ) : (
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
          ))}
          {members.length > 4 && (
            <span className="flex items-center justify-center w-8 h-8 bg-gray-300 text-xs">
              +{members.length - 4}
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'creator',
    header: 'Creator',
    // Cell: ({ value }) => `$${value.toFixed(2)}`
  },
  {
    accessorKey: 'balance',
    header: 'Balance'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: info => {
      const status = info.getValue<string>();
      let color = '';
      switch (status) {
        case 'Ended':
          color = 'text-[#EC712E]';
          break;
        case 'Active':
          color = 'text-[#008528]';
          break;
        default:
          color = 'text-gray-500';
      }
      return <span className={`${color} font-medium`}>{status}</span>;
    }
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
      "groupName": "JOHN DOE S.",
      "groupId": "20245W14",
      "category": "Housing",
      "members": [
        {
          id: "m1",
          name: "John Doe",
          // avatarUrl: "https://example.com/avatar1.jpg"
        },
        {
          id: "m2",
          name: "Jane Doe",
          // avatarUrl: "https://example.com/avatar2.jpg"
        }
      ],
      "creator": "Sub-Agent",
      "balance": "100000",
      "status": "Active",
      "createdAt": "7/02/2024"
    },
    {
      "groupName": "JOHN DOE S.",
      "groupId": "20245W14",
      "category": "Housing",
      "members": [
        {
          id: "m3",
          name: "Alice Johnson",
          // avatarUrl: "https://example.com/avatar3.jpg"
        },
        {
          id: "m4",
          name: "Bob Smith",
          // avatarUrl: "https://example.com/avatar4.jpg"
        }
      ],
      "creator": "Sub-Agent",
      "balance": "100000",
      "status": "Active",
      "createdAt": "7/02/2024"
    },
    {
      "groupName": "JOHN DOE S.",
      "groupId": "20245W14",
      "category": "Housing",
      "members": [
        {
          id: "m5",
          name: "Alice Johnson",
          // avatarUrl: "https://example.com/avatar3.jpg"
        },
        {
          id: "m6",
          name: "Bob Smith",
          // avatarUrl: "https://example.com/avatar4.jpg"
        }
      ],
      "creator": "Sub-Agent",
      "balance": "100000",
      "status": "Ended",
      "createdAt": "7/02/2024"
    },
    {
      "groupName": "JOHN DOE S.",
      "groupId": "20245W14",
      "category": "Housing",
      "members": [
        {
          id: "m7",
          name: "Alice Johnson",
          // avatarUrl: "https://example.com/avatar3.jpg"
        },
        {
          id: "m8",
          name: "Bob Smith",
          // avatarUrl: "https://example.com/avatar4.jpg"
        }
      ],
      "creator": "Sub-Agent",
      "balance": "100000",
      "status": "Active",
      "createdAt": "7/02/2024"
    },
    {
      "groupName": "JOHN DOE S.",
      "groupId": "20245W14",
      "category": "Housing",
      "members": [
        {
          id: "m9",
          name: "Alice Johnson",
          // avatarUrl: "https://example.com/avatar3.jpg"
        },
        {
          id: "m10",
          name: "Bob Smith",
          // avatarUrl: "https://example.com/avatar4.jpg"
        }
      ],
      "creator": "Sub-Agent",
      "balance": "100000",
      "status": "Ended",
      "createdAt": "7/02/2024"
    },
  ]
}

const Page = () => {

  const [data, setData] = useState<Group[]>([]);

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
          <h1 className="text-3xl font-medium">Groups</h1>
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