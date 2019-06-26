/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorSelectDialogStruct from "../../Generates/SystemModuleDialog/ActorSelectDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ActorIconItem from "./ActorIconItem";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

export default class ActorSelectDialog extends ActorSelectDialogStruct
{
    private dialogCtrl: DialogCtrl;

    actortDataList: Array<ActorData>;

    //选中的艺人数据
    selectActorData: ActorData;

    //移除艺人
    removeAct: boolean = false;

    CallObj: any;

    CallFunc1: Function;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_listActor.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listActor.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_btnClose.onClick(this, this.close);
    }

    //List刷新回调
    renderListItem(index: number, item: ActorIconItem): void  {
        item.RenderItem(this.actortDataList[index], this.removeAct && index == 0);
    }

    //List点击回调
    clickListItem(target: ActorIconItem, event: Event): void  {
        this.selectActorData = target.dataSource;
         
        if (this.selectActorData && this.selectActorData.bulidId && this.selectActorData.bulidId != this.CallObj.buildingData.id) {
            let text: string = format(TEXT.BuildReturnActor, this.selectActorData.name, this.CallObj.buildingData.name);
            Game.system.alertText(text, this, this.returnActor)
        } else {
            this.returnActor();
        }
    }

    //召回艺人(入驻新建筑)
    returnActor(): void {
        let actorid = this.selectActorData ? this.selectActorData.id : null;
        this.CallFunc1.apply(this.CallObj, [actorid]);
        this.close();
    }

    //弹窗显示
    open(callObj:any, callFunc1: Function): void  {
        this.CallObj  = callObj;
        this.CallFunc1 = callFunc1;
        this.disposalActorData();
        this.m_listActor.numItems = this.actortDataList.length;

        this.dialogCtrl.open();
    }

    //整理艺人数据(将当前槽入驻艺人置于首位)
    disposalActorData(): void {
        this.actortDataList = Game.moduleModel.actor.actorList;
        if (this.CallObj.selectCellData.isEmpty) 
            return;
        
        for (let i = 0; i < this.actortDataList.length; i++) {
            if (this.actortDataList[i].id == this.CallObj.selectCellData.actorId) {
                let temp = this.actortDataList[0];
                this.actortDataList[0] = this.actortDataList[i];
                this.actortDataList[i] = temp;
                this.removeAct = true;
                break;
            }
        }
    }

    //弹窗关闭
    close(): void  {
        this.CallObj = null;
        this.CallFunc1= null;
        this.actortDataList = null;   
        this.selectActorData= null;  
        this.removeAct = false;   

        this.dialogCtrl.close();     
    }
}