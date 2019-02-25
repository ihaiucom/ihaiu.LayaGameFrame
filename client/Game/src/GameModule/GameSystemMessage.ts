import SystemMessag from "../GameFrame/System/SystemMessage";

//======================
// 消息对话框API
//----------------------
export default class GameSystemMessag extends SystemMessag
{
    
	// 改名对话框
	private _renameComfirm: fgui.PfSkin.RenameUI;

	private get renameComfirm()
	{
		if (!this._renameComfirm)
		{
			this._renameComfirm = fgui.PfSkin.RenameUI.createInstance();
		}
		return this._renameComfirm;
	}

	// 设置数量对话框
	private _setNumMessage: fgui.Common.SystemSetNumMessage;

	private get setNumMessage()
	{
		if (!this._setNumMessage)
		{
			this._setNumMessage = fgui.Common.SystemSetNumMessage.createInstance();
		}
		return this._setNumMessage;
	}

	// 获得物品的对话框
	private _getRewardMessage: fgui.System.SystemAddItemMessage;
	private get getRewardMessage()
	{
		if (!this._getRewardMessage)
		{
			this._getRewardMessage = fgui.System.SystemAddItemMessage.createInstance();
		}
		return this._getRewardMessage;
	}

	private _selectActorPanel: fgui.Bag.SystemSelectActorPanel;
	private get selectActorPanel(): fgui.Bag.SystemSelectActorPanel
	{
		if (!this._selectActorPanel)
		{
			this._selectActorPanel = fgui.Bag.SystemSelectActorPanel.createInstance();
		}
		return this._selectActorPanel;
	}
	// 
	private _getItemMessage: fgui.Common.SystemGetItemMessage;
	private get getItemMessage(): fgui.Common.SystemGetItemMessage
	{
		if (!this._getItemMessage)
		{
			this._getItemMessage = fgui.Common.SystemGetItemMessage.createInstance();
		}
		return this._getItemMessage;
	}

	//艺人技能效果
	private _actorSkillEffect: fgui.Common.SkillEffectUI;
	private get skillEffectUI()
	{
		if (!this._actorSkillEffect)
		{
			this._actorSkillEffect = fgui.Common.SkillEffectUI.createInstance();
		}
		return this._actorSkillEffect;
	}

	/**
	 * 
	 * @param acotrId 艺人id
	 * @param type 类型
	 */
	public playSkillEffect(acotrId: number, type: number, callback?: Function): void
	{
		this.skillEffectUI.playSkillEffect(acotrId, type, callback);
	}

	private _addFansMessage: fgui.Common.SystemAddFansMessage;
	private get addFansMessage()
	{
		if (!this._addFansMessage)
		{
			this._addFansMessage = fgui.Common.SystemAddFansMessage.createInstance();
		}
		return this._addFansMessage;
	}


	//获得奖励提示
	private _alertAwardsDialog: fgui.Common.SystemAlertAwards;
	private get alertAwardsDialog()
	{
		if (!this._alertAwardsDialog)
		{
			this._alertAwardsDialog = fgui.Common.SystemAlertAwards.createInstance();
		}
		return this._alertAwardsDialog;
	}

	private _rankMovieInfo: fgui.Common.RankMovieInfoPanel;
	private get rankMovieInfo()
	{
		if (!this._rankMovieInfo)
		{
			this._rankMovieInfo = fgui.Common.RankMovieInfoPanel.createInstance();
		}
		return this._rankMovieInfo;
	}
	private _rankPlayerInfo: fgui.Common.RankPlayerInfoPanel;
	private get rankPlayerInfo()
	{
		if (!this._rankPlayerInfo)
		{
			this._rankPlayerInfo = fgui.Common.RankPlayerInfoPanel.createInstance();
		}
		return this._rankPlayerInfo;
	}

	private _rankRenamePanel: fgui.Common.RankRenamePanel;
	private get rankRenamePanel(): fgui.Common.RankRenamePanel
	{
		if (!this._rankRenamePanel)
		{
			this._rankRenamePanel = fgui.Common.RankRenamePanel.createInstance();
		}
		return this._rankRenamePanel;
	}

