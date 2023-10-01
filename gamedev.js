
import { GameContext } from "./context/GameContext.js";

// BootLoading
window.addEventListener("load", function () {
    console.log("Start Game Context: ");
    const canvas = document.getElementById("game-canvas");
    new GameContext(canvas, canvas.getContext("2d"));
});