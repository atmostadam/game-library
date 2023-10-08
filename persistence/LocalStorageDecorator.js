import { GameContext } from "../context/GameContext.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameValidationException } from "../exception/GameValidationException.js";
import { object2JsonString, jsonString2Object } from "../util/JsonUtils.js";

export class LocalStorageDecorator {
    constructor() {
    }

    setGamer(newGamer) {
        var gamer = GameContext.get("gamer").getUuid();
        if (gamer.getUuid() !== newGamer.getUuid()) {
            var message = "GameDeveloperException -> Uuid must be the same -> Local Storage is Corrupt! Most likely manual Cookie modification.";
            console.error(message);
            throw new GameDeveloperException(message);
        }
        // TOOD: Need a deep copy into from newGamer into gamer
        var jsonString = object2JsonString(gamer);
        localStorage.setItem("gamer", jsonString);
    }

    setObjectByKey(contextKey) {
        if ("gamer" == contextKey) {
            this.setGamer(contextKey);
            return;
        }
        var gamer = GameContext.get(contextKey);
        var jsonString = object2JsonString(gamer);
        localStorage.setItem(contextKey, jsonString);
    }

    loadGamer() {
        var gamer = localStorage.getItem("gamer");
        if (null == gamer) {
            var message = "GameValidationException -> NullPointerException -> Local Storage does not contain gamer! Cannot load game!";
            console.error(message);
            throw new GameValidationException(message);
        }
        var obj = jsonString2Object(gamer);
        GameContext.setItem("gamer", obj);
    }

    clear() {
        localStorage.clear();
    }
}