import SystemMessag from "../GameFrame/System/SystemMessage";
import SetNumberDialog from '../FGUI/Extends/SystemModuleDialog/SetNumberDialog';
import GetRewardDialog, { GetRewardDialogType } from '../FGUI/Extends/SystemModuleDialog/GetRewardDialog';
import MailContentDialog from "../FGUI/Extends/SystemModuleDialog/MailContentDialog";
import MailData from "./DataStructs/MailData";
import ItemInfoDialog from "../FGUI/Extends/SystemModuleDialog/ItemInfoDialog";
import ItemData from "./DataStructs/ItemData";
import BuildingData from "./DataStructs/BuildingData";
import BuildingSuccessDialog from "../FGUI/Extends/SystemModuleDialog/BuildingSuccessDialog";
import ActorData from './DataStructs/ActorData';
import ActorRenameDialog from "../FGUI/Extends/SystemModuleDialog/ActorRenameDialog";
import ActorSelectDialog from "../FGUI/Extends/SystemModuleDialog/ActorSelectDialog";
import StudioSSRenameDialog from '../FGUI/Extends/ModuleStudio/StudioSSRenameDialog';
import StudioStoryData from './DataStructs/StudioStoryData';
import InformationBoardDialog from "../FGUI/Extends/SystemModuleDialog/InformationBoardDialog";
import InformationGetDialog from "../FGUI/Extends/SystemModuleDialog/InformationGetDialog";
import InformationData from "./DataStructs/InformationData";
import BuildingSpeedUpDialog from "../FGUI/Extends/SystemModuleDialog/BuildingSpeedUpDialog";
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

    //建造成功展示框---需要弹多个
    private _buildingSuccessDialog: BuildingSuccessDialog;
     get buildingSuccessDialog(): BuildingSuccessDialog
    {
        if (!this._buildingSuccessDialog) {
            this._buildingSuccessDialog = BuildingSuccessDialog.createInstance();
        }

        return this._buildingSuccessDialog;
    }

    buildingSuccessShow(datasource: BuildingData)
    {
        return this.buildingSuccessDialog.open(datasource);
    }


    /** 艺人详情-改名对话框 */
    private _actorRenameDialog: ActorRenameDialog;
    private get actorRenameDialog(): ActorRenameDialog
    {
        if (!this._actorRenameDialog) {
            this._actorRenameDialog = ActorRenameDialog.createInstance();
        }

        return this._actorRenameDialog;
    }

    /** 艺人详情-改名对话框 */
    actorRename(datasource:ActorData)
    {
        return this.actorRenameDialog.open(datasource);
    }

    //通用艺人选择弹框
    private _actorSelectDialog: ActorSelectDialog;
    private get actorSelectDialog(): ActorSelectDialog
    {
        if (!this._actorSelectDialog) {
            this._actorSelectDialog = ActorSelectDialog.createInstance();
        }

        return this._actorSelectDialog;
    }

    actorSelectShow(callObj:any, callFunc1: Function)
    {
        return this.actorSelectDialog.open(callObj, callFunc1);
    }


    // private _informationPreviewDialog: InformationPreviewDialog;
    // private get informationPreviewDialog(): InformationPreviewDialog {
    //     if(!this._informationPreviewDialog) {
    //         this._informationPreviewDialog = InformationPreviewDialog.createInstance();
    //     }
    //     return this._informationPreviewDialog;
    // }

    // /**情报社-情报一览 */
    // informationPreview() {
    //     return  this.informationPreviewDialog.open();
    // }


    // private _informationMineDialog: InformationMineDialog;
    // private get informationMineDialog(): InformationMineDialog {
    //     if(!this._informationMineDialog) {
    //         this._informationMineDialog = InformationMineDialog.createInstance();
    //     }
    //     return this._informationMineDialog;
    // }

    // /**情报社-我的情报/添加情报 */
    // async informationMine(type: InformationMineDialogType = InformationMineDialogType.Mine) {
    //     await this.informationMineDialog.open(type);
    //     console.log("==================async informationMine====================");
        
    // }

    private _studioSSRenameDialog: StudioSSRenameDialog;
    private get studioSSRenameDialog(): StudioSSRenameDialog {
        if(!this._studioSSRenameDialog) {
            this._studioSSRenameDialog = StudioSSRenameDialog.createInstance();
        }
        return this._studioSSRenameDialog;
    }

    /**情报社-我的情报/添加情报 */
    async selectStoryRenameDialog(storyData: StudioStoryData): Promise<string> {
        return this.studioSSRenameDialog.open(storyData);
    }

    //情报提示信息展示框
    private _informationBoardDialog: InformationBoardDialog;
    private get informationBoardDialog(): InformationBoardDialog
    {
        if (!this._informationBoardDialog) {
            this._informationBoardDialog = InformationBoardDialog.createInstance();
        }

        return this._informationBoardDialog;
    }

    informationBoardShow(datasource: string)
    {
        return this.informationBoardDialog.open(datasource);
    }

    //情报获得展示框
    private _informationGetDialog: InformationGetDialog;
    private get informationGetDialog(): InformationGetDialog
    {
        if (!this._informationGetDialog) {
            this._informationGetDialog = InformationGetDialog.createInstance();
        }

        return this._informationGetDialog;
    }

    informationGetShow(datasource: Array<any>)
    {
        return this.informationGetDialog.open(datasource);
    }

    //建筑加速提示框
    private _buildingSpeedUpDialog: BuildingSpeedUpDialog;
    private get buildingSpeedUpDialog(): BuildingSpeedUpDialog
    {
        if (!this._buildingSpeedUpDialog) {
            this._buildingSpeedUpDialog = BuildingSpeedUpDialog.createInstance();
        }

        return this._buildingSpeedUpDialog;
    }

    buildingSpeedUpShow(datasource: BuildingData)
    {
        return this.buildingSpeedUpDialog.open(datasource);
    }

}