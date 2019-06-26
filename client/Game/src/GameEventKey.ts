export default class GameEventKey
{
    static Test = "Test";
    /* --------------------- 框架消息 --------------------*/
    // 打开窗口消息 (menuId:MenuId, openType:MenuOpenType, openIndex?: number | string)
    static GameFrame_OpenMenu = "GameFrame_OpenMenu";
    // 关闭窗口 (menuId: MenuId)
    static GameFrame_CloseMenu = "GameFrame_CloseMenu";
    // 重刷登录数据--处理数据之前
    static GameFrame_ReLoginData_Begin = "GameFrame_ReLoginData_Begin";
    // 重刷登录数据--处理数据之后
    static GameFrame_ReLoginData_End = "GameFrame_ReLoginData_End";
    
    /* --------------------- Home --------------------*/
    // 场景缩放变化zoom
    static Home_SceneZoomChange = "Home_SceneZoomChange";
    // 场景缩放完成zoom
    static Home_SceneZoomEnd = "Home_SceneZoomEnd";
    // 场景移动到建筑，并隐藏主界面UI, Enter
    static Home_SceneZoomBuildingEnter = "Home_SceneZoomBuildingEnter";
    // 场景移动到建筑，并隐藏主界面UI, Exit
    static Home_SceneZoomBuildingExit = "Home_SceneZoomBuildingExit";
    // 场景Exit移动到建筑，并显示主界面UI
    static Home_SendSceneZoomBuildingExit = "Home_SendSceneZoomBuildingExit";
    // 拖到单位，开始
    static Home_DragUnitEnter = "Home_DragUnitEnter";
    // 拖到单位，结束
    static Home_DragUnitExit = "Home_DragUnitExit";

    /* --------------------- 物品 --------------------*/
    static Item_Change = "Item_Change";

    /* --------------------- 邮件 --------------------*/
    //接收邮件
    static Mail_Update: string = "Mail_Update";
   
    //邮件状态改变
    static Mail_Change: string = "Mail_Change";
    //删除单条邮件
    static Mail_DelOne: string = "Mail_DelOne";
    
    /* --------------------- 建筑 --------------------*/

    //关闭UI界面
    static Build_CloseWindowUI: string = "Build_CloseWindowUI";

    //关闭窗口
    static Build_CloseWindow: string = "Build_CloseWindow";

    static Build_LevelUp: string = "Build_LevelUp";

    //预览建筑
    static Build_PreView: string = "Build_PreView";

    //关闭成功界面
    static Build_CloseSuccess: string = "Build_CloseSuccess";

    
    /* --------------------- 艺人 --------------------*/
    //艺人界面跳转
    static Actor_SelectView: string = "Actor_SelectView";

    /* --------------------- 剧本 --------------------*/
    //艺人界面跳转
    static Story_SelectView: string = "Story_SelectView";

    /* --------------------- 剧本招募 --------------------*/
    // 获取状态
    static StoryLottery_State: string = "StoryLoteery_State";
    // 刷新抽奖界面
    static StoryLoteery_UpdateView: string = "StoryLoteery_UpdateView";
    // 更新抽奖结果
    static StoryLoteery_award: string = "StoryLoteery_award";


    /* --------------------- 情报 --------------------*/
    //情报界面跳转
    static Information_SelectView: string = "Information_SelectView";
    //情报选择
    static Information_SelectInfo: string = "Information_SelectInfo";

    /* --------------------- 游戏消息 --------------------*/

    // 弹出
    static PopupPanel: string = "PopupPanel";

    static updateOrderView: string = "GameEventKeyUpdateOrderView";
    //更新订单
    static GameEventKey_UpdateOrderView: string = "GameEventKey_UpdateOrderView";
    //更新合作订单
    static GameEventKey_UpdateCoopreationOrderView: string = "GameEventKey_UpdateCoopreationOrderView";
    //重置搜罗次数
    static GameEventKey_ResetFindStoryTime: string = "GameEventKey_ResetFindStoryTime"
    //更新拜访艺人
    static GameEventKey_UpdateVisitActor: string = "GameEventKey_UpdateVisitActor";
    //会议更新
    static GameEventKey_MeetingShowPanel: string = "GameEventKey_MeetingShowPanel";
    //滚动到
    static GameEventKey_ScrollMainRoom: string = "GameEventKey_ScrollMainRoom";
    //开始探班状态
    static GameEventKey_StartReception: string = "GameEventKey_StartReception";
    //点击艺人
    static GameEventKey_FindActorToReception: string = "GameEventKey_FindActorToReception";
    //禁用滚动
    static GameEventKey_EnabledScrollMain: string = "GameEventKey_EnabledScrollMain";
    //会议阶段
    static GameEventKey_MeetingStep: string = "GameEventKey_MeetingStep";
    //拍摄电影
    static GameEventKey_ShootStart: string = "GameEventKey_ShootStart";
    static GameEventKey_ShootEnd: string = "GameEventKey_ShootEnd";
    static GameEventKey_ShootStartAddActor: string = "GameEventKey_ShootStartAddActor";
    //电影上映
    static GameEventKey_FilmStart: string = "GameEventKey_FilmStart";
    static GameEventKey_FilmOn: string = "GameEventKey_FilmOn";
    static GameEventKey_FilmEnd: string = "GameEventKey_FilmEnd";
    //艺人训练
    static GameEventKey_ActorExperciseStart: string = "GameEventKey_ActorExperciseStart";
    static GameEventKey_ActorExperciseEnd: string = "GameEventKey_ActorExperciseEnd";
    static GameEventKey_ActorBackToExperciseRoom: string = "GameEventKey_ActorBackToExperciseRoom";
    //更新艺人隐藏信息
    static GameEventKey_UpdateActorHideInfo: string = "GameEventKey_UpdateActorHideInfo";

    //更新奖励领取进度
    static GameEventKey_UpdateProgressBoxStatus: string = "GameEventKey_UpdateProgressBoxStatus";
    //更新红点
    static GameEventKey_UpdateMainUIRed: string = "GameEventKey_UpdateStoryRed";

    // 拍摄相关============================

    // 
    static GameEventKey_UpdateFilmingStatus: string = "GameEventKey_UpdateFilmingStatus";
    // 拍摄请求
    static GameEventKey_MakeFilm: string = "GameEventKey_MakeFilm";
    // 拍摄 修改剧本名称
    static GameEventKey_MakeFilmRename: string = "GameEventKey_MakeFilmRename";
    // 拍摄 选择艺人
    static GameEventKey_MakeFilmSelectActor: string = "GameEventKey_MakeFilmSelectActor";
    // 拍摄 选择艺人全部确认
    static GameEventKey_MakeFilmConfirmSetActor: string = "GameEventKey_MakeFilmConfirmSetActor";
    // 拍摄 选择剧本类型
    static GameEventKey_MakeFilmsetSelectType: string = "GameEventKey_MakeFilmsetSelectType";
    // 拍摄 院线请求
    static GameEventKey_MakeFilmsetPublishMovie: string = "GameEventKey_MakeFilmsetPublishMovie";
    // 拍摄 更新电影状态
    static GameEventKey_MakeFilmUpdateMovieState: string = "GameEventKey_MakeFilmUpdateMovieState";
    // 拍摄 领取剧本目标奖励
    static GameEventKey_MakeFilmGetStoryGoals: string = "GameEventKey_MakeFilmGetStoryGoals";
    // 拍摄 切换城市
    static GameEventKey_MakeFilmSwitchCity: string = "GameEventKey_MakeFilmSwitchCity";
    // 拍摄 推广电影
    static GameEventKey_MakeFilmSpreadMovie: string = "GameEventKey_MakeFilmSpreadMovie";
    // 拍摄 领取收益
    static GameEventKey_MakeFilmGetRewardMovie: string = "GameEventKey_MakeFilmGetRewardMovie";
    // 拍摄 更新放映中的电影情况
    static GameEventKey_MakeFilmWarEndingIncome: string = "GameEventKey_MakeFilmWarEndingIncome";


    // 拍摄相关============================




    //玩家升级
    static GameEventKey_PlayerLevelUp: string = "GameEventKey_PlayerLevelUp";
    static GameEventKey_PlayerLevelUpOnClose: string = "GameEventKey_PlayerLevelUpOnClose";
    //更新主线任务
    static GameEventKey_ClientUpdateMainTask: string = "GameEventKey_ClientUpdateMainTask";
    //解锁剧本
    static GameEventKey_StoryUnLock: string = "GameEventKey_StoryUnLock";



    // 时间提醒
    static GameEventKey_TimeLimitRemind: string = "GameEventKey_TimeLimitRemind";

    //隐藏显示
    static GameEventKey_VisibleMainUI: string = "GameEventKey_VisibleMainUI";
    //显示隐藏箭头
    static GameEventKey_VisibleTaskArrowUI: string = "GameEventKey_VisibleTaskArrowUI";
    //房间和UI界面之间切换
    static GameEventKey_SwitchUIRoom: string = "GameEventKey_SwitchUIRoom";
    //同步房间信息
    static GameEventKey_SyncRoomInfo: string = "GameEventKey_SyncRoomInfo";

    //解锁初始
    static GameEventKey_UnlockInit: string = "GameEventKey_UnlockInit";
    //解锁变更
    static GameEventKey_UnlockChange: string = "GameEventKey_UnlockChange";

    static GameEventKey_OscarDataChange: string = "GameEventKey_OscarDataChange";

    static GameEventKey_UpdateTimeMenuTick: string = "GameEventKey_UpdateTimeMenuTick";
    //剧本播放完成
    static GameEventKey_StorylineComplete: string = "GameEventKey_StoryComplete";

    //剧本选择动画完成
    static GameEventKey_FilmStoryAnimationComplete: string = "GameEventKey_FilmStoryAnimationComplete";
    //拍摄状态变化
    static GameEventKey_FilmStoryStateChange: string = "GameEventKey_FilmStoryStateChange";
}