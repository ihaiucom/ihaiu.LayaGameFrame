import Dictionary from "../Libs/Helpers/Dictionary";
import { MenuId } from "./MenuId";
import ModuleConfig from "../GameFrame/Module/ModuleConfig";
import MWindow from "../GameFrame/Module/MWindow";

//======================
// 模块配置
//----------------------
export default class MenuWindows
{
    static dict: Dictionary<MenuId, ModuleConfig> = new Dictionary<MenuId, ModuleConfig>();

    static get(menuId: MenuId): ModuleConfig
    {
        return MenuWindows.dict.getValue(menuId);
    }

    static add<T extends MWindow>(menuId: MenuId, windowClass: { new (): T })
    {
        // 请在该地方配置menuId对应的 MWindow
        MenuWindows.dict.add(menuId, new ModuleConfig(menuId, windowClass));
    }

    static install()
    {
        MenuWindows.add(MenuId.Login, LoginWindow);
        MenuWindows.add(MenuId.CreateRole, CreateRoleWindow);
        MenuWindows.add(MenuId.Home, HomeWindow);
        MenuWindows.add(MenuId.Produce, ProduceWindow);
        MenuWindows.add(MenuId.Market, MarketWindow);
        MenuWindows.add(MenuId.Bag, BagWindow);
        MenuWindows.add(MenuId.Order, OrderWindow);

        MenuWindows.add(MenuId.ArtistList, ArtistListWindow);//艺人列表
        MenuWindows.add(MenuId.ArtistDetail, ArtistDetailWindow);//艺人详情
        MenuWindows.add(MenuId.ActorDetail, ActorDetailWindow);//艺人介绍
        MenuWindows.add(MenuId.ArtistFrozen, ArtistFrozenWindow);//艺人雪藏
        MenuWindows.add(MenuId.ArtistScoutResult, ArtistScoutResultWindow);//艺人招募结果
        MenuWindows.add(MenuId.ArtistScoutSuccess, ArtistScoutSuccessWindow);//艺人招募成功
        MenuWindows.add(MenuId.ArtistTrain, ArtistTrainWindow);//艺人培训
        MenuWindows.add(MenuId.ArtistTrainResult, ArtistTrainResultWindow);//艺人培训结果
        MenuWindows.add(MenuId.ArtistGet, ArtistGetWindow);//艺人培训结果
        MenuWindows.add(MenuId.ArtistShare, ArtistShareWindow);//艺人分享
        MenuWindows.add(MenuId.ArtListExercise, ArtListExerciseWindow);//艺人训练
        MenuWindows.add(MenuId.Artist, ArtistDirectoryWindow);//艺人名录
        MenuWindows.add(MenuId.ArtistAssistant, ArtistAssistantWindow);//艺人课程

        MenuWindows.add(MenuId.PlayerInfo, PlayerInfoWindow);
        MenuWindows.add(MenuId.War, WarWindow);

        MenuWindows.add(MenuId.StoryLibrary, StoryLibraryWindow);
        MenuWindows.add(MenuId.StoryInfo, StoryInfoWindow);
        MenuWindows.add(MenuId.Mail, MailWindow);
        MenuWindows.add(MenuId.Rank, RankWindow);
        MenuWindows.add(MenuId.Mission, MissionWindow); //日常
        MenuWindows.add(MenuId.MissionReward, MissionWindow);//日常奖励
        MenuWindows.add(MenuId.SystemSetting, SysSettingWindow); // 设置
        MenuWindows.add(MenuId.Event, ActivityWindow); // 活动
        MenuWindows.add(MenuId.Weal, ActivityWindow); // 福利
        MenuWindows.add(MenuId.Shop, ShopWindow);
        MenuWindows.add(MenuId.Recharge, RechargeWindow);
        MenuWindows.add(MenuId.Fans, VisitWindow);//探班
        MenuWindows.add(MenuId.Official, BusinessWindow);//公务
        MenuWindows.add(MenuId.Meeting, MeetingWindow);//会议
        MenuWindows.add(MenuId.Street, StreetWindow);//街区
        MenuWindows.add(MenuId.Awards, OscarWindow);//奥斯卡
        MenuWindows.add(MenuId.Goal, LevelGiftWindow);//等级礼包
        MenuWindows.add(MenuId.CupGift, CupGiftWindow);//等级礼包

        MenuWindows.add(MenuId.Notice, PublicNoticeWindow);//通知--登录前的

        MenuWindows.add(MenuId.MainTask, MainTaskWindow);//主线任务
        MenuWindows.add(MenuId.Cooperation, CooperationWindow);//通知--登录前的

        MenuWindows.add(MenuId.BuildRoomUpgrade, BuildRoomUpgradeWindow);//房间升级
        MenuWindows.add(MenuId.BuildRoomList, BuildRoomListWindow);//房间建造列表
        MenuWindows.add(MenuId.GoldExchange, GoldExchangeWindow);//财务室

        MenuWindows.add(MenuId.WarContinue, WarContinueWindow);//持续收益

        MenuWindows.add(MenuId.PopUp, PopUpWindow);//登录弹窗
        MenuWindows.add(MenuId.GuideComplete, GuideCompleteWindow);//主线奖励弹窗
    }
}