/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import SetNumberDialogStruct from "../../Generates/SystemModuleDialog/SetNumberDialogStruct";
import DialogCtrl from '../../../GameFrame/Module/DialogCtrl';

export default class SetNumberDialog extends SetNumberDialogStruct {
    private dialogCtrl: DialogCtrl;


    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.dialogCtrl.setCloseBtnEvent();
    }

    async open(max: number, value: number = 1): Promise<number> {
        this.m_slider.max = max;
        this.m_slider.value = value;
        this.dialogCtrl.open();
        return new Promise<number>(resolve => {
            let onclick = () => {
                this.m_yesBtn.offClick(this, onclick);
                resolve(this.m_slider.value);
                this.close();
            }
            this.m_yesBtn.onClick(this, onclick);
        });
    }

    private async  OnResult(): Promise<Promise<number>> {
        return;
    }

    close() {
        this.dialogCtrl.close();
    }
}