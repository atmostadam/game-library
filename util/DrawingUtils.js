import { GameContext } from "../context/GameContext.js"

/**
 * Draws an image onto the canvas.
 * 
 * @param {Image}  image The Image Object created from the HTML Document.
 * @param {number} x     x coordinate on the canvas in pixels,
 * @param {number} y     y coordinate on the canvas in pixels,
 */
export function drawImage(image, x, y) {
    GameContext.getCtx().drawImage(image, x, y);
}

/**
 * Draws an image onto the canvas.
 * 
 * @param {Image}  id    The id of the image to retrieve from the HTML Document.
 * @param {number} x     x coordinate on the canvas in pixels,
 * @param {number} y     y coordinate on the canvas in pixels,
 */
export function drawImageById(id, x, y) {
    GameContext.getCtx().drawImage(getImage(id), x, y);
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
export function drawImage(image, ix, iy, w, h, x, y, sw, sh) {
    GameContext.getCtx().drawImage(image, ix, iy, w, h, x, y, sw, sh);
}

/**
 * Draws an image onto the canvas.
 * 
 * @param {Image}  id    The id of the image to retrieve from the HTML Document.
 * @param {number} ix    If cropping this is the x value of the crop in pixels, else 0.
 * @param {number} iy    If cropping this is the y value of the crop in pixels, else 0.
 * @param {number} w     Width in pixels.
 * @param {number} h     Height in pixels.
 * @param {number} x     x coordinate on the canvas in pixels.
 * @param {number} y     y coordinate on the canvas in pixels.
 * @param {number} sw    Scaled width in pixels.
 * @param {number} sh    Scaled height in pixels.
 */
export function drawImageById(id, ix, iy, w, h, x, y, sw, sh) {
    GameContext.getCtx().drawImage(getImage(id), ix, iy, w, h, x, y, sw, sh);
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
export function drawText(text, font, color, x, y) {
    GameContext.getCtx().font = font;
    GameContext.getCtx().fillStyle = color;
    GameContext.getCtx().fillText(text, x, y);
}

/**
 * Draws an unfilled rectangle onto the canvas.
 * 
 * @param {*} size    The width of the rectangle line.
 * @param {*} color   The color to use when drawing on the canvas.
 * @param {*} x       x coordinate on the canvas in pixels.
 * @param {*} y       y coordinate on the canvas in pixels.
 * @param {*} w       Width in pixels.
 * @param {*} h       Height in pixels.
 */
export function drawRectangle(size, color, x, y, w, h) {
    GameContext.getCtx().beginPath();
    GameContext.getCtx().lineWidth = size;
    GameContext.getCtx().strokeStyle = color;
    GameContext.getCtx().rect(x, y, w, h);
    GameContext.getCtx().stroke();
}

/**
 * Draws a filled rectangled onto the canvas.
 * 
 * @param {*} color   The color to use when drawing on the canvas.
 * @param {*} x       x coordinate on the canvas in pixels.
 * @param {*} y       y coordinate on the canvas in pixels.
 * @param {*} w       Width in pixels.
 * @param {*} h       Height in pixels.
 */
export function drawFilledRectangle(color, x, y, w, h) {
    GameContext.getCtx().fillStyle = color;
    GameContext.getCtx().fillRect(x, y, w, h);
}

/** Unfilled. */
export function drawCircle(color, x, y) {
    GameContext.getCtx().beginPath();
    GameContext.getCtx().arc(x, y, 65, 0, 2 * Math.PI);
    GameContext.getCtx().strokeStyle = color;
    GameContext.getCtx().lineWidth = 10;
    GameContext.getCtx().stroke();
}

export function drawFilledCircle(color, x, y) {
    GameContext.getCtx().beginPath();
    GameContext.getCtx().arc(x, y, 65, 0, 2 * Math.PI);
    GameContext.getCtx().fillStyle = color;
    GameContext.getCtx().fill();
}

export function drawBackground(image) {
    GameContext.getCtx().drawImage(
        image,
        0,
        0,
        Game.getWidth(),
        Game.getHeight(),
        0,
        0,
        Game.getWidth(),
        Game.getHeight());
}

export function getImage(id) {
    const image = document.getElementById(id);
    if (null == image) {
        throw new GameValidationException("Image [" + id + "] is missing from Document body.");
    }
    return image;
}