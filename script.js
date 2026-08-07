const gates = [
  {
    q: "When did we start talking on Instagram?",
    answers: ["31 january", "31st january", "january 31", "31/1"],
    msg: "31 January. The day our little story began. ✨"
  },
  {
    q: "What was the first dream I had about you?",
    answers: ["bncc dress", "you in bncc dress", "bncc"],
    msg: "You in your BNCC dress. Still my most unexpected dream. 😄"
  },
  {
    q: "What nickname might I call you when I am being annoying?",
    answers: ["gadha"],
    msg: "Don’t get angry. It is one of my favourite names for you. 🤭"
  },
  {
    q: "What did you once do that made me feel deeply loved?",
    answers: [
      "waited all day",
      "waiting all day",
      "waited for my messages",
      "you waited for my messages"
    ],
    msg: "You waited for my messages the whole day. I have never forgotten that. 🥲"
  },
  {
    q: "What did you say you wanted to do with me?",
    answers: [
      "hold my hand",
      "hold hands",
      "go on this journey together",
      "hold my hand and go on this journey together"
    ],
    msg: "You wanted to hold my hand and continue this journey together. I still do too. 🤍"
  }
];

const letterParts = [
  {
    title: "Hi, my love of life,",
    text: `I have been making this for a long time. I wanted to give it to you on Girlfriend’s Day, but I could not finish it on time. Remember when I wished you at 2:30 a.m.? I was in the middle of making this for you. I am sorry for that, babyy.

I know that you love me deeply, even though you do not always express it the way I do. You express it through your actions, through the little things you do, and through the care you quietly give me.`
  },
  {
    title: "For us, my wifeyyy,",
    text: `Thank you for loving me, my babyy. I am working hard for us. Just hold on to me, stay optimistic, and keep your positive energy. I am going to marry you one day, of course I am.

I also want you to know that I am going to keep changing myself. I want to become more emotionally mature, understand you better, and give you the love you truly deserve.`
  },
  {
    title: "What love means to me,",
    text: `You were right. The heart only pumps blood. But I think love lives in the small things we do every day. It lives in choosing each other, asking about the little things, listening to problems and insecurities, and still rooting for each other.

Love does not require us to talk twenty-four hours a day. It means being there when the other person is at their lowest and still choosing the same person again and again. Love found its true meaning for me when I met you.`
  }
];

let gateIndex = 0;
let letterIndex = 0;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function startJourney() {
  showScreen("gate");
  loadGate();
}

function loadGate() {
  document.getElementById("gateNumber").textContent =
    `Gate ${gateIndex + 1} of ${gates.length}`;

  document.getElementById("question").textContent = gates[gateIndex].q;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").focus();
}

function checkAnswer() {
  const answer = document
    .getElementById("answer")
    .value
    .toLowerCase()
    .trim();

  const isCorrect = gates[gateIndex].answers.some((item) =>
    answer.includes(item)
  );

  if (isCorrect) {
    document.getElementById("revealText").textContent =
      gates[gateIndex].msg;

    showScreen("reveal");
  } else {
    document.getElementById("feedback").textContent =
      "The gate is shy… try again, Priyatama 🤭";
  }
}

function continueJourney() {
  gateIndex++;

  if (gateIndex < gates.length) {
    showScreen("gate");
    loadGate();
  } else {
    showScreen("letter");
    loadLetter();
  }
}

function loadLetter() {
  document.getElementById("letterTitle").textContent =
    letterParts[letterIndex].title;

  document.getElementById("letterText").textContent =
    letterParts[letterIndex].text;

  const button = document.getElementById("letterButton");

  if (letterIndex === letterParts.length - 1) {
    button.textContent = "Open the final surprise";
  } else {
    button.textContent = "Read the next part";
  }
}

function nextLetter() {
  if (letterIndex < letterParts.length - 1) {
    letterIndex++;
    loadLetter();
  } else {
    showScreen("final");
  }
}

function toggleMusic() {
  const music = document.getElementById("music");
  const button = document.querySelector(".music-button");

  if (music.paused) {
    music.play();
    button.textContent = "♫ Pause our song";
  } else {
    music.pause();
    button.textContent = "♫ Play our song";
  }
}
