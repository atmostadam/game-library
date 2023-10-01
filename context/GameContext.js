import { GameValidationException } from "../exception/GameValidationException.js";

export class GameContext {
    constructor(canvas, ctx) {
        GameContext.map = new Map();
        GameContext.canvas = canvas;
        GameContext.ctx = ctx;
    }

    static set(key, value) {
        if (null == key) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null key into setCache";
            console.error(message);
            throw new GameValidationException(message);
        }
        GameContext.map.set(key, value);
    }

    static setImage(id) {
        if (null == id) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setCacheImage";
            console.error(message);
            throw new GameValidationException(message);
        }
        const image = document.getElementById(id);
        if (null == image) {
            var message = "GameValidationException -> Search by Image Element id [" + id + "] results in a null!";
            console.error(message);
            throw new GameValidationException("GameValidationException -> Search by Image Element id [" + id + "] results in a null!");
        }
        return Game.setCache(id, image);
    }

    static setClass(clazz) {
        if (null == clazz) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setCacheClass";
            console.error(message);
            throw new GameValidationException(message);
        }
        Game.setCache(clazz.constructor.name, clazz);
    }

    static get(key) {
        if (!Game.map.has(key)) {
            var message = "GameValidationException -> No entry exists in cache for key [" + key + "]";
            console.error(message);
            throw new GameValidationException(message);
        }
        return Game.map.get(key);
    }

    static contains(key) {
        return Game.map.has(key);
    }

    static delete(key) {
        return Game.map.delete(key);
    }

    static clear() {
        Game.map.clear();
    }

    static getCtx() {
        return Game.ctx;
    }

    static getCanvas() {
        return Game.canvas;
    }
}