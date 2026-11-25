// Demo data for the dashboard. Everything is derived from one seeded set of
// daily figures, so totals agree across pages and render the same on server
// and client. Replace `DAYS` and the lists below with your own data.

export const CHANNELS = ["online", "marketplace", "retail"] as const
export const SOURCES = ["organic", "paid", "social", "email"] as const

export type Channel = (typeof CHANNELS)[number]
export type Source = (typeof SOURCES)[number]

export type Day = {
  date: Date
  revenue: Record<Channel, number>
  orders: Record<Channel, number>
  refunds: number
  newCustomers: number
  returning: number
  sessions: Record<Source, number>
}

export const RANGES = [
  { value: "7", label: "Last 7 days" },
  { value: "28", label: "Last 4 weeks" },
  { value: "84", label: "Last 12 weeks" },
]

const TOTAL_DAYS = 168 // the longest range plus its comparison period
const LAST_DAY = Date.UTC(2026, 10, 22)
const DAY_MS = 86_400_000

function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const random = seeded(42)
const jitter = (amount: number) => 1 + (random() - 0.5) * 2 * amount

export function sum(values: number[]) {
  return values.reduce((total, value) => total + value, 0)
}

// Splits a count by shares, with the rounding remainder on the largest one so
// the parts always add up.
export function split(count: number, shares: number[]) {
  const parts = shares.map((share) => Math.round(count * share))
  parts[shares.indexOf(Math.max(...shares))] += count - sum(parts)
  return parts
}

// Sunday first, matching Date.getUTCDay().
const WEEKDAY = [0.86, 0.94, 0.97, 1, 1.06, 1.18, 1.09]

const DAYS: Day[] = Array.from({ length: TOTAL_DAYS }, (_, i) => {
  const date = new Date(LAST_DAY - (TOTAL_DAYS - 1 - i) * DAY_MS)
  const base = (118 + i * 0.32) * WEEKDAY[date.getUTCDay()]
  const orders = {
    online: Math.round(base * 0.56 * jitter(0.12)),
    marketplace: Math.round(base * 0.27 * jitter(0.15)),
    retail: Math.round(base * 0.17 * jitter(0.18)),
  }
  const revenue = {
    online: Math.round(orders.online * 64 * jitter(0.06)),
    marketplace: Math.round(orders.marketplace * 51 * jitter(0.06)),
    retail: Math.round(orders.retail * 78 * jitter(0.08)),
  }
  const total = sum(Object.values(revenue))
  const count = sum(Object.values(orders))
  const newCustomers = Math.round(count * 0.36 * jitter(0.14))
  const visits = (orders.online / (0.029 + i * 0.00002)) * jitter(0.05)

  return {
    date,
    revenue,
    orders,
    refunds: Math.round(total * 0.042 * jitter(0.5)),
    newCustomers,
    returning: count - newCustomers,
    sessions: {
      organic: Math.round(visits * 0.38 * jitter(0.08)),
      paid: Math.round(visits * 0.28 * jitter(0.12)),
      social: Math.round(visits * 0.2 * jitter(0.16)),
      email: Math.round(visits * 0.14 * jitter(0.2)),
    },
  }
})

export const revenueOf = (day: Day) => sum(Object.values(day.revenue))
export const ordersOf = (day: Day) => sum(Object.values(day.orders))
export const sessionsOf = (day: Day) => sum(Object.values(day.sessions))

export const total = (days: Day[], pick: (day: Day) => number) =>
  sum(days.map(pick))

const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
})

export const formatDate = (date: Date) => shortDate.format(date)

export const formatNumber = (value: number) =>
  Math.round(value).toLocaleString("en-US")

export const formatMoney = (value: number) => `$${formatNumber(value)}`

export const formatPercent = (value: number) => `${value.toFixed(1)}%`

export const formatCompact = (value: number) =>
  value >= 1000
    ? `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k`
    : `${Math.round(value)}`

export const formatCompactMoney = (value: number) => `$${formatCompact(value)}`

export type Bucket = { label: string; days: Day[] }

export type Period = {
  days: Day[]
  previous: Day[]
  // Daily buckets for short ranges, weekly ones for the longest.
  buckets: Bucket[]
  previousBuckets: Bucket[]
  unit: "day" | "week"
}

function bucket(days: Day[], size: number): Bucket[] {
  const buckets: Bucket[] = []
  for (let i = 0; i < days.length; i += size) {
    const slice = days.slice(i, i + size)
    buckets.push({ label: formatDate(slice[0].date), days: slice })
  }
  return buckets
}

