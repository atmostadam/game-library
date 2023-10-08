import { GameContext } from "../context/GameContext.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameValidationException } from "../exception/GameValidationException.js";
import { jsonification, stringification } from "../util/JsonUtils.js";

export class LocalStorageDecorator {
    constructor() {
    }

    setGamer(gamer) {
        if (GameContext.get("gamer").getUuid() !== gamer.getUuid()) {
            var message = "GameDeveloperException -> Uuid must be the same -> Local Storage is Corrupt! Most likely manual Cookie modification.";
            console.error(message);
            throw new GameDeveloperException(message);
        }
        // TOOD: Need a deep copy also
        localStorage.setItem("gamer", jsonification);
    }

    setObjectByKey(contextKey) {
        if ("gamer" == contextKey) {
            this.setGamer(contextKey);
            return;
        }
        var value = GameContext.get(contextKey);
        var jsonification = jsonification(value);
        localStorage.setItem(key, jsonification);
    }

    loadGamer() {
        var gamer = localStorage.getItem("gamer");
        if (null == gamer) {
            var message = "GameValidationException -> NullPointerException -> Local Storage is EMPTY! Cannot load game!";
            console.error(message);
            throw new GameValidationException(message);
        }
        var obj = objectification(gamer);
        GameContext.setItem("gamer", obj);
    }

    clear() {
        localStorage.clear();
    }
}