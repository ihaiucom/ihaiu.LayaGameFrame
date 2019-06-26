/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetRewardDialogStruct from "../../Generates/SystemModuleDialog/GetRewardDialogStruct";
import DialogCtrl from '../../../GameFrame/Module/DialogCtrl';
import SmallIconItem from '../CommonGame/SmallIconItem';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import Game from '../../../Game';
import RewardItem from '../CommonGame/RewardItem';
import RewardNumItem from "../CommonGame/RewardNumItem";

export enum GetRewardDialogType {
    Item,
    Information,
    actor,
}

export default class GetRewardDialog extends GetRewardDialogStruct {
    private dialogCtrl: DialogCtrl;
    private itemDataList: any[] = [];
    private type: GetRewardDialogType = GetRewardDialogType.Item;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_list.itemRenderer = Laya.Handler.create(this, this.RenderItem, null, false);
    }

    async open(items: any[]) {
        this.itemDataList = [];
        this.setupDatasource(items);
        let selectedIndex = items.length > 3?1:0;
        this.m_boxHeightCtrl.setSelectedIndex(selectedIndex);
        this.m_list.numItems = items.length;
        this.dialogCtrl.open();
        return new Promise<number>(resolve => {
            let onclick = () => {
                this.m_confirmBtn.offClick(this, onclick);
                resolve();
                this.close();
            }
            this.m_confirmBtn.onClick(this, onclick);
        });
    }

    private setupDatasource(items: any[]) {
        items.forEach(item => {
            this.itemDataList.push(ItemData.Create(item.id, item.count));
        });
    }

    close() {
        this.removeFromParent();
    }
    
    private RenderItem(index: number, obj: RewardNumItem) {
        let data = this.itemDataList[index];
        obj.updateView(data);
    }
}