export function getPeriod(length: number): Period {
  const days = DAYS.slice(-length)
  const previous = DAYS.slice(-length * 2, -length)
  const size = length > 28 ? 7 : 1
  return {
    days,
    previous,
    buckets: bucket(days, size),
    previousBuckets: bucket(previous, size),
    unit: size === 7 ? "week" : "day",
  }
}

// Shares of total revenue, adding up to 1.
export const PRODUCTS = [
  {
    name: "Canvas Tote",
    category: "Bags",
    share: 0.19,
    price: 38,
    stock: 1460,
    reorder: 700,
  },
  {
    name: "Block Hoodie",
    category: "Apparel",
    share: 0.17,
    price: 72,
    stock: 286,
    reorder: 340,
  },
  {
    name: "Notebook",
    category: "Stationery",
    share: 0.14,
    price: 18,
    stock: 2140,
    reorder: 1100,
  },
  {
    name: "Enamel Mug",
    category: "Home",
    share: 0.12,
    price: 24,
    stock: 1028,
    reorder: 700,
  },
  {
    name: "Desk Lamp",
    category: "Home",
    share: 0.11,
    price: 89,
    stock: 141,
    reorder: 180,
  },
  {
    name: "Graphic Tee",
    category: "Apparel",
    share: 0.1,
    price: 34,
    stock: 865,
    reorder: 420,
  },
  {
    name: "Weekender",
    category: "Bags",
    share: 0.09,
    price: 128,
    stock: 62,
    reorder: 100,
  },
  {
    name: "Brush Pens",
    category: "Stationery",
    share: 0.08,
    price: 29,
    stock: 717,
    reorder: 400,
  },
]

export const COUNTRIES = [
  { name: "United States", share: 0.41 },
  { name: "Germany", share: 0.17 },
  { name: "United Kingdom", share: 0.14 },
  { name: "Croatia", share: 0.11 },
  { name: "France", share: 0.09 },
  { name: "Other", share: 0.08 },
]

export const STATUSES = [
  "Delivered",
  "Processing",
  "Cancelled",
  "Shipped",
] as const

export type Status = (typeof STATUSES)[number]

export const STATUS_COLORS: Record<Status, string> = {
  Delivered: "var(--chart-4)",
  Processing: "var(--chart-3)",
  Cancelled: "var(--chart-2)",
  Shipped: "var(--chart-5)",
}

// Share of a period's orders in each status.
export const STATUS_SHARE: Record<Status, number> = {
  Delivered: 0.72,
  Processing: 0.09,
  Cancelled: 0.05,
  Shipped: 0.14,
}

export type Order = {
  id: string
  customer: string
  product: string
  total: number
  status: Status
  date: Date
}

const NAMES = [
  "Ana Kovač",
  "Liam Porter",
  "Mei Tanaka",
  "Omar Haddad",
  "Sofia Rossi",
  "Noah Fischer",
  "Priya Nair",
  "Lucas Martin",
  "Ivy Chen",
  "Diego Ramos",
  "Freya Olsen",
  "Tom Walsh",
]

// The latest orders, all from the last day, so the newest are still processing.
export const ORDERS: Order[] = Array.from({ length: 48 }, (_, i) => {
  const product = PRODUCTS[Math.floor(random() * PRODUCTS.length)]
  const quantity = 1 + Math.floor(random() * 3)
  const roll = random()
  const settled: Status =
    i + random() * 16 < 18 ? "Processing" : i < 38 ? "Shipped" : "Delivered"
  return {
    id: `#${5248 - i}`,
    customer: NAMES[Math.floor(random() * NAMES.length)],
    product: quantity > 1 ? `${product.name} × ${quantity}` : product.name,
    total: product.price * quantity,
    status: roll < 0.06 ? "Cancelled" : settled,
    date: new Date(LAST_DAY),
  }
})

export const HOURS = Array.from({ length: 12 }, (_, i) => i * 2)
export const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Percent of a day's orders in each two-hour slot; weekends shift later.
const WORKDAY_HOURS = [2, 1, 1, 3, 8, 12, 13, 11, 12, 14, 15, 8]
const WEEKEND_HOURS = [4, 2, 1, 1, 4, 9, 12, 13, 14, 15, 15, 10]

// Orders per weekday (Monday first) and two-hour slot.
export function getOrderHeatmap(days: Day[]) {
  return WEEKDAYS.map((weekday, i) => {
    const matching = days.filter((day) => day.date.getUTCDay() === (i + 1) % 7)
    const count = total(matching, ordersOf)
    const hours = i > 4 ? WEEKEND_HOURS : WORKDAY_HOURS
    return {
      weekday,
      values: hours.map((share) => Math.round((count * share) / 100)),
    }
  })
}

