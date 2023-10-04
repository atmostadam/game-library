import { Drawing } from "./Drawing.js";

export class AnimateText extends Drawing {
    /**
     * Draw text onto the canvas.
     * 
     * @param {string} text         The text to draw on the canvas.
     * @param {string} font         The font to use when drawing on the canvas.
     * @param {string} color        The color to use when drawing on the canvas.
     * @param {number} x            x coordinate on the canvas in pixels.
     * @param {number} y            y coordinate on the canvas in pixels.
     * @param {number} dx           Destination x coordinate on the canvas in pixels.
     * @param {number} dy           Destination y coordinate on the canvas in pixels.
     * @param {number} numOfTicks   Number of ticks to move from x to dx and y to dy. 
     */
    constructor(text, font, color, x, y, dx, dy, numOfTicks) {
        this.text = text;
        this.font = font;
        this.color = color;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.numOfTicks = numOfTicks;

        this.speedX = (dx - x) / numOfTicks;
        this.speedY = (dy - y) / numOfTicks;

        this.lastTick = 0;

        this.finished = false;
    }

    update(tick) {
        if (this.finished) {
            return;
        }

        if (0 == this.lastTick) {
            this.lastTick = tick + this.numOfTicks;
        }

        if (this.lastTick < tick) {
            this.finished = true;
            return;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        this.tick = tick;
    }

    draw() {
        if (!this.finished) {
            this.drawTextLoaded();
        }
    }
}