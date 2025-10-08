export default function Service() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-20 sm:pt-24 md:pt-28">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-[#2a2a2a] mb-6">Our Services</h1>
          <div className="space-y-6 text-[#2a2a2a]">
            <div>
              <h2 className="text-2xl font-bold text-[#ff6b35] mb-2">Property Search</h2>
              <p className="text-lg leading-relaxed">
                We help you find the perfect property that matches your requirements and budget. Our extensive database includes a wide range of elegant houses and properties.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#ff6b35] mb-2">Home Consultation</h2>
              <p className="text-lg leading-relaxed">
                Our experts provide personalized consultations to understand your needs and guide you through the entire process of finding your dream home.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#ff6b35] mb-2">Property Management</h2>
              <p className="text-lg leading-relaxed">
                We offer comprehensive property management services to ensure your investment is well-maintained and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
