import { Log } from "./../logger/Log.js";

export class CanvasDecorator {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        const bounds = this.canvas.getBoundingClientRect();
        this.x = Math.ceil(bounds.left);
        this.y = Math.ceil(bounds.top);
        this.browserWidth = Math.ceil(bounds.width);
        this.browserHeight = Math.ceil(bounds.height);
        this.canvasWidth = this.browserWidth
        this.canvasHeight = this.browserHeight

        Log.info("Browser X & Y [x=" + this.x + ", y=" + this.y + "]", this);
        Log.info("Browser W & H [width=" + this.browserWidth + ", height=" + this.browserHeight + "]", this);
        Log.info("Canvas W & H [width=" + this.canvasWidth + ", height=" + this.canvasHeight + "]", this);
    }

    getWidth() {
        return this.browserWidth;
    }

    getHeight() {
        return this.browserHeight;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getBrowserWidth() {
        return this.browserWidth;
    }

    getBrowserHeight() {
        return this.browserHeight;
    }

    getCanvasWidth() {
        return this.canvasWidth;
    }

    getCanvasHeight() {
        return this.canvasHeight;
    }
}