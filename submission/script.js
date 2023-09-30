// Ambil elemen-elemen yang akan diubah dengan JavaScript
const toggleButton = document.getElementById("toggleButton");

// Tambahkan event listener pada tombol toggle
toggleButton.addEventListener("click", function () {
  // Ambil elemen HTML root (document.documentElement)
  const htmlRoot = document.documentElement;

  // Toggle warna latar belakang (background) HTML menjadi biru laut
  if (htmlRoot.style.backgroundColor === "blue") {
    htmlRoot.style.backgroundColor = ""; // Kembalikan ke warna default jika sudah biru
  } else {
    htmlRoot.style.backgroundColor = "blue"; // Ubah menjadi biru laut
  }
});
