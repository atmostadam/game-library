import { GameContext } from "../context/GameContext.js";
import { GameValidationException } from "../exception/GameValidationException.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export class CanvasContextDecorator {
    constructor(canvasContext) {
        if (CanvasContextDecorator.instance) {
            throw new GameDeveloperException("[FATAL] Developer Error. CanvasContextDecorator is an enforced SINGLETON so new can only be used once.");
        }
        CanvasContextDecorator.instance = this;

        this.canvasContext = canvasContext;

        return CanvasContextDecorator.instance;
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {Image}  image The Image Object created from the HTML Document.
     * @param {number} x     x coordinate on the canvas in pixels.
     * @param {number} y     y coordinate on the canvas in pixels.
     * */
    static drawImageSimple(image, x, y) {
        this.instance.canvasContext.drawImage(image, x, y);
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {string} id    The id of the image to retrieve from the HTML Document.
     * @param {number} x     x coordinate on the canvas in pixels,
     * @param {number} y     y coordinate on the canvas in pixels,
     */
    static drawImageByIdSimple(id, x, y) {
        this.instance.canvasContext.drawImage(this.getImage(id), x, y);
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {Image}  image The Image Object created from the HTML Document.
     * @param {number} ix    If cropping this is the x value of the crop in pixels, else 0.
     * @param {number} iy    If cropping this is the y value of the crop in pixels, else 0.
     * @param {number} w     Width in pixels.
     * @param {number} h     Height in pixels.
     * @param {number} x     x coordinate on the canvas in pixels.
     * @param {number} y     y coordinate on the canvas in pixels.
     * @param {number} sw    Scaled width in pixels.
     * @param {number} sh    Scaled height in pixels.
     */
    static drawImage(image, ix, iy, w, h, x, y, sw, sh) {
        this.instance.canvasContext.drawImage(image, ix, iy, w, h, x, y, sw, sh);
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {string} id    The id of the image to retrieve from the HTML Document.
     * @param {number} ix    If cropping this is the x value of the crop in pixels, else 0.
     * @param {number} iy    If cropping this is the y value of the crop in pixels, else 0.
     * @param {number} w     Width in pixels.
     * @param {number} h     Height in pixels.
     * @param {number} x     x coordinate on the canvas in pixels.
     * @param {number} y     y coordinate on the canvas in pixels.
     * @param {number} sw    Scaled width in pixels.
     * @param {number} sh    Scaled height in pixels.
     */
    static drawImageById(id, ix, iy, w, h, x, y, sw, sh) {
        this.instance.canvasContext.drawImage(this.getImage(id), ix, iy, w, h, x, y, sw, sh);
    }

    /**
     * Draw text onto the canvas.
     * 
     * @param {string} text     The text to draw on the canvas.
     * @param {string} font     The font to use when drawing on the canvas.
     * @param {string} color    The color to use when drawing on the canvas.
     * @param {number} x        x coordinate on the canvas in pixels.
     * @param {number} y        y coordinate on the canvas in pixels.
     */
    static drawText(text, font, color, x, y) {
        this.instance.canvasContext.font = font;
        this.instance.canvasContext.fillStyle = color;
        this.instance.canvasContext.fillText(text, x, y);
    }

    /**
     * Draws an unfilled rectangle onto the canvas.
     * 
     * @param {number} size    The width of the rectangle line.
     * @param {string} color   The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     * @param {number} w       Width in pixels.
     * @param {number} h       Height in pixels.
     */
    static drawRectangle(size, color, x, y, w, h) {
        this.instance.canvasContext.beginPath();
        this.instance.canvasContext.lineWidth = size;
        this.instance.canvasContext.strokeStyle = color;
        this.instance.canvasContext.rect(x, y, w, h);
        this.instance.canvasContext.stroke();
    }

    /**
     * Draws a filled rectangled onto the canvas.
     * 
     * @param {string} color   The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     * @param {number} w       Width in pixels.
     * @param {number} h       Height in pixels.
     */
    static drawFilledRectangle(color, x, y, w, h) {
        this.instance.canvasContext.fillStyle = color;
        this.instance.canvasContext.fillRect(x, y, w, h);
    }

    /**
     * Draws an unfilled circle onto the canvas.
     * 
     * @param {number} size    The width of the circle line.
     * @param {string} color   The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     * @param {number} r       radius in pixels.
     * @param {number} s       start angle.
     * @param {number} e       end angle (will be multipled by pi).
     * 
     * @example drawCircle(5, "red", 100, 75, 50, 0, 2);
     */
    static drawCircle(size, color, x, y, r, s, e) {
        this.instance.canvasContext.beginPath();
        this.instance.canvasContext.arc(x, y, r, s, e * Math.PI);
        this.instance.canvasContext.strokeStyle = color;
        this.instance.canvasContext.lineWidth = size;
        this.instance.canvasContext.stroke();
    }

    /**
     * Draws a filled circle onto the canvas.
     * 
     * @param {string} color   The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     * @param {number} r       radius in pixels.
     * @param {number} s       start angle.
     * @param {number} e       end angle (will be multipled by pi).
     * 
     * @example drawCircle(5, "red", 100, 75, 50, 0, 2);
     */
    static drawFilledCircle(color, x, y, r, s, e) {
        this.instance.canvasContext.beginPath();
        this.instance.canvasContext.arc(x, y, r, s, e * Math.PI);
        this.instance.canvasContext.fillStyle = color;
        this.instance.canvasContext.fill();
    }

    /**
     * Draws an image that assumes the image is the full width and height of the canvas (i.e. the Background).
     * 
     * @param {Image} image The Image Object created from the HTML Document.
     */
    static drawBackground(image) {
        this.instance.canvasContext.drawImage(
            image,
            0,
            0,
            GameContext.getWidth(),
            GameContext.getHeight(),
            0,
            0,
            GameContext.getWidth(),
            GameContext.getHeight());
    }

    /**
     * Draws a filled rectangle that is the size of the canvas onto the canvas.
     * 
     * @param {string} color   The color to use when drawing on the canvas.
     */
    static drawFilledBackground(color) {
        this.instance.canvasContext.fillStyle = color;
        this.instance.canvasContext.fillRect(0, 0, GameContext.getWidth(), GameContext.getHeight());
    }

    /**
     * Gets Image Object from the HTML canvas when given the string id to search by.
     * 
     * @param {string} id The id of the image to retrieve from the HTML Document.
     * @returns The Image Object from the HTML Document.
     */
    static getImage(id) {
        const image = document.getElementById(id);
        if (null == image) {
            throw new GameValidationException("Image [" + id + "] is missing from Document body.");
        }
        return image;
    }

    /** Get canvas context being decorated. */
    static getCanvasContext() {
        return this.instance.canvasContext;
    }

    /**
     * Singleton design pattern method to get singleton instance.
     * 
     * @returns the instance.
     */
    static getInstance() {
        return CanvasContextDecorator.instance;
    }
}