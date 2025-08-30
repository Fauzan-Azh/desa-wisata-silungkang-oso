'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../_components/LanguageProvider';
import LanguageToggle from '../_components/LanguageToggle';

export default function Kontak() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Kontak Kami');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Desa', href: '/profil-desa' },
    { name: 'Potensi Desa', href: '/potensi-desa' },
    { name: 'BUMDes', href: '/bumdes' },
    { name: 'Paket Wisata', href: '/paket-wisata' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kontak Kami', href: '/kontak' },
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      {/* Navbar */}
      <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg bg-[#102467]"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#102467] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl font-poppins">G</span>
              </div>
              <span className="font-bold text-2xl font-poppins text-white">
                GLOW-UP
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`font-poppins font-medium transition-all duration-300 hover:scale-105 relative ${
                    activePage === item.name 
                      ? 'text-[#ffd704]' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activePage === item.name && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ffd704] rounded-full"></div>
                  )}
                </a>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Buka menu"
                onClick={() => setIsMobileOpen((v) => !v)}
                className="p-2 rounded-lg text-white transition-colors duration-300 hover:bg-[#102467]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileOpen && (
          <div className="md:hidden border-t border-[#fffcf9]/10 bg-[#102467]">
            <div className="px-4 py-3 space-y-2">
              <LanguageToggle />
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => { setActivePage(item.name); setIsMobileOpen(false); }}
                  className={`block rounded-lg px-3 py-2 font-poppins font-medium transition-colors duration-200 ${
                    activePage === item.name ? 'bg-white/10 text-[#ffd704]' : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 font-poppins">
              Kontak Kami
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-600 font-poppins max-w-4xl mx-auto">
              Halaman Kontak Kami - Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
