const topicsData = {
  addmath: ["Algebra","Trigonometry","Differentiation","Integration","Vectors","Probability"],
  biology: ["Living Organisms","Life Processes","Genetics","Ecology"],
  chemistry: ["Atomic Structure","Periodic Table","Acids & Bases","Organic Chemistry"]
};

const subjectCards = document.querySelectorAll(".subject-card");
const topicTitle = document.getElementById("topicTitle");
const topicList = document.getElementById("topicList");

subjectCards.forEach(card => {
  card.addEventListener("click", () => {
    const subject = card.dataset.subject;
    loadTopics(subject);
  });
});

function loadTopics(subject) {
  topicTitle.textContent = "Topics";
  topicList.innerHTML = "";

  const saved = JSON.parse(localStorage.getItem(subject)) || {};

  topicsData[subject].forEach(topic => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = saved[topic] || false;

    const label = document.createElement("span");
    label.textContent = topic;
    if (checkbox.checked) label.classList.add("done");

    checkbox.onchange = () => {
      saved[topic] = checkbox.checked;
      localStorage.setItem(subject, JSON.stringify(saved));
      label.classList.toggle("done", checkbox.checked);
      updateProgress(subject);
    };

    label.onclick = () => {
      window.location.href = `topic.html?subject=${subject}&topic=${encodeURIComponent(topic)}`;
    };

    li.append(checkbox, label);
    topicList.appendChild(li);
  });

  updateProgress(subject);
}

function updateProgress(subject) {
  const data = JSON.parse(localStorage.getItem(subject)) || {};
  const total = topicsData[subject].length;
  const completed = Object.values(data).filter(Boolean).length;
  const percent = Math.round((completed / total) * 100);

  document
    .querySelector(`[data-subject="${subject}"] .progress`)
    .style.width = percent + "%";
}