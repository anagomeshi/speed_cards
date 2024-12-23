const cardIndex = document.querySelector('.card-index');
const cardList = document.querySelector('.card-list');
const pickupArea = document.querySelector('.pickup-area');
let pickupCard;

const cardArray = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13'];
let questionArray = [];

let cardNumber = 52;
let currentIndex = 1;

// const cardSlider = new Swiper(".card-slider", {
//     slidesPerView: 1,
//     virtual: {
//         slides: [],
//     },
//     on: {
//         slideChange: function () {
//             cardIndex.innerText = `${cardSlider.realIndex + 1}/${cardNumber}`;
//         }
//     },
// });

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function changePickupCard(){
    if(currentIndex < 1){
        currentIndex = 1;
    }else if(currentIndex > cardNumber){
        currentIndex = cardNumber;
    }

    pickupCard.src = `icons/cards/${questionArray[currentIndex - 1]}.svg`);

    cardIndex.innerText = `${currentIndex}/${cardNumber}`;
}

function generateQuestion(){
    questionArray = shuffleArray([...cardArray]);
    currentIndex = 1;

    cardList.innerHTML = '';
    pickupArea.innerHTML = '';
    // cardSlider.virtual.slides = [];
    // cardSlider.virtual.update(true);

    for(let i = 0; i < cardNumber; i++){
        const newCardContainer = document.createElement('div');
        const newCardContainerSpan = document.createElement('span');
        const newCardContainerImg = document.createElement('img');

        newCardContainer.className = 'card-container';
        newCardContainerSpan.innerText = i + 1;
        newCardContainerImg.className = 'card';
        newCardContainerImg.setAttribute('src', `icons/cards/${questionArray[i]}.svg`);
        newCardContainerImg.setAttribute('alt', '');
        newCardContainerImg.draggable = false;

        newCardContainer.appendChild(newCardContainerSpan);
        newCardContainer.appendChild(newCardContainerImg);
        cardList.appendChild(newCardContainer);

        // cardSlider.virtual.slides.push(`<div class="swiper-slide"><img class="card" src="icons/cards/${questionArray[i]}.svg" alt="" draggable="false"></div>`);
    }

    // cardSlider.virtual.update(true);
    const newPickupCard = document.createElement('img');

    newPickupCard.className = 'card';
    newPickupCard.setAttribute('alt', '');
    newPickupCard.draggable = false;

    pickupArea.appendChild(newPickupCard);

    pickupCard = pickupArea.querySelector('.card');
    
    changePickupCard();

    // cardIndex.innerText = `1/${cardNumber}`;
}

generateQuestion();

function firstback(){
    currentIndex = 1;

    changePickupCard();
}

function perevious(){
    currentIndex -= 1;

    changePickupCard();
}

function next(){
    currentIndex +=1;

    changePickupCard();
}
