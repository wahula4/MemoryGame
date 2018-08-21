const cards = ['cube', 'cube', 'bicycle', 'bicycle', 'leaf', 'leaf', 'diamond', 'diamond', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb']
let flippedCards = [];
let deck = $('.deck');
const wait = 1500;
let matches = 7;
let moves = 0;
let score = $(".moves")

const init = () => {
    deck.empty();
    shuffle(cards); 
    for (var i = 0; i < cards.length; i++) {
        deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
        //console.log(cards[i]);
        moves = 0;
        score.html(moves);
    }
}
init();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// if a card is clicked, find the class name of it's icon and push to array
$(".card").click(function () {
    $(this).toggleClass("open show");
    let iconName = $(this).find("i").attr("class")
    flippedCards.push(iconName);
    console.log(flippedCards);

    //check array length and determine if there's a match
    if (flippedCards.length === 2) {
        if (iconName === flippedCards[0]) {
            setTimeout(function () {
                deck.find(".open").toggleClass("match");
            }, wait)
            matches++;
        } else {
            setTimeout(function () {
                deck.find(".open").toggleClass("open show");
            }, wait)
        }
        flippedCards = [];
        
        //increment moves after each turn and add to DOM
        moves++;
        score.html(moves);
    }

    numMatches();
});

// if all matches have been made the game is over
const numMatches = () => {
    if (matches === cards.length / 2) {
        setTimeout(function(){
            console.log("win");
        }, wait)
    }
}