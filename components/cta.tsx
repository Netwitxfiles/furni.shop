import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-emerald-800 text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s create the interior of your dreams. Our team of experts is here to help you every step of the way.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
          <Button variant="ghost" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

