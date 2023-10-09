import { between } from "./MathUtils.js";
import { Log } from "./../logger/Log.js";

/**
 * Checks the rectangle's expected x, y, w and h to see if the user's click x and click y
 * are within the bounds of the expected click area.
 * 
 * @param {number} clickX       The actual x location of where the user clicked on the canvas.
 * @param {number} clickY       The actual y location of where the user clicked on the canvas.
 * @param {number} expectX      The x start position of the rectangle expected click area.
 * @param {number} expectY      The y start position of the rectangle expected click area.
 * @param {number} expectW      The width of the rectangle's expected click area.
 * @param {number} expectH      The height of the rectangle's expected click area.
 */
export function insideRectangle(clickX, clickY, expectX, expectY, expectW, expectH) {
    const w = expectX + expectW;
    const h = expectY + expectH;
    if (between(clickX, expectX, w) && between(clickY, expectY, h)) {
        Log.info("Clicked Inside? [true] expect x [" + x + "] between [minX=" + expectX + ", maxX=" + wh + "] expect y [" +
            y + "] between [minY=" + expectY + ", maxY=" + h + "]");
        return true;
    }
    Log.info("Clicked Inside? [false] expect x [" + x + "] between [minX=" + expectX + ", maxX=" + wh + "] expect y [" +
        y + "] between [minY=" + expectY + ", maxY=" + h + "]");
    return false;
}