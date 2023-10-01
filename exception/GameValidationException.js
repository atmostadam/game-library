export class GameValidationException extends Error {
  constructor(message, fileName, lineNumber) {
    super(message);
    this.fileName = fileName;
    this.lineNumber = lineNumber;
    console.error("FATAL CRASH! GameValidationException -> message [" + message + "] fileName [" + fileName + "] lineNumber [" + lineNumber + "]");
  }
}