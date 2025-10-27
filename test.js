// shuffle array (Fisher-Yates)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const quizContainer = document.getElementById("quiz");
const questionList = document.getElementById("questionList");

let currentIndex = 0;
let correctCount = 0;

// Mỗi lần load trang → random 70 câu mới
const selectedQuestions = shuffle([...questions]).slice(0, 70);
let answers = Array(selectedQuestions.length).fill(null);

document.getElementById("totalCount").innerText = selectedQuestions.length;
document.getElementById("correctCount").innerText = correctCount;

// ==== Nút Làm lại bài test ====
const resetBtn = document.createElement("button");
resetBtn.innerText = "🔄 Làm lại bài test";
resetBtn.style.marginLeft = "10px";
resetBtn.onclick = () => {
  // Reload toàn trang để random lại
  location.reload();
};

// Gắn nút ngay cạnh h1.stats
document.querySelector(".stats").appendChild(resetBtn);
// =================================

function renderQuestion(index) {
  const q = selectedQuestions[index];
  quizContainer.innerHTML = "";
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<h3>Câu ${index + 1}: ${q.question}</h3>`;

  ["A", "B", "C", "D"].forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = `${opt}: ${q.options[i]}`;

      // phục hồi trạng thái trước đó
      if (answers[index] && answers[index].selected === opt) {
          btn.classList.add(answers[index].isCorrect ? "correct" : "wrong");
          btn.disabled = true; // khóa lại
      }

      btn.onclick = () => {
          // nếu đã trả lời thì không cho làm lại
          if (answers[index] && answers[index].selected) return;

          if (opt === q.correct) {
              btn.classList.add("correct");
              document.querySelector(`#q${index}`).classList.add("correctMark");
              correctCount++;
              answers[index] = { selected: opt, isCorrect: true };
          } else {
              btn.classList.add("wrong");
              document.querySelector(`#q${index}`).classList.add("wrongMark");
              answers[index] = { selected: opt, isCorrect: false };
          }

          // khóa tất cả nút sau khi chọn
          div.querySelectorAll(".option-btn").forEach(b => b.disabled = true);

          document.getElementById("correctCount").innerText = correctCount;
          checkCompletion();
      };

      div.appendChild(btn);
  });

  // navigation + nút xem đáp án
  const navDiv = document.createElement("div");
  navDiv.style.marginTop = "10px";
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "center";

  if (index > 0) {
      const prevBtn = document.createElement("button");
      prevBtn.innerText = "⬅️ Câu trước";
      prevBtn.onclick = () => renderQuestion(index - 1);
      navDiv.appendChild(prevBtn);
  }

  if (index < selectedQuestions.length - 1) {
      const nextBtn = document.createElement("button");
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
  };
  navDiv.appendChild(showBtn);

  div.appendChild(navDiv);
  quizContainer.appendChild(div);

  // mark active sidebar
  document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
  document.querySelector(`#q${index}`).classList.add("active");

  document.getElementById("correctCount").innerText = correctCount;
}

// sidebar render
selectedQuestions.forEach((q, index) => {
  const link = document.createElement("div");
  link.id = `q${index}`;
  link.className = "sidebar-item";
  link.innerText = index + 1;
  link.onclick = () => renderQuestion(index);
  questionList.appendChild(link);
});

function checkCompletion() {
  const answeredCount = answers.filter(a => a && a.selected !== null).length;
  if (answeredCount === selectedQuestions.length) {
      // Đã trả lời đủ 70 câu
      const message = correctCount >= 35
          ? `🎉 Chúc mừng bạn đã vượt qua bài thi, với kết quả ${correctCount} câu/70 câu!`
          : `❌ Bạn đạt ${correctCount} câu/70 câu, chưa vượt qua bài thi, hãy cố gắng ôn luyện thêm.`;
      setTimeout(() => alert(message), 100); // Hiện popup
  }
}

// render câu đầu tiên
renderQuestion(0);

// ====== 60-minute countdown timer for test ======
(function(){
  let timeUp = false;
  const appRoot = document.getElementById('app');
  const timerBox = document.createElement('div');
  timerBox.className = 'timer';
  const label = document.createElement('span');
  label.textContent = 'Thời gian còn lại: ';
  const timerEl = document.createElement('span');
  timerEl.id = 'test-timer';
  timerBox.appendChild(label);
  timerBox.appendChild(timerEl);
  const quizWrapper = document.querySelector('.quiz-container');
  if (appRoot) {
    if (quizWrapper) appRoot.insertBefore(timerBox, quizWrapper);
    else appRoot.appendChild(timerBox);
  }

  let seconds = 60 * 60; // 60 minutes
  function fmt(s){ const m=Math.floor(s/60), ss=s%60; return String(m).padStart(2,'0')+':'+String(ss).padStart(2,'0'); }
  function disableAllOptions(){
    if (quizContainer) quizContainer.querySelectorAll('button').forEach(b=> b.disabled = true);
  }
  function onTimeout(){
    if (timeUp) return;
    timeUp = true;
    disableAllOptions();
    alert(`Hết thời gian! Kết quả: ${correctCount}/${selectedQuestions.length}`);
  }
  function tick(){
    if (!timerEl) return;
    if (seconds <= 0){ timerEl.textContent = '00:00'; onTimeout(); return; }
    timerEl.textContent = fmt(seconds);
    seconds -= 1;
  }
  // initial paint
  tick();
  const intervalId = setInterval(()=>{
    if (timeUp){ clearInterval(intervalId); return; }
    tick();
    if (seconds <= 0){ clearInterval(intervalId); }
  }, 1000);

  // Ensure new renders are also disabled after timeout
  const mo = new MutationObserver(()=>{ if (timeUp) disableAllOptions(); });
  if (quizContainer) mo.observe(quizContainer, { childList: true, subtree: true });
})();
// ================================================
