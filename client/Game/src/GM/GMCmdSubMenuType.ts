
/** 命令子菜单菜单 */
export default class GMCmdSubMenuType
{
    static Server = "服务器";
    static Client = "客户端";
    static HISTORY = "最近";

    static list = [
        GMCmdSubMenuType.Server,
        GMCmdSubMenuType.Client,
        GMCmdSubMenuType.HISTORY,
    ];
}