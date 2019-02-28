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
    private static logger = console;
    private static level: LogLevel = LogLevel.Debug;

    public static get Level():LogLevel
    {
        return Log.level;
    }

    public static set Level(level:LogLevel)
    {
        Log.level = level;
    }

    public static Debug(...args)
    {
        if(Log.level > LogLevel.Debug)
            return;
        
        Log.logger.debug(args);
    }

    public static Info(...args)
    {
        if(Log.level > LogLevel.Info)
            return;
        
        Log.logger.info(args);
    }

    public static Warn(...args)
    {
        if(Log.level > LogLevel.Warn)
            return;
        
        Log.logger.warn(args);
    }

    public static Error(...args)
    {
        if(Log.level > LogLevel.Warn)
            return;
        
        Log.logger.error(args);
    }
}