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

### C. Mencoba qr code
1. Setelah **"Upload Gambar"** dan makanan sudah sesuai tampil
2. Coba scrol ke bawah, akan muncul sebuah qr code
3. QR code tersebut bisa discan menggunakan kamera dihp
4. Setelah discan, akan masuk kehalaman AR, tinggal dinext"
5. Setelah masuk ke menu qr, coba arahkan kamera ke makanan yang ada diatas qr dihalaman scan-culiner
6. Maka muncul deskripsi berbentuk AR dari makanan tersebut 

---

## 📊 Dataset yang Digunakan

Model dilatih pada 4 kelas makanan khas Bali menggunakan Teachable Machine:

- 🥗 **Blayag**
- 🍃 **Entil Tabanan**
- 🍛 **Jukut Ares**
- 🍢 **Sate Plecing**
- 🍾 **Bir Singaraja**
- Dan masih banyak lagi, bisa di cek di data set.....

> Model dapat ditingkatkan dengan menambah jumlah sampel & kelas baru.
kami menggunakan model yang sudah ada yaitu model AI dari Teachable Machine (image classification), yang kami tinggal memlatih/proses traning agar bisa mengenali makan makan yang ada di dalam data set, setelah melakukan traning kami mengkonfigurasi agar data model AI tersebut dapat bekerja melalu tangkapan kamera ataupun file yang dipilih langsung dari perangkat. 
Semua proses tersebut dilakukan difile script.js
---

## 📎 Lisensi

Proyek ini dibuat untuk keperluan akademik dan pendidikan.  
Hak cipta gambar atau data asli tetap pada pemilik masing-masing.

---

## 👨‍💻 Developer 1

- **Nama:** Marsel   
- **Email:** _[marseljayawijaya@gmail.com]_  
- **GitHub:** [@Marselllniiboyy](https://github.com/Marselllniiboyy)  
- **Instagram:** [@marsel_wj](https://www.instagram.com/marsel_wj/) 

---

## 👨‍💻 Developer 2

- **Nama:** Bintang  
- **Email:** _[bintangpradnya80@gmail.com]_   
- **GitHub:** [@BintangPrdnya](https://github.com/BintangPrdnya)  
- **Instagram:** [@ppraadnyaa_](https://www.instagram.com/ppraadnyaa_/) 

---

## 📱 Screenshot Aplikasi
**Sebelum Proses SCaner**
![image](https://github.com/user-attachments/assets/18748836-6c40-4163-b49d-fd3d2950e247)
![image](https://github.com/user-attachments/assets/0fdac941-7b43-4084-8576-4ecbf082896b)
