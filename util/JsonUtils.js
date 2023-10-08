import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export function object2JsonString(obj) {
    var jsonification = JSON.stringify(obj);
    if (null == jsonification) {
        var message = "GameDeveloperException -> JSON Corruption -> Cookie Local Storage Entry is Corrupt! Malformed Json!";
        console.error(message);
        throw new GameDeveloperException(message);
    }
    return jsonification;
}

export function jsonString2Object(jsonString) {
    var obj = JSON.parse(jsonString);
    if (null == catFromJson) {
        var message = "GameDeveloperException -> JSON Corruption -> Local Storage is Corrupt! Malformed Json!";
        console.error(message);
        throw new GameDeveloperException(message);
    }
    return obj;
}