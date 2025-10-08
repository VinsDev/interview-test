import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] lg:bg-[#2a2a2a] relative overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Diagonal Split Background - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Dark left section - slanted from top-right to bottom-left */}
        <div 
          className="absolute inset-0 bg-[#2a2a2a]" 
          style={{ clipPath: 'polygon(0 0, 35% 0, 22% 100%, 0 100%)' }}
        ></div>
        {/* Light right section */}
        <div 
          className="absolute inset-0 bg-[#f5f5f5]" 
          style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 22% 100%)' }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-120px)] flex items-start pt-4 sm:pt-6 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full px-4">
          {/* Left Side - House Image */}
          <div className="relative pb-0 flex items-end h-[50vh] lg:h-full order-2 lg:order-1">
            {/* Trapezium container with white border - top slants down right to left, right edge slants outward */}
            <div 
              className="relative bg-white p-1 w-full h-full lg:h-[85vh]"
              style={{ 
                clipPath: 'polygon(0 0, 85% 15%, 100% 100%, 0 100%)'
              }}
            >
              <div 
                className="relative overflow-hidden h-full"
                style={{ clipPath: 'polygon(0 0, 85% 15%, 100% 100%, 0 100%)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&h=900&fit=crop"
                  alt="Elegant House"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6 pl-0 lg:pl-12 pt-0 order-1 lg:order-2">
            <h1 className="font-black leading-[1.1] tracking-tight">
              <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
                <span className="text-[#2a2a2a]">FINDING YOUR</span>
              </div>
              <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
                <span className="text-[#ff6b35]">CHOICE ELEGANT</span>
              </div>
              <div className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-[#2a2a2a] relative inline-block">
                HOUSE
                <span className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-[4px] sm:h-[6px] bg-[#ff6b35]"></span>
              </div>
            </h1>

            <p className="text-[#2a2a2a] text-xs sm:text-sm leading-relaxed max-w-md mt-4 sm:mt-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or ran-
            </p>

            {/* Search Box */}
            <div className="flex items-stretch gap-0 max-w-md mt-4 sm:mt-6 md:mt-8">
              <button className="bg-[#2a2a2a] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-semibold text-xs sm:text-sm hover:bg-[#1a1a1a] transition-colors">
                Search
              </button>
              <input
                type="text"
                placeholder=""
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-[#2a2a2a] bg-white focus:outline-none focus:border-[#ff6b35] transition-colors text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
