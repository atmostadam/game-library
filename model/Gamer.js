export class Gamer {
    constructor(username) {
        this.uuid = crypto.randomUUID();
        this.username = username;
        this.gameObjects = [];
    }

    setGameObject(className, gameObject) {
        this.gameObjects.push(className, gameObject);
    }

    getUuid() {
        return this.uuid;
    }
}