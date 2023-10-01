export class GameDeveloperException extends Error {
  constructor(message, fileName, lineNumber) {
    super(message);
    this.fileName = fileName;
    this.lineNumber = lineNumber;
    console.error("FATAL CRASH! GameDeveloperException -> message [" + message + "] fileName [" + fileName + "] lineNumber [" + lineNumber + "]");
  }
}