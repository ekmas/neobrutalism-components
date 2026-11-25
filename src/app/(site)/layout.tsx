import HireMeBanner from "@/components/app/hire-me-banner"
import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HireMeBanner />
      <Navbar />
      {children}
      <SetStylingPref />
      <ScrollToTop />
    </>
  )
}
