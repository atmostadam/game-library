import { CanvasContextDecorator } from "../decorator/CanvasContextDecorator.js";

/**
 * Draws an image onto the canvas.
 * 
 * @param {Image}  image The Image Object created from the HTML Document.
 * @param {number} x     x coordinate on the canvas in pixels,
 * @param {number} y     y coordinate on the canvas in pixels,
 */
export function drawImageSimple(image, x, y) {
    CanvasContextDecorator.drawImage(image, x, y);
}

/**
 * Draws an image onto the canvas.
 * 
 * @param {string}  id    The id of the image to retrieve from the HTML Document.
 * @param {number} x     x coordinate on the canvas in pixels,
 * @param {number} y     y coordinate on the canvas in pixels,
 */
export function drawImageByIdSimple(id, x, y) {
    CanvasContextDecorator.drawImage(getImage(id), x, y);
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
    CanvasContextDecorator.drawImage(image, ix, iy, w, h, x, y, sw, sh);
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
export function drawImageById(id, ix, iy, w, h, x, y, sw, sh) {
    CanvasContextDecorator.drawImageById(id, ix, iy, w, h, x, y, sw, sh);
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
    CanvasContextDecorator.drawText(text, font, color, x, y);
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
export function drawRectangle(size, color, x, y, w, h) {
    CanvasContextDecorator.drawRectangle(size, color, x, y, w, h);
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
export function drawFilledRectangle(color, x, y, w, h) {
    CanvasContextDecorator.drawFilledRectangle(color, x, y, w, h);
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
export function drawCircle(size, color, x, y, r, s, e) {
    CanvasContextDecorator.drawCircle(color, x, y, r, s, e);
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
export function drawFilledCircle(color, x, y, r, s, e) {
    CanvasContextDecorator.drawFilledCircle(color, x, y, r, s, e);
}

/**
 * Draws an image that assumes the image is the full width and height of the canvas (i.e. the Background).
 * 
 * @param {Image} image The Image Object created from the HTML Document.
 */
export function drawBackground(image) {
    CanvasContextDecorator.drawBackground(image);
}