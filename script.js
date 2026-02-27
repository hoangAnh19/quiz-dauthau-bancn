const quizContainer = document.getElementById("quiz");
const questionList = document.getElementById("questionList");
const sidebarEl = document.querySelector('.sidebar');

// Pagination for sidebar (desktop + mobile)
let sidebarPage = 0; // 0-based
const isMobileView = () => window.innerWidth <= 768;
const pageSize = () => (isMobileView() ? 90 : 100);

let currentIndex = 0;
let correctCount = 0;
document.getElementById("totalCount").innerText = questions.length;

const flaggedQuestions = window.flaggedQuestionIndices || new Set();

// ==== Khôi phục trạng thái từ localStorage ====
let savedAnswers = JSON.parse(localStorage.getItem("indexAnswers") || "null");
let savedCorrect = parseInt(localStorage.getItem("indexCorrectCount") || "0");

let answers = Array(questions.length).fill(null);
if (savedAnswers) {
  answers = savedAnswers;
  // Recalculate from saved answers to avoid negative counts
  try {
    correctCount = answers.reduce((sum, a) => sum + (a && a.isCorrect ? 1 : 0), 0);
  } catch (e) {
    correctCount = 0;
  }
  localStorage.setItem("indexCorrectCount", String(correctCount));
}
document.getElementById("correctCount").innerText = correctCount;
// =============================================

// ==== Tạo nút Làm lại 200 câu ====
const resetBtn = document.createElement("button");
resetBtn.innerText = "🔄 Làm lại 390 câu";
resetBtn.style.marginLeft = "10px";
resetBtn.onclick = () => {
  // Xóa dữ liệu localStorage liên quan index
  localStorage.removeItem("indexAnswers");
  localStorage.removeItem("indexCorrectCount");

  // Reset biến
  answers = Array(questions.length).fill(null);
  correctCount = 0;

  // Cập nhật giao diện
  document.getElementById("correctCount").innerText = correctCount;
  document.querySelectorAll(".sidebar-item").forEach(item => {
    item.classList.remove("correctMark", "wrongMark");
  });

  // Render lại từ câu đầu tiên
  renderQuestion(0);

  alert("Đã làm mới 390 câu, bạn có thể bắt đầu lại từ đầu!");
};

// Gắn nút ngay cạnh h1.stats
document.querySelector(".stats").appendChild(resetBtn);
// =================================

function renderQuestion(index) {
  currentIndex = index;
  const q = questions[index];
  quizContainer.innerHTML = "";
  const div = document.createElement("div");
  div.className = "question";
  if (flaggedQuestions.has(index)) {
    div.classList.add("flagged-question");
  }
  div.innerHTML = `<h3>Câu ${index + 1}: ${q.question}</h3>`;

  ["A","B","C","D"].forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = `${opt}: ${q.options[i]}`;

    // phục hồi trạng thái trước đó
    if (answers[index] && answers[index].selected === opt) {
      btn.classList.add(answers[index].isCorrect ? "correct" : "wrong");
    }

    btn.onclick = () => {
        // reset tất cả đáp án trước
        div.querySelectorAll(".option-btn").forEach(b => b.classList.remove("correct", "wrong"));
      
        // nếu đã có đáp án trước → điều chỉnh lại điểm
        if (answers[index] && answers[index].isCorrect) {
          correctCount--; // giảm điểm nếu trước đó chọn đúng
        }
      
        const sidebarItem = document.querySelector(`#q${index}`);
        if (sidebarItem) sidebarItem.classList.remove("correctMark", "wrongMark");
      
        if (opt === q.correct) {
          btn.classList.add("correct");
          if (sidebarItem) sidebarItem.classList.add("correctMark");
          correctCount++;
          answers[index] = { selected: opt, isCorrect: true, showAnswer: answers[index]?.showAnswer || false };
        } else {
          btn.classList.add("wrong");
          if (sidebarItem) sidebarItem.classList.add("wrongMark");
          answers[index] = { selected: opt, isCorrect: false, showAnswer: answers[index]?.showAnswer || false };
        }

        // ==== Lưu trạng thái vào localStorage ====
        localStorage.setItem("indexAnswers", JSON.stringify(answers));
        localStorage.setItem("indexCorrectCount", correctCount);
        // =========================================

        if (correctCount < 0) correctCount = 0;
        document.getElementById("correctCount").innerText = correctCount;
      };
      
    div.appendChild(btn);
  });

  // navigation + nút xem đáp án
  const navDiv = document.createElement("div");
  navDiv.style.marginTop = "10px";
  navDiv.style.display = "flex";
  navDiv.style.justifyContent= "center";
  navDiv.style.fontSize = "16px";

  if (index > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "⬅️ Câu trước";
    prevBtn.onclick = () => renderQuestion(index - 1);
    navDiv.appendChild(prevBtn);
  }

  if (index < questions.length - 1) {
    const nextBtn = document.createElement("button");``
    nextBtn.innerText = "Câu sau ➡️";
    nextBtn.onclick = () => renderQuestion(index + 1);
    navDiv.appendChild(nextBtn);
  }

  const showBtn = document.createElement("button");
  showBtn.innerText = "📖 Xem đáp án đúng";
  showBtn.onclick = () => {
    const correctOpt = q.correct;
    const correctIndex = { "A": 0, "B": 1, "C": 2, "D": 3 }[correctOpt];
    const correctBtn = div.querySelectorAll(".option-btn")[correctIndex];
    correctBtn.classList.add("correct");

    if (!answers[index]) {
      answers[index] = { selected: null, isCorrect: false, showAnswer: true };
    } else {
      answers[index].showAnswer = true;
    }

    // lưu lại trạng thái showAnswer
    localStorage.setItem("indexAnswers", JSON.stringify(answers));
  };
  
  navDiv.appendChild(showBtn);

  div.appendChild(navDiv);
  quizContainer.appendChild(div);

  // mark active in sidebar (auto flip page on mobile)
  const needPage = Math.floor(index / pageSize());
  if (needPage !== sidebarPage) {
    sidebarPage = needPage;
    applySidebarPage();
  }
  document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
  const activeEl = document.querySelector(`#q${index}`);
  if (activeEl) activeEl.classList.add("active");

  // cập nhật điểm hiển thị
  document.getElementById("correctCount").innerText = correctCount;
}

