const messages = [
  "Hey",
  "Today is my favorite day.",
  "Do you know why?",
  "Because today is the day an angel came to earth… you.",
  "",
  "First things first,",
  "I hope today reminds you how important you are.",
  "Not just to me,",
  "but to everyone lucky enough to know you.",
  "",
  "I'm proud of you.",
  "For the things you talk about,",
  "and even more for the things you carry silently.",
  "I’m proud of the way you keep going, even on hard days.",
  "",
  "I love you so much.",
  "And no matter what life throws at us,",
  "I’ll stay on your side.",
  "",
  "Happy birthday, sweetheart.",
  "I hope you age 1,000 years,",
  "and I hope I get to spend every single one of them with you.",
];

const textElement = document.getElementById("text");

let messageIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (messageIndex < messages.length) {
    if (charIndex < messages[messageIndex].length) {
      textElement.innerHTML += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 50);
    } else {
      textElement.innerHTML += "\n";
      messageIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 700);
    }
  }
}

setTimeout(typeWriter, 1000);
