class Deck{
    constructor(){
        this.masterDeck = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H13'];
        this.cardNumber = 52;

        this.shuffle();
    }

    new(){
        return [...this.masterDeck];
    }

    shuffle(){
        let deck = this.new();

        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        this.index = 0;
        this.deck = deck.slice(0, this.cardNumber);
    }

    currentCard(){
        return this.deck[this.index];
    }

    nextCard(){
        this.index++;
        if(this.index > this.cardNumber - 1){
            this.index = this.cardNumber - 1;
        }

        return this.currentCard();
    }

    previousCard(){
        this.index--;
        if(this.index < 0){
            this.index = 0;
        }

        return this.currentCard();
    }

    firstCard(){
        this.index = 0;

        return this.currentCard();
    }
}
