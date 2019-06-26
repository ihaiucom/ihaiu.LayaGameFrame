export enum GuideViewType 
{ 
    Plot = 0,       // 剧情对话框
    Guide_buide,    // 新手引导界面：光圈、手指、高亮等,   建筑
    Guide_UI,       // 新手引导界面：光圈、手指、高亮等,   UI
    Guide_popUp,    // 新手引导界面：光圈、手指、高亮等,   弹窗
    Wait,           // 等待进度,不允许操作
}

export enum GuideTriggerConfig
{
    Nomarl = 0,     // 无
    NewPlayer,      // 新账号进入游戏
    Task,           // 点击任务前往
    GetTaskAward,   // 领取任务奖励
    ReturnToMain,   // 达到某个等级并返回主界面
    FirstOpen,      // 第一次打开某个界面
    BuildingEnd,    // 完成建造
    FisrtBattle,    // 第一次拍摄
}

export enum GuideUITypeConfig 
{
    normal = 0, // 不需要高亮以及遮罩
    Build,      // 建筑
    UI,         // 界面
    Popups,     // 弹窗
    Lock,       // 不可操作 例:建筑升级
}

export enum GuideBuildConfig 
{
    
}

export enum GuideUIConfig 
{
    
}

export enum GuidePopupsConfig 
{
    
}

export enum GuideLockConfig 
{
    
}

