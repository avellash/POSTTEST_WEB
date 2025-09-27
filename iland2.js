// iland2.js
document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  const darkBtn = document.createElement("button");
  darkBtn.textContent = "🌙 Dark Mode";
  darkBtn.id = "darkModeBtn";
  document.body.prepend(darkBtn);

  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkBtn.textContent = "☀️ Light Mode";
    } else {
      darkBtn.textContent = "🌙 Dark Mode";
    }
  });
});
