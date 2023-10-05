export class GameDeveloperException extends Error {
  constructor(message, instance) {
    super(message);
    if(!message || !instance) {
      console.error("[FATAL] Developer Error! Input variables for Exception cannot be null: GameDeveloperException(" + message + ", " + instance + ")]");
    }
    console.error("[FATAL] FATAL CRASH! GameDeveloperException -> message [" + message + "]", instance);
  }
}