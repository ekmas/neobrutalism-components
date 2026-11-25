import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { formatDate, formatMoney, type Order } from "./data"
import { StatusBadge } from "./shared"

export function OrderTable({ orders }: { orders: Order[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead className="hidden md:table-cell">Product</TableHead>
          <TableHead className="hidden sm:table-cell">Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="bg-secondary-background">
            <TableCell className="py-3 font-heading">{order.id}</TableCell>
            <TableCell className="py-3 whitespace-nowrap">
              {order.customer}
            </TableCell>
            <TableCell className="hidden py-3 whitespace-nowrap md:table-cell">
              {order.product}
            </TableCell>
            <TableCell className="hidden py-3 whitespace-nowrap sm:table-cell">
              {formatDate(order.date)}
            </TableCell>
            <TableCell className="py-3">
              <StatusBadge status={order.status} />
            </TableCell>
            <TableCell className="py-3 text-right font-heading tabular-nums">
              {formatMoney(order.total)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
