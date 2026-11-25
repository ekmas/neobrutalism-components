import { Metadata } from "next"

import CTA from "@/components/templates/saas/cta"
import FAQ from "@/components/templates/saas/faq"
import Features from "@/components/templates/saas/features"
import Footer from "@/components/templates/saas/footer"
import Hero from "@/components/templates/saas/hero"
import HowItWorks from "@/components/templates/saas/how-it-works"
import Logos from "@/components/templates/saas/logos"
import Navbar from "@/components/templates/saas/navbar"
import Pricing from "@/components/templates/saas/pricing"
import ProductTabs from "@/components/templates/saas/product-tabs"
import Stats from "@/components/templates/saas/stats"
import Testimonials from "@/components/templates/saas/testimonials"

export const metadata: Metadata = {
  title: "Planly - Plan less. Ship more.",
  description:
    "The fast, focused project tracker for teams that ship. Issues, roadmaps and AI triage in one workspace.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-base text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <ProductTabs />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
