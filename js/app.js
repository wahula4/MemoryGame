const cards = ['cube', 'cube', 'bicycle', 'bicycle', 'leaf', 'leaf', 'diamond', 'diamond', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb']
let flippedCards = [];
let deck = $('.deck');
let matches;
let moves = 0;
let score = $(".moves")
const wait = 1250;

// run init to start the game by appending each card randomly to the deck
const init = () => {
    deck.empty();
    shuffle(cards); 
    for (var i = 0; i < cards.length; i++) {
        deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
        moves = 0;
        matches = 0;
        flippedCards = [];
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
// .show is given only to cards when they are open to be given the animations
$(document).on("click", ".card", function () {
    $(this).toggleClass("open show");
    let iconName = $(this).find("i").attr("class")
    flippedCards.push(iconName);
    //check array length and determine if there's a match
    if (flippedCards.length === 2) {
        if (flippedCards[0] === flippedCards[1]) {
            setTimeout(function () {
                deck.find(".show").toggleClass("match show");
            }, wait)
            deck.find(".show").toggleClass("animated flash");
            matches++;
        } else {
            setTimeout(function () {
                deck.find(".show").toggleClass("open show");
            }, wait)
            deck.find(".show").toggleClass("red animated wobble");
        }
        // empty the array and remove animation to allow for next move
        flippedCards = [];
        setTimeout(function () {
            deck.find(".wobble").removeClass("animated wobble red");
        }, wait);
        //increment moves after each turn and add to DOM
        moves++;
        score.html(moves);
    }
    numMatches();
});

// if num of matches is equal to half num of cards - open modal
const numMatches = () => {
    if (matches === cards.length / 2) {
        setTimeout(function () {
            modalOpen();
        }, wait)
    }
}

// if player clicks restart, start game over
$(".restart").click(function () {
    init();
});

// modal opens when game is finished - stars given based on number of moves.
const modalOpen = () => {
    $("#myModal").modal("toggle");
    let message = `<p>You completed the game in ${moves} moves!</p>`;
    let star = "<i class='fa fa-star'></i>"
    let starEmpty = "<i class='fa fa-star-o'></i>"
    if (moves < 15)
        $(".modal-body").append(`${message} ${star}${star}${star}`);
    else if (moves < 20)
        $(".modal-body").append(`${message} ${star}${star}${starEmpty}`);
    else
        $(".modal-body").append(`${message} ${star}${starEmpty}${starEmpty}`);
}