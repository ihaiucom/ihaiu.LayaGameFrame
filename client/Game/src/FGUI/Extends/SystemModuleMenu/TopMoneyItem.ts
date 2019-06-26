/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopMoneyItemStruct from "../../Generates/SystemModuleMenu/TopMoneyItemStruct";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";

export default class TopMoneyItem extends TopMoneyItemStruct
{
    
    private _itemId = -1;
    get itemId(): number
    {
        if (this._itemId == -1)
        {
            if (!isNullOrEmpty(<string>this.data))
            {
                let info = JSON.parse(<string>this.data);
                this._itemId = info["itemId"];
            }
        }
        return this._itemId;
    }

    set itemId(val: number)
    {
        this._itemId = val;
    }

    
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_addButton.onClick(this, this.onClickAdd);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        // 刷新数据
        this.refreshData();
    }


    onClickAdd()
    {
        Game.menu.open(MenuId.Recharge);
    }


    // 刷新数据
    refreshData()
    {
        if (this.itemId != -1)
            this.m_title.text = Game.moduleModel.item.getItemNumTxt(this.itemId);
    }


}