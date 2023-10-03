import { GameContext } from "../context/GameContext.js";

export class BootLoader {
    constructor() {
        this.myGamesClasses = [];
        // Add this Game's custom classes
        GameContext.set("MyGamesClasses", this.myGamesClasses);

        this.myGamesLoaders = [];
        // Add this Game's custom loaders
        GameContext.set("MyGamesLoaders", this.myGamesLoaders);
    }
}