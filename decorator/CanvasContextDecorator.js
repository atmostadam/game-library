import { GameContext } from "../context/GameContext.js";
import { GameValidationException } from "../exception/GameValidationException.js";

export class CanvasContextDecorator {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {Image}  image The Image Object created from the HTML Document.
     * @param {number} x     x coordinate on the canvas in pixels.
     * @param {number} y     y coordinate on the canvas in pixels.
     * */
    drawImageSimple(image, x, y) {
        this.canvasContext.drawImage(image, x, y);
    }

    /**
     * Draws an image onto the canvas.
     * 
     * @param {string} id    The id of the image to retrieve from the HTML Document.
     * @param {number} x     x coordinate on the canvas in pixels,
     * @param {number} y     y coordinate on the canvas in pixels,
     */
    drawImageByIdSimple(id, x, y) {
        this.canvasContext.drawImage(this.getImage(id), x, y);
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
    drawImage(image, ix, iy, w, h, x, y, sw, sh) {
        this.canvasContext.drawImage(image, ix, iy, w, h, x, y, sw, sh);
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
    drawImageById(id, ix, iy, w, h, x, y, sw, sh) {
        this.canvasContext.drawImage(this.getImage(id), ix, iy, w, h, x, y, sw, sh);
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
    drawText(text, font, color, x, y) {
        this.canvasContext.font = font;
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillText(text, x, y);
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
    drawRectangle(size, color, x, y, w, h) {
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = size;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.rect(x, y, w, h);
        this.canvasContext.stroke();
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
    drawFilledRectangle(color, x, y, w, h) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x, y, w, h);
    }

    /**
     * Draws an unfilled circle onto the canvas.
     * 
     * @param {string} color The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     */
    drawCircle(color, x, y) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, 65, 0, 2 * Math.PI);
        this.canvasContext.strokeStyle = color;
        this.canvasContext.lineWidth = 10;
        this.canvasContext.stroke();
    }

    /**
     * Draws a filled circle onto the canvas.
     * 
     * @param {string} color The color to use when drawing on the canvas.
     * @param {number} x       x coordinate on the canvas in pixels.
     * @param {number} y       y coordinate on the canvas in pixels.
     */
    drawFilledCircle(color, x, y) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, y, 65, 0, 2 * Math.PI);
        this.canvasContext.fillStyle = color;
        this.canvasContext.fill();
    }

    /**
     * Draws an image that assumes the image is the full width and height of the canvas (i.e. the Background).
     * 
     * @param {Image} image The Image Object created from the HTML Document.
     */
    drawBackground(image) {
        this.canvasContext.drawImage(
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
    drawFilledBackground(color) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(0, 0, GameContext.getWidth(), GameContext.getHeight());
    }

    /**
     * Gets Image Object from the HTML canvas when given the string id to search by.
     * 
     * @param {string} id The id of the image to retrieve from the HTML Document.
     * @returns The Image Object from the HTML Document.
     */
    getImage(id) {
        const image = document.getElementById(id);
        if (null == image) {
            throw new GameValidationException("Image [" + id + "] is missing from Document body.");
        }
        return image;
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