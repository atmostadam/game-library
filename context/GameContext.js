import { GameValidationException } from "../exception/GameValidationException.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

/**
 * The context for the game in reference to Inversion of Control, Shared Map Key/Values and Singleton
 * class lookup. This is a Singleton implementation.
 */
export class GameContext {
    constructor(debug, canvas, canvasContext, bounds) {
        if (!GameContext.instance) {
            GameContext.instance = this;
        }

        this.map = new Map();

        GameContext.set("debug", debug);
        GameContext.set("canvas", canvas);
        GameContext.set("ctx", canvasContext);
        GameContext.set("canvasContext", canvasContext);
        GameContext.set("width", canvas.width);
        GameContext.set("height", canvas.height);

        if (canvas.width != bounds.width || canvas.height != bounds.height) {
            throw new GameDeveloperException("Browser auto-resizing to a different resolution is not yet supported!");
        }

        return GameContext.instance;
    }

    /**
     * Stores a key/value pair in the GameContext cache Map.
     * 
     * @param {any} key An indexed unique key used to lookup values. If not unique, this will override the existing value. Search algorithm can be 
     * one or more approaches as defined:"Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree 
     * (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N)."
     * @param {any} value Any primitive or Object to associate with the key. This is meant to be a stored value and not something to search on.
     * Searches should only be performed on key.
     */
    static set(key, value) {
        if (null == key) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null key into setCache";
            console.error(message);
            throw new GameValidationException(message);
        }
        GameContext.instance.map.set(key, value);
    }

    /**
     * Convenience method for set(key, value). This will use the id to look up the Image object and pass the id and
     * Image object to set(key, value).
     * 
     * @param {string} id The id of the image to retrieve from the HTML Document.
     */
    static setImage(id) {
        if (null == id) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setImage";
            console.error(message);
            throw new GameValidationException(message);
        }
        const image = document.getElementById(id);
        if (null == image) {
            var message = "GameValidationException -> Search by Image Element id [" + id + "] results in a null!";
            console.error(message);
            throw new GameValidationException("GameValidationException -> Search by Image Element id [" + id + "] results in a null!");
        }
        GameContext.set(id, image);
    }

    /**
     * Convenience method for set(key, value). This will use the class instance to look up the class name for the key
     * and the class instance for the value.
     * 
     * @param {Object} instance  The instance of the class to store in value.
     */
    static setClass(instance) {
        if (null == instance) {
            var message = "GameValidationException -> NullPointerException -> NEVER pass null into setClass";
            console.error(message);
            throw new GameValidationException(message);
        }
        GameContext.set(instance.constructor.name, instance);
    }

    /**
     * Gets a value pair using its key in the GameContext cache Map.
     * 
     * @param {any} key The key to search by
     * @returns The value associated to the key
     */
    static get(key) {
        if (!GameContext.instance.map.has(key)) {
            var message = "GameValidationException -> No entry exists in cache for key [" + key + "]";
            console.error(message);
            throw new GameValidationException(message);
        }
        return GameContext.instance.map.get(key);
    }

    /**
     * Returns true when the GameContext cache Map contains the key else it returns false.
     * 
     * @param {any} key The key for the key/value pair in the GameContext cache Map.
     * @returns true if contains key else false.
     * */
    static contains(key) {
        return GameContext.instance.map.has(key);
    }

    /**
     * Deletes a key/value pair entry in the GameContext cache Map using key as the identifier.
     * 
     * @param {any} key The key for the key/value pair in the GameContext cache Map.
     * @returns true if a key/value pair is deleted else false
     */
    static delete(key) {
        return GameContext.instance.map.delete(key);
    }

    /** Deletes all key/value pair entries in the GamaeContext cache Map. */
    static clear() {
        GameContext.instance.map.clear();
    }

    /** Gets the canvas context from the GamaeContext cache Map. */
    static getCtx() {
        return GameContext.get("ctx");
    }

    /** Gets the canvas from the GamaeContext cache Map. */
    static getCanvas() {
        return GameContext.get("canvas");
    }

    /** Gets the canvas width from the GamaeContext cache Map. */
    static getWidth() {
        return GameContext.get("width");
    }

    /** Gets the canvas height from the GamaeContext cache Map. */
    static getHeight() {
        return GameContext.get("height");
    }

    /**
     * Singleton design pattern method to get singleton instance.
     * 
     * @returns the instance.
     */
    static getInstance() {
        return GameContext.instance;
    }
}