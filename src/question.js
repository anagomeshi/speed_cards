const cardIndex = document.querySelector('.card-index');
const cardList = document.querySelector('.card-list');
const cardSlider = document.querySelector('.card-slider');

const cardArray = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13'];

let cardNumber = 52;
let cardSliderItemWidth = 0;

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
    [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替えます
  }
}

function generateQuestion(){
    const questionArray = shuffleArray(cardArray);

    cardList.innerHTML = '';
    cardSlider.innerHTML = '';

    for(let i = 0; i < cardNumber; i++){
        const newCardContainer = document.createElement('div');
        const newCardContainerSpan = document.createElement('span');
        const newCardContainerImg = document.createElement('img');
        const newCardSliderLi = document.createElement('li');
        const newCardSliderLiImg = document.createElement('img');

        newCardContainer.className = 'card-container';
        newCardContainerSpan.innerText = i + 1;
        newCardContainerImg.className = 'card';
        newCardContainerImg.setAttribute('src', `icons/cards/${questionArray[i]}.svg`);
        newCardContainerImg.setAttribute('alt', '');
        newCardContainerImg.draggable = false;

        newCardSliderLiImg.className = 'card';
        newCardSliderLiImg.setAttribute('src', `icons/cards/${questionArray[i]}.svg`);
        newCardSliderLiImg.setAttribute('alt', '');
        newCardSliderLiImg.draggable = false;

        newCardContainer.appendChild(newCardContainerSpan);
        newCardContainer.appendChild(newCardContainerImg);
        cardList.appendChild(newCardContainer);

        newCardSliderLi.appendChild(newCardSliderLiImg);
        cardSlider.appendChild(newCardSliderLi);
    }

    cardSliderItemWidth = cardSlider.querySelectorAll('li')[0].offsetWidth;

    cardIndex.innerText = `1/${cardNumber}`;
}

generateQuestion();

cardSlider.addEventListener("scroll", () => {
    const scrollLeft = cardSlider.scrollLeft;

    // 現在表示されているカードのインデックスを計算
    const visibleIndex = Math.round(scrollLeft / cardSliderItemWidth + 1);

    cardIndex.innerText = `${visibleIndex}/${cardNumber}`;
});
