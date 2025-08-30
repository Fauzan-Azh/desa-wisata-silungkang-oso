'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './_components/LanguageProvider';
import LanguageToggle from './_components/LanguageToggle';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePage, setActivePage] = useState('Beranda');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const slides = [
    {
      image: '/image/herobanner/image1.JPG',
      title_id: 'Selamat Datang di Desa Wisata Silungkang Oso',
      title_en: 'Welcome to Silungkang Oso Tourism Village',
      desc_id: 'GLOW-UP (Go Local Wisata Unggul & Promosi) sebagai wadah layanan untuk berwisata di Desa Silungkang Oso',
      desc_en: 'GLOW-UP (Go Local Excellence & Promotion) as your service gateway to explore Silungkang Oso.',
    },
    {
      image: '/image/herobanner/image2.JPG',
      title_id: 'Eksplor Desa Silungkang Oso',
      title_en: 'Explore Silungkang Oso Village',
      desc_id: 'Nikmati keindahan alam, budaya lokal, dan pengalaman tak terlupakan.',
      desc_en: 'Enjoy nature, local culture, and unforgettable experiences.',
    },
    {
      image: '/image/herobanner/image3.JPG',
      title_id: 'Dukung Produk Lokal',
      title_en: 'Support Local Products',
      desc_id: 'Belanja produk UMKM dan rasakan cita rasa khas masyarakat setempat.',
      desc_en: 'Shop MSME products and savor the authentic local flavors.',
    },
    {
      image: '/image/herobanner/image4.JPG',
      title_id: 'Dukung Produk Lokal',
      title_en: 'Support Local Products',
      desc_id: 'Belanja produk UMKM dan rasakan cita rasa khas masyarakat setempat.',
      desc_en: 'Shop MSME products and savor the authentic local flavors.',
    },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate slides setiap 7 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // Language is handled by global provider

  const navItems = lang === 'id'
    ? [
        { name: 'Beranda', href: '/' },
        { name: 'Profil Desa', href: '/profil-desa' },
        { name: 'Potensi Desa', href: '/potensi-desa' },
        { name: 'BUMDes', href: '/bumdes' },
        { name: 'Paket Wisata', href: '/paket-wisata' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'Kontak Kami', href: '/kontak' },
      ]
    : [
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
        isScrolled 
          ? 'bg-[#102467]/95 backdrop-blur-md' 
          : 'bg-[#fffcf9]/10 backdrop-blur-sm'
      }`}>
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
                  onClick={() => setActivePage(item.name)}
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

              {/* Language Toggle (desktop) */}
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
        {/* Mobile menu panel */}
        {isMobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#102467]/95 backdrop-blur-md">
            <div className="px-4 py-3 space-y-2">
              {/* Language Toggle (mobile) */}
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
      <div>
        {/* Hero Section */}
        <div className="relative w-screen h-screen overflow-hidden mb-16">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat slide-transition ${
                    index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                </div>
              ))}

              {/* Overlay shape untuk tulisan */}
              <div className="absolute inset-0 bg-black/40 slide-transition"></div>

              {/* Hero Content (title + description berubah sesuai slide) */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto px-5 md:px-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white font-poppins drop-shadow-2xl text-transition">
                    {lang === 'id' ? slides[activeIndex].title_id : slides[activeIndex].title_en}
                  </h1>
                  <p className="text-base md:text-xl font-medium leading-relaxed text-white font-poppins drop-shadow-2xl text-transition">
                    {lang === 'id' ? slides[activeIndex].desc_id : slides[activeIndex].desc_en}
                  </p>
                  <div className="mt-6">
                    <a
                      href="/potensi-desa"
                      className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#ffd704] hover:bg-[#ffd704]/90 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-out backdrop-blur-sm font-poppins font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 outline-none before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:transition-transform before:duration-500 before:pointer-events-none"
                    >
                      {lang === 'id' ? 'Kunjungi\u00a0\u00a0\u00a0Sekarang' : 'Visit\u00a0\u00a0\u00a0Now'}
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Tentang Desa Silungkang Oso */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Tentang Desa Silungkang Oso' : 'About Silungkang Oso Village'}
              </h2>
              
              {/* Deskripsi Utama dengan Video Profil */}
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Kolom Kiri - Deskripsi */}
                  <div>
                    <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed">
                      {lang === 'id' ? (
                        <p>
                          Desa Silungkang Oso memiliki kekayaan budaya yang sangat beragam. Kegiatan adat seperti <strong>pidato adat</strong>, <strong>taktumbin</strong>, <strong>turun mandi</strong>, <strong>bakau</strong>, dan <strong>manjalang mintuo</strong> masih terus dilestarikan oleh masyarakat. 
                          <br /><br />
                          Kegiatan keagamaan seperti <strong>yasinan</strong> dan <strong>peringatan 3–100 hari</strong> atas meninggalnya seseorang menjadi bagian penting dari kehidupan sosial masyarakat. 
                          <br /><br />
                          Tradisi kebudayaan seperti <strong>randai</strong>, <strong>marunguih</strong>, dan <strong>talempong botuang</strong> yang diakui sebagai warisan budaya takbenda terus dijaga kelestariannya. Bahkan anak-anak nagari pun melestarikan permainan tradisional, terlihat dari <strong>Bukit Guak Kumbuah</strong> yang hampir setiap sore dipenuhi anak-anak bermain layang-layang.
                        </p>
                      ) : (
                        <p>
                          Silungkang Oso Village has a very diverse cultural richness. Traditional activities such as <strong>traditional speeches</strong>, <strong>taktumbin</strong>, <strong>turun mandi</strong>, <strong>bakau</strong>, and <strong>manjalang mintuo</strong> are still preserved by the community.
                          <br /><br />
                          Religious activities such as <strong>yasinan</strong> and <strong>3-100 day commemorations</strong> for someone&apos;s passing are an important part of the community&apos;s social life.
                          <br /><br />
                          Cultural traditions such as <strong>randai</strong>, <strong>marunguih</strong>, and <strong>talempong botuang</strong> which are recognized as intangible cultural heritage continue to be preserved. Even the village children preserve traditional games, as seen from <strong>Bukit Guak Kumbuah</strong> which is almost every evening filled with children playing kites.
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Kolom Kanan - Video Profil */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">
                      {lang === 'id' ? 'Video Profil Desa' : 'Village Profile Video'}
                    </h3>
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                      {/* Video Placeholder */}
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-sm font-medium">
                            {lang === 'id' ? 'Video Profil Akan Segera Hadir' : 'Profile Video Coming Soon'}
                          </p>
                          <p className="text-xs mt-1 opacity-75">
                            {lang === 'id' ? 'Tempat untuk video profil desa' : 'Place for village profile video'}
                          </p>
                        </div>
                      </div>
                      
                      {/* Video Controls Placeholder */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3">
                        <div className="flex items-center space-x-3">
                          <button className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </button>
                          <div className="flex-1 bg-gray-600 rounded-full h-1">
                            <div className="bg-white h-1 rounded-full w-0"></div>
                          </div>
                          <span className="text-white text-xs">0:00</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Description */}
                    <div className="mt-4 text-sm text-gray-600 font-poppins">
                      {lang === 'id' ? (
                        <p>
                          Video profil ini akan menampilkan keindahan alam, kekayaan budaya, dan kehidupan masyarakat Desa Silungkang Oso yang penuh dengan tradisi dan kearifan lokal.
                        </p>
                      ) : (
                        <p>
                          This profile video will showcase the natural beauty, cultural richness, and community life of Silungkang Oso Village filled with traditions and local wisdom.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sejarah & Budaya Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 font-poppins">
                  {lang === 'id' ? 'Sejarah & Budaya' : 'History & Culture'}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Text & Data */}
                  <div>
                    <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed mb-8">
                      {lang === 'id' ? (
                        <>
                          <p className="mb-4">
                            Desa Silungkang Oso memiliki sejarah panjang sebagai pusat budaya Minangkabau. Dikenal dengan kerajinan songket yang telah diwariskan turun-temurun selama berabad-abad, desa ini menjadi saksi bisu perkembangan seni dan budaya Sumatera Barat.
                          </p>
                          <p>
                            Nama &quot;Silungkang&quot; sendiri berasal dari kata &quot;Si Lungkang&quot; yang berarti &quot;tempat yang tinggi&quot;, menggambarkan posisi geografis desa yang berada di dataran tinggi dengan pemandangan yang menakjubkan.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">
                            Silungkang Oso Village has a long history as a center of Minangkabau culture. Known for its songket craft that has been passed down for centuries, this village has been a silent witness to the development of art and culture in West Sumatra.
                          </p>
                          <p>
                            The name &quot;Silungkang&quot; itself comes from the word &quot;Si Lungkang&quot; which means &quot;high place&quot;, describing the geographical position of the village located on a highland with stunning views.
                          </p>
                        </>
                      )}
                    </div>
                    
                    {/* Data Stats */}
                    <div className="grid grid-cols-2 gap-8">
                      {/* History Stats */}
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <svg className="w-10 h-10 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-4xl font-bold text-gray-800 font-poppins mb-2">300+</div>
                        <div className="text-sm text-gray-600 font-poppins">
                          {lang === 'id' ? 'Tahun Sejarah' : 'Years of History'}
                        </div>
                      </div>
                      
                      {/* Population Stats */}
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                        </div>
                        <div className="text-4xl font-bold text-gray-800 font-poppins mb-2">1,200</div>
                        <div className="text-sm text-gray-600 font-poppins">
                          {lang === 'id' ? 'Jiwa Penduduk' : 'Population'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Image & Songket Info */}
                  <div>
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 rounded-lg h-80 mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">
                          {lang === 'id' ? 'Gambar/Video' : 'Image/Video'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Songket Info */}
                    <div className="border-l-4 border-[#ffd704] pl-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Songket Silungkang' : 'Silungkang Songket'}
                      </h4>
                      <p className="text-gray-600 font-poppins leading-relaxed">
                        {lang === 'id' 
                          ? 'Kerajinan songket dengan motif khas yang menjadi warisan budaya tak ternilai'
                          : 'Songket craft with distinctive motifs that is an invaluable cultural heritage'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sub-sections */}
              <div className="space-y-12">

                {/* Kondisi Geografis */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-gray-800 font-poppins">
                    {lang === 'id' ? 'Kondisi Geografis' : 'Geographic Conditions'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Lokasi */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Lokasi' : 'Location'}
                      </h4>
                      <div className="space-y-2 text-gray-600 font-poppins">
                        <div>{lang === 'id' ? 'Kecamatan Silungkang' : 'Silungkang District'}</div>
                        <div>{lang === 'id' ? 'Kota Sawahlunto' : 'Sawahlunto City'}</div>
                        <div>{lang === 'id' ? 'Sumatera Barat' : 'West Sumatra'}</div>
                      </div>
                    </div>

                    {/* Ketinggian */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Ketinggian' : 'Altitude'}
                      </h4>
                      <div className="space-y-2 text-gray-600 font-poppins">
                        <div>{lang === 'id' ? '650-800 mdpl' : '650-800 masl'}</div>
                        <div>{lang === 'id' ? 'Iklim sejuk' : 'Cool climate'}</div>
                        <div>{lang === 'id' ? 'Suhu 22-28°C' : 'Temperature 22-28°C'}</div>
                      </div>
                    </div>

                    {/* Akses */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Akses' : 'Access'}
                      </h4>
                      <div className="space-y-2 text-gray-600 font-poppins">
                        <div>{lang === 'id' ? '45 menit dari Padang' : '45 minutes from Padang'}</div>
                        <div>{lang === 'id' ? '20 menit dari Sawahlunto' : '20 minutes from Sawahlunto'}</div>
                        <div>{lang === 'id' ? 'Jalan beraspal' : 'Asphalt road'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Peta Wisata */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">
                    {lang === 'id' ? 'Peta Wisata' : 'Tourism Map'}
                  </h3>
                  <div className="text-gray-600">
                    {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
                  </div>
                </div>

                {/* Struktur Pokdarwis */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 font-poppins">
                    {lang === 'id' ? 'Struktur Pokdarwis' : 'Pokdarwis Structure'}
                  </h3>
                  <div className="text-gray-600">
                    {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
                  </div>
                </div>

                {/* Visi Misi */}
                <div className="bg-gradient-to-r from-[#102467] to-[#102467]/80 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-center mb-8 text-white font-poppins">
                    {lang === 'id' ? 'Visi & Misi Desa Wisata' : 'Tourism Village Vision & Mission'}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Visi */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4 text-white font-poppins">
                        {lang === 'id' ? 'Visi' : 'Vision'}
                      </h4>
                      <p className="text-white text-sm leading-relaxed font-poppins">
                        {lang === 'id' 
                          ? 'Menjadi desa wisata berkelanjutan yang memadukan pelestarian budaya Minangkabau, pemberdayaan ekonomi kreatif, dan digitalisasi pariwisata untuk kesejahteraan masyarakat.'
                          : 'To become a sustainable tourism village that integrates the preservation of Minangkabau culture, empowerment of the creative economy, and digitalization of tourism for the welfare of the community.'
                        }
                      </p>
                    </div>

                    {/* Misi */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-4 text-white font-poppins">
                        {lang === 'id' ? 'Misi' : 'Mission'}
                      </h4>
                      <ul className="text-white text-sm space-y-2 font-poppins">
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>
                            {lang === 'id' 
                              ? 'Mengembangkan wisata alam dan budaya berkelanjutan'
                              : 'Develop sustainable nature and cultural tourism'
                            }
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>
                            {lang === 'id' 
                              ? 'Memberdayakan UMKM dan ekonomi kreatif lokal'
                              : 'Empower local MSMEs and creative economy'
                            }
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>
                            {lang === 'id' 
                              ? 'Melestarikan warisan budaya Minangkabau'
                              : 'Preserve Minangkabau cultural heritage'
                            }
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>
                            {lang === 'id' 
                              ? 'Digitalisasi promosi dan layanan wisata'
                              : 'Digitalization of tourism promotion and services'
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Destinasi Wisata */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Destinasi Wisata' : 'Tourist Destinations'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 3: Budaya dan Tradisi */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Budaya dan Tradisi' : 'Culture and Traditions'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 4: Souvenir */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Souvenir' : 'Souvenirs'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 5: Paket Wisata */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Paket Wisata' : 'Tour Packages'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 6: Galeri */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Galeri' : 'Gallery'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          {/* Section 7: Kontak Informasi */}
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-poppins">
                {lang === 'id' ? 'Kontak Informasi' : 'Contact Information'}
              </h2>
              <div className="text-center text-gray-600">
                {lang === 'id' ? 'Konten menyusul.' : 'Content coming soon.'}
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 lg:px-8 mb-24">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 bg-[#fffcf9]/70 backdrop-blur-md shadow-xl">
                {/* Accent blurs: yellow and navy (placed behind content) */}
                <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 md:h-[22rem] md:w-[22rem] rounded-full bg-yellow-300/40 blur-2xl -z-10"></div>
                <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 md:h-[22rem] md:w-[22rem] rounded-full bg-[#102467]/40 blur-2xl -z-10"></div>

                <h2 className="relative z-10 text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-poppins leading-tight tracking-tight">
                  Ayo Kunjungi<br/>Desa Wisata Silungkang Oso
                </h2>

                <div className="mt-8 flex justify-center relative z-10">
                  <a
                    href="/potensi-desa"
                    className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#ffd704] hover:bg-[#ffd704]/90 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-out backdrop-blur-sm font-poppins font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 outline-none before:absolute before:inset-0 before:-translate-x-full group-hover:before:translate-x-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:transition-transform before:duration-500 before:pointer-events-none"
                  >
                    {lang === 'id' ? 'Kunjungi\u00a0\u00a0\u00a0Sekarang' : 'Visit\u00a0\u00a0\u00a0Now'}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
      </div>
  );
}
