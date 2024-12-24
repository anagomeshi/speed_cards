let deck = new Deck();

const cardIndex = document.querySelector('.card-index');
const cardList = document.querySelector('.card-list');
const pickupCard = document.querySelector('.pickup-area .card');

function resetCardList(){
    cardList.innerHTML = '';

    for(i = 0; i < deck.cardNumber; i++){
        const newCardContainer = document.createElement('div');
        const newCardContainerSpan = document.createElement('span');
        const newCardContainerImg = document.createElement('img');

        newCardContainer.className = 'card-container';
        newCardContainerSpan.innerText = i + 1;
        newCardContainerImg.className = 'card';
        newCardContainerImg.src = `icons/cards/${deck.deck[i]}.svg`;
        newCardContainerImg.alt = '';
        newCardContainerImg.draggable = false;

        newCardContainer.appendChild(newCardContainerSpan);
        newCardContainer.appendChild(newCardContainerImg);
        cardList.appendChild(newCardContainer);
    }
}

function init(){
    deck.shuffle();
    draw(deck.currentCard());
    resetCardList();
}

function draw(newCard){
    pickupCard.src = `icons/cards/${newCard}.svg`;
    showIndex(deck.index);
}

function showIndex(newIndex){
    cardIndex.innerText = `${newIndex + 1}/${deck.cardNumber}`;
}

document.querySelector('.firstback-button').addEventListener('click', function(){
    draw(deck.firstCard());
});

document.querySelector('.previous-button').addEventListener('click', function(){
    draw(deck.previousCard());
});

document.querySelector('.next-button').addEventListener('click', function(){
    draw(deck.nextCard());
});

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp'){
        draw(deck.firstCard());
    }else if(e.key === 'ArrowRight'){
        draw(deck.nextCard());
    }else if(e.key === 'ArrowLeft'){
        draw(deck.previousCard());
    }
});

init();
