/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingInfoDialogStruct from "../../Generates/SystemModuleDialog/BuildingInfoDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import PropId from "../../../GameFrame/Props/PropId";
import PropField from "../../../GameFrame/Props/PropField";
import BuildingInfoButton from "./BuildingInfoButton";

export default class BuildingInfoDialog extends BuildingInfoDialogStruct
{
    private dialogCtrl: DialogCtrl;
    
    private buildingData: BuildingData;

    private produceList:Array<any> = [];

    private _nowspeed: number;
    private _addspeed: number;
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnClose.onClick(this, this.close);     
        this.m_listInfo.itemRenderer = Laya.Handler.create(this, this.renderListItemInfo, null, false);   
    }

    renderListItemInfo(index: number, item: BuildingInfoButton)
    {
        item.RenderItem(this.produceList[index], this._nowspeed, this._addspeed);
    }

    updateView()
    {
        let building = this.buildingData;

        this.m_dataReserves.RenderItem(null, building.propReserve.val, 0)

        let prop_produceNum = building.propProduceNum;
        let prop_produceCd = building.propProduceCd;
        
        this._nowspeed = Math.floor((60 * 60) / prop_produceCd.val * prop_produceNum.val);
        this._addspeed = 0;

        this.produceList = building.currentProduceList;
        this.m_listInfo.numItems = this.produceList.length;
        this.m_listInfo.resizeToFit();
    }

    //弹窗显示
    open(datasource: BuildingData): void  {
        this.dialogCtrl.open();
        this.buildingData = datasource;
        this.updateView();
    }

    //弹窗关闭
    close(): void  {
        this.dialogCtrl.close();  
    }
}