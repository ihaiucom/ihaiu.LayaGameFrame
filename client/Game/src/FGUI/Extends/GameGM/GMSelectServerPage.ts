import GMSelectServerPageStruct from "../../Generates/GameGM/GMSelectServerPageStruct";
import GMWindow from "../../../GM/GMWindow";
import ChannelManager, { ServerItem } from "../../../GameFrame/Channel/ChannelManager";
import Handler = Laya.Handler;
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

declare var net;

export default class GMSelectServerPage extends GMSelectServerPageStruct
{
	// 窗口
	moduleWindow: GMWindow;

	channel: ChannelManager;

	// 窗口初始化完毕
	onWindowInited(): void
	{
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
		this.channel = ChannelManager.Instance;
		this.channel.requestServerList(null,
			// onSucess	
			() =>
			{
				list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
				list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
				list.numItems = this.channel.serverList.list.length;

				if (this.channel.serverIndex >= 0)
					this.m_list.selectedIndex = this.channel.serverIndex;

			},
			// onFail
			() =>
			{
				list.numItems = 0;
				Game.system.alertText(TEXT.ErorRequestServerList);
			}
		);
	}


	// 该组件所在Tab 显示
	onTabShow(): void
	{
		if (this.channel.serverIndex >= 0)
			this.m_list.selectedIndex = this.channel.serverIndex;
	}


	renderListItem(index: number, item: fairygui.GButton)
	{
		let data = this.channel.serverList.list[index];
		item.title = `${data.name}  ${data.ip}:${data.port}`;
		item["serverItem"] = data;
	}


	onClickItem(item: fairygui.GButton, ...args)
	{
		let data: ServerItem = item["serverItem"];
		if (data)
		{
			this.channel.serverName = data.name;
			net.config.url = Game.channel.serverItem.main;
		}
	}
}