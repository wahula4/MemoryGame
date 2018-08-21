const cards = ['cube', 'cube', 'bicycle', 'bicycle', 'leaf', 'leaf', 'diamond', 'diamond', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb']
let flippedCards = [];
let deck = $('.deck');

const init = () => {
    deck.empty();
    shuffle(cards); 
    for (var i = 0; i < cards.length; i++) {
        deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
        //console.log(cards[i]);
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

$(".card").click(function() {
    $(this).toggleClass("open show");
    flippedCards.push($(this).find("i").attr("class"));
    //console.log(flippedCards);
});