import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Utility class components registry - Neobrutalism components",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
