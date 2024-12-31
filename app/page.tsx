import { Layout } from "@/components/layout"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <Features />
      <About />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </Layout>
  )
}

