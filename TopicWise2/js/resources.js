const resources = [
  {
    title: "CSEC Mathematics Textbook",
    subject: "Mathematics",
    type: "Textbook"
  },
  {
    title: "CSEC Biology Past Paper (2022)",
    subject: "Biology",
    type: "Past Paper"
  },
  {
    title: "Chemistry SBA Guidelines",
    subject: "Chemistry",
    type: "SBA"
  },
  {
    title: "Physics Lab Manual",
    subject: "Physics",
    type: "Lab Manual"
  },
  {
    title: "English A Essay Notes",
    subject: "English A",
    type: "Notes"
  },
  {
    title: "Geography Revision Videos",
    subject: "Geography",
    type: "Video"
  }
];

const grid = document.getElementById("resourcesGrid");
const subjectFilter = document.getElementById("subjectFilter");
const typeFilter = document.getElementById("typeFilter");

function renderResources() {
  grid.innerHTML = "";

  const subjectValue = subjectFilter.value;
  const typeValue = typeFilter.value;

  const filtered = resources.filter(r =>
    (subjectValue === "all" || r.subject === subjectValue) &&
    (typeValue === "all" || r.type === typeValue)
  );

  filtered.forEach(r => {
    const card = document.createElement("div");
    card.className = "resource-card";

    card.innerHTML = `
      <h3>${r.title}</h3>
      <span class="tag subject-tag">${r.subject}</span>
      <span class="tag type-tag">${r.type}</span>
      <button>View Resource</button>
    `;

    grid.appendChild(card);
  });
}

subjectFilter.addEventListener("change", renderResources);
typeFilter.addEventListener("change", renderResources);

renderResources();