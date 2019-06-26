/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationResolverViewStruct from "../../Generates/ModuleInformationGJC/InformationResolverViewStruct";
import InformationItemData from "../../../GameModule/DataStructs/InformationItemData";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { InformationViewType } from "./InformationWindowUIGJC";
import InformationListItem, { InformationItemType } from "./InformationListItem";
import TEXT from "../../../Config/Keys/TEXT";

export default class InformationResolverView extends InformationResolverViewStruct
{
    private informationItemDataList: Array<InformationItemData>;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.m_btnClose.onClick(this, this.close); 
        this.m_btnResolver.onClick(this, this.resolver); 
        this.m_listInformation.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
    }

    //弹窗关闭
    close(): void  {
        Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Main);
    }

    //解析艺人
    resolver(): void {
        //TODO:YJJ
        // let informationList = Game.moduleModel.information.getSelectedList();
        // let informationIds  = [];
        // for (let i = 0; i < informationList.length; i++) {
        //     informationIds.push(informationList[i].id);
        // }
        // if (informationIds.length >= 3) {
        //     // Game.sender.infoSender.analyzeInformation(informationIds);
        //     this.resetView();
        // } else {
        //     Game.system.toastText(TEXT.InformationNoEnough);
        // }
    }

    //List刷新回调
    renderListItem(index: number, item: InformationListItem): void  {
        item.RenderItem(this.informationItemDataList[index], InformationItemType.Resolver);
    }

    //刷新view
    resetView(): void {
        //TODO:YJJ
        // Game.moduleModel.information.removeAllSelectedList();
        // this.informationItemDataList = [InformationItemData.Create()]
        // this.m_listInformation.numItems = this.informationItemDataList.length;
        // this.m_imgActor.url = "";
    }

    updateView(): void {
        //TODO:YJJ
        // this.informationItemDataList = [];
        // let informationList = Game.moduleModel.information.getSelectedList();
        // let informationAdd  = true;
        // for (let i = 0; i < informationList.length; i++) {
        //     if (informationList[i].type == 20) {
        //         this.informationItemDataList.push(InformationItemData.Create(informationList[i]));
        //     } else {
        //         if (!informationList[i + 1]) informationAdd = false;
        //         this.informationItemDataList.push(InformationItemData.Create(informationList[i], informationList[i + 1]));
        //         i++;
        //     }
        // }

        // if (informationList.length < 5 && informationAdd == true) {
        //     this.informationItemDataList.push(InformationItemData.Create());
        // }

        // this.m_listInformation.numItems = this.informationItemDataList.length;
    }

    updateActor(msg: any):void {
        if (msg.actor) {
            let actorConfig = Game.config.actor.getConfig(msg.actor.id);
            this.m_imgActor.url = actorConfig.bodyIconUrl;
        }
    }

    //主窗口显示时将被调
    onWindowShow(): void {
        Game.net.gamerIntelligenceParseS2C.on(this.updateActor, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void {
        Game.net.gamerIntelligenceParseS2C.off(this.updateActor, this);
    }
}