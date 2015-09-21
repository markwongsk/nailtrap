module Nailtrap.Card {

    export enum CardType {
        A,
        B,
        C,
        BATTLEBOT,
        BLUEWARDS,
        REDWARDS,
        SWITCH_DECKS
        // TODO: specializations and heroic actions
        // TODO: double actions
    }

    export class Card {
        public bottom: CardType;
        public top: CardType;
        constructor(bottom: CardType, top: CardType) {
            this.bottom = bottom;
            this.top = top;
        }

        public flip() {
            var temp = this.bottom;
            this.bottom = this.top;
            this.top = temp;
        }
    }
}

