# 🍽️ Scanner Kuliner Bali

Aplikasi web interaktif berbasis AI yang memungkinkan pengguna memindai gambar makanan khas Bali menggunakan kamera atau upload gambar. Sistem ini dibangun dengan model klasifikasi citra dari [Teachable Machine](https://teachablemachine.withgoogle.com/), dilatih untuk mengenali beberapa jenis kuliner tradisional Bali.

🌐 **Live Demo:**  
[https://marselllniiboyy.github.io/scanner-kuliner-bali/](https://marselllniiboyy.github.io/scanner-kuliner-bali/)

---

## 🔍 Fitur Unggulan

- 🎯 Deteksi makanan tradisional Bali dengan kamera atau upload gambar
- 🤖 Menggunakan model AI dari Teachable Machine (image classification)
- 📖 Menampilkan informasi budaya, bahan, cara masak, dan barcode QR
- 🧠 Dapat diganti kamera depan/belakang
- ⚡ Akses cepat dan ringan (tanpa instalasi)

---

## 🛠️ Teknologi yang Digunakan

| Komponen         | Teknologi                     |
|------------------|-------------------------------|
| Model AI         | Teachable Machine (Image)     |
| Frontend         | HTML5, CSS3, JavaScript       |
| Hosting          | GitHub Pages                  |
| Framework        | Vanilla JS (tanpa library UI) |

---

## 📂 Struktur Folder
scan-kuliner-bali/
├── gambar/ # Berisi gambar makanan & barcode
├── model/ # Model AI dari Teachable Machine
│ ├── model.json
│ ├── metadata.json
│ └── weights.bin
├── index.html # Halaman utama
├── script.js # Logika interaktif & AI
├── style.css # Tampilan/layout
├── kuliner_data.json # Informasi detail kuliner
└── README.md

---

## 🎓 Panduan Penggunaan (Manual Book)

### A. Akses Aplikasi
1. Buka browser (Chrome, Edge, Firefox)
2. Kunjungi:  
   👉 [https://marselllniiboyy.github.io/scanner-kuliner-bali/](https://marselllniiboyy.github.io/scanner-kuliner-bali/)

### B. Gunakan Kamera
1. Klik **"Scan Kamera"**
2. Arahkan kamera ke makanan
3. AI akan memproses dan menampilkan detail makanan

### C. Upload Gambar
1. Klik **"Upload Gambar"**
2. Pilih gambar makanan dari galeri/penyimpanan
3. Aplikasi akan menampilkan hasil prediksi

---

## 📊 Dataset yang Digunakan

Model dilatih pada 4 kelas makanan khas Bali menggunakan Teachable Machine:

- 🥗 **Blayag**
- 🍃 **Entil Tabanan**
- 🍛 **Jukut Ares**
- 🍢 **Sate Plecing**

> Model dapat ditingkatkan dengan menambah jumlah sampel & kelas baru.

---

## 📎 Lisensi

Proyek ini dibuat untuk keperluan akademik dan pendidikan.  
Hak cipta gambar atau data asli tetap pada pemilik masing-masing.

---

## 👨‍💻 Developer

- **Nama:** Marselino  
- **Email:** _[ganti dengan email kamu]_  
- **GitHub:** [@Marselllniiboyy](https://github.com/Marselllniiboyy)  
- **Instagram:** [@marselllniiboyy](https://instagram.com/marselllniiboyy)  

---

## 📱 Screenshot Aplikasi
