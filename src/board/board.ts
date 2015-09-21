module Nailtrap.Board {

    export interface IBoard {
        phases: Phase[];
        players: Player[];
        sections: Section[];

        simulate(): void;
    }

    export class Board {
        public currentPhase: IPhase;
        public enemies: IEnemy[];
        public phases: IPhase[];
        // assume player[0] is captain
        public players: Player[];
        // assume sections[0] is starting section
        public sections: Section[];

        constructor(phases: Phase[], players: Player[], sections: Section[]]) {
            this.enemies = [];
            this.phases = phases;
            this.players = players;
            this.sections = sections;
        }

        public simulate() {
            phases.forEach(phase => phase.simulate(this));;
        }
    }
}

