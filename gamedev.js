
import { GameContext } from "./context/GameContext.js";

// BootLoading
window.addEventListener("load", function () {
    console.log("Start Game Context: ");
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    const bounds = canvas.getBoundingClientRect();
    new GameContext(canvas, canvasContext, bounds);
});