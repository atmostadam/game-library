import { GameContext } from "./../context/GameContext.js";
import { Log } from "./../logger/Log.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = GameContext.getCanvas().getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            Log.info("User clicked [" + x + ", " + y + "] so run onClick forEach " + GameContext.getClickSubscribers(), this);
            GameContext.getClickSubscribers().forEach(c => { c.onClick(x, y); });
        });
    }
}