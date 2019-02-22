/**
 * 关闭面板时，处理其他面板方式
 */
export enum MenuCloseOtherType
{
    // 不关闭任何面板
    None = 0,

    // 除自己外的所有
    ExceptSelf_All = 1,

    // 除自己外的所有模块层级面板
    ExceptSelf_Module = 2,

    // 相同层级的其他面板
    ExceptSelf_SameLayer = 3,
}