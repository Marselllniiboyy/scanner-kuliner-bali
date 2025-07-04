const MODEL_URL = "model/";
let model, webcam, labelContainer, maxPredictions;
let facingMode = "environment";

async function init() {
  // Load model
  const modelURL = MODEL_URL + "model.json";
  const metadataURL = MODEL_URL + "metadata.json";
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Stop kamera lama jika ada
  if (webcam) {
    await webcam.stop();
  }

  // Init kamera
  // webcam = new tmImage.Webcam(300, 300, { facingMode: "environment" });
  // await webcam.setup(); // minta izin akses kamera
  // await webcam.play();
  // window.requestAnimationFrame(loop);
  // document.getElementById("webcam").appendChild(webcam.canvas);

  // Setup webcam dengan facingMode yang dipilih
  webcam = new tmImage.Webcam(300, 300, { facingMode: facingMode });
  await webcam.setup();
  await webcam.play();

  // Tempatkan webcam canvas
  const webcamContainer = document.getElementById("webcam");
  webcamContainer.innerHTML = ""; // bersihkan sebelumnya
  webcamContainer.appendChild(webcam.canvas);

  // Mulai loop update frame
  window.requestAnimationFrame(loop);
}

async function loop() {
  webcam.update();
  window.requestAnimationFrame(loop);
}

async function predict() {
  await webcam.update();
  const prediction = await model.predict(webcam.canvas);
  const hasil = prediction.reduce((a, b) =>
    a.probability > b.probability ? a : b
  );
  const namaMakanan = hasil.className;
  console.log("Terdeteksi:", namaMakanan);
  tampilkanData(namaMakanan);
}

async function handleUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const prediction = await model.predict(canvas);
    const hasil = prediction.reduce((a, b) =>
      a.probability > b.probability ? a : b
    );

    const namaMakanan = hasil.className;
    console.log("Terdeteksi dari upload:", namaMakanan);
    tampilkanData(namaMakanan);
  };
}

async function tampilkanData(nama) {
  const response = await fetch("kuliner_data.json");
  const data = await response.json();
  const makanan = data[nama];

  if (makanan) {
    document.getElementById("nama").textContent = nama;
    document.getElementById("gambar").src = "gambar/" + makanan.gambar;
    document.getElementById("barcode").src = "gambar/" + makanan.barcode;
    document.getElementById("bahan").textContent = makanan.bahan.join(", ");
    document.getElementById("cara").textContent = makanan.cara;
    document.getElementById("budaya").textContent = makanan.budaya;
    document.getElementById("daerah").textContent = makanan.daerah;
    document.getElementById("kalori").textContent = makanan.kalori + " Kalori";
  } else {
    document.getElementById("nama").textContent = "Makanan tidak ditemukan";
    document.getElementById("gambar").src = "gambar/broken-image.png";
    document.getElementById("barcode").src = "gambar/broken-image.png";
    document.getElementById("bahan").textContent = "...";
    document.getElementById("cara").textContent = "...";
    document.getElementById("budaya").textContent = "...";
    document.getElementById("daerah").textContent = "...";
    document.getElementById("kalori").textContent = "...";
  }
}

function switchCamera() {
  const selected = document.getElementById("cameraSelect").value;
  facingMode = selected;
  init(); // Re-init kamera
}

init(); // jalankan saat halaman dibuka
