import Loger from "./Loger";

export enum LogLevel
{
    Debug = 0,
    Info = 0,
    Warn = 2,
    Error = 3
}

export enum LogLevelText
{
    Debug = "Debug",
    Info = "Info",
    Warn = "Warn",
    Error = "Error"
}

export default class Log
{
    public static mineloger = new Loger();
    private static logger = console;
    private static level: LogLevel = LogLevel.Debug;

    public static get Level():LogLevel
    {
        return this.level;
    }

    public static set Level(level:LogLevel)
    {
        this.level = level;
    }

    public static Debug(...args)
    {
        if(this.level > LogLevel.Debug)
            return;
        
        this.logger.debug(...args);
        this.mineloger.debug(...args);
    }

    public static Info(...args)
    {
        if(this.level > LogLevel.Info)
            return;
        
        this.logger.info(...args);
        this.mineloger.info(...args);
    }

    public static Warn(...args)
    {
        if(this.level > LogLevel.Warn)
            return;
        
        this.logger.warn(...args);
        this.mineloger.warn(...args);
    }

    public static Error(...args)
    {
        if(this.level > LogLevel.Warn)
            return;
        
        this.logger.error(...args);
        this.mineloger.error(...args);
    }

    public static clear()
    {
        this.logger.clear();
        this.mineloger.clear();
    }
}