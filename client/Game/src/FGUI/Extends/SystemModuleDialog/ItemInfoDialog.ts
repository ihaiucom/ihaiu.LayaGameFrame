/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemInfoDialogStruct from "../../Generates/SystemModuleDialog/ItemInfoDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemInfoDialog extends ItemInfoDialogStruct
{
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void{
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_closeBtn.onClick(this, this.close);
    }

    //弹窗显示
    open(datasource: ItemData): void {
        this.m_item.RenderItem(datasource);
        this.m_itemName.text    = datasource.itemName;
        this.m_itemContent.text = datasource.itemDes;

        this.dialogCtrl.open();
    }

    //弹窗关闭
    close(): void  {
        this.dialogCtrl.close();
    }
}