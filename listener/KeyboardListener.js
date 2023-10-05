export class KeyboardListener {
    constructor() {
        this.keys = [];
        this.listenForKeys = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"];

        window.addEventListener("keydown", e => {
            if (this.listenForKeys.includes(e.key) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
        });

        window.addEventListener("keyup", e => {
            if (this.listenForKeys.includes(e.key)) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}