	private _streetLevelUpPanel: fgui.Common.StreetLevelUp;
	private get streetLevelUpPanel(): fgui.Common.StreetLevelUp
	{
		if (!this._streetLevelUpPanel)
		{
			this._streetLevelUpPanel = fgui.Common.StreetLevelUp.createInstance();
		}
		return this._streetLevelUpPanel;
	}

	private _playerLevelUpPanel: fgui.PlayerInfo.PlayerLevelUp;
	private get playerLevelUpPanel(): fgui.PlayerInfo.PlayerLevelUp
	{
		if (!this._playerLevelUpPanel)
		{
			this._playerLevelUpPanel = fgui.PlayerInfo.PlayerLevelUp.createInstance();
		}
		return this._playerLevelUpPanel;
	}

	private _alertTextIconDialog: fgui.Common.SystemAlertTextIconMessage;
	private get alertTextIconDialog(): fgui.Common.SystemAlertTextIconMessage
	{
		if (!this._alertTextIconDialog)
		{
			this._alertTextIconDialog = fgui.Common.SystemAlertTextIconMessage.createInstance();
		}
		return this._alertTextIconDialog;
	}

	private _wayAlertDialog: fgui.Common.GetWayAlert;
	private get wayAlertDialog(): fgui.Common.GetWayAlert
	{
		if (!this._wayAlertDialog)
		{
			this._wayAlertDialog = fgui.Common.GetWayAlert.createInstance();
		}
		return this._wayAlertDialog;
	}

	private _itemInfoPanel: fgui.Common.ItemInfo;
	private get itemInfoPanel(): fgui.Common.ItemInfo
	{
		if (!this._itemInfoPanel)
		{
			this._itemInfoPanel = fgui.Common.ItemInfo.createInstance();
		}
		return this._itemInfoPanel;
	}

	private _itemLockTipPanel: fgui.Common.ItemLockTip;
	private get itemLockTipPanel(): fgui.Common.ItemLockTip
	{
		if (!this._itemLockTipPanel)
		{
			this._itemLockTipPanel = fgui.Common.ItemLockTip.createInstance();
		}
		return this._itemLockTipPanel;
	}

	private _selectItemPanel: fgui.Common.SystemSelectItemMessage;
	private get selectItemPanel(): fgui.Common.SystemSelectItemMessage
	{
		if (!this._selectItemPanel)
		{
			this._selectItemPanel = fgui.Common.SystemSelectItemMessage.createInstance();
		}
		return this._selectItemPanel;
	}

    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
    
    
	/**
	 * 标题，文本内容，图标列表提示框
	 * @param itemList 
	 * @param title 
	 * @param content 
	 * @param confirm 
	 * @param confirmText 
	 */
	confirmTextIcon(itemList: DTItemNum[], title?: string, content?: string, confirm?: Function, caller?: any, confirmText?: string, isShowClose?: boolean, isShowCurNum: boolean = true)
	{
		this.alertTextIconDialog.open(itemList, title, content, confirm, caller, confirmText, isShowClose, isShowCurNum);
		this.playOpenSound();
	}

	alertTextIcon(itemList: DTItemNum[], title?: string, confirm?: Function, caller?: any)
	{
		this.alertTextIconDialog.open(itemList, title, "", confirm, null, null, null, false);
		this.playOpenSound();
	}

	/**
	 * 
	 * @param itemList 
	 * @param title 
	 * @param confirm 
	 */
	public alertTextIconByProtoItems(itemList: Proto.SS.ItemDesc[], title?: string, content?: string, confirm?: Function, caller?: any, confirmText?: string, isShowClose?: boolean)
	{
		this.alertTextIconDialog.open(ItemDescList2DTItemNumList(itemList), title, content, confirm, caller, confirmText, isShowClose, false);
		this.playOpenSound();
	}


