/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import CompoundConfigReader from "./ReaderExtends/CompoundConfigReader";
import GashaponConfigReader from "./ReaderExtends/GashaponConfigReader";
import GlobalConfigReader from "./ReaderExtends/GlobalConfigReader";
import HeadPortraitConfigReader from "./ReaderExtends/HeadPortraitConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import ItemTypeConfigReader from "./ReaderExtends/ItemTypeConfigReader";
import LoaderConfigReader from "./ReaderExtends/LoaderConfigReader";
import LoadingConfigReader from "./ReaderExtends/LoadingConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MenuIndexConfigReader from "./ReaderExtends/MenuIndexConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";
import PlayerLevelConfigReader from "./ReaderExtends/PlayerLevelConfigReader";
import PropertyConfigReader from "./ReaderExtends/PropertyConfigReader";
import RewardConfigReader from "./ReaderExtends/RewardConfigReader";
import UnlockConfigReader from "./ReaderExtends/UnlockConfigReader";

/// 配置读取器列表
export default class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    avatar  : AvatarConfigReader = new AvatarConfigReader();
    compound  : CompoundConfigReader = new CompoundConfigReader();
    gashapon  : GashaponConfigReader = new GashaponConfigReader();
    global  : GlobalConfigReader = new GlobalConfigReader();
    headPortrait  : HeadPortraitConfigReader = new HeadPortraitConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    itemType  : ItemTypeConfigReader = new ItemTypeConfigReader();
    loader  : LoaderConfigReader = new LoaderConfigReader();
    loading  : LoadingConfigReader = new LoadingConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    menuIndex  : MenuIndexConfigReader = new MenuIndexConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();
    playerLevel  : PlayerLevelConfigReader = new PlayerLevelConfigReader();
    property  : PropertyConfigReader = new PropertyConfigReader();
    reward  : RewardConfigReader = new RewardConfigReader();
    unlock  : UnlockConfigReader = new UnlockConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.avatar);
        this.renders.push(this.compound);
        this.renders.push(this.gashapon);
        this.renders.push(this.global);
        this.renders.push(this.headPortrait);
        this.renders.push(this.item);
        this.renders.push(this.itemType);
        this.renders.push(this.loader);
        this.renders.push(this.loading);
        this.renders.push(this.mail);
        this.renders.push(this.menu);
        this.renders.push(this.menuIndex);
        this.renders.push(this.msg);
        this.renders.push(this.playerLevel);
        this.renders.push(this.property);
        this.renders.push(this.reward);
        this.renders.push(this.unlock);
    }
    
}