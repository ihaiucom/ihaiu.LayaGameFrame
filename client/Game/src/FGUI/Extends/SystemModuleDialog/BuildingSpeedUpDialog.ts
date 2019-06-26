/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingSpeedUpDialogStruct from "../../Generates/SystemModuleDialog/BuildingSpeedUpDialogStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

export default class BuildingSpeedUpDialog extends BuildingSpeedUpDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private dataSource: BuildingData;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnClose.onClick(this, this.close);
        this.m_btnDiamond.onClick(this, this.DiamondUP);
        this.m_btnAdvertise.onClick(this, this.AdvertiseUP);
    }

    //钻石加速
    DiamondUP(): void {
        let num = Math.ceil((this.dataSource.buildingOrUpleveingTimestamp - Game.time.settingServerTimestamp / 1000) / 60);
        Game.system.alrtTextFull(format(TEXT.BuildSpeedUp, num), "加速", null, () => {
            Game.sender.building.buildingSpeedUp(this.dataSource.id, 1);
            this.close();
        })
    }

    //广告加速
    AdvertiseUP(): void {
        // Game.sender.building.buildingSpeedUp(this.dataSource.id, 2);
    }

    open(datasource: BuildingData): void {
        this.dataSource = datasource;

        this.dialogCtrl.open();
    }

    //弹窗关闭
    close(): void  {
        this.dataSource = null;
        this.dialogCtrl.close();     
    }
}