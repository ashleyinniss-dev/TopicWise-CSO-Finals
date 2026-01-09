const subjectSelect = document.getElementById("subjectSelect");
const paperSelect = document.getElementById("paperSelect");
const startBtn = document.getElementById("startExam");

const examArea = document.getElementById("examArea");
const examTitle = document.getElementById("examTitle");
const timerDisplay = document.getElementById("timerDisplay");

let timerInterval;

// LOAD SUBJECTS FROM LOCAL STORAGE
const storedSubjects = JSON.parse(localStorage.getItem("selectedSubjects")) || [];

storedSubjects.forEach(subject => {
  const option = document.createElement("option");
  option.value = subject;
  option.textContent = subject;
  subjectSelect.appendChild(option);
});

// ENABLE PAPER SELECT
subjectSelect.addEventListener("change", () => {
  paperSelect.disabled = !subjectSelect.value;
});

// START EXAM
startBtn.addEventListener("click", () => {
  const subject = subjectSelect.value;
  const paper = paperSelect.value;
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;

  if (!subject || !paper || (hours === 0 && minutes === 0)) {
    alert("Please select subject, paper, and time.");
    return;
  }

  let totalSeconds = hours * 3600 + minutes * 60;

  examTitle.textContent = `${subject} — ${paper}`;
  examArea.classList.remove("hidden");

  clearInterval(timerInterval);
  updateTimer(totalSeconds);

  timerInterval = setInterval(() => {
    totalSeconds--;
    updateTimer(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
});

function updateTimer(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  timerDisplay.textContent = `${h}:${m}:${s}`;
}