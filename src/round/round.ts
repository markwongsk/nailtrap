module Nailtrap.Round {

    export interface IRound {
        events: Nailtrap.Event[];

        simulate(board: IBoard): void;
    }

    export class Round {
        public events: Nailtrap.Event[];

        constructor(events: Nailtrap.Event[]) {
            this.events = events;
        }

        public simulate(board: IBoard) {
            events.forEach(event => event.simulate(board));
        }
    }
}

