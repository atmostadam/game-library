import { Log } from "./../logger/Log.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export class CanvasDecorator {
    constructor() {
        if (CanvasDecorator.instance) {
            throw new GameDeveloperException("[FATAL] Developer Error. CanvasContextDecorator is an enforced SINGLETON so new can only be used once.");
        }
        CanvasDecorator.instance = this;

        this.canvas = document.getElementById("game-canvas");
        CanvasDecorator.getAndSetWidth();
        CanvasDecorator.getAndSetHeight();
        this.margin = 0;

        Log.info("Canvas W & H [width=" + this.canvas.width + ", height=" + this.canvas.height + "]", this);

        return CanvasDecorator.instance;
    }

    /** Get width and resize canvas width to browser width. */
    static getAndSetWidth() {
        const w = Math.ceil(this.instance.canvas.getBoundingClientRect().width);
        this.instance.canvas.width = w;
        return w;
    }

    /** Get height and resize canvas height to browser height. */
    static getAndSetHeight() {
        const h = Math.ceil(this.instance.canvas.getBoundingClientRect().height);
        this.instance.canvas.height = h;
        return h;
    }

    /** Width of Canvas resized to width of browser. */
    static getWidth() {
        return this.instance.canvas.width;
    }

    /** Height of Canvas resized to height of browser. */
    static getHeight() {
        return this.instance.canvas.height;
    }

    /** Margin applying to top, bottom, left and right. */
    static getMargin() {
        return this.margin;
    }

    /** Browser Buffer applying to top, bottom, left and right. */
    static getBuffer() {
        return Math.ceil(this.instance.canvas.getBoundingClientRect().left);
    }

    /** Left X (0) plus Browser Buffer plus Margin. */
    static getLeft() {
        return 0;
    }

    /** Right X (max) minus Browser Buffer minus Margin. */
    static getRight() {
        return this.instance.canvas.width;
    }

    /** Top Y (0) plus Browser Buffer plus Margin. */
    static getTop() {
        return 0;
    }

    /** Bottom Y (max) minus Browser Buffer minus Margin. */
    static getBottom() {
        return this.instance.canvas.height;
    }

    /** Canvas being decorated. */
    static getCanvas() {
        return this.instance.canvas;
    }

    /**
     * Singleton design pattern method to get singleton instance.
     * 
     * @returns the instance.
     */
    static getInstance() {
        return CanvasDecorator.instance;
    }
}