/*
 * Create a list that holds all of your cards
 */
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// select each card in the deck and add classes after being clicked
let inputs = document.querySelectorAll('li');
let cardArray = [];
let moveStart = 0;
let counter = 0;

// update number of moves made 
// FIXME - doesn't update
let moves = document.querySelector(".moves");
moves.textContent = moveStart;

// restart game
document.querySelector(".restart").addEventListener("click", restart);
function restart(){
    init();
}

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
            if(counter === 6){
                console.log("winner");
                setTimeout(function(){ init() }, 1000);
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


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */