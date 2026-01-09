const modal = document.getElementById("getStartedModal");
const openBtn = document.getElementById("getStartedBtn");
const cancelBtn = document.getElementById("cancelSetup");
const continueBtn = document.getElementById("continueSetup");

openBtn.onclick = () => modal.classList.remove("hidden");
cancelBtn.onclick = () => modal.classList.add("hidden");

continueBtn.onclick = () => {
  const selected = [...document.getElementById("subjectSelect").selectedOptions]
    .map(o => o.value);

  if (selected.length === 0) {
    alert("Please select at least one subject.");
    return;
  }

  const studyData = {
    subjects: selected,
    planner: {},
    progress: {}
  };

  localStorage.setItem("studyData", JSON.stringify(studyData));

  window.location.href = "StudyPlanner.html";
};