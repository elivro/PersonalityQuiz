//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are clearly more  " + personalityResult

  function getPersonality() {
    let heroChoice = document.querySelector('input[name="hero"]:checked');

    let movieChoice = document.querySelector('input[name="movies"]:checked');

    let chooseChoice = document.querySelector('input[name="choose"]:checked');

    let totalPoints = 0;
    totalPoints += heroPoints[heroChoice.id]
    totalPoints += moviePoints[movieChoice.id]
    totalPoints += choosePoints[chooseChoice.id]
    console.log(totalPoints)

    heroChoice.checked = false;
    movieChoice.checked = false;
    chooseChoice.checked = false;

    if (totalPoints <= 1) {
      return "MARVEL"

    } else {
      return "MARVEL"
    }
  }

}
function resetQuiz() {
  resultArea.innerHTML = ""

}

//point system
let heroPoints = {
     "Iron-man": 0,
     Superman: 1,
     "Captian-America": 0,
     Batman: 0
}

let moviePoints = {
     "Black-Panther ": 0,
     "Wonder-Woman ": 1,
     "Thor-Ragnarok": 0,
     "Man-of-Steel": 1
}

let choosePoints = {
  "Justice-League,-any-day.": 1,
  "Infinity-War,-duhh.": 0,

}
