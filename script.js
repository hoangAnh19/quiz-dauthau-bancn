const quizContainer = document.getElementById("quiz");
const questionList = document.getElementById("questionList");

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
  correctCount = savedCorrect;
}
document.getElementById("correctCount").innerText = correctCount;
// =============================================

// ==== Tạo nút Làm lại 200 câu ====
const resetBtn = document.createElement("button");
resetBtn.innerText = "🔄 Làm lại 340 câu";
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

  alert("Đã làm mới 340 câu, bạn có thể bắt đầu lại từ đầu!");
};

// Gắn nút ngay cạnh h1.stats
document.querySelector(".stats").appendChild(resetBtn);
// =================================

function renderQuestion(index) {
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
        sidebarItem.classList.remove("correctMark", "wrongMark");
      
        if (opt === q.correct) {
          btn.classList.add("correct");
          sidebarItem.classList.add("correctMark");
          correctCount++;
          answers[index] = { selected: opt, isCorrect: true, showAnswer: answers[index]?.showAnswer || false };
        } else {
          btn.classList.add("wrong");
          sidebarItem.classList.add("wrongMark");
          answers[index] = { selected: opt, isCorrect: false, showAnswer: answers[index]?.showAnswer || false };
        }

        // ==== Lưu trạng thái vào localStorage ====
        localStorage.setItem("indexAnswers", JSON.stringify(answers));
        localStorage.setItem("indexCorrectCount", correctCount);
        // =========================================

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

  // mark active sidebar
  document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
  document.querySelector(`#q${index}`).classList.add("active");

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