	/**
	 *花费确定
		* @param txt
		* @param costnum
		* @param costId
		* @param caller
		* @param yesFun
		*/
	confirmBuyText(txt: string, cost: number[], caller: any, yesFun: Function): void
	{
		var costId: number = cost[0];
		var costnum: number = cost[1];
		var config = Game.config.item.getConfig(costId);
		var costItemName = "";
		if (cost)
		{
			costItemName = config.name;
		}
		else
		{
			costItemName = costId + "";
		}
		this.confirmText(format(txt, costnum, costItemName), TEXT.SureBuy, null, () =>
		{

			if (Game.moduleModel.item.getItemNum(costId) >= costnum)
			{
				if (yesFun)
				{
					if (caller)
					{
						yesFun.apply(caller);
					}
					else
					{
						yesFun();
					}
				}
			}
			else
			{
				Game.system.openItemWay(costId, costnum);
			}
		});
	}

	/**
	 * 选择数量
	 * @param limit
	 * @param txt
	 * @param title
	 * @param caller
	 * @param yesFun
	 * @param noFun
	 * @param closeButtonVisiable
	 * @param isClickButtonAutoClose
	 */
	setNumText(
		limit: number,
		txt: string = "",
		title: string = "",
		caller: any = null,
		yesFun: Function = null,
		noFun: Function = null,
		yesTxt: string = null,
		closeButtonVisiable: boolean = true,
		isClickButtonAutoClose: boolean = true)
	{
		if (isNullOrEmpty(yesTxt))
		{
			yesTxt = TEXT.ButtonYes;
		}
		this.setNumMessage.open(limit, txt, title, caller, yesFun, noFun, yesTxt, closeButtonVisiable, isClickButtonAutoClose);

		this.playOpenSound();
	}



	/**
	 *获得物品
		* @param txt
		* @param items
		*/
	getRewardText(items: DTItemNum[] | ItemData[] | Proto.SS.ItemDesc[], title?: string, autoCloseTime?: number): void
	{
		let list = Games.ItemData.BinningItemList(items);
		this.getRewardMessage.open(list, title, autoCloseTime);
		this.playOpenSound();
	}

	/**
	 *选择演员
		* @param actorList
		* @param selectFun
		* @param caller
		* @param title
		*/
	selectActor(
		actorList: Games.ActorData[],
		selectFun: Function,
		caller: any = null,
		title: string = "",
	)
	{
		this.selectActorPanel.open(actorList, selectFun, caller, title);
		this.playOpenSound();
	}
	/**
			 *获得物品
				* @param txt
				* @param items
				*/
	getItemText(items: DTItemNum[] | Games.ItemData[] | Proto.SS.ItemDesc[], closeFun?: Function, isAutoClose?: boolean): fgui.Common.SystemGetItemMessage
	{
		let list = Games.ItemData.BinningItemList(items);
		this.getItemMessage.open(list, closeFun, isAutoClose);
		return this.getItemMessage;
	}
	/**
	 *增加粉丝
		* @param addFans 增加的粉丝数
		* @param closeHandler 关闭回调
		* @param title 得益于公司的市场推广
		* @param autoCloseTime 自动关闭时间， 为0时不自动关闭
		*/
	addFansText(addFans: number, closeHandler: Handler, title?: string, autoCloseTime: number = 0): void
	{
		this.addFansMessage.open(addFans, closeHandler, title, autoCloseTime);
		this.playOpenSound();
	}

	//弹窗升级界面
	tryAlertLevelUp(closeHandler: Handler)
	{
		let hasMsg: boolean = Game.moduleModel.playerInfo.hasPlayerLevelUpMsg;
		if (hasMsg)
		{
			let msg = Game.moduleModel.playerInfo.dequeuePlayerLevelUpMsg();
			this.playerLevelUpPanel.show(msg.old_level, msg.now_level, msg.story, closeHandler);
			this.playOpenSound();
		}
		else
		{
			if (closeHandler)
			{
				closeHandler.run();
				closeHandler = null;
			}
		}
	}

	playerInfo(playerData: number | Proto.SS.PlayerShortData)
	{
		this.rankPlayerInfo.open(playerData);
	}

