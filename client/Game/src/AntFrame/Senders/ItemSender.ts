import Game from '../../Game';
import ItemData from '../../GameModule/DataStructs/ItemData';
import GameEventKey from '../../GameEventKey';
export default class ItemSender {
    async getItemList(): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerGetBackpackC2S();
        console.log("背包列表： ", s2c.items);

        return Promise.resolve(s2c.error == 0);
    }
    /**
     * 物品销售
     * @param uid uuid
     * @param itemId 物品id
     * @param num 销售数量
     */
    async sellItem(uid: string, itemId: number, num: number): Promise<boolean> {
        console.log("uid");

        let s2c = await Game.net.AsyncGamerSellItemC2S(itemId, num);
        console.log("=========items ", s2c);
        // if (s2c.error == 0) {
        //     Game.system.rewardDialog(s2c.items);
        //     this.SetItemModel(s2c.itemsChange);
        // }

        return Promise.resolve(s2c.error == 0);
    }

    /**
     * 物品使用
     * @param uid uuid
     * @param itemId 物品id
     * @param num 使用数量
     */
    async useItem(uid: string, itemId: number, num: number): Promise<ItemData[]> {
        let s2c = await Game.net.AsyncGamerUseItemC2S(itemId, num);
        console.log("=========items ", s2c);
        let items = [];
        if (s2c.error == 0) {
            s2c.items.forEach(item=>{
                let itemData = new ItemData();
                itemData.setProtoData(item);
                items.push(itemData);
            })
            // Game.system.rewardDialog(s2c.items);
            // this.SetItemModel(s2c.itemsChange);
        }
        return Promise.resolve(items);
    }

    /**
     * 物品合成
     * @param uid uuid
     * @param itemId 物品id
     * @param num 合成数量
     */
    async compoundItem(uid: string, itemId: number, num: number) {
        let s2c = await Game.net.AsyncGamerCompoundItemC2S(itemId, num);
        // if (s2c.error == 0) {
        //     Game.system.rewardDialog(s2c.items);
        //     this.SetItemModel(s2c.itemsChange);
        // }
    }

    /**
     * 物品拆分
     * @param uid uuid
     * @param itemId 物品id
     * @param num 拆分数量
     */
    async splitItem(uid: string, itemId: number, num: number) {
        let s2c = await Game.net.AsyncGamerSplitItemC2S(itemId, num);
        // if (s2c.error == 0) {
        //     Game.system.rewardDialog(s2c.items);
        //     this.SetItemModel(s2c.itemsChange);
        // }
        return Promise.resolve(s2c.error == 0);
    }

    private SetItemModel(items: any[]) {
        for (let index in items) {
            let itemInfo = items[index];
            // let item = Game.moduleModel.item.getItem(itemInfo.id);
            Game.moduleModel.item.setItemNum(itemInfo.id, itemInfo.count, itemInfo.obtainTime);
        }
        Game.event.dispatch(GameEventKey.Item_Change);

    }


}