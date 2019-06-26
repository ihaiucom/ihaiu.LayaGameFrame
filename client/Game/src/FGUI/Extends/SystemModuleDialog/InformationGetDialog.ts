/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationGetDialogStruct from "../../Generates/SystemModuleDialog/InformationGetDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import InformationListItem, { InformationItemType } from "../ModuleInformationGJC/InformationListItem";
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import InformationItemData from "../../../GameModule/DataStructs/InformationItemData";
import { InformationViewType } from "../ModuleInformationGJC/InformationWindowUIGJC";

export default class InformationGetDialog extends InformationGetDialogStruct
{
    private dialogCtrl: DialogCtrl;
    private informationItemDataList: Array<InformationItemData>;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnClose.onClick(this, this.close);    
        this.m_listInformation.itemRenderer = Laya.Handler.create(this, this.renderInformationListItem, null, false);    
    }

    //剧本List刷新回调
    renderInformationListItem(index: number, item: InformationListItem): void  {
        item.RenderItem(this.informationItemDataList[index], InformationItemType.Get);
    }

    //弹窗关闭
    close(): void  {
        
        this.dialogCtrl.close();     
    }

    //弹窗显示
    open(datasource: Array<any>): void  {
        this.informationItemDataList = [];

        let informationList = InformationModel.transitionInfromation(datasource);
        for (let i = 0; i < informationList.length; i++) {
            if (informationList[i].type == 20) {
                this.informationItemDataList.push(InformationItemData.Create(informationList[i]));
            } else {
                this.informationItemDataList.push(InformationItemData.Create(informationList[i], informationList[i + 1]));
                i++;
            }
        }

        this.m_listInformation.numItems = this.informationItemDataList.length;


        this.dialogCtrl.open();
    }
}