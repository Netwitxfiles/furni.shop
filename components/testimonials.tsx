import Image from "next/image"

const testimonials = [
  {
    content: "The team at furni.shop transformed our space into a dream home. Their attention to detail and understanding of our style was impressive.",
    author: "Emily Johnson",
    role: "Homeowner",
    avatar: "/images/testimo-01.jpeg"
  },
  {
    content: "Working with furni.shop was a breeze. They took our vision and elevated it beyond our expectations. Highly recommended!",
    author: "Michael Chen",
    role: "Business Owner",
    avatar: "/images/testimo-02.jpeg"
  },
  {
    content: "The furniture and decor suggestions from furni.shop completely revitalized our office space. Our employees love coming to work now!",
    author: "Sarah Thompson",
    role: "HR Director",
    avatar: "/images/testimo-03.jpeg"
  }
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

