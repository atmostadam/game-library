export class CanvasDecorator {
    constructor(canvas) {
        this.canvas = canvas;

        GameContext.set("canvas", canvas);

        GameContext.set("width", canvas.width);
        GameContext.set("height", canvas.height);

        Log.info("Screen Size [" + canvas.width + ", " + canvas.height + "]", this);
    }
}