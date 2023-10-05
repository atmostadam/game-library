import { GameContext } from "./../context/GameContext.js";

export class MouseListener {
    constructor() {
        window.addEventListener('click', (e) => {
            const rect = GameContext.getCanvas().getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            GameContext.getClickSubscribers().forEach(c => c.onClick(x, y));
        });
    }
}