// select each card in the deck and add classes after being clicked
let inputs = document.querySelectorAll('li');
let cardArray = [];
let moveStart = 0;
let counter = 7; // counter starts at 7 for testing

// update number of moves made 
// FIXME - doesn't update
let moves = document.querySelector(".moves");
moves.innerText = moveStart;

// FIXME - incorrect card doesn't always flip back over
inputs.forEach(function(input) {
  input.addEventListener('click', function click() {
    input.classList.add("open", "show")
    // adding the value of each <i> tag to the array for comparison
    cardArray.push(input.childNodes[1].classList[1]);

    if(cardArray.length === 2) {
        if(cardArray[0] === cardArray[1]){
            console.log("correct");
            moveStart++;
            counter++;
            // add logic to change the first clicked match to have match css
            setTimeout(function(){
                input.classList.add("match");
                input.classList.remove("show");
            }, 1000);
            let correctGuessOne = document.getElementsByClassName(cardArray[0])[0];
            setTimeout(function(){ 
                // remove classes from parent to flip card back to being hidden
                correctGuessOne.parentNode.classList.remove("show");
                correctGuessOne.parentNode.classList.add("match");
            }, 1000);
            cardArray.splice(0, cardArray.length);
            // after 6 matches have been made the game is over
            if(counter === 8){
                console.log("winner");
                finish();
                setTimeout(function(){ modalOpen() }, 1000);
            }
        }
        else {
            moveStart++;
            setTimeout(function(){ 
                input.classList.remove("open", "show")
             }, 1000);
             // find the element with the class name corresonding to the previously clicked card
            let wrongGuessOne = document.getElementsByClassName(cardArray[0])[0];
            setTimeout(function(){ 
                // remove classes from parent to flip card back to being hidden
                wrongGuessOne.parentNode.classList.remove("open", "show");
            }, 1000);
            // empty array for next attempt
            cardArray.splice(0, cardArray.length);
            console.log("card array: " + cardArray);
            console.log("moves: " + moveStart);
            console.log("match counter: " + counter)
        }
    }
  });
});

// create an array of items with the class 'card', then run the shuffle function 
// after the array is shuffled append the items back to the deck
function init() {    
    const deck = document.querySelector('ul');
    let card = document.getElementsByClassName('card');
    //let cardClasses = document.getElementsByTagName('li');
    //cardClasses.classList.remove("open", "show", "match");
    let cards = [...card]
      shuffle(cards);                   
  for ( var item of cards) { 
   deck.appendChild(item);
   item.classList.remove("open", "show", "match");    
    }     
    moveStart = 0;
} 
init();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// FIX-ME message
function finish(){
    const modelMoves = document.getElementById('modalMoves');
    modelMoves.innerText = moves.textContent;
    let message = document.getElementById('modalMessage')
    if (moveStart === 8)
        message.innerHTML = "Perfect Score!";
    else if (moveStart > 8 && moveStart < 15)
        message.innerHTML = "Great Job!";
    else if (moveStart >= 15)
        message.innerHTML = "Well Done, try again for a better score"; 
}

// restart game
document.querySelector(".restart").addEventListener("click", restart);
document.querySelector(".btn").addEventListener("click", restart);

function restart(){
    modal.style.display = "none";
    moveStart.innerText = 0;
    init();
}

let modal = document.querySelector('.modal');
// modal
function modalOpen(){
modal.style.display= "block";
 // get the close button and remove modal on click
  let close = document.querySelector(".close");
  close.onclick = function() {
      modal.style.display = "none";
  };
  // When the user clicks outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
}