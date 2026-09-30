const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");
const statusSuccess = document.querySelector(".status-success");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  preview.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `Nomor WhatsApp: ${data.get("nomor-WhatsApp")}`,
    `Waktu: ${data.get("pilihan-waktu")}`,
    `Paket: ${data.get("paket")}`,
    `Topik: ${data.get("topik")}`,
    `Pesan: ${data.get("pesan")}`,
  ].join("\n");

   statusSuccess.hidden = false;
});
