import { LogLevel } from "../GameFrame/Log/Log";

/** 日志子菜单 */
export class GMDeubgMenuType
{
    static Log = "Log";
    static Warn = "Warn";
    static Error = "Error";

    static list = [
        GMDeubgMenuType.Log,
        GMDeubgMenuType.Warn,
        GMDeubgMenuType.Error,
    ];

    static getLogType(menu: string)
    {
        switch (menu)
        {
            case GMDeubgMenuType.Log:
                return LogLevel.Info;
            case GMDeubgMenuType.Warn:
                return LogLevel.Warn;
            case GMDeubgMenuType.Error:
                return LogLevel.Error;
        }
    }

    static getLogTypes(menus: string[])
    {
        let types = [];
        for (let i = 0; i < menus.length; i++)
        {
            types.push(GMDeubgMenuType.getLogType(menus[i]));
        }
        return types;
    }
}
