/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import GlobalConfigReader from "./ReaderExtends/GlobalConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import ItemTypeConfigReader from "./ReaderExtends/ItemTypeConfigReader";
import LoaderConfigReader from "./ReaderExtends/LoaderConfigReader";
import LoadingConfigReader from "./ReaderExtends/LoadingConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MenuIndexConfigReader from "./ReaderExtends/MenuIndexConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";

/// 配置读取器列表
export default class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    avatar  : AvatarConfigReader = new AvatarConfigReader();
    global  : GlobalConfigReader = new GlobalConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    itemType  : ItemTypeConfigReader = new ItemTypeConfigReader();
    loader  : LoaderConfigReader = new LoaderConfigReader();
    loading  : LoadingConfigReader = new LoadingConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    menuIndex  : MenuIndexConfigReader = new MenuIndexConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.avatar);
        this.renders.push(this.global);
        this.renders.push(this.item);
        this.renders.push(this.itemType);
        this.renders.push(this.loader);
        this.renders.push(this.loading);
        this.renders.push(this.mail);
        this.renders.push(this.menu);
        this.renders.push(this.menuIndex);
        this.renders.push(this.msg);
    }
    
}