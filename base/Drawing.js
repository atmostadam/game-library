import { GameDeveloperException } from "../exception/GameDeveloperException.js";
import { insideRectangle } from "../util/ClickingUtils.js";
import { CanvasDecorator } from "../decorator/CanvasDecorator.js";
import { CanvasContextDecorator } from "../decorator/CanvasContextDecorator.js";

export class Drawing {
    constructor() {
        this.cooldownTicks = 0;
        this.hidden = false;
        this.cooldown = false;
    }

    load() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override load()");
    }

    update(tick, cooldownTicks) {
        if (this.hidden) {
            return;
        }
        if (this.cooldown) {
            this.updateCooldown(tick, cooldownTicks);
        } else {
            this.safeUpdate(tick);
        }
    }

    updateCooldown(tick, cooldownTicks) {
        if (this.cooldownDuration === 0) {
            this.cooldown = true;
            this.cooldownTicks = tick + cooldownTicks;
            return;
        }
        if (this.cooldownTicks > tick) {
            this.cooldownTicks = 0;
            this.cooldown = false;
            return;
        }
        this.safeUpdate(tick);
    }

    safeUpdate(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override safeDraw()");
    }

    draw() {
        if (this.hidden) {
            return;
        }
        if (this.cooldown) {
            this.drawCooldown();
        } else {
            this.safeDraw();
        }
    }

    drawCooldown() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override drawCooldown()");
    }

    safeDraw() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override safeDraw()");
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
        CanvasContextDecorator.drawImage(this.image, 0, 0, CanvasDecorator.getWidth(),
            CanvasDecorator.getHeight(), 0, 0, CanvasDecorator.getWidth(),
            CanvasDecorator.getHeight());
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

    startCooldown(cooldownDuration) {
        if (this.cooldownDuration !== 0) {
            throw new GameDeveloperException("Unable to start cooldown timer because the timer is already running for startCooldown(cooldownDuration)");
        }
        this.cooldown = true;
        this.cooldownDuration = cooldownDuration;
    }

    stopCooldown() {
        this.cooldown = false;
    }

    clearCooldown() {
        this.cooldown = false;
        this.cooldownDuration = 0;
    }
}