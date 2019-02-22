import { MenuId } from "../../GameModule/MenuId";

// 模块配置
export default class ModuleConfig
{
    // 模块ID
    menuId:MenuId;

    // 模块窗口类
    windowClass: any;

    constructor(menuId:MenuId, windowClass: any)
    {
        this.menuId = menuId;
        this.windowClass = windowClass;
    }
}