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

    export interface ICard {
        bottom: CardType;
        top: CardType;

        flip(): void;
        resolve(player: IPlayer);
    }

    export class Card implements ICard {
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

        // passing in players for potential side effects on the player
        // e.g. getting a battlebot, getting poisoned by a ninja etc
        public resolve(player: IPlayer) {
            switch (this.top) {
                case A:
                    player.section.A();
                    break;
                case B:
                    player.section.B();
                    break;
                case C:
                    player.section.C(player);
                    break;
                case BATTLEBOT:
                    if (player.battlebot) {
                        player.section.battlebot(player);
                    }
                    break;
                case BLUEWARDS:
                    player.section = player.section.bluewards(player);
                    break;
                case REDWARDS;
                    player.section = player.section.redwards(player);
                    break;
                case SWITCH_DECKS:
                    // move this to switchDecks?
                    if (player.section.gravoliftUsed) {
                        player.delay();
                    } else {
                        player.section = player.section.switchDecks(player);
                    }
                    break;
            }
        }
    }
}

