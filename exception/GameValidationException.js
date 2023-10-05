export class GameValidationException extends Error {
  constructor(message, instance) {
    super(message);
    if(!message || !instance) {
      console.error("[FATAL] Developer Error! Input variables for Exception cannot be null: GameValidationException(" + message + ", " + instance + ")]");
    }
    console.error("FATAL CRASH! GameValidationException -> message [" + message + "]", instance);
  }
}