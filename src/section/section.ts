module Nailtrap.Section {

    export interface ISection {
        gravoliftUsed: boolean;
        players: IPlayer[];

        A(): void;
        B(): void;
        C(): void;
    }
}

