/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingSuccessDialogStruct from "../../Generates/SystemModuleDialog/BuildingSuccessDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import BuildingData, { BuildingSucceeType } from "../../../GameModule/DataStructs/BuildingData";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";
import PropId from "../../../GameFrame/Props/PropId";
import GameEventKey from "../../../GameEventKey";
import { MenuId } from "../../../GameModule/MenuId";
import BuildingEffItem from "./BuildingEffItem";
import PropField from "../../../GameFrame/Props/PropField";
import R from "../../../Config/Keys/R";

export default class BuildingSuccessDialog extends BuildingSuccessDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private buildingData: BuildingData;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnClose.onClick(this, this.close);        
    }

    //弹窗显示
    open(datasource: BuildingData): void  {
        this.m_content.open(datasource);
        this.dialogCtrl.open();
        this.buildingData = datasource;
    }

    //弹窗关闭
    close(): void  {
        this.m_content.close();
        this.dialogCtrl.close();  
        Game.event.dispatch(GameEventKey.Build_CloseSuccessDialog, this.buildingData);        
    }
}