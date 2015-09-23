module Nailtrap.Event {
    export interface IEvent {
        simulate(board: IBoard): void;
    }

    export class EnemiesAppearEvent implements IEvent {
        public enemies: IEnemy[];

        constructor(enemies: IEnemy[]) {
            this.enemies = enemies;
        }

        public simulate(board: IBoard) {
            this.enemies.forEach(enemy => board.enemies.push(enemy));
        }
    }

    export class MouseWiggleCheckEvent implements IEvent {
        public simulate(board: IBoard) {
            if (!board.currentPhase.mouseWiggled) {
                board.players.forEach(player => player.delay());
            }
        }
    }

    export class ResolvePlayersActionsEvent implements IEvent {
        public simulate(board: IBoard) {
            board.players.forEach(player => player.resolveCurrentAction());
        }
    }

    export class ResolveDamageEvent implements IEvent {
        public simulate(board: IBoard) {
            board.enemies.forEach(enemy => enemy.resolveDamage());
        }
    }

    export class EnemiesAdvanceEvent implements IEvent {
        public simulate(board: IBoard) {
            board.enemies.forEach(enemy => enemy.advanced(board));
        }
    }
}

