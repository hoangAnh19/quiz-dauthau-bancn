const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearSearch");
const resultsContainer = document.getElementById("results");
const infoLine = document.getElementById("resultsInfo");
const optionLabels = ["A", "B", "C", "D"];
const flaggedQuestions = window.flaggedQuestionIndices || new Set();

function normalizeText(value) {
  if (!value) {
    return "";
  }
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function searchQuestions(term) {
  const needle = normalizeText(term.trim());
  if (!needle) {
    return [];
  }

  return questions
    .map((question, index) => {
      const searchableParts = [question.question, ...question.options];
      const correctIndex = optionLabels.indexOf(question.correct);
      if (correctIndex > -1) {
        searchableParts.push(question.options[correctIndex]);
      }

      const isMatch = searchableParts.some(part => normalizeText(part).includes(needle));
      return isMatch ? { question, index } : null;
    })
    .filter(Boolean);
}

function renderResults(matches) {
  resultsContainer.innerHTML = "";

  if (matches.length === 0) {
    infoLine.textContent = "Khong tim thay cau hoi phu hop.";
    return;
  }

  infoLine.textContent = `Tim thay ${matches.length} cau hoi.`;

  matches.forEach(({ question, index }) => {
    const card = document.createElement("div");
    card.className = "result-card";
    if (flaggedQuestions.has(index)) {
      card.classList.add("flagged-question");
    }

    const heading = document.createElement("h3");
    heading.textContent = `Cau ${index + 1}: ${question.question}`;
    card.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "answer-list";

    question.options.forEach((optionText, optionIndex) => {
      const label = optionLabels[optionIndex];
      const item = document.createElement("li");
      item.className = "answer-item";
      item.textContent = `${label}: ${optionText}`;

      if (label === question.correct) {
        item.classList.add("correct-answer");
      }

      list.appendChild(item);
    });

    card.appendChild(list);
    resultsContainer.appendChild(card);
  });
}

function handleSearch() {
  const term = searchInput.value;
  if (!term.trim()) {
    resultsContainer.innerHTML = "";
    infoLine.textContent = "Nhap tu khoa de bat dau tim kiem.";
    return;
  }

  if (term.trim().length < 2) {
    resultsContainer.innerHTML = "";
    infoLine.textContent = "Nhap it nhat 2 ky tu.";
    return;
  }

  const matches = searchQuestions(term);
  renderResults(matches);
}

searchInput.addEventListener("input", handleSearch);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  resultsContainer.innerHTML = "";
  infoLine.textContent = "Nhap tu khoa de bat dau tim kiem.";
});

searchInput.focus();
