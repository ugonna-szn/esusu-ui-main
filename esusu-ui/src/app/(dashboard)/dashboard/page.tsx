"use client"

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CalendarDays, Loader, MoreVerticalIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { DatePickerWithRange } from "@/components/DateRangePicker"
import { SummaryBox } from "@/components/SummaryBox"
import { DonutpieChart, TimeseriesChart } from "@/components/component/charts"
import { currentDate } from "@/helper/date"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area" 
import { useEffect, useState } from "react"
import { CustomAlertDialog } from "@/components/CustomAlertDialog"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

async function fetchData() {
  // Simulate an API call
  return [
    {
      "transactionId": "#00001ABCDEF",
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "customerName": "JOHN DOE S.",
      "customerId": "123456",
      "amount": "10000",
      "paymentType": "Bank Transfer",
      "status": "Pending",
      "createdAt": "7/02/2024"
    },
    {
      "transactionId": "#00001ABCDEF",
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "customerName": "JOHN DOE S.",
      "customerId": "123456",
      "amount": "10000",
      "paymentType": "Bank Transfer",
      "status": "Pending",
      "createdAt": "7/02/2024"
    },
    {
      "transactionId": "#00001ABCDEF",
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "customerName": "JOHN DOE S.",
      "customerId": "123456",
      "amount": "10000",
      "paymentType": "Bank Transfer",
      "status": "Pending",
      "createdAt": "7/02/2024"
    },
    {
      "transactionId": "#00001ABCDEF",
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "customerName": "JOHN DOE S.",
      "customerId": "123456",
      "amount": "10000",
      "paymentType": "Bank Transfer",
      "status": "Pending",
      "createdAt": "7/02/2024"
    },
    {
      "transactionId": "#00001ABCDEF",
      "agentName": "JOHN DOE S.",
      "agentId": "20245W14",
      "customerName": "JOHN DOE S.",
      "customerId": "123456",
      "amount": "10000",
      "paymentType": "Bank Transfer",
      "status": "Pending",
      "createdAt": "7/02/2024"
    },
  ]
}

const Page = () => {

  const [data, setData] = useState<Transaction[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const handleOpenModal = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTransaction(null);
  };

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

  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: 'transactionId',
      header: 'Transaction ID'
    },
    {
      accessorKey: 'agentName',
      header: 'Agent Name'
    },
    {
      accessorKey: 'agentId',
      header: 'Agent ID'
    },
    {
      accessorKey: 'customerName',
      header: 'Customer'
    },
    {
      accessorKey: 'customerId',
      header: 'Customer ID'
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
    },
    {
      accessorKey: 'paymentType',
      header: 'Payment Type'
    },
    {
      accessorKey: 'status',
      header: 'Status'
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
            onClick={() => handleOpenModal(info.row.original)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md cursor-pointer">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Welcome back, John Doe</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 border bg-white px-3 py-1">
            <span><CalendarDays className="h-4 w-4" /></span>
            <span>{currentDate()}</span>
          </div>
        </div>

        <ScrollArea className="max-w-[57rem] whitespace-nowrap">
          <div className="flex justify-between items-center space-x-2">
            <SummaryBox
              iconSrc="/icons/discount.png"
              title="Transaction Volume"
              value={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(1000)}
              badgeValue={"+2.5%"}
              leftLabel="Successful"
              leftValue={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(720)}
              rightLabel="Failed"
              rightValue={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(280)}
            />

            <SummaryBox
              iconSrc="/icons/star.png"
              title="Transaction Value"
              value={'15000'}
              badgeValue={"+2.5%"}
              leftLabel="Successful"
              leftValue={"60"}
              rightLabel="Failed"
              rightValue={"40"}
            />

            <SummaryBox
              iconSrc="/icons/square.png"
              title="Pending Transaction"
              value={"8500"}
              badgeValue={"+2.5%"}
              leftLabel="Active"
              leftValue={"6000"}
              rightLabel="Inactive"
              rightValue={"2500"}
              single
            />

            <SummaryBox
              iconSrc="/icons/square.png"
              title="Agents"
              value={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(10000 / 100)}
              badgeValue={"+2.5%"}
              leftLabel="Active"
              leftValue={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(20000 / 100)}
              rightLabel="Inactive"
              rightValue={new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(50000 / 100)}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-medium">Payment Method Analysis</CardTitle>
              <CardDescription>Key performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <TimeseriesChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
          
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="font-medium">Conversion Rates</CardTitle>
              <CardDescription>Breakdown of user actions</CardDescription>
            </CardHeader>
            <CardContent>
              <DonutpieChart className="aspect-square" />
            </CardContent>
          </Card>
        </div>

        {/* <div className="flex justify-end space-x-4 mb-6">
          <div>
            <DatePickerWithRange />
          </div>
          <Input className="bg-[#B3B3B3]/50 border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div> */}

        <div className="flex space-x-2">
          <span className="text-[#6D6D6D] text-xl font-medium mb-1">Recent Transactions</span>
        </div>

        <DataTable columns={columns} data={data || []} />
        {selectedTransaction && (
          <CustomAlertDialog
            isOpen={isModalOpen}
            onDismiss={handleCloseModal}
            transaction={selectedTransaction}
          />
        )}
      </Card>
    </div>
  )
}

export default Page