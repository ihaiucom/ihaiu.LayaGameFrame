import SystemMessag from "../GameFrame/System/SystemMessage";
import SetNumberDialog from '../FGUI/Extends/SystemModuleDialog/SetNumberDialog';
import GetRewardDialog, { GetRewardDialogType } from '../FGUI/Extends/SystemModuleDialog/GetRewardDialog';
import MailContentDialog from "../FGUI/Extends/SystemModuleDialog/MailContentDialog";
import MailData from "./DataStructs/MailData";
import ItemInfoDialog from "../FGUI/Extends/SystemModuleDialog/ItemInfoDialog";
import ItemData from "./DataStructs/ItemData";
import UserLevelAndExpPlay from "../FGUI/Customs/UserLevelAndExpPlay";
import Game from "../Game";
import TEXT from "../Config/Keys/TEXT";
import ItemGetWayDialog from "../FGUI/Extends/SystemModuleDialog/ItemGetWayDialog";

//======================
// 消息对话框API
//----------------------
export default class GameSystemMessag extends SystemMessag
{
    // 玩家等级和经验播放
    userLevelAndExpPlay = new UserLevelAndExpPlay();

    /** 获得奖励对话框 */
    private _getRewardDialog: GetRewardDialog;
    private get getRewardDialog()
	{
		if (!this._getRewardDialog)
		{
			this._getRewardDialog = GetRewardDialog.createInstance();
		}
		return this._getRewardDialog;
    }
    async rewardDialog(items: any[])
    {
        return this.getRewardDialog.open(items);
    }
    // 使用物品对话框
	private _setNumberDialog: SetNumberDialog;

	private get setNumberDialog()
	{
		if (!this._setNumberDialog)
		{
			this._setNumberDialog = SetNumberDialog.createInstance();
		}
		return this._setNumberDialog;
    }



    /** 物品前往获取对话框UI */
    private _itemGetWayDialog: ItemGetWayDialog;
    private get itemGetWayDialog()
	{
		if (!this._itemGetWayDialog)
		{
			this._itemGetWayDialog = ItemGetWayDialog.createInstance();
		}
		return this._itemGetWayDialog;
    }
    
    /**
     * 检测物品数量是否足够
     * @param itemId 物品ID
     * @param itemNeedNum 物品需要数量
     */
    checkItemNum(itemId: number, itemNeedNum: number): boolean
    {
        let count = Game.moduleModel.item.getItemNum(itemId);
        if(itemNeedNum <= count)
        {
            return true;
        }

        let item = Game.moduleModel.item.getItem(itemId);
        if(item)
        {
            // Game.system.toastFormatText(TEXT.ToastTextItemNotEnough2, item.itemName, itemNeedNum);
            this.openItemGetWayDailog( itemId, itemNeedNum )
        }
        else
        {
            console.error("Erro:", "不存在物品", itemId);
        }
        return false;
    }

    /**
     * 打开物品获取对话框
     * @param itemId 物品ID
     * @param costNum 物品需求数量
     */
    openItemGetWayDailog(itemId: number, costNum?: number)
    {
        this.itemGetWayDialog.open(itemId, costNum);
    }
    
    async itemUse(max: number, value: number = 1):Promise<number>
    {
        this.setNumberDialog.m_frame.title = "物品使用";
        this.setNumberDialog.m_content.text = "选择使用物品数量";
        return await this.setNumberDialog.open(max, value);
    }

    async itemSale(max: number, value: number = 1):Promise<number>
    {
        this.setNumberDialog.m_frame.title = "物品出售";
        this.setNumberDialog.m_content.text = "选择出售物品数量";
        return await this.setNumberDialog.open(max, value);
    }

    async itemCompound(max: number, value: number = 1):Promise<number>
    {
        this.setNumberDialog.m_frame.title = "物品合成";
        this.setNumberDialog.m_content.text = "选择合成物品数量";
        return await this.setNumberDialog.open(max, value);
    }

    async itemSplit(max: number, value: number = 1):Promise<number>
    {
        this.setNumberDialog.m_frame.title = "物品拆分";
        this.setNumberDialog.m_content.text = "选择拆分物品数量";
        return await this.setNumberDialog.open(max, value);
    }

    //读取邮件对话框
    private _mailContentDialog: MailContentDialog;
    private get mailDialog(): MailContentDialog
    {
        if (!this._mailContentDialog) {
            this._mailContentDialog = MailContentDialog.createInstance();
        }

        return this._mailContentDialog;
    }

    mailRead(datasource:MailData)
    {
        return this.mailDialog.open(datasource);
    }

    //物品信息展示框
    private _itemInfoDialog: ItemInfoDialog;
    private get itemInfoDialog(): ItemInfoDialog
    {
        if (!this._itemInfoDialog) {
            this._itemInfoDialog = ItemInfoDialog.createInstance();
        }

        return this._itemInfoDialog;
    }

    itemInfoShow(datasource:ItemData)
    {
        return this.itemInfoDialog.open(datasource);
    }


}