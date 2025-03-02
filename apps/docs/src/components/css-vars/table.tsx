import * as React from "react"

import { cn } from "@/lib/utils"

function Table({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn(
          "w-full caption-bottom border-border border-2 text-sm",
          className,
        )}
        {...props}
      />
    </div>
  )
}
Table.displayName = "Table"

function TableHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("[&_tr]:border-b", className)} {...props} />
}
TableHeader.displayName = "TableHeader"

function TableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  )
}
TableBody.displayName = "TableBody"

function TableFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot
      className={cn(
        "border-t border-t-border bg-main font-base [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  )
}
TableFooter.displayName = "TableFooter"

function TableRow({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b border-border text-mtext transition-colors bg-main font-base data-[state=selected]:bg-bw data-[state=selected]:text-mtext",
        className,
      )}
      {...props}
    />
  )
}
TableRow.displayName = "TableRow"

function TableHead({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-heading text-mtext [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  )
}
TableHead.displayName = "TableHead"

function TableCell({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        "p-4 align-middle font-base [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  )
}
TableCell.displayName = "TableCell"

function TableCaption({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption
      className={cn("mt-4 text-sm text-mtext font-base", className)}
      {...props}
    />
  )
}
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
