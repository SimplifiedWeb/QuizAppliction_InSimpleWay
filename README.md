# QuizAppliction_InSimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/QuizAppliction_InSimpleWay/

So first let's think about it what should we gonna do, how was the working begin what should we want.

So Building quiz application requeirs answers and questions for that we use array of objects.

//Note i can't explain everything the most confusing one's i'll explain you

 quizArray.sort(() => Math.random() - 0.5);

In my code i wrote this to shuffle the array which come first which come second etc.

So first math.random generated random value from 0 to 1, i substract 0.5 so math.random give value between -0.5 to 0.5.

Everytime a unique value we get, it should be positive or negative or equal. anything.

if it gives negative sort function we all know if the value is negative it use like a ascending order first element than second Element.

same apply here if the math.random gives positive than the second element first and then first element. 

so like that we are shuffling the questions in array.

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

restart.addEventListener("click", ()=>{

    initial()
    
    displayContainer.classList.remove("hide")
    
    scoreContainer.classList.add("hide")
    
})

window.onload = () => {

  startScreen.classList.remove("hide");
  
  displayContainer.classList.add("hide");
  
};

in this we all know when the page load the onload function triggers. so that's how we are showing welcome screen than questionandanswers.

So all are connected with each other we use inital function when the game is over we put the initial function and restart everything.

nextBtn.addEventListener("click", displayNext = () =>{

    //increment questionCount
    
    questionCount += 1;
    
    //if last question
    
    if(questionCount == quizArray.length){
    
        //hide question container and display score
        
        displayContainer.classList.add("hide")
        
        scoreContainer.classList.remove("hide")
        
        //user socer
        
        userScore.innerHTML =  "YOur score is " + scoreCount  + "out of " + questionCount
        
    }else{
    
        //display questionCount
        
        countOfQuestion.innerHTML =  questionCount + 1 + " of " + quizArray.length + " Question ";
        
        //display quiz 
        
        quizDisplay(questionCount)
        
        count = 11
        
        clearInterval(countdown)
        
        timeDisplayed()
        
    }

})
so simple language, we click the next question it goest to the next question, checking that, Is question is equal to the array lenght which

means checking the game is over or any question left or is question is over, if it is, than we hide the container and show the restart button.

if the question is not over than we set everything again, like time, questioncount, quizdisplay etc.

const quizDisplay = (questionCount) => {

  let quizCards = document.querySelectorAll(".container-mid");
  
  //hide other cards
  
  quizCards.forEach((cards) => {
  
    cards.classList.add("hide");
    
  });
  
  ///display current cards
  
  quizCards[questionCount].classList.remove("hide");
  
};

so this is important what he doin was, first getting all the questions cards, than he first hiding all the question card hiding every question card,

than after hiding every question card, than after that whatever the questionCount is which means which question is now like it's a third question, than

he give the third index of question only that particular question card it show and hide other.

That's how everything is working, just understand the flow how the data is passing from one place to another what state we have to hold and
use it for identifying later so understanding the flows we will be definitly understand.



