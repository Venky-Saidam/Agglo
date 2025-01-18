// Array of questions
const questions = [
    "Do you find that the lines, squares are straight?",
    "Do you find any distortion in the square pattern, like multiple dot positions?"
  ];
  
 
  let currentQuestionIndex = 0;
  let answers = [];
  

  const questionElement = document.getElementById("ques");
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const resultElement = document.getElementById("result");
  

  yesButton.addEventListener("click", () => handleAnswer("yes"));
  noButton.addEventListener("click", () => handleAnswer("no"));
  
  function handleAnswer(answer) {
   
    answers[currentQuestionIndex] = answer;
  

    if (currentQuestionIndex < questions.length - 1) {
  
      currentQuestionIndex++;
      questionElement.textContent = questions[currentQuestionIndex];
    } else {
      evaluateResult();
    }
  }
  
  function evaluateResult() {
    const [firstAnswer, secondAnswer] = answers;
  
    if (firstAnswer === "yes" && secondAnswer === "no") {
      resultElement.textContent = "Your eyes are in good condition!";
    } else if (
      (firstAnswer === "yes" && secondAnswer === "yes") ||
      (firstAnswer === "no" && secondAnswer === "no")
    ) {
      resultElement.textContent = "Your eyes are in average condition.";
    } else {
      resultElement.textContent = "Your eyes might be in bad condition. Consider visiting an optometrist.";
    }

    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
  