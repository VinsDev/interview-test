export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-20 sm:pt-24 md:pt-28">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-[#2a2a2a] mb-6">Contact Us</h1>
          <div className="space-y-6 text-[#2a2a2a]">
            <p className="text-lg leading-relaxed">
              We&apos;d love to hear from you! Get in touch with us for any inquiries about our properties or services.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-1">Phone</h3>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-1">Email</h3>
                <p className="text-lg">info@eleganthouses.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-1">Address</h3>
                <p className="text-lg">123 Elegant Street, Suite 100<br />Beautiful City, ST 12345</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-1">Business Hours</h3>
                <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
