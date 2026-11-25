"use client"

import {
  ChartNoAxesColumn,
  ChevronsUpDown,
  LayoutDashboard,
  Megaphone,
  Package,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { ORDERS, PRODUCTS, USER } from "./data"

const GROUPS = [
  {
    label: "Analytics",
    items: [
      { id: "overview", title: "Overview", icon: LayoutDashboard },
      { id: "revenue", title: "Revenue", icon: ChartNoAxesColumn },
      { id: "marketing", title: "Marketing", icon: Megaphone },
    ],
  },
  {
    label: "Store",
    items: [
      {
        id: "orders",
        title: "Orders",
        icon: ShoppingCart,
        badge: ORDERS.filter((order) => order.status === "Processing").length,
      },
      { id: "customers", title: "Customers", icon: Users },
      {
        id: "inventory",
        title: "Inventory",
        icon: Package,
        badge: PRODUCTS.filter((item) => item.stock < item.reorder).length,
      },
    ],
  },
]

export default function AppSidebar({ active }: { active: string }) {
  const { setOpenMobile } = useSidebar()

  return (
    // The 15px side padding centres 32px icons in the collapsed sidebar, so
    // they stay put while it opens and closes.
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 justify-center px-3.75">
        <a
          href="#overview"
          onClick={() => setOpenMobile(false)}
          className="flex items-center gap-3 overflow-hidden font-heading text-xl"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground">
            <Store className="size-4" />
          </span>
          <span>Tally</span>
        </a>
      </SidebarHeader>

      <SidebarContent className="overflow-x-hidden">
        {GROUPS.map((group) => (
          <SidebarGroup key={group.label} className="px-3.75">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-1.5">
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={item.id === active}
                      tooltip={item.title}
                      render={
                        <a
                          href={`#${item.id}`}
                          aria-current={item.id === active ? "page" : undefined}
                          onClick={() => setOpenMobile(false)}
                        />
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {"badge" in item && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-3.75">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>
                <Avatar size="sm" className="shrink-0 -outline-offset-2">
                  <AvatarFallback className="bg-chart-3">
                    {USER.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="grid min-w-0 flex-1 leading-tight">
                  <span className="truncate font-heading">{USER.name}</span>
                  <span className="truncate text-xs">{USER.email}</span>
                </span>
                <ChevronsUpDown className="ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-52">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    render={<a href="#profile" />}
                    onClick={() => setOpenMobile(false)}
                  >
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    render={<a href="#billing" />}
                    onClick={() => setOpenMobile(false)}
                  >
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
