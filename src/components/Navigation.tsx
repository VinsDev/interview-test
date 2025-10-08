'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 bg-transparent">
      <Link href="/" className="text-[#2a2a2a] lg:text-white font-bold text-base sm:text-lg tracking-widest">LOGO</Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 sm:gap-8 md:gap-12 items-center text-xs sm:text-sm md:text-base">
        <Link href="/" className="text-[#ff6b35] font-bold hover:text-[#ff8555] transition-colors">Home</Link>
        <Link href="/about" className="text-[#2a2a2a] font-bold hover:text-[#1a1a1a] transition-colors">About us</Link>
        <Link href="/service" className="text-[#ff6b35] font-bold hover:text-[#ff8555] transition-colors">Service</Link>
        <Link href="/contact" className="text-[#2a2a2a] font-bold hover:text-[#1a1a1a] transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#2a2a2a] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#2a2a2a] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#2a2a2a] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg overflow-hidden md:hidden min-w-[200px]">
          <Link href="/" className="block px-6 py-3 text-[#ff6b35] font-bold hover:bg-[#f5f5f5] transition-colors border-b border-gray-100">Home</Link>
          <Link href="/about" className="block px-6 py-3 text-[#2a2a2a] font-bold hover:bg-[#f5f5f5] transition-colors border-b border-gray-100">About us</Link>
          <Link href="/service" className="block px-6 py-3 text-[#ff6b35] font-bold hover:bg-[#f5f5f5] transition-colors border-b border-gray-100">Service</Link>
          <Link href="/contact" className="block px-6 py-3 text-[#2a2a2a] font-bold hover:bg-[#f5f5f5] transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
}
