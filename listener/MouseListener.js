import { GameContext } from "./../context/GameContext.js";
import { Log } from "./../logger/Log.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = GameContext.getCanvasDecorator().getCanvas().getBoundingClientRect();
            const x = e.clientX; // - rect.left;
            const y = e.clientY; // - rect.top;
            Log.info("User clicked x [" + x + "] between [min=" + GameContext.getCanvasDecorator().getLeft() + ", max=" +
                GameContext.getCanvasDecorator().getRight() + "] and y [" + y + "] between [min=" +
                GameContext.getCanvasDecorator().getTop() + ", max=" +
                GameContext.getCanvasDecorator().getBottom() + "] so run onClick forEach " + GameContext.getClickSubscribers(), this);
            GameContext.getClickSubscribers().forEach(c => { c.onClick(x, y); });
        });
    }
}