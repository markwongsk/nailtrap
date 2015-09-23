module Nailtrap.Player {

    export interface IPlayer {
        currentSection: ISection;
        battlebot: IBattlebot;

        delay(): void;
        resolveCurrentAction(): ICard;
    }

    export class Player extends IPlayer {
        public currentSection: ISection;

        private cards: ICard[];

        public delay() {
            var temp = cards[0];
            cards[0] = Card.NOOP;
            for (var i = 0; i < cards.length && cards[i] !== Card.NOOP; i++) {
                var temp2 = cards[i];
                cards[i] = temp;
            }
            // either we hit a NOOP or the last action never gets acted out
        }

        public resolveCurrentAction() {
            var currentAction = cards[0].shift();
            currentAction.resolve(this);
        }
    }
}
