// Array of strings for matching
const strings = [
    "Blurred",
    "GreaT",
    "AlmoST",
    "WOOohohHoO",
    "Nenunnanani"
  ];
  
  let currentIndex = 0;
  let kt=2.3;
  function checkInput() {
    const userInput = document.getElementById("user-input").value.trim();
    const messageElement = document.getElementById("message");
  
    if (userInput === strings[currentIndex]) {
      messageElement.textContent = "Correct! Moving to the next text...";
      currentIndex++;
        kt+=0.75;
  
      if (currentIndex < strings.length) {
        setTimeout(() => {
          document.getElementById("bltxt").textContent = strings[currentIndex];
          document.getElementById("user-input").value = '';
          document.getElementById("bltxt").style.filter='blur('+kt+'px)';
          messageElement.textContent = "";
        }, 1000);
      } else {
        setTimeout(() => {
          messageElement.textContent = "Perfect! You matched all the strings!";
        }, 1000);
      }
    } else {
      messageElement.textContent = "You are at your max level ";
    }
  }
  





















