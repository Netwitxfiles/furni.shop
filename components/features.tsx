import { CuboidIcon as CubeIcon } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "1.5% cashback",
      description: "Online shopping for retail sales direct to consumers",
    },
    {
      title: "30-day terms",
      description: "Online shopping for retail sales direct to consumers",
    },
    {
      title: "Save Money",
      description: "Online shopping for retail sales direct to consumers",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
            Hot <span className="text-3xl">🔥</span> deals for you
          </h2>
          <p className="text-gray-600">
            Online shopping for retail sales direct to consumers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <CubeIcon className="h-12 w-12 text-emerald-800" />
              <h3 className="text-2xl font-semibold text-emerald-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

