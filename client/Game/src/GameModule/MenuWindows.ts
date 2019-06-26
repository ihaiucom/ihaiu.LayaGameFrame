import Dictionary from "../Libs/Helpers/Dictionary";
import { MenuId } from './MenuId';
import ModuleConfig from "../GameFrame/Module/ModuleConfig";
import MWindow from "../GameFrame/Module/MWindow";
import HomeWindow from "./ViewWindows/HomeWindow";
import LoginWindow from "./ViewWindows/LoginWindow";
import BagWindow from './ViewWindows/BagWindow';
import MailWindow from "./ViewWindows/MailWindow";
import StoryWindow from './ViewWindows/StoryWindow';
import StoryDetailWindow from './ViewWindows/StoryDetailWindow';
import BuildingWindow from "./ViewWindows/BuildingWindow";
import ActorWindow from './ViewWindows/ActorWinodw';
import InformationWindow from './ViewWindows/InformationWindow';
import StudioWindow from './ViewWindows/StudioWindow';
import StudioContinueWindow from "./ViewWindows/StudioContinueWindow";
import BuildingActorWindow from "./ViewWindows/BuildingActorWindow";
import StudioContinueInfoWindow from './ViewWindows/StudioContinueInfoWindow';
import StoryLotteryWindow from "./ViewWindows/StoryLotteryWindow";

//======================
// 模块配置
//----------------------
export default class MenuWindows {
    static dict: Dictionary<MenuId, ModuleConfig> = new Dictionary<MenuId, ModuleConfig>();

    static get(menuId: MenuId): ModuleConfig {
        return MenuWindows.dict.getValue(menuId);
    }

    static add<T extends MWindow>(menuId: MenuId, windowClass: { new(): T }) {
        // 请在该地方配置menuId对应的 MWindow
        MenuWindows.dict.add(menuId, new ModuleConfig(menuId, windowClass));
    }

    static install() {

        MenuWindows.add(MenuId.Login, LoginWindow);
        MenuWindows.add(MenuId.Home, HomeWindow);
        MenuWindows.add(MenuId.Studio, StudioWindow);
        MenuWindows.add(MenuId.StudioContinue, StudioContinueWindow);
        MenuWindows.add(MenuId.StudioContinueInfo, StudioContinueInfoWindow);

        MenuWindows.add(MenuId.Bag, BagWindow);
        MenuWindows.add(MenuId.Mail, MailWindow)
        MenuWindows.add(MenuId.StoryLibrary, StoryWindow);
        MenuWindows.add(MenuId.StoryInfo, StoryDetailWindow);
        MenuWindows.add(MenuId.BuildingInfo, BuildingWindow);
        MenuWindows.add(MenuId.BuildingActor, BuildingActorWindow);        
        MenuWindows.add(MenuId.ActorList, ActorWindow);
        MenuWindows.add(MenuId.Information, InformationWindow);
        MenuWindows.add(MenuId.StoryLottery, StoryLotteryWindow);
    }
}