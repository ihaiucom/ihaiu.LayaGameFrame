/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingActorItemStruct from "../../Generates/ModuleBuildingActor/BuildingActorItemStruct";
import BuildingActorCellData from "../../../GameModule/DataStructs/BuildingActorCellData";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";

//未开启--开启--入驻  艺人槽
export enum BuildingActorCellType {
    NO = 0,    
    OK = 1,
    ENTER=2
}

export default class BuildingActorItem extends BuildingActorItemStruct
{
    public dataSource:BuildingActorCellData;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_btnRemove.onClick(this, this.removeActor)
    }

    removeActor(event:Event): void {
        event.stopPropagation();
        if (!this.dataSource.isEmpty) {
            Game.sender.building.buildingLeaveActorCell(this.dataSource.actorId);
        }
    }

    public RenderItem(data: BuildingActorCellData): void {
        this.dataSource   = data;
        this.m_open.selectedIndex = data.isOpen ? BuildingActorCellType.OK : BuildingActorCellType.NO;
        if (data.isOpen) {
            this.m_open.selectedIndex = data.isEmpty ? BuildingActorCellType.OK : BuildingActorCellType.ENTER;

            let cellconfig         = data.actorCelllConfig;
            //效果
            this.m_labEffect.text  = cellconfig.prop.config.name;
            //效果参数
            this.m_labOldVal.text  = this.getValString(cellconfig.prop.config.addnamenum, Math.abs(cellconfig.prop.val));
            this.m_labNewVal.text  = "+0";
            //要求
            this.m_labNeed.text    = String(cellconfig.actorLoveLevelMin);
            this.m_labLevel.text   = String(cellconfig.actorLevelMin);

            let actordata        = data.actorData;
            if (actordata) {
                //图标
                this.m_actBody.m_imgActor.url = actordata.bodyIcon;
                //艺人等级
                this.m_labActorLv.text = format(TEXT.LVDot, actordata.level);
                //艺人姓名
                this.m_labName.text    = actordata.name;
            } else {
                this.m_actBody.m_imgActor.url = "res/fspriteassets/ActorBodyIcon/img_nonehero_shoot.png";
                this.m_labActorLv.text = format(TEXT.LVDot, 0);
            }
            


            if (!data.isEmpty) {
                //计算艺人入驻加成
                
            } 
        } 
    }

    private getValString(type: number, val: number): any {
        switch (type) {
            case 0:
                return "";
            case 1:
                return val;
            case 2:
                return val * 100 + "%";
            default:
                break;
        }
    }
}