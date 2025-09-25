// shuffle array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  const selectedQuestions = shuffle([...questions]).slice(0, 60);
  const quizContainer = document.getElementById("quiz");
  const questionList = document.getElementById("questionList");
  
  let currentIndex = 0;
  let correctCount = 0;
  document.getElementById("totalCount").innerText = selectedQuestions.length;
  
  let answers = {}; // lưu trạng thái người chọn


  function renderQuestion(index) {
    const q = questions[index]; // hoặc selectedQuestions[index] trong test.js
    quizContainer.innerHTML = "";
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<h3>Câu ${index + 1}: ${q.question}</h3>`;
  
    ["A","B","C","D"].forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = `${opt}: ${q.options[i]}`;
  
      // nếu đã trả lời trước đó thì khôi phục trạng thái
      if (answers[index] === opt) {
        if (opt === q.correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      }
  
      btn.onclick = () => {
        if (!answers[index]) { // chỉ cho chọn 1 lần
          answers[index] = opt;
          if (opt === q.correct) {
            btn.classList.add("correct");
            correctCount++;
            document.getElementById("correctCount").innerText = correctCount;
            document.querySelector(`#q${index}`).classList.add("correctMark");
          } else {
            btn.classList.add("wrong");
            document.querySelector(`#q${index}`).classList.add("wrongMark");
          }
        }
      };
  
      div.appendChild(btn);
    });
  
    // navigation
    const navDiv = document.createElement("div");
    navDiv.style.marginTop = "10px";
    if (index > 0) {
      const prevBtn = document.createElement("button");
      prevBtn.innerText = "⬅️ Câu trước";
      prevBtn.onclick = () => renderQuestion(index - 1);
      navDiv.appendChild(prevBtn);
    }
    if (index < questions.length - 1) {
      const nextBtn = document.createElement("button");
      nextBtn.innerText = "Câu sau ➡️";
      nextBtn.onclick = () => renderQuestion(index + 1);
      navDiv.appendChild(nextBtn);
    }
    div.appendChild(navDiv);
  
    quizContainer.appendChild(div);
  
    // active sidebar
    document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
    document.querySelector(`#q${index}`).classList.add("active");
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
  
  // render câu đầu tiên
  renderQuestion(0);
  