/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorPropertyViewStruct from "../../Generates/ModuleActorGJC/ActorPropertyViewStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import ActorPropertyItem from "./ActorPropertyItem";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";
import MouseKEEP from "../../../Libs/Helpers/MouseKEEP";

export default class ActorPropertyView extends ActorPropertyViewStruct
{
    private dialogCtrl: DialogCtrl;

    private actorData: ActorData;

    private parameterList: Array<any>;
    
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnTrain.onClick(this, this.actorTrain);
        this.m_btnGift.onClick(this, this.actorGift);
        this.m_btnInformation.onClick(this, this.actorInformation);
        this.m_btnPhotograph.onClick(this, this.actorPhotograph);
        MouseKEEP.on(this.m_btnLevelUp, this, this.actorLevelUp);
        
        this.m_listParameter.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_tabProperty.m_tab.on(fairygui.Events.STATE_CHANGED, this, this.changeTab);

        this.m_polygon.init();
    }

    //更换标签
    changeTab(): void {

    }

    //培训
    actorTrain(): void {

    }

    //送礼
    actorGift(): void {

    }

    //详情
    actorInformation(): void {

    }

    //外观
    actorPhotograph():void {

    }

    //升级
    actorLevelUp(): void {
        Game.sender.actor.levelup(this.actorData.id);
    }

    //List刷新回调
    renderListItem(index: number, item: ActorPropertyItem): void  {
        let data = this.actorData;

        let prop = this.parameterList[index]
        let levelprop = Game.configExp.getActorLevelProp(prop.id, data.id, data.level, data.star);
        let nextlevelprop = Game.configExp.getActorLevelProp(prop.id, data.id, data.level + 1, data.star);
        item.RenderItem(this.parameterList[index], nextlevelprop - levelprop);
    }

    //刷新view
    updateView(data: any, istween: boolean = true): void {
        if (!data.actor) {
            this.actorData = data;            
        } else {
            this.actorData = Game.moduleModel.actor.getActor(this.actorData.id);
        }

        this.parameterList = this.actorData.propertyList.list;
        this.m_listParameter.numItems = this.parameterList.length;
        this.m_polygon.setData(this.parameterList, istween);        
        this.m_labName.text    = this.actorData.name;
        this.m_labCostNum.text = String(this.actorData.actorLevelUpCostNum);
        this.m_labLeval.text   = this.actorData.level + "/" + this.actorData.levelMax;
        this.m_imgActor.url    = this.actorData.bodyIcon; 
    }

    //窗口显示时将被调
    onWindowShow(): void  {

        //更新view
        Game.net.gamerNotifyActorChangeS2C.on(this.updateView, this);
    }

    //窗口关闭时将被调
    onWindowHide(): void  {
        Game.net.gamerNotifyActorChangeS2C.off(this.updateView, this);
    }


}