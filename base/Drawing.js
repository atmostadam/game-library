import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameContext } from "../context/GameContext.js";
import { insideRectangle } from "../util/ClickingUtils.js";

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
        this.getCanvasContextDecorator().drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.sw, this.sh);
    }

    drawTextLoaded() {
        this.getCanvasContextDecorator().drawText(this.text, this.font, this.color, this.x, this.y);
    }

    drawRectangleLoaded() {
        this.getCanvasContextDecorator().drawRectangle(this.size, this.color, this.x, this.y, this.w, this.h);
    }

    drawFilledRectangleLoaded() {
        this.getCanvasContextDecorator().drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
    }

    drawCircleLoaded() {
        this.getCanvasContextDecorator().drawCircle(this.color, this.x, this.y);
    }

    drawFilledCircleLoaded() {
        this.getCanvasContextDecorator().drawFilledCircle(this.color, this.x, this.y);
    }

    drawBackgroundLoaded() {
        this.getCanvasContextDecorator().drawImage(this.image, 0, 0, this.getCanvasDecorator().getWidth(),
            this.getCanvasDecorator().getHeight(), 0, 0, this.getCanvasDecorator().getWidth(),
            this.getCanvasDecorator().getHeight());
    }

    getCanvasDecorator() {
        return GameContext.get("CanvasDecorator");
    }

    getCanvasContextDecorator() {
        return GameContext.get("CanvasContextDecorator");
    }

    getImage(id) {
        return this.getCanvasContextDecorator().getImageById(id);
    }

    /** See if click condition is true. */
    onClick(x, y) {
        if (insideRectangle(x, y, this.x, this.y, this.w, this.h)) {
            this.click();
        }
    }

    /** When clicked. */
    click() {

    }
}