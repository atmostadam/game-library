import { between } from "./MathUtils.js";

/**
 * Checks the rectangle's expected x, y, w and h to see if the user's click x and click y
 * are within the bounds of the expected click area.
 * 
 * @param {number} clickX The actual x location of where the user clicked on the canvas.
 * @param {number} clickY The actual y location of where the user clicked on the canvas.
 * @param {number} x      The x start position of the rectangle expected click area.
 * @param {number} y      The y start position of the rectangle expected click area.
 * @param {number} w      The width of the rectangle's expected click area.
 * @param {number} h      The height of the rectangle's expected click area.
 */
export function insideRectangle(clickX, clickY, expectX, expectY, expectW, expectH) {
    if (between(clickX, expectX, expectX + expectW) && between(clickY, expectY, expectY + expectH)) {
        return true;
    }
    return false;
}