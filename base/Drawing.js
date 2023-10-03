import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { drawImage, drawText, drawRectangle, drawFilledRectangle, drawCircle, drawFilledCircle, getImage } from "../util/DrawingUtils.js";
import { GameContext } from "../context/GameContext.js";

export class Drawing {
    constructor() {

    }

    load() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override load()");
    }

    update(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override update(tick)");
    }

    draw() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override draw()");
    }

    clear() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override clear()");
    }

    notify(x, y) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override notify(x, y)");
    }

    drawImageLoaded() {
        drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.sw, this.sh);
    }

    drawTextLoaded() {
        drawText(this.text, this.font, this.color, this.x, this.y);
    }

    drawRectangleLoaded() {
        drawRectangle(this.size, this.color, this.x, this.y, this.w, this.h);
    }

    drawFilledRectangleLoaded() {
        drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
    }

    drawCircleLoaded() {
        drawCircle(this.color, this.x, this.y);
    }

    drawFilledCircleLoaded() {
        drawFilledCircle(this.color, this.x, this.y);
    }

    drawBackgroundLoaded() {
        drawImage(this.image, 0, 0, this.getWidth(), this.getHeight(), 0, 0, this.getWidth(), this.getHeight());
    }

    getImage(id) {
        return getImage(id);
    }

    getWidth() {
        return GameContext.getCanvas().width;
    }

    getHeight() {
        return GameContext.getCanvas().height;
    }
}