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
let moves = 0;
let counter = 0;

//function hasClass(element, cls) {
 //   return element.className.includes(cls);
//}




inputs.forEach(function(input) {
  input.addEventListener('click', function click() {
    input.classList.add("open", "show")
    // adding the value of each <i> tag to the array for comparison
    cardArray.push(input.childNodes[1].classList[1]);
    //console.log(input.childNodes[1].classList[1]);

    if(cardArray.length === 2) {
        if(cardArray[0] === cardArray[1]){
            console.log("correct");
            moves++;
            counter++;
            
            //input.classList.add("match");
            //input.classList.remove("show");
            cardArray.splice(0, cardArray.length);
            if(counter === 6){
                console.log("winner");
                setTimeout(function(){ init() }, 1000);
            }
        }
        else {
            moves++;
            setTimeout(function(){ 
                input.classList.remove("open", "show")
             }, 1000);
             //console.log("cardarray0:" + cardArray[0]);
             var el = document.getElementsByClassName(cardArray[0])[0];
                setTimeout(function(){ 
                    console.log(el.parentNode.classList.remove('open', 'show'));
                    //el.classList.remove("open", "show")
                 }, 1000);
            cardArray.splice(0, cardArray.length);
            //console.log("wrong");
        }
    }
  });
});

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