import { GameContext } from "./context/GameContext.js";
import { Log } from "./logger/Log.js";
import { BootLoader } from "./load/BootLoader.js";

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

    while (null == GameContext.getNoFail("GameLoop"));

    const gameLoop = GameContext.get("GameLoop");

    function animate() {
        try {
            const time = performance.now();

            if ((time - lastTime) < minMsPerFrame) {
                window.requestAnimationFrame(animate);
                return;
            }

            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            game.update();
            game.draw();

            window.requestAnimationFrame(animate);

            lastTime = time;
        } catch (e) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.error("APPLICATION HAS CRASHED!", e, this);
            throw e;
        }
    }
    animate();
});

class GameLoop {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
        this.tick = 0;
        new BootLoader();
        if (GameContext.get("MyGamesClasses").length == 0) {
            Log.fatal("The developer forgot to configure game classes in BootLoader.", this);
        }
        this.myGamesClasses = GameContext.get("MyGamesClasses");
    }

    update() {
        this.tick++;
        Log.debug("[" + this.tick + "] GameLoop -> update()", this);
        this.canvasContext.clearRect(0, 0, GameContext.getWidth(), GameContext.getHeight());
        this.myGamesClasses.forEach(e => e.update(tick));
    }

    draw() {
        Log.debug("[" + this.tick + "] GameLoop -> draw()", this);
        this.myGamesClasses.forEach(e => e.draw());
    }
}