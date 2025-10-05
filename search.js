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
    .replace(/đ/gi, "d")
    .toLowerCase();
}

function buildNormalizedIndex(text) {
  const normalizedChars = [];
  const indexMap = [];

  for (let i = 0; i < text.length;) {
    const codePoint = text.codePointAt(i);
    const char = String.fromCodePoint(codePoint);
    const normalizedChar = normalizeText(char);
    const charLength = char.length;

    if (normalizedChar) {
      for (const unit of Array.from(normalizedChar)) {
        normalizedChars.push(unit);
        indexMap.push({ start: i, end: i + charLength });
      }
    }

    i += charLength;
  }

  return {
    normalized: normalizedChars.join(""),
    map: indexMap
  };
}

function mergeRanges(ranges) {
  if (!ranges.length) {
    return [];
  }

  ranges.sort((a, b) => a.start - b.start);
  const merged = [Object.assign({}, ranges[0])];

  for (let i = 1; i < ranges.length; i++) {
    const current = ranges[i];
    const last = merged[merged.length - 1];

    if (current.start <= last.end) {
      last.end = Math.max(last.end, current.end);
    } else {
      merged.push(Object.assign({}, current));
    }
  }

  return merged;
}

function findMatchRangesInText(text, normalizedNeedle) {
  if (!normalizedNeedle) {
    return [];
  }

  const { normalized, map } = buildNormalizedIndex(text);
  const ranges = [];
  const targetLength = normalizedNeedle.length;
  let searchFrom = 0;

  while (searchFrom <= normalized.length - targetLength) {
    const foundIndex = normalized.indexOf(normalizedNeedle, searchFrom);
    if (foundIndex === -1) {
      break;
    }

    const startEntry = map[foundIndex];
    const endEntry = map[foundIndex + targetLength - 1];

    if (startEntry && endEntry) {
      ranges.push({ start: startEntry.start, end: endEntry.end });
    }

    searchFrom = foundIndex + targetLength;
  }

  return mergeRanges(ranges);
}

function createHighlightFragment(text, normalizedNeedle) {
  const fragment = document.createDocumentFragment();

  if (!normalizedNeedle) {
    fragment.appendChild(document.createTextNode(text));
    return fragment;
  }

  const ranges = findMatchRangesInText(text, normalizedNeedle);
  if (!ranges.length) {
    fragment.appendChild(document.createTextNode(text));
    return fragment;
  }

  let cursor = 0;
  ranges.forEach(({ start, end }) => {
    if (start > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, start)));
    }

    const mark = document.createElement("mark");
    mark.className = "search-highlight";
    mark.textContent = text.slice(start, end);
    fragment.appendChild(mark);

    cursor = end;
  });

  if (cursor < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(cursor)));
  }

  return fragment;
}

function appendHighlightedText(element, text, normalizedNeedle) {
  element.textContent = "";
  element.appendChild(createHighlightFragment(text, normalizedNeedle));
}

function searchQuestions(normalizedNeedle) {
  if (!normalizedNeedle) {
    return [];
  }

  return questions
    .map((question, index) => {
      const searchableParts = [question.question, ...question.options];
      const correctIndex = optionLabels.indexOf(question.correct);
      if (correctIndex > -1) {
        searchableParts.push(question.options[correctIndex]);
      }

      const isMatch = searchableParts.some(part => normalizeText(part).includes(normalizedNeedle));
      return isMatch ? { question, index } : null;
    })
    .filter(Boolean);
}

function renderResults(matches, normalizedNeedle) {
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
    appendHighlightedText(heading, `Cau ${index + 1}: ${question.question}`, normalizedNeedle);
    card.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "answer-list";

    question.options.forEach((optionText, optionIndex) => {
      const label = optionLabels[optionIndex];
      const item = document.createElement("li");
      item.className = "answer-item";
      appendHighlightedText(item, `${label}: ${optionText}`, normalizedNeedle);

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
  const trimmedTerm = term.trim();

  if (!trimmedTerm) {
    resultsContainer.innerHTML = "";
    infoLine.textContent = "Nhap tu khoa de bat dau tim kiem.";
    return;
  }

  if (trimmedTerm.length < 2) {
    resultsContainer.innerHTML = "";
    infoLine.textContent = "Nhap it nhat 2 ky tu.";
    return;
  }

  const normalizedNeedle = normalizeText(trimmedTerm);
  if (!normalizedNeedle) {
    resultsContainer.innerHTML = "";
    infoLine.textContent = "Ky tu tim kiem khong hop le.";
    return;
  }

  const matches = searchQuestions(normalizedNeedle);
  renderResults(matches, normalizedNeedle);
}

searchInput.addEventListener("input", handleSearch);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  resultsContainer.innerHTML = "";
  infoLine.textContent = "Nhap tu khoa de bat dau tim kiem.";
});

searchInput.focus();
