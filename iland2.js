// iland2.js
const pesertaCards = document.querySelectorAll(".peserta-card");
const filterButtons = document.createElement("div");
filterButtons.classList.add("filter-btns");

filterButtons.innerHTML = `
  <button id="showAll">Semua</button>
  <button id="showDebut">Debut</button>
  <button id="showEliminated">Tereliminasi</button>
`;
document.querySelector("#peserta").prepend(filterButtons);

document.getElementById("showAll").addEventListener("click", () => {
  pesertaCards.forEach(card => card.style.display = "block");
});
document.getElementById("showDebut").addEventListener("click", () => {
  pesertaCards.forEach(card => {
    card.querySelector(".status").classList.contains("debut") 
      ? card.style.display = "block" 
      : card.style.display = "none";
  });
});
document.getElementById("showEliminated").addEventListener("click", () => {
  pesertaCards.forEach(card => {
    card.querySelector(".status").classList.contains("eliminated") 
      ? card.style.display = "block" 
      : card.style.display = "none";
  });
});

pesertaCards.forEach(card => {
  card.addEventListener("click", () => {
    const nama = card.querySelector("p").textContent;
    alert("Detail Peserta:\n" + nama);
  });
});

async function fetchAnime() {
  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();
    const beritaSection = document.querySelector("#berita ol");
    const extra = document.createElement("li");
    extra.innerHTML = `<h3>Rekomendasi Anime</h3>
      <p>Anime populer saat ini: <strong>${data.data[0].title}</strong></p>`;
    beritaSection.appendChild(extra);
  } catch (error) {
    console.error("Gagal fetch API:", error);
  }
}
fetchAnime();
