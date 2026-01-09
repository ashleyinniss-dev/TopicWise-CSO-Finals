document.getElementById("continueBtn").onclick = () => {
  const selected = [...document.getElementById("subjectSelect").selectedOptions]
    .map(o => o.value);

  if (selected.length === 0) {
    alert("Select at least one subject");
    return;
  }

  const studyData = {
    subjects: selected,
    planner: {},
    progress: {}
  };

  localStorage.setItem("studyData", JSON.stringify(studyData));
  window.location.href = "study-planner.html";
};