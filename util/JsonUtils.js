import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export function jsonification(str) {
    var jsonification = JSON.stringify(str);
    if (null == jsonification) {
        var message = "GameDeveloperException -> JSON Corruption -> Cookie Local Storage Entry is Corrupt! Malformed Json!";
        console.error(message);
        throw new GameDeveloperException(message);
    }
    return jsonification;
}

export function objectification(json) {
    var obj = JSON.parse(json);
    if (null == catFromJson) {
        var message = "GameDeveloperException -> JSON Corruption -> Local Storage is Corrupt! Malformed Json!";
        console.error(message);
        throw new GameDeveloperException(message);
    }
    return obj;
}