	movieInfo(movieData: string | Proto.SS.MovieShortData)
	{
		this.rankMovieInfo.open(movieData);
	}

	rename(title: string, caller: any, renameFun: Function, oldName: string = "")
	{
		this.rankRenamePanel.open(title, caller, renameFun, oldName);
	}

	streetLevelUp()
	{
		this.streetLevelUpPanel.open();
	}
	selectItem(itemList: ItemData[] | DTItemNum[] | Proto.SS.ItemDesc[], caller: any, fun: Function)
	{
		let list: ItemData[] = ItemData.BinningItemList(itemList);
		this.selectItemPanel.open(list, caller, fun);
    }
    
    
	/**
	 * 关闭对话框
	 */
	alertMessageHide()
	{
        super.alertMessageHide();
        
		if (this._getRewardMessage)
		{
			this._getRewardMessage.close();
		}

		if (this._setNumMessage)
		{
			this._setNumMessage.close();
		}
    }
    
    /**
	 * 打开重命名窗口
	 * @param dialogMsg 对话文本
	 * @param caller 调用域
	 * @param okFunc 函数
	 * @param okBtnTxt 按钮文本
	 * @param defaultTxt 默认输入文本
	 * @param promptText 提示文本
	 * @param maxLen 最大字符
	 * @param url icon路径
	 * @param cost 花费[id,num]
	 * @param isClickButtonAutoClose 点击ok是否自动关闭 
	 * @param randomNames //随机名字数组
	 */
	public openRename(
		dialogMsg: string,
		caller: any,
		okFunc: Function,
		closeFunc: Function,
		okBtnTxt: string,
		defaultTxt: string,
		promptText: string,
		maxLen: number,
		url: string,
		cost: number[],
		isClickButtonAutoClose: boolean = true,
		randomNames: Array<string>): void
	{
		this.renameComfirm.open(dialogMsg, caller, okFunc, closeFunc, okBtnTxt, defaultTxt, promptText, maxLen, url, cost, isClickButtonAutoClose, randomNames);

		this.playOpenSound();
	}

	/**隐藏重命名窗口*/
	public hideRename()
	{
		this.renameComfirm.close();
	}



	/**
	 * 道具不足时提示获取途径
	 * @param itemId 
	 * @param costNum 
	 */
	public openItemWay(itemId: number, costNum: number)
	{
		this.wayAlertDialog.setInfo(itemId, costNum);
		this.playOpenSound();
	}

	/**
	 * 道具信息提示
	 * @param button 绑定的物体
	 * @param itemId 物品ID
	 */
	public showItemInfo(button: fairygui.GObject, itemId: number)
	{
		this.itemInfoPanel.Show(button, itemId);
	}

	/**
	 * 道具信息提示
	 * @param point
	 * @param itemData
	 */
	public showItemLockTip(button: fairygui.GButton, tip: string, title?: string)
	{
		this.itemLockTipPanel.Show(button, tip, title);
	}

	/**
	 * 获得物品特效
	 * @param items 物品列表
	 * @param root 
	 * @param startPos
	 */
	public showAssetFx(items: ItemData[], root?: fairygui.GComponent, startPos?: Point)
	{
		if (root == null)
		{
			root = Games.MenuLayer.dialogModel;
		}
		if (startPos == null)
		{
			startPos = new Point(root.width / 2, root.height / 2);
		}
		this.showAssetFxIndex = 0;
		this.showAssetItems = items;
		Laya.timer.clear(this, this.loopShowAssetFx);
		Laya.timer.loop(100, this, this.loopShowAssetFx, [root, startPos]);
	}
	private showAssetFxIndex: number;
	private showAssetItems: Games.ItemData[];
	private loopShowAssetFx(root: fairygui.GComponent, startPos: Point)
	{
		if (this.showAssetFxIndex >= this.showAssetItems.length)
		{
			console.log("finish");
			Laya.timer.clear(this, this.loopShowAssetFx);
			return;
		}
		let item = this.showAssetItems[this.showAssetFxIndex];
		this.showAssetFxIndex++;
		if (item.itemType == 1 || item.itemType == 2 || item.itemType == 3 || item.itemType == 11 || item.itemType == 12)
		{
			let endPos = new Point(0, 0);
			FguiHelper.startTrail(item.itemId, startPos, endPos, 500, root);
		} else if (item.itemType == 4 || item.itemType == 5 || item.itemType == 6 || item.itemType == 7 || item.itemType == 8 || item.itemType == 9)
		{
			let endPos = new Point(root.width, root.height);
			FguiHelper.startTrail(item.itemId, startPos, endPos, 500, root);
		}
	}


