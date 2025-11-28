// ==== Shuffle Array (Fisher–Yates) ====
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// ==== DOM Elements ====
const quizContainer = document.getElementById("quiz");
const questionList = document.getElementById("questionList");

let currentIndex = 0;
let correctCount = 0;

// ==========================================================
//         RANDOM 70 CÂU + SHUFFLE ĐÁP ÁN NGAY TỪ ĐẦU
// ==========================================================
const selectedQuestions = shuffle([...questions]).slice(0, 70).map(q => {
    const optionLetters = ["A", "B", "C", "D"];

    const shuffledOptions = shuffle(optionLetters.map((opt, i) => ({
        opt,              // A/B/C/D gốc
        text: q.options[i],
        isCorrect: opt === q.correct
    })));

    return {
        ...q,
        shuffledOptions   // LƯU SHUFFLE → KHÔNG BAO GIỜ THAY ĐỔI
    };
});

let answers = Array(selectedQuestions.length).fill(null);

document.getElementById("totalCount").innerText = selectedQuestions.length;
document.getElementById("correctCount").innerText = correctCount;

// ==== NÚT RESET ====
const resetBtn = document.createElement("button");
resetBtn.innerText = "🔄 Làm lại bài test";
resetBtn.style.marginLeft = "10px";
resetBtn.onclick = () => location.reload();
document.querySelector(".stats").appendChild(resetBtn);

// ==========================================================
//                    RENDER CÂU HỎI
// ==========================================================
function renderQuestion(index) {
    const q = selectedQuestions[index];
    quizContainer.innerHTML = "";

    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<h3>Câu ${index + 1}: ${q.question}</h3>`;

    const shuffledOptions = q.shuffledOptions; // DÙNG BẢN SHUFFLE CỐ ĐỊNH

    shuffledOptions.forEach((item, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = `${String.fromCharCode(65 + i)}: ${item.text}`;

        // nếu câu này đã trả lời trước → phục hồi trạng thái
        if (answers[index] && answers[index].selected === item.opt) {
            btn.classList.add(answers[index].isCorrect ? "correct" : "wrong");
            btn.disabled = true;
        }

        btn.onclick = () => {
            if (answers[index] && answers[index].selected) return;

            if (item.isCorrect) {
                btn.classList.add("correct");
                document.querySelector(`#q${index}`).classList.add("correctMark");
                correctCount++;
                answers[index] = { selected: item.opt, isCorrect: true };
            } else {
                btn.classList.add("wrong");
                document.querySelector(`#q${index}`).classList.add("wrongMark");
                answers[index] = { selected: item.opt, isCorrect: false };
            }

            div.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
            document.getElementById("correctCount").innerText = correctCount;
            checkCompletion();
        };

        div.appendChild(btn);
    });

    // ===== Navigation + Xem đáp án =====
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
        const correctObj = shuffledOptions.find(o => o.isCorrect);
        const correctIndex = shuffledOptions.indexOf(correctObj);
        const correctBtn = div.querySelectorAll(".option-btn")[correctIndex];
        correctBtn.classList.add("correct");
    };
    navDiv.appendChild(showBtn);

    div.appendChild(navDiv);
    quizContainer.appendChild(div);

    // highlight sidebar
    document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
    document.querySelector(`#q${index}`).classList.add("active");

    document.getElementById("correctCount").innerText = correctCount;
}

// ==========================================================
//                        SIDEBAR
// ==========================================================
selectedQuestions.forEach((q, index) => {
    const link = document.createElement("div");
    link.id = `q${index}`;
    link.className = "sidebar-item";
    link.innerText = index + 1;
    link.onclick = () => renderQuestion(index);
    questionList.appendChild(link);
});

// ==========================================================
//                     CHECK COMPLETION
// ==========================================================
function checkCompletion() {
    const answeredCount = answers.filter(a => a && a.selected !== null).length;

    if (answeredCount === selectedQuestions.length) {
        const passed = correctCount >= 35;
        const message = passed
            ? `🎉 Chúc mừng bạn đã vượt qua bài thi, với kết quả ${correctCount}/70`
            : `❌ Bạn đạt ${correctCount}/70, chưa vượt qua bài thi.`;

        setTimeout(() => alert(message), 100);
    }
}

// render câu đầu tiên
renderQuestion(0);

// ==========================================================
//                     COUNTDOWN TIMER 60 MIN
// ==========================================================
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

    let seconds = 60 * 60;

    function fmt(s) {
        const m = Math.floor(s / 60);
        const ss = s % 60;
        return String(m).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
    }

    function disableAllOptions() {
        document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
    }

    function onTimeout() {
        if (timeUp) return;
        timeUp = true;
        disableAllOptions();
        alert(`⏳ Hết thời gian! Kết quả: ${correctCount}/${selectedQuestions.length}`);
    }

    function tick() {
        if (!timerEl) return;
        if (seconds <= 0) {
            timerEl.textContent = '00:00';
            onTimeout();
            return;
        }
        timerEl.textContent = fmt(seconds);
        seconds -= 1;
    }

    tick();
    const intervalId = setInterval(() => {
        if (timeUp) {
            clearInterval(intervalId);
            return;
        }
        tick();
        if (seconds <= 0) clearInterval(intervalId);
    }, 1000);

    const mo = new MutationObserver(() => {
        if (timeUp) disableAllOptions();
    });
    mo.observe(quizContainer, { childList: true, subtree: true });
})();