// Share of orders by hours between payment and dispatch.
export const DISPATCH = [
  { label: "<6h", share: 0.18 },
  { label: "6–12h", share: 0.31 },
  { label: "12–24h", share: 0.27 },
  { label: "1–2d", share: 0.16 },
  { label: ">2d", share: 0.08 },
]

// Percent of each cohort that ordered again, by months since first order.
export const COHORTS = [
  { month: "Jun", size: 1184, retention: [100, 42, 35, 31, 28, 26] },
  { month: "Jul", size: 1246, retention: [100, 44, 37, 33, 30] },
  { month: "Aug", size: 1302, retention: [100, 43, 38, 34] },
  { month: "Sep", size: 1395, retention: [100, 47, 40] },
  { month: "Oct", size: 1467, retention: [100, 49] },
  { month: "Nov", size: 1120, retention: [100] },
]

export const SEGMENTS = [
  { key: "vip", label: "VIP", share: 0.12, color: "var(--chart-1)" },
  { key: "loyal", label: "Loyal", share: 0.31, color: "var(--chart-3)" },
  { key: "casual", label: "Occasional", share: 0.38, color: "var(--chart-2)" },
  { key: "once", label: "One-time", share: 0.19, color: "var(--chart-4)" },
]

export const TOP_CUSTOMERS = [
  { name: "Mei Tanaka", country: "United States", orders: 34, spent: 2864 },
  { name: "Noah Fischer", country: "Germany", orders: 29, spent: 2417 },
  { name: "Ana Kovač", country: "Croatia", orders: 27, spent: 2190 },
  { name: "Tom Walsh", country: "United Kingdom", orders: 22, spent: 1975 },
  { name: "Lucas Martin", country: "France", orders: 21, spent: 1748 },
]

// Share of online revenue attributed to each campaign, and its daily spend.
export const CAMPAIGNS = [
  { name: "Holiday search", channel: "Paid", share: 0.17, spend: 290 },
  { name: "Autumn drop", channel: "Social", share: 0.11, spend: 225 },
  { name: "Win-back", channel: "Email", share: 0.09, spend: 48 },
  { name: "Creator collab", channel: "Social", share: 0.06, spend: 340 },
  { name: "Retargeting", channel: "Paid", share: 0.08, spend: 140 },
]

// Share of sessions that reach each step before ordering.
export const FUNNEL = [
  { label: "Sessions", share: 1 },
  { label: "Product views", share: 0.54 },
  { label: "Added to cart", share: 0.14 },
  { label: "Checkout", share: 0.062 },
]

export function downloadCsv(name: string, rows: (string | number)[][]) {
  const csv = rows.map((row) => row.join(",")).join("\n")
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }))
  const link = document.createElement("a")
  link.href = url
  link.download = name
  link.click()
  URL.revokeObjectURL(url)
}

export const USER = {
  name: "Ella Novak",
  initials: "EN",
  email: "ella@tally.example",
  role: "Store owner",
  store: "Tally Goods",
  since: "March 2024",
}

export const NOTIFICATIONS = [
  {
    id: "orders",
    label: "New orders",
    description: "Every time an order comes in",
    enabled: false,
  },
  {
    id: "stock",
    label: "Low stock",
    description: "When a product needs a reorder",
    enabled: true,
  },
  {
    id: "refunds",
    label: "Refunds",
    description: "When a customer asks for one",
    enabled: true,
  },
  {
    id: "report",
    label: "Weekly report",
    description: "A summary every Monday",
    enabled: true,
  },
]

export const PLANS = [
  {
    name: "Starter",
    description: "For new stores",
    price: 29,
    orders: 5000,
    products: 25,
    seats: 3,
  },
  {
    name: "Growth",
    description: "For stores with steady sales",
    price: 79,
    orders: 10000,
    products: 250,
    seats: 5,
  },
  {
    name: "Scale",
    description: "For large teams",
    price: 199,
    orders: 50000,
    products: 2500,
    seats: 20,
  },
]

export const SEATS_USED = 3
export const CARD = { last4: "4242", expires: "08/28" }
export const NEXT_INVOICE = "Dec 1, 2026"

export const INVOICES = [
  { id: "INV-0032", date: "Nov 1, 2026", plan: "Growth", total: 79 },
  { id: "INV-0031", date: "Oct 1, 2026", plan: "Growth", total: 79 },
  { id: "INV-0030", date: "Sep 1, 2026", plan: "Growth", total: 79 },
  { id: "INV-0029", date: "Aug 1, 2026", plan: "Growth", total: 79 },
  { id: "INV-0028", date: "Jul 1, 2026", plan: "Starter", total: 29 },
  { id: "INV-0027", date: "Jun 1, 2026", plan: "Starter", total: 29 },
]
