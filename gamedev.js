
import { GameContext } from "./context/GameContext.js";

// BootLoading
window.addEventListener("load", function () {
    if("debug" == document.title) {
        var debug = true;
    } else {
        var debug = false;
    }
    console.log("Start Game Context -> DEBUG MODE: " + debug);
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    const bounds = canvas.getBoundingClientRect();
    new GameContext(debug, canvas, canvasContext, bounds);
});