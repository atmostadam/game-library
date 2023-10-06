import { Log } from "./../logger/Log.js";

export class CanvasDecorator {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        const bounds = this.canvas.getBoundingClientRect();
        this.x = Math.ceil(bounds.left);
        this.y = Math.ceil(bounds.top);
        this.width = Math.ceil(bounds.width);
        this.height = Math.ceil(bounds.height);
        this.canvasWidth = this.browserWidth
        this.canvasHeight = this.browserHeight

        this.margin = 30;

        Log.info("Browser X & Y [x=" + this.x + ", y=" + this.y + "]", this);
        Log.info("Browser W & H [width=" + this.browserWidth + ", height=" + this.browserHeight + "]", this);
        Log.info("Canvas W & H [width=" + this.canvasWidth + ", height=" + this.canvasHeight + "]", this);
    }

    /** Width of Canvas resized to width of browser. */
    getWidth() {
        return this.width;
    }

    /** Height of Canvas resized to height of browser. */
    getHeight() {
        return this.height;
    }

    /** X position after adding Browser buffer. */
    getBrowserX() {
        return this.x;
    }

    /** Y position after adding Browser buffer. */
    getBrowserY() {
        return this.y;
    }

    /** Margin applying to top, bottom, left and right. */
    getMargin() {
        return this.margin;
    }

    /** Left X (0) plus Browser Buffer plus Margin. */
    getRealLeft() {
        return this.x + this.margin;
    }

    /** Right X (max) minus Browser Buffer minus Margin. */
    getRealRight() {
        return this.width - this.margin - this.x;
    }

    /** Top Y (0) plus Browser Buffer plus Margin. */
    getRealTop() {
        return this.y + this.margin;
    }

    /** Bottom Y (max) minus Browser Buffer minus Margin. */
    getRealBottom() {
        return this.height - this.margin - this.x;
    }

    /** Canvas being decorated. */
    getCanvas() {
        return this.canvas;
    }
}