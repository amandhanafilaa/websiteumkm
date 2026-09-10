const promoButton = document.querySelector("#promoButton");
const pesanButton = document.getElementById("pesanButton");

promoButton.addEventListener("click", () => {
  promoButton.textContent = "Promo: Beli 2 gratis 1!";
  console.log("Promo Zeze Collection berhasil ditampilkan.");
});

pesanButton.addEventListener("click", () => {
  pesanButton.textContent = "Pemesanan sedang diproses...";
  console.log("Pemesanan berhasil dikirim.");
});