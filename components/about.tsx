import Image from "next/image"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1.",
    title: "Who We Are",
    description: "You get a 2-week free trial to kick the Smarty tires. We want you to.",
  },
  {
    number: "2.",
    title: "What Do We Do",
    description: "We give you a free course that guides you through the process.",
  },
  {
    number: "3.",
    title: "How Do We Help",
    description: "Use our multimedia lectures, videos, and coaching sessions.",
  },
  {
    number: "4.",
    title: "Create success story",
    description: "With access to online learning resources anyone can transform.",
  },
]

export function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-16">
              At Besnik Consultancy, we take pride in our values - service, integrity, and excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {steps.map((step) => (
                <div key={step.number} className="space-y-2">
                  <div className="text-4xl font-bold text-emerald-800">{step.number}</div>
                  <h3 className="text-xl font-semibold text-emerald-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-8 gap-4 h-full">
            {/* Middle column images */}
            <div className="col-span-4 space-y-4">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/about-04.jpg"
                  alt="Interior design showcase 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/images/about-01.jpg"
                  alt="Interior design showcase 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Right column images */}
            <div className="col-span-4 space-y-4 pt-12">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/about-02.jpg"
                  alt="Interior design showcase 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-video relative">
                <Image
                  src="/images/about-03.jpg"
                  alt="Interior design showcase 4"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <Button 
            variant="secondary" 
            className="absolute top-0 right-0 bg-gray-100 hover:bg-gray-200"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}

