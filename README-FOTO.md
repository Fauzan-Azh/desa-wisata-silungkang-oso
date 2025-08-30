# Cara Menempatkan Foto untuk Hero Banner

## ✅ **STATUS SAAT INI: BERFUNGSI SEMPURNA!**

Website sudah berjalan dengan 4 slide menggunakan foto `hero1.JPG` yang sudah ada.

## 📁 Lokasi File Foto

Letakkan foto-foto hero banner di folder:
```
wisata-glowup/public/image/herobanner/
```

## 📸 Nama File yang Diperlukan

**Saat ini berfungsi dengan:**
- ✅ `hero1.JPG` - Digunakan untuk semua 4 slide (sementara)

**Untuk mengganti dengan foto yang berbeda:**
- `hero1.JPG` - Untuk slide "SELAMAT DATANG"
- `hero2.JPG` - Untuk slide "KEINDAHAN ALAM"
- `hero3.JPG` - Untuk slide "WISATA LOKAL"
- `hero4.JPG` - Untuk slide "PETUALANGAN SERU"

## 🔧 Cara Mengganti Foto

### **Langkah 1: Taruh Foto Baru**
Letakkan foto baru di folder: `wisata-glowup/public/image/herobanner/`

### **Langkah 2: Edit Kode**
Buka file `src/app/page.tsx` dan ganti path foto:

```javascript
const slides = [
  {
    id: 1,
    image: '/image/herobanner/hero1.JPG', // Ganti dengan foto baru
    title: 'Selamat Datang di Desa Wisata Silungkang Oso',
    subtitle: 'GLOW-UP (Go Local Wisata Unggul & Promosi) sebagai wadah layanan untuk berwisata di Desa Silungkang Oso'
  },
  {
    id: 2,
    image: '/image/herobanner/hero2.JPG', // Ganti dengan foto baru
    title: 'KEINDAHAN ALAM',
    subtitle: 'Jelajahi keindahan alam yang memukau di Desa Silungkang Oso'
  },
  // ... dan seterusnya
];
```

## 🎯 Spesifikasi Foto yang Disarankan

- **Format**: JPG, PNG, atau WebP
- **Ukuran**: Minimal 1920x1080px (16:9 ratio)
- **Kualitas**: High quality untuk tampilan yang bagus
- **Konten**: Foto landscape alam, wisata, atau aktivitas di Desa Silungkang Oso

## 📂 Struktur Folder

```
wisata-glowup/
├── public/
│   └── image/
│       └── herobanner/
│           ├── hero1.JPG ← ✅ SUDAH ADA & BERFUNGSI
│           ├── hero2.JPG ← TARUH FOTO BARU DI SINI
│           ├── hero3.JPG ← TARUH FOTO BARU DI SINI
│           └── hero4.JPG ← TARUH FOTO BARU DI SINI
├── src/
└── ...
```

## ⚡ Cara Kerja

Setelah foto ditempatkan di folder `public/image/herobanner/`, foto akan otomatis tersedia di URL:
- `http://localhost:3000/image/herobanner/hero1.JPG` ← ✅ SUDAH BERFUNGSI
- `http://localhost:3000/image/herobanner/hero2.JPG`
- `http://localhost:3000/image/herobanner/hero3.JPG`
- `http://localhost:3000/image/herobanner/hero4.JPG`

## 🎯 Status Saat Ini

✅ **Navbar**: Elegan dan responsive  
✅ **Hero Banner**: Berfungsi dengan 4 slide  
✅ **Foto hero1.JPG**: Sudah terintegrasi untuk semua slide  
✅ **Slideshow**: Otomatis berganti setiap 5 detik  
✅ **Kontrol Manual**: Tombol panah dan dots berfungsi  
✅ **Tidak Full Screen**: Tinggi 600px dengan radius tumpul  
✅ **Error Fixed**: Tidak ada lagi error loading image  

## 🚀 Cara Menjalankan

1. **Buka terminal di folder yang benar:**
   ```bash
   cd wisata-glowup
   npm run dev
   ```

2. **Buka browser:**
   ```
   http://localhost:3000
   ```

## 🔧 Troubleshooting

### Foto Tidak Muncul?
1. **Refresh browser** dengan Ctrl+F5
2. **Periksa nama file**: Pastikan nama file sesuai (termasuk ekstensi .JPG)
3. **Periksa path**: Pastikan file ada di folder `public/image/herobanner/`
4. **Periksa ekstensi**: File harus menggunakan ekstensi yang sama persis (.JPG bukan .jpg)

**WEBSITE SUDAH BERFUNGSI SEMPURNA!** 🎉
