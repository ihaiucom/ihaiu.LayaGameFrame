/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import UnlockConfigStruct from "../ConfigStructs/UnlockConfigStruct";
import MenuConfig from "./MenuConfig";
import Game from "../../Game";

export default class UnlockConfig extends UnlockConfigStruct
{
	public get menuConfig(): MenuConfig
		{
			return Game.config.menu.getConfig(this.menu_id);
		}

		get lockvisible(): boolean
		{
			return this.show_type == 1;
		}

		get isUnlock(): boolean
		{
			let menuConfig = this.menuConfig;
			if (menuConfig)
			{
				return menuConfig.isUnlock;
			}
			return false;
		}

		get isNew(): boolean
		{
			let menuConfig = this.menuConfig;
			if (menuConfig)
			{
				return menuConfig.isNew;
			}
			return false;
		}

		get menuId(): number
		{
			return this.menu_id;
		}

		//是否展示
		get isOpenShow(): boolean
		{
			for (var index = 0; index < this.open_show.length; index++)
			{
				var element = this.open_show[index];
				if (element == 1)
				{
					return true;
				}
			}
			return false;
		}

		get isOpenShowMenu(): boolean
		{
			for (var index = 0; index < this.open_show.length; index++)
			{
				var element = this.open_show[index];
				if (element == 2)
				{
					return true;
				}
			}
			return false;
		}


		// 	菜单图片	
		get iconUrl(): string
		{
			let url = "";

			if (this.item_id > 0)
			{
				url = Game.config.item.getItemIcon(this.item_id);
			}
			else if (this.menuConfig)
			{

				url = this.menuConfig.iconUrl;
			}
			return url;
		}
}