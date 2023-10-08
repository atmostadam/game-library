import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { GameContext } from "../context/GameContext.js";
import { insideRectangle } from "../util/ClickingUtils.js";

export class Drawing {
    constructor() {
        this.hidden = false;
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
        CanvasContextDecorator.drawImage(this.image, this.ix, this.iy, this.w, this.h, this.x, this.y, this.sw, this.sh);
    }

    drawTextLoaded() {
        CanvasContextDecorator.drawText(this.text, this.font, this.color, this.x, this.y);
    }

    drawRectangleLoaded() {
        CanvasContextDecorator.drawRectangle(this.size, this.color, this.x, this.y, this.w, this.h);
    }

    drawFilledRectangleLoaded() {
        CanvasContextDecorator.drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);
    }

    drawCircleLoaded() {
        CanvasContextDecorator.drawCircle(this.size, this.color, this.x, this.y, this.r, this.s, this.e);
    }

    drawFilledCircleLoaded() {
        CanvasContextDecorator.drawFilledCircle(this.color, this.x, this.y, this.r, this.s, this.e);
    }

    drawBackgroundLoaded() {
        CanvasContextDecorator.drawImage(this.image, 0, 0, this.CanvasDecorator.getWidth(),
            this.CanvasDecorator.getHeight(), 0, 0, this.CanvasDecorator.getWidth(),
            this.CanvasDecorator.getHeight());
    }

    CanvasDecorator {
    return GameContext.get("CanvasDecorator");
}

    CanvasContextDecorator {
    return GameContext.get("CanvasContextDecorator");
}

getImage(id) {
    return CanvasContextDecorator.getImageById(id);
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

show() {
    this.hidden = false;
}

hide() {
    this.hidden = true;
}
}