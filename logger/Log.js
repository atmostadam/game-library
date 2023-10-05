import { GameValidationException } from "../exception/GameValidationException.js";

export class Log {
    constructor(debug) {
        if (!Log.instance) {
            Log.instance = this;
        }

        this.debug = debug;
        this.enabled = true;

        Log.info("Logger has been initialized", this);

        return Log.instance;
    }

    static debug(message, obj) {
        Log.instance.print(message, obj, "[DEBUG]");
    }

    static log(message, obj) {
        Log.instance.print(message, obj, "[LOG]");
    }

    static info(message, obj) {
        Log.instance.print(message, obj, "[INFO]");
    }

    static warn(message, obj) {
        Log.instance.print(message, obj, "[WARN]");
    }

    static error(message, obj) {
        Log.instance.print(message, obj, "[ERROR]");
    }

    static fatal(message, obj) {
        Log.instance.print(message, obj, "[FATAL]");
    }

    static getInstance() {
        return Log.instance;
    }

    print(message, obj, level) {
        if (!this.enabled) {
            return;
        }

        if (null == obj) {
            var err = "GameValidationException -> Null [obj] input parameter into the log print function.";
            console.error(err, obj);
            throw new GameValidationException(err);
        }

        if (null == message) {
            var err = "GameValidationException -> Null [message] input parameter into the log print function.";
            console.error(err, obj);
            throw new GameValidationException(err);
        }

        switch (level) {
            case "[DEBUG]":
                if (!this.debug) {
                    return;
                }
                console.log("[DEBUG] [" + obj.constructor.name + "] " + message, obj);
                break;
            case "[LOG]":
                console.log("[LOG] [" + obj.constructor.name + "] " + message, obj);
                break;
            case "[INFO]":
                console.info("[INFO] [" + obj.constructor.name + "] " + message, obj);
                break;
            case "[WARN]":
                console.warn("[WARN] [" + obj.constructor.name + "] " + message, obj);
                break;
            case "[ERROR]":
                console.error("[ERROR] [" + obj.constructor.name + "] " + message, obj);
                break;
            case "[FATAL]":
                console.error("[FATAL] [" + obj.constructor.name + "] " + message, obj);
                break;
            default:
                var err = "GameValidationException -> Null [level] input parameter into the log print function.";
                console.error(err, obj);
                throw new GameValidationException(err);
        }
    }
}