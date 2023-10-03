const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/", (req, res) => {
  // Menentukan jalur lengkap ke berkas HTML dan CSS
  const htmlPath = path.join(__dirname, "index.html");
  const cssPath = path.join(__dirname, "styles", "style.css");

  // Baca berkas HTML dan CSS
  const html = fs.readFileSync(htmlPath, "utf8");
  const css = fs.readFileSync(cssPath, "utf8");

  // Kirim halaman HTML dengan CSS terintegrasi
  res.send(`<style>${css}</style>${html}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