	/**
	 * 提示获取奖励信息
	 * @param itemList 
	 * @param title
	 * @param confirm
	 */
	public openAwardsAlert(itemList: DTItemNum[], title?: string, confirm?: Function, hideClose?: boolean)
	{
		this.alertAwardsDialog.open(itemList, title, confirm, null, hideClose);
		this.playOpenSound();
	}

	public openAwardsAlertByProtoItems(itemList: Proto.SS.ItemDesc[], title?: string, confirm?: Function, hideClose?: boolean)
	{
		this.openAwardsAlert(ItemDescList2DTItemNumList(itemList), title, confirm, hideClose);
	}

	public playEffects(dts: DTItemNum[])
	{
		this._effectMsg.playeffects(dts);
	}


	//礼物领取
	private _alertGift: fgui.Common.SystemAlertGift;
	private get alertGift()
	{
		if (!this._alertGift)
		{
			this._alertGift = fgui.Common.SystemAlertGift.createInstance();
		}
		return this._alertGift;
	}

	//////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	/**
	 * 
	 * @param itemList 
	 * @param title 
	 * @param desc 
	 * @param btnTxt 
	 * @param btnEnabled 
	 * @param confirm 
	 */
	public openAwardsGift(itemList: DTItemNum[], title?: string, desc?: string, btnTxt?: string, btnEnabled?: boolean, confirm?: Function)
	{
		this.alertGift.open(itemList, title, desc, btnTxt, btnEnabled, confirm);
		this.playOpenSound();
	}


	//突破
	private _actorBreakEffect: fgui.Common.ActorLvBreaktUI;
	private get actorBreakEffect()
	{
		if (!this._actorBreakEffect)
		{
			this._actorBreakEffect = fgui.Common.ActorLvBreaktUI.createInstance();
		}
		return this._actorBreakEffect;
	}

	/**
	 * 播放突破效果
	 * @param acotrId 艺人id
	 * @param type 类型
	 */
	public playBreakEffect(acotrId: number, desc: string): void
	{
		this.actorBreakEffect.playEffect(acotrId, desc);
	}


	//跳转功能
	private _goOtherFunction: fgui.Common.SystemGoOtherFunction;
	private get goOtherFunction(): fgui.Common.SystemGoOtherFunction
	{
		if (!this._goOtherFunction)
		{
			this._goOtherFunction = fgui.Common.SystemGoOtherFunction.createInstance();
		}
		return this._goOtherFunction;
	}

	/**
	 * 打开功能跳转
	 * @param type 
	 * @param title 
	 * @param desc 
	 * @param confirmFunc 
	 */
	public openGoOtherFunc(type: number, title?: string, desc?: string, confirmFunc?: Function): void
	{
		this.goOtherFunction.open(type, title, desc, confirmFunc);
	}


	//解锁
	private _unlockPanel: fgui.Common.UnlockPanel;
	private get unlockPanel(): fgui.Common.UnlockPanel
	{
		if (!this._unlockPanel)
		{
			this._unlockPanel = fgui.Common.UnlockPanel.createInstance();
		}
		return this._unlockPanel;
	}
	//打开解锁功能
	public openUnlock(unlockId: number): void
	{
		this.unlockPanel.openUnlock(unlockId);
	}

	//打开解锁功能
	public openUnlockLessonFunc(url: string, title: string): void
	{
		this.unlockPanel.openUnlockLessonFunc(url, title);
	}
	//关闭解锁
	closeUnlock(): void
	{
		this.unlockPanel.closeUnlock();
	}

}