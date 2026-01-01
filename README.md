# 🌄 Website Desa Wisata Silungkang Oso

Website resmi untuk mempromosikan Desa Wisata Silungkang Oso, sebuah destinasi wisata yang terletak di Kecamatan Silungkang, Kota Sawahlunto, Sumatera Barat. Website ini menampilkan informasi lengkap tentang destinasi wisata, budaya lokal, produk UMKM, dan berbagai informasi penting lainnya tentang desa.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)

## ✨ Fitur Utama

### 🏞️ Destinasi Wisata
- **Camping Ground** - Area camping dengan pemandangan pegunungan dan spot terbaik untuk melihat sunrise
- **Goa Kelambu** - Gua alami dengan stalaktit dan stalagmit yang menawan
- **Kolam Renang** - Kolam renang alami dengan air jernih di tengah hutan
- **Batu Runciang** - Batu besar dengan pemandangan alam yang menakjubkan

### 🎭 Budaya & Tradisi
- **Tenun Songket Silungkang** - Warisan budaya yang diwariskan turun-temurun
- **Randai** - Permainan tradisional Minangkabau yang menggabungkan seni lagu, musik, tari, drama dan silat
- **Talempong Botuang** - Alat musik perkusi tradisional dari bambu (Warisan Budaya Tak Benda Indonesia)
- **Pidato Adat** - Tradisi pidato dalam upacara adat
- **Rabana (Tak Tum Bin)** - Kesenian tradisional yang dimainkan dalam prosesi adat

### 🛍️ Produk Lokal & UMKM
- Tenun Songket Silungkang
- Produk olahan kulit manis (sirup, bubuk, aroma terapi)
- Aksesoris dari perca songket (gantungan kunci, pin, tote bag, lanyard)
- Dan berbagai produk lokal lainnya

### 📸 Galeri
- Dokumentasi visual destinasi wisata
- Foto kegiatan budaya dan tradisi
- Dokumentasi kehidupan masyarakat

### 🌐 Fitur Teknis
- **Bilingual Support** - Dukungan bahasa Indonesia dan Inggris
- **Responsive Design** - Tampilan optimal di semua perangkat
- **Contact Form** - Formulir kontak dengan integrasi email
- **Google Maps Integration** - QR Code untuk navigasi ke destinasi wisata
- **SEO Optimized** - Optimasi untuk mesin pencari
- **Google Analytics** - Tracking pengunjung website

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.0** - React framework dengan App Router
- **React 19.1.0** - Library UI
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS framework

### Backend & Tools
- **Nodemailer** - Email service untuk contact form
- **dotenv** - Environment variables management

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler untuk development dan build

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (versi 18 atau lebih tinggi)
- **npm** atau **yarn** atau **pnpm**

## 🚀 Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/wisata-glowup.git
   cd wisata-glowup
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Setup environment variables**
   
   Buat file `.env.local` di root project dan isi dengan konfigurasi berikut:
   ```env
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=recipient@example.com
   ```

   > **Catatan:** Untuk Gmail, Anda perlu menggunakan App Password, bukan password biasa. Lihat [EMAIL-SETUP-GUIDE.md](./EMAIL-SETUP-GUIDE.md) untuk panduan lengkap.

4. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

5. **Buka browser**
   
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## 📁 Struktur Project

```
wisata-glowup/
├── public/                    # Static assets
│   ├── image/                # Gambar destinasi, budaya, produk
│   ├── video/                # Video profil desa
│   └── logo/                 # Logo dan branding
├── src/
│   └── app/
│       ├── _components/      # Komponen reusable
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   ├── HeroSection.tsx
│       │   ├── GallerySection.tsx
│       │   ├── SouvenirSection.tsx
│       │   ├── ContactSection.tsx
│       │   └── LanguageProvider.tsx
│       ├── api/              # API routes
│       │   └── send-email/   # Email API endpoint
│       ├── potensi-desa/     # Halaman potensi desa
│       ├── paket-wisata/     # Halaman paket wisata
│       ├── galeri/           # Halaman galeri
│       ├── profil-desa/      # Halaman profil desa
│       ├── kontak/           # Halaman kontak
│       ├── layout.tsx        # Root layout
│       ├── page.tsx          # Homepage
│       └── globals.css       # Global styles
├── .env.local                # Environment variables (buat sendiri)
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 📜 Scripts Tersedia

```bash
# Development server dengan Turbopack
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start

# Linting
npm run lint

# Test email configuration
npm run test-email
```

## 🌍 Deployment

Website ini dapat di-deploy ke berbagai platform:

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Tambahkan environment variables
4. Deploy otomatis

### Platform Lain
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Railway**

Pastikan untuk menambahkan semua environment variables yang diperlukan di platform deployment Anda.

## 📝 Dokumentasi Tambahan

- [EMAIL-SETUP-GUIDE.md](./EMAIL-SETUP-GUIDE.md) - Panduan setup email
- [SETUP-ENV-LOCAL.md](./SETUP-ENV-LOCAL.md) - Panduan setup environment variables
- [FINAL-SETUP-CHECKLIST.md](./FINAL-SETUP-CHECKLIST.md) - Checklist setup akhir
- [TROUBLESHOOTING-FORM.md](./TROUBLESHOOTING-FORM.md) - Troubleshooting form kontak

## 🎨 Design & Branding

- **Primary Color:** `#ffd704` (Kuning Emas)
- **Secondary Color:** `#102467` (Navy Blue)
- **Background:** `#fffcf9` (Cream White)
- **Font:** Poppins (via Google Fonts)

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch untuk fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Project ini adalah project untuk Desa Wisata Silungkang Oso. Semua hak cipta dilindungi.

## 📞 Kontak

Untuk pertanyaan atau informasi lebih lanjut:

- **Website:** [Desa Wisata Silungkang Oso](https://your-domain.com)
- **WhatsApp:** +62 812-7784-9089
- **Email:** [Email dari environment variable]

## 🙏 Terima Kasih

Terima kasih telah menggunakan website Desa Wisata Silungkang Oso. Website ini dibuat dengan tujuan untuk mempromosikan dan melestarikan budaya serta potensi wisata Desa Silungkang Oso.

---

**Dibuat dengan ❤️ untuk Desa Wisata Silungkang Oso**
