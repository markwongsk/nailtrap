module Nailtrap.Phase {

    export interface IPhase {
        rounds: Round[];

        simulate(board: IBoard): void;
    }

    export class Phase {
        public mouseWiggled: boolean;
        public rounds: IRound[];

        constructor(rounds: IRound[]) {
            this.mouseWiggled = false;
            this.rounds = rounds;
        }

        public simulate(board; IBoard) {
            board.currentPhase = this;
            rounds.forEach(round => round.simulate(board));
        }
    }
}