// sidebar render
questions.forEach((q, index) => {
  const link = document.createElement("div");
  link.id = `q${index}`;
  link.className = "sidebar-item";
  if (flaggedQuestions.has(index)) {
    link.classList.add("flagged-item");
  }
  link.innerText = index + 1;
  link.onclick = () => renderQuestion(index);
  questionList.appendChild(link);

  // đánh dấu màu khi load lại
  if (answers[index]) {
    if (answers[index].isCorrect) link.classList.add("correctMark");
    else if (answers[index].selected) link.classList.add("wrongMark");
  }
});

// render câu đầu tiên
renderQuestion(0);

// --- Mobile sidebar paging: show 100 items per page ---
(function(){
  const totalPages = () => Math.ceil(questions.length / pageSize());

  function ensurePager(){
    if (!sidebarEl) return null;
    let pager = document.querySelector('.sidebar-pager');
    if (!pager) {
      pager = document.createElement('div');
      pager.className = 'sidebar-pager';
      const prev = document.createElement('button');
      prev.type = 'button';
      prev.textContent = 'Trước';
      prev.addEventListener('click', () => {
        sidebarPage = Math.max(0, sidebarPage - 1);
        applySidebarPage();
      });
      const label = document.createElement('span');
      label.className = 'page-label';
      const select = document.createElement('select');
      select.className = 'page-select';
      select.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        if (!Number.isNaN(val)) {
          sidebarPage = Math.max(0, Math.min(totalPages() - 1, val));
          applySidebarPage();
        }
      });
      const next = document.createElement('button');
      next.type = 'button';
      next.textContent = 'Sau';
      next.addEventListener('click', () => {
        sidebarPage = Math.min(totalPages() - 1, sidebarPage + 1);
        applySidebarPage();
      });
      pager.appendChild(prev);
      pager.appendChild(label);
      pager.appendChild(select);
      pager.appendChild(next);
      if (questionList && questionList.parentElement) {
        questionList.parentElement.insertBefore(pager, questionList);
      }
    }
    return pager;
  }

  function updatePagerUI(){
    const pager = ensurePager();
    if (!pager) return;
    const label = pager.querySelector('.page-label');
    if (label) label.textContent = `Trang ${sidebarPage + 1}/${totalPages()}`;
    // dropdown options
    const sel = pager.querySelector('.page-select');
    if (sel) {
      const tp = totalPages();
      if (sel.options.length !== tp) {
        sel.innerHTML = '';
        for (let p = 0; p < tp; p++) {
          const start = p * pageSize() + 1;
          const end = Math.min(questions.length, (p + 1) * pageSize());
          const opt = document.createElement('option');
          opt.value = String(p);
          opt.textContent = `Trang ${p + 1} (${start}-${end})`;
          sel.appendChild(opt);
        }
      }
      sel.value = String(sidebarPage);
      sel.style.display = '';
    }
    pager.style.display = 'flex';
  }

  window.applySidebarPage = function applySidebarPage(){
    const start = sidebarPage * pageSize();
    const end = Math.min(questions.length, start + pageSize());
    // Re-render list for the current page (works for both PC and mobile)
    if (questionList) {
      questionList.innerHTML = '';
      for (let i = start; i < end; i++) {
        const link = document.createElement('div');
        link.id = `q${i}`;
        link.className = 'sidebar-item';
        if (flaggedQuestions.has(i)) link.classList.add('flagged-item');
        link.innerText = i + 1;
        link.onclick = () => renderQuestion(i);
        if (answers[i]) {
          if (answers[i].isCorrect) link.classList.add('correctMark');
          else if (answers[i].selected) link.classList.add('wrongMark');
        }
        questionList.appendChild(link);
      }
    }
    updatePagerUI();
  }

  // Initialize
  ensurePager();
  applySidebarPage();

  // Re-evaluate on resize (keep current question's page visible)
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      const needPage = Math.floor(currentIndex / pageSize());
      sidebarPage = Math.max(0, Math.min(totalPages()-1, needPage));
      applySidebarPage();
    }, 150);
  });
})();

// --- Mobile: move donation section to bottom ---
(function () {
  const donation = document.querySelector('.donation-section');
  const quizContainerEl = document.querySelector('.quiz-container');
  if (!donation || !quizContainerEl) return;

  const originalParent = donation.parentElement;
  const originalNext = donation.nextElementSibling; // may be null

  const isMobile = () => window.innerWidth <= 768;

  function moveToBottom() {
    if (quizContainerEl.nextElementSibling !== donation) {
      quizContainerEl.after(donation);
    }
  }

  function restorePosition() {
    if (originalNext && originalNext.parentElement === originalParent) {
      originalParent.insertBefore(donation, originalNext);
    } else {
      originalParent.appendChild(donation);
    }
  }

  function applyPlacement() {
    if (isMobile()) moveToBottom(); else restorePosition();
  }

  applyPlacement();

  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(applyPlacement, 150);
  });
})();
