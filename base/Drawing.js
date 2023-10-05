import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameContext } from "../context/GameContext.js";
import { between } from "../util/MathUtils.js";

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
        this.getCtxDecorator().drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.sw, this.sh);
    }

    drawTextLoaded() {
        this.getCtxDecorator().drawText(this.text, this.font, this.color, this.x, this.y);
    }

    drawRectangleLoaded() {
        this.getCtxDecorator().drawRectangle(this.size, this.color, this.x, this.y, this.w, this.h);
    }

    drawFilledRectangleLoaded() {
        this.getCtxDecorator().drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
    }

    drawCircleLoaded() {
        this.getCtxDecorator().drawCircle(this.color, this.x, this.y);
    }

    drawFilledCircleLoaded() {
        this.getCtxDecorator().drawFilledCircle(this.color, this.x, this.y);
    }

    drawBackgroundLoaded() {
        this.getCtxDecorator().drawImage(this.image, 0, 0, this.getWidth(), this.getHeight(), 0, 0, this.getWidth(), this.getHeight());
    }

    /** See if click condition is true. */
    onClick(x, y) {
        if (between(x, this.x, this.x + this.w) && between(y, this.y, this.y + this.h)) {
            this.click();
        }
    }

    /** When clicked. */
    click() {

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

    getCtxDecorator() {
        return GameContext.get("CanvasContextDecorator");
    }
}