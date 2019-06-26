/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationBoardDialogStruct from "../../Generates/SystemModuleDialog/InformationBoardDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";

export default class InformationBoardDialog extends InformationBoardDialogStruct
{
    private dialogCtrl: DialogCtrl;

    private contentData: any;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_btnOK.onClick(this, this.close);        
    }

    //弹窗关闭
    close(): void  {
        
        this.dialogCtrl.close();     
    }

    //弹窗显示
    open(datasource: string): void  {
        this.contentData = datasource;
        this.m_labContent.text = datasource;

        this.dialogCtrl.open();
    }

}