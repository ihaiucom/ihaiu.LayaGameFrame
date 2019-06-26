import { AssemblyNamespace } from "../Libs/AssemblyNamespace";
import { MenuId } from "../GameModule/MenuId";

/**
 * 订阅处理器
 */
export default abstract class TookHandler 
{
    /** 命令空间 */
    static readonly __namespace = AssemblyNamespace.TookHandlers;


    
    /** 前提模块ID, 只有这些模块是置顶时才通过 */
    preconditionMenuIds: MenuId[];
    
    /** 自己所属模块，用来验证功能是否解锁 */
    menuId: MenuId = 0;

    /** 
     * 初始化, 配置你的订阅
     */
    init()
    {

    }

    

    /** 
     * 验证是否可以被调用
     */
    validate(serverMilliseconds: number): boolean
    {
        return true;
    }


    /**
     * 执行
     */
    exe()
    {

    }

    /** 内部方法，继承的不要重写 */
    __onExe()
    {

    }

}