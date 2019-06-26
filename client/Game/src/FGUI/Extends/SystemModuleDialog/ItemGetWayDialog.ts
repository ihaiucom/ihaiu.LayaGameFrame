/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemGetWayDialogStruct from "../../Generates/SystemModuleDialog/ItemGetWayDialogStruct";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import Tween = Laya.Tween;
import Ease = Laya.Ease;
import Handler = Laya.Handler;
import MenuButton from "../CommonBase/MenuButton";
import ItemModel from "../../../GameModule/DataModels/ItemModel";

export default class ItemGetWayDialog extends ItemGetWayDialogStruct
{
    mMenuConfigs: Array<any> = [];
    
    /**
     * 打开物品获取对话框
     * @param itemId 物品ID
     * @param costNum 物品需求数量
     */
    open(itemId: number, costNum?: number)
    {
        let item:ItemData = Game.moduleModel.item.getItem(itemId);
        if(!item)
        {
            console.warn(`ItemGetWayDialog open: 没有该物品 ${itemId}`);
            return;
        }

        // 前往的菜单列表
        let menuConfigs = item.itemConfig.getWayMenus;
        this.mMenuConfigs = menuConfigs;

        this.m_content.m_closeButton.onClick(this, this.close);
        this.m_content.m_menuList.itemRenderer = Laya.Handler.create( this, this.renderListItem, null, false );
        this.m_content.m_menuList.on( fairygui.Events.CLICK_ITEM, this, this.onClickMenuButton );
        this.m_content.m_menuList.numItems = menuConfigs.length;
        this.m_content.m_itemIcon.setData( item, costNum );

        MenuLayer.showDialogModel();
        FguiHelper.centerScreen(this);
        this.m_content.scaleX = 0;
        this.m_content.scaleY = 0;
        Tween.to(this.m_content, {scaleX: 1, scaleY: 1}, 500, Ease.backInOut);
        MenuLayer.floatMsg.addChild(this);
    }

    renderListItem( index: number, item: MenuButton ): void{
        item.setData( this.mMenuConfigs[index] )
    }

    close()
    {
        MenuLayer.hideDialogModel();
        Tween.to(this.m_content, {scaleX: 0, scaleY: 0}, 500, Ease.quadInOut, Handler.create(this, this.onHide));
    }

    private onHide()
    {
        this.removeFromParent();
    }

    onClickMenuButton(menuButton: MenuButton)
    {
        this.close();
        Game.menu.open(menuButton.menuConfig.menuId);
    }

}