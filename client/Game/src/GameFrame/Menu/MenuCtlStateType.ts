// ===========================
// menu状态
// ---------------------------
export enum MenuCtlStateType
{
    // 关闭的，或者没打开过
    Closed = 1,

    // 加载中
    Loading = 2,

    // 打开的
    Opened = 3,

    // 销毁的
    Destoryed = 4,
}