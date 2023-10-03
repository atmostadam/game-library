import { GameContext } from "./context/GameContext.js";
import { Log } from "./log/Log.js";

class GameLoop {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
        this.tick = 0;
    }

    update() {
        this.tick++;
        Log.debug("[" + this.tick + "] GameLoop -> update()", this);
        this.canvasContext.clearRect(0, 0, GameContext.getWidth(), GameContext.getHeight());
    }

    draw() {
        Log.debug("[" + this.tick + "] GameLoop -> draw()", this);
    }
}

window.addEventListener("load", function () {
    var lastTime = performance.now();
    const minMsPerFrame = 1000 / 60;
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    const bounds = canvas.getBoundingClientRect();

    if ("debug" == document.title) {
        var debug = true;
    } else {
        var debug = false;
    }

    new Log(debug);
    new GameContext(debug, canvas, canvasContext, bounds);
    const gameLoop = new GameLoop(canvasContext);

    function animate() {
        try {
            const time = performance.now();

            if ((time - lastTime) < minMsPerFrame) {
                window.requestAnimationFrame(animate);
                return;
            }

            gameLoop.update();
            gameLoop.draw();

            window.requestAnimationFrame(animate);

            lastTime = time;
        } catch (e) {
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            console.error("APPLICATION HAS CRASHED!", e, this);
            throw e;
        }
    }
    animate();
});