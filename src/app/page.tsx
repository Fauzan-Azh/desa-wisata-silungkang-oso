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
                Desa Wisata
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Kolom Kiri - Deskripsi */}
                  <div className="flex justify-center">
                    <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed text-justify">
                      {lang === 'id' ? (
                        <p>
                          Desa Silungkang Oso terletak di Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat, dengan luas wilayah sekitar 6,57 km². Desa ini berjarak sekitar 78 km dari Kota Padang dengan waktu tempuh sekitar 2 jam menggunakan kendaraan roda empat. Desa ini berada pada ketinggian antara 267 hingga 710 meter di atas permukaan laut, dengan suhu udara tahunan sekitar 22°C, sehingga memiliki iklim yang sejuk dan nyaman.
                          <br />
                          <br />
                          Penduduk Desa Silungkang Oso berjumlah sekitar 1.574 jiwa, terdiri dari laki-laki dan perempuan. Desa ini terdiri dari empat dusun utama: Lubuk Kubang, Sungai Cacang, Sawah Darek, dan Kebun Jeruk. Mata pencaharian utama masyarakatnya meliputi pertanian, bertenun (songket), dan berdagang. Di bidang pertanian, mereka menanam berbagai tanaman seperti kemiri, kulit manis, kakao, jagung, padi, bawang, dan ubi. Sedangkan di bidang bertenun, kegiatan tersebut telah dilakukan secara turun-temurun dan merupakan bagian penting dari budaya desa.
                        </p>
                      ) : (
                        <p>
                          Silungkang Oso Village is located in Silungkang District, Sawahlunto City, West Sumatra, with an area of approximately 6.57 km². The village is about 78 km from Padang City with a travel time of about 2 hours by four-wheeled vehicle. The village is located at an altitude between 267 to 710 meters above sea level, with an annual air temperature of around 22°C, making it have a cool and comfortable climate.
                          <br /><br />
                          The population of Silungkang Oso Village is about 1,574 people, consisting of men and women. The village consists of four main hamlets: Lubuk Kubang, Sungai Cacang, Sawah Darek, and Kebun Jeruk. The main livelihoods of the community include agriculture, weaving (songket), and trading. In agriculture, they grow various crops such as candlenut, cinnamon, cocoa, corn, rice, onions, and sweet potatoes. Meanwhile, in weaving, this activity has been carried out from generation to generation and is an important part of the village culture.
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
                  {lang === 'id' ? 'Sejarah Desa Silungkang Oso' : 'History of Silungkang Oso Village'}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Text & Data */}
                  <div>
                    <div className="prose prose-lg max-w-none text-gray-700 font-poppins leading-relaxed mb-8 text-justify">
                      {lang === 'id' ? (
                        <>
                          <p className="mb-4">
                            Desa Silungkang Oso merupakan bagian dari <strong>Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat</strong>. Kawasan ini memiliki sejarah panjang yang erat kaitannya dengan perjuangan rakyat. Pada <strong>1 Januari 1927</strong>, terjadi sebuah peristiwa besar yang dikenal dengan <strong>Pemberontakan Silungkang</strong>, yaitu perlawanan buruh dan masyarakat terhadap pemerintahan kolonial Belanda. Pemberontakan ini menjadi salah satu tonggak penting dalam sejarah perjuangan kemerdekaan Indonesia, karena menegaskan semangat perlawanan kaum buruh tambang dan masyarakat setempat.
                          </p>
                          <p className="mb-4">
                            Asal-usul nama <strong>Silungkang</strong> sendiri masih menjadi perdebatan. Beberapa sumber menyebutkan nama ini berasal dari seorang tokoh atau lurah bernama <strong>Lungkang</strong>, sementara pendapat lain mengaitkannya dengan istilah lokal dalam bahasa <strong>Minangkabau</strong>. Selain sejarah perjuangan, kawasan Silungkang juga menyimpan jejak peninggalan kolonial, seperti rumah-rumah bergaya <strong>Belanda</strong> serta infrastruktur bersejarah, termasuk <strong>jembatan gantung tanpa tiang penyangga</strong> yang hingga kini masih digunakan masyarakat.
                          </p>
                          <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                            Budaya dan Kearifan Lokal
                          </h4>
                          <p className="mb-4">
                            Masyarakat Desa Silungkang Oso dikenal memiliki budaya yang kuat dan terjaga. Salah satu warisan budaya paling terkenal adalah <strong>tenun songket Silungkang</strong>, yang sudah diwariskan secara turun-temurun sejak ratusan tahun lalu. Songket Silungkang memiliki keindahan dan kualitas yang setara dengan songket Pandai Sikek, bahkan menjadi salah satu identitas budaya penting Kota Sawahlunto.
                          </p>
                          <p>
                            Selain itu, masyarakat masih memelihara berbagai tradisi adat, seperti <strong>pidato adat, taktumbin, turun mandi, bakau, dan manjalang mintuo</strong>. Dalam bidang kesenian, Silungkang Oso dikenal dengan <strong>randai</strong> serta <strong>talempong botuang</strong>, yang telah ditetapkan sebagai <strong>Warisan Budaya Takbenda Indonesia</strong> oleh Kementerian Pendidikan dan Kebudayaan.
                          </p>
                          <p className="mt-4">
                            Kearifan lokal yang terjaga ini tidak hanya memperkuat identitas budaya masyarakat, tetapi juga memberikan daya tarik tersendiri bagi wisatawan yang berkunjung, sehingga menjadikan Silungkang Oso sebagai salah satu destinasi budaya dan sejarah yang penting di Sumatera Barat.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mb-4">
                            Silungkang Oso Village is part of <strong>Silungkang District, Sawahlunto City, West Sumatra</strong>. This area has a long history closely related to the people&apos;s struggle. On <strong>January 1, 1927</strong>, a major event known as the <strong>Silungkang Rebellion</strong> occurred, which was a resistance by workers and the community against the Dutch colonial government. This rebellion became one of the important milestones in the history of Indonesia&apos;s independence struggle, as it affirmed the spirit of resistance of the mining workers and local community.
                          </p>
                          <p className="mb-4">
                            The origin of the name <strong>Silungkang</strong> itself is still debated. Some sources mention that this name comes from a figure or village head named <strong>Lungkang</strong>, while other opinions associate it with local terms in the <strong>Minangkabau</strong> language. Besides the history of struggle, the Silungkang area also preserves traces of colonial heritage, such as <strong>Dutch-style houses</strong> and historical infrastructure, including a <strong>suspension bridge without support pillars</strong> that is still used by the community today.
                          </p>
                          <h4 className="text-xl font-bold mb-3 text-gray-800 font-poppins">
                            Culture and Local Wisdom
                          </h4>
                          <p className="mb-4">
                            The people of Silungkang Oso Village are known for their strong and well-preserved culture. One of the most famous cultural heritages is <strong>Silungkang songket weaving</strong>, which has been passed down from generation to generation for hundreds of years. Silungkang songket has beauty and quality equivalent to Pandai Sikek songket, even becoming one of the important cultural identities of Sawahlunto City.
                          </p>
                          <p>
                            In addition, the community still maintains various traditional customs, such as <strong>traditional speeches, taktumbin, turun mandi, bakau, and manjalang mintuo</strong>. In the field of arts, Silungkang Oso is known for <strong>randai</strong> and <strong>talempong botuang</strong>, which have been designated as <strong>Indonesian Intangible Cultural Heritage</strong> by the Ministry of Education and Culture.
                          </p>
                          <p className="mt-4">
                            This preserved local wisdom not only strengthens the cultural identity of the community, but also provides its own attraction for visiting tourists, making Silungkang Oso one of the important cultural and historical destinations in West Sumatra.
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
                          <svg className="w-10 h-10 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                  <h3 className="text-2xl font-bold mb-8 text-gray-800 font-poppins text-center">
                    {lang === 'id' ? 'Kondisi Geografis' : 'Geographic Conditions'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Lokasi */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                    {/* Luas Wilayah */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Luas Wilayah' : 'Area'}
                      </h4>
                      <div className="space-y-2 text-gray-600 font-poppins">
                        <div>6,57 km²</div>
                      </div>
                    </div>

                    {/* Ketinggian */}
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <svg className="w-12 h-12 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold mb-4 text-gray-800 font-poppins">
                        {lang === 'id' ? 'Ketinggian' : 'Altitude'}
                      </h4>
                      <div className="space-y-2 text-gray-600 font-poppins">
                        <div>267-710 mdpl</div>
                        <div>{lang === 'id' ? 'iklim sejuk' : 'cool climate'}</div>
                        <div>{lang === 'id' ? 'suhu 22°C' : 'temperature 22°C'}</div>
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

          {/* Footer */}
          <footer className="bg-[#102467] text-white">
            {/* Top accent line */}
            <div className="h-1 bg-[#ffd704]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Left Column - Brand & Contact */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-[#ffd704] mb-4 font-poppins">
                    {lang === 'id' ? 'Desa Wisata Silungkang Oso' : 'Silungkang Oso Tourism Village'}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-poppins">
                    {lang === 'id' 
                      ? 'Nikmati keindahan alam, kekayaan budaya, dan kehangatan masyarakat di destinasi wisata terbaik Sumatera Barat.'
                      : 'Enjoy the natural beauty, cultural richness, and warmth of the community in the best tourist destination in West Sumatra.'
                    }
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a 
                        href="https://maps.app.goo.gl/CuMxFdY1tEyyZQAF8?g_st=iw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins"
                      >
                        Desa Silungkang Oso Kec. Silungkang,<br />
                        Kota Sawahlunto Sumatera Barat 27416
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300 text-sm font-poppins">+62 812-3456-7890</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#ffd704] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300 text-sm font-poppins">info@silungkangoso.com</span>
                    </div>
                  </div>
                </div>

                {/* Tentang Desa */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {lang === 'id' ? 'Tentang Desa' : 'About Village'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/profil-desa" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Profil Desa Silungkang Oso' : 'Silungkang Oso Village Profile'}</a></li>
                    <li><a href="#visi-misi" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Visi & Misi' : 'Vision & Mission'}</a></li>
                    <li><a href="#sejarah" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Sejarah & Budaya' : 'History & Culture'}</a></li>
                    <li><a href="#struktur" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Struktur Pokdarwis' : 'Pokdarwis Structure'}</a></li>
                  </ul>
                </div>

                {/* Wisata */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {lang === 'id' ? 'Wisata' : 'Tourism'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/potensi-desa" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Destinasi Wisata' : 'Tourist Destinations'}</a></li>
                    <li><a href="/paket-wisata" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Paket Wisata' : 'Tour Packages'}</a></li>
                    <li><a href="/galeri" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Galeri Foto & Video' : 'Photo & Video Gallery'}</a></li>
                    <li><a href="#budaya" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Budaya & Tradisi' : 'Culture & Tradition'}</a></li>
                  </ul>
                </div>

                {/* Layanan */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                    {lang === 'id' ? 'Layanan' : 'Services'}
                  </h4>
                  <ul className="space-y-2">
                    <li><a href="/pembelian-tiket" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Pemesanan Tiket' : 'Ticket Booking'}</a></li>
                    <li><a href="/produk-lokal" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'UMKM & Souvenir' : 'MSMEs & Souvenirs'}</a></li>
                    <li><a href="#kuliner" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Kuliner Khas' : 'Local Cuisine'}</a></li>
                    <li><a href="#guide" className="text-gray-300 hover:text-[#ffd704] transition-colors text-sm font-poppins">{lang === 'id' ? 'Guide & Transport' : 'Guide & Transport'}</a></li>
                  </ul>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-600 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-gray-300 text-sm font-poppins mb-4 md:mb-0">
                    © 2025 {lang === 'id' ? 'Desa Wisata Silungkang Oso.' : 'Silungkang Oso Tourism Village. All rights reserved. Managed by Pokdarwis Silungkang Oso Village'}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 text-sm font-poppins">{lang === 'id' ? 'Ikuti Kami:' : 'Follow Us:'}</span>
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-[#ffd704] transition-colors">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </div>
  );
}
