//References or Initialization
// const quizDisplay = document.getElementById("display");
let timeleft = document.querySelector(".time-left");
let quizContainer = document.querySelector(".container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: 1,
    questions: "Inside which HTML element do we put the JavaScript?",
    options: [
        "first",
        "second",
        "third",
        "four",
      ],
      correct: "second",
  },
  {
    id: 2,
    questions: "This is a demonstration?",
    options: [
      "first",
      "second",
      "third",
      "four",
    ],
    correct: "first",
  },
  {
    id: 3,
    questions: "How do you write 'Hello World' in an alert box?",
    options: [
      "msgBox('Hello world')",
      "alertBox('Hello world)",
      "msg('Hello world')",
      "alert('Hello world')",
    ],
    correct: "alert('Hello world')",
  },
  {
    id: 4,
    questions: "Where is the correct place to insert a JavaScript?",
    options: [
      "first",
      "second",
      "third",
      "Four"
    ],
    correct: "third",
  },
];

//Display Quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //hide other cards
  quizCards.forEach((cards) => {
    cards.classList.add("hide");
  });
  ///display current cards
  quizCards[questionCount].classList.remove("hide");
};

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  quizCreator();
  clearInterval(countdown)
  timeDisplayed()
  quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  // generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + "Question";
    //questions
    let question_Div = document.createElement("p");
    question_Div.classList.add("question");
    question_Div.innerHTML = i.questions;
    div.appendChild(question_Div);
    //options
    div.innerHTML += `
        <button class="option-div" onclick = "checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick = "checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick = "checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick = "checker(this)">${i.options[3]}</button>
        `;
    quizContainer.appendChild(div);
  }
}
//timer

const timeDisplayed = () =>{
    countdown = setInterval (()=>{
        count--;
        timeleft.innerHTML = `${count}s`
        if(count == 0){
            clearInterval(countdown)
            displayNext()
        }
    }, 1000)
}



//Checker funtion to check if option is correct or not
function checker (userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount]
    let options = question.querySelectorAll(".option-div")

    //if user clicked answer ==== courrect option is stored in object

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct")
        scoreCount++;
    }else{
        userOption.classList.add("incorrect")
        //for marking the correct options
        options.forEach((element) => {
            if(element.innerText == quizArray[questionCount].correct){
                element.classList.add("correct")
            }
        })
    }


    clearInterval(countdown)
    //disable all options
    options.forEach((element)=>{
        element.disabled = true;
    })
}


restart.addEventListener("click", ()=>{
    initial()
    displayContainer.classList.remove("hide")
    scoreContainer.classList.add("hide")
})


//next Button
nextBtn.addEventListener("click", displayNext = () =>{
    //increment questionCount
    questionCount += 1;
    //if last question
    if(questionCount == quizArray.length){
        //hide question container and display score
        displayContainer.classList.add("hide")
        scoreContainer.classList.remove("hide")
        //user socer
        userScore.innerHTML = 
        "YOur score is " + scoreCount  + "out of " + questionCount
    }else{
        //display questionCount
        countOfQuestion.innerHTML = 
        questionCount + 1 + " of " + quizArray.length + " Question ";
        //display quiz 
        quizDisplay(questionCount)
        count = 11
        clearInterval(countdown)
        timeDisplayed()
    }

})

//hide quiz and display start
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
