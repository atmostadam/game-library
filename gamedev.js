import { GameContext } from "./context/GameContext.js";

var gameLoop = null;

export function registerGameLoop(loop) { gameLoop = loop; }

window.addEventListener("load", function () {
    var lastTime = performance.now();
    const minMsPerFrame = 1000 / 60;
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    var tick = 0;

    new GameContext(canvas, canvasContext);

    function animate() {
        try {
            const time = performance.now();
            const sixtyFps = (time - lastTime) > minMsPerFrame;

            if (sixtyFps && gameLoop) {
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                gameLoop.update(++tick);
                gameLoop.draw();
            }

            window.requestAnimationFrame(animate);

            if(!gameLoop) {
                console.log("[WARN] gameLoop has not yet been registered. Game implementation has not called registerGameLoop(loop) function.");
            }

            if (sixtyFps) {
                lastTime = time;
            }
        } catch (e) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.error("APPLICATION HAS CRASHED!", e, this);
            throw e;
        }
    }
    animate();
});