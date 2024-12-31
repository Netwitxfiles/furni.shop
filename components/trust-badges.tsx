
export function TrustBadges() {
  const companies = ["Microsoft", "Entrepreneur", "FORTUNE", "Business Card", "Mashable"]
  
  return (
    <section className="border-y bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-gray-600 mb-8">TRUSTED BY OVER 1K+ COMPANIES</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div key={company} className="text-gray-400 text-lg font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

