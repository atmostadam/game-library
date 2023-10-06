import { Log } from "./../logger/Log.js";

export class CanvasDecorator {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        this.getAndSetWidth();
        this.getAndSetHeight();
        //TODO: We are going to need
        this.margin = 0;

        Log.info("Canvas W & H [width=" + this.canvas.width + ", height=" + this.canvas.height + "]", this);
    }

    /** Get width and resize canvas width to browser width. */
    getAndSetWidth() {
        const w = Math.ceil(this.canvas.getBoundingClientRect().width);
        this.canvas.width = w;
        return w;
    }

    /** Get height and resize canvas height to browser height. */
    getAndSetHeight() {
        const h = Math.ceil(this.canvas.getBoundingClientRect().height);
        this.canvas.height = h;
        return h;
    }

    /** Width of Canvas resized to width of browser. */
    getWidth() {
        return this.canvas.width;
    }

    /** Height of Canvas resized to height of browser. */
    getHeight() {
        return this.canvas.height;
    }

    /** Margin applying to top, bottom, left and right. */
    getMargin() {
        return this.margin;
    }

    /** Browser Buffer applying to top, bottom, left and right. */
    getBuffer() {
        return Math.ceil(this.canvas.getBoundingClientRect().left);
    }

    /** Left X (0) plus Browser Buffer plus Margin. */
    getLeft() {
        return 0;
    }

    /** Right X (max) minus Browser Buffer minus Margin. */
    getRight() {
        return this.canvas.width;
    }

    /** Top Y (0) plus Browser Buffer plus Margin. */
    getTop() {
        return 0;
    }

    /** Bottom Y (max) minus Browser Buffer minus Margin. */
    getBottom() {
        return this.canvas.height;
    }

    /** Width of Canvas resized to width of browser minus Browser Buffer x2 minus Margin x2. */
    //getRealWidth() {
    //    return this.canvas.width - (2 * this.getMargin()) - (2 * this.getBuffer());
    //}

    /** Height of Canvas resized to height of browser minus Browser Buffer x2 minus Margin x2. */
    //getRealHeight() {
    //     return this.canvas.height - (2 * this.getMargin()) - (2 * this.getBuffer());
    //}

    /** Canvas being decorated. */
    getCanvas() {
        return this.canvas;
    }
}