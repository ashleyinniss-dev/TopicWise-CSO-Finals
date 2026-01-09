const subjects = document.querySelectorAll(".subject-card");
const cells = document.querySelectorAll(".day-cell");

subjects.forEach(sub => {
  sub.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", sub.textContent);
  });
});

cells.forEach(cell => {
  cell.addEventListener("dragover", e => e.preventDefault());

  cell.addEventListener("drop", e => {
    e.preventDefault();
    const text = e.dataTransfer.getData("text");

    const card = document.createElement("div");
    card.className = "planned-card";
    card.innerHTML = `
      <div class="card-header">
        <span>${text}</span>
        <span class="remove-btn">✕</span>
      </div>
      <div class="difficulty">
        <button class="easy-btn">Easy</button>
        <button class="medium-btn">Medium</button>
        <button class="hard-btn">Hard</button>
      </div>
    `;

    cell.appendChild(card);

    card.querySelector(".remove-btn").onclick = () => card.remove();

    card.querySelector(".easy-btn").onclick = () => setLevel(card, "easy");
    card.querySelector(".medium-btn").onclick = () => setLevel(card, "medium");
    card.querySelector(".hard-btn").onclick = () => setLevel(card, "hard");
  });
});

function setLevel(card, level) {
  card.classList.remove("easy", "medium", "hard");
  card.classList.add(level);
}

/* SAVE AS IMAGE */
document.getElementById("saveBtn").onclick = () => {
  html2canvas(document.getElementById("plannerCapture")).then(canvas => {
    const link = document.createElement("a");
    link.download = "topicwise-study-planner.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};