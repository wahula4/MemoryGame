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

inputs.forEach(function(input) {
  input.addEventListener('click', function click() {
    input.classList.add("open", "show")
    //makeArray();
    console.log(input.childNodes[1].classList.value.toString());
    // trying to add the class name of i tags for each li
    cardArray.push(input.childNodes[1].classList.value);
    console.log(cardArray);
  });
});

//function makeArray() {
    
//}

// create an array of items with the class 'card', then run the shuffle function 
// after the array is shuffled append the items back to the deck
function init() {    
    const deck = document.querySelector('ul');
    let card = document.getElementsByClassName('card');
    let cards = [...card]
      shuffle(cards);                   
  for ( var item of cards) { 
   deck.appendChild(item);    
    }     
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