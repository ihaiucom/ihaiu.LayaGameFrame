/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationListItemStruct from "../../Generates/ModuleInformationGJC/InformationListItemStruct";
import InformationItemData from "../../../GameModule/DataStructs/InformationItemData";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { InformationViewType } from "./InformationWindowUIGJC";
import InformationData from "../../../GameModule/DataStructs/InformationData";


//-------------FGUI控制器-----------------
//列表库--解析--获取     操作
export enum InformationItemType {
    List    = 0,
    Resolver    = 1,    
    Get= 2
}

export default class InformationListItem extends InformationListItemStruct
{
    public dataSource: InformationItemData;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.m_btnAdd1.onClick(this, this.addInformation); 
        this.m_btnAdd2.onClick(this, this.addInformation);

        this.m_btnSelect1.onClick(this, this.selectInformation, [1]); 
        this.m_btnSelect2.onClick(this, this.selectInformation, [2]); 
        this.m_btnSelect3.onClick(this, this.selectInformation, [3]); 

        this.m_btnRemove1.onClick(this, this.removeInformation, [1]); 
        this.m_btnRemove2.onClick(this, this.removeInformation, [2]); 
        this.m_btnRemove3.onClick(this, this.removeInformation, [3]); 
    }

    addInformation(): void {
        Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.ResolverAndList);
    }

    selectInformation(index: number): void {
        let info:InformationData;
        switch (index) {
            case 1:
                info = this.dataSource.oneInfo;
                break;
            case 2:
                info = this.dataSource.oneInfo;
                break;
            case 3:
                info = this.dataSource.twoInfo;
                break;
        
            default:
                break;
        }
        // Game.moduleModel.information.addSelected(info);
        Game.event.dispatch(GameEventKey.Information_SelectInfo, info);
    }

    removeInformation(index: number): void {
        let info:InformationData;
        switch (index) {
            case 1:
                info = this.dataSource.oneInfo;
                break;
            case 2:
                info = this.dataSource.oneInfo;
                break;
            case 3:
                info = this.dataSource.twoInfo;
                break;
        
            default:
                break;
        }
        // Game.moduleModel.information.removeSelected(info);
        Game.event.dispatch(GameEventKey.Information_SelectInfo, info);
    }



    /**
     * 渲染item
     */
    public RenderItem(data: InformationItemData, itemType: number) {
        this.dataSource = data;
        this.m_page.selectedIndex = itemType;
        if (data.type == null) {
            this.m_type.selectedIndex = 0;
            return;
        }

        if (data.type == 20) {
            this.m_type.selectedIndex = 2;
            this.m_labContent1.text = data.oneInfo.config.name;
            this.m_labNum1.text = String(data.oneInfo.count);            
            //TODO:YJJ
            // this.m_imgNew1.visible = data.oneInfo.isNew;
        } else {
            this.m_labContent2.text = data.oneInfo.config.name;
            this.m_labNum2.text = String(data.oneInfo.count); 
            //TODO:YJJ
            // this.m_imgNew2.visible  = data.oneInfo.isNew;
            if (data.twoInfo) {
                this.m_type.selectedIndex = 4;
                this.m_labContent3.text = data.twoInfo.config.name;
                this.m_labNum3.text = String(data.oneInfo.count); 
            //TODO:YJJ
                // this.m_imgNew3.visible  = data.twoInfo.isNew;
            } else {
                //TODO:YJJ
                // let informationList = Game.moduleModel.information.getSelectedList();
                // if (itemType == InformationItemType.Resolver && informationList.length < 5) {
                //     this.m_type.selectedIndex = 1;
                // } else {
                //     this.m_type.selectedIndex = 3;
                // }
            }
        }

        
        

        
        

        
    }
    
}