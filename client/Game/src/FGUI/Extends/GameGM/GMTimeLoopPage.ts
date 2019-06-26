import GMTimeLoopPageStruct from "../../Generates/GameGM/GMTimeLoopPageStruct";
import GMWindow from "../../../GM/GMWindow";
import DebugTimerLoop from "../../../GM/DebugTimerLoop";
import DebugTimerLoopManager from "../../../GM/DebugTimerLoopManager";
import GMTimeLoopItem from "./GMTimeLoopItem";
import Handler = Laya.Handler;

export enum GMTimeLoopSortType
{
	CostTimeTotal,
	CostTime,
	CallNum,
	EvaluateCost
}

export default class GMTimeLoopPage extends GMTimeLoopPageStruct
{

	// 窗口
	moduleWindow: GMWindow;
	dataList: DebugTimerLoop[] = [];
	sortType: GMTimeLoopSortType = GMTimeLoopSortType.EvaluateCost;





	// 窗口初始化完毕
	onWindowInited(): void
	{
		this.m_clearButton.onClick(this, this.onClickClearButton);
		this.m_refreshButton.onClick(this, this.onClickRefreshButton);

		this.m_sortCostTimeToalButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTimeTotal]);
		this.m_sorteCostTimeButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTime]);
		this.m_sorteCallNumButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CallNum]);
		this.m_sorteEvaluateButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.EvaluateCost]);

	}

	onClickClearButton()
	{
		DebugTimerLoopManager.clear();
	}


	onClickRefreshButton(sortType: GMTimeLoopSortType)
	{
		if (sortType)
		{
			this.sortType = sortType;
		}

		let list = DebugTimerLoopManager.Instance.dict.getValues();

		switch (this.sortType)
		{
			case GMTimeLoopSortType.CostTimeTotal:
				list = list.sort((a, b) => { return a.costTimeToal - b.costTimeToal });
				break;
			case GMTimeLoopSortType.CostTime:
				list = list.sort((a, b) => { return a.costTime - b.costTime });
				break;
			case GMTimeLoopSortType.CallNum:
				list = list.sort((a, b) => { return a.callNum - b.callNum });
				break;
			case GMTimeLoopSortType.EvaluateCost:
				list = list.sort((a, b) => { return a.evaluateCost - b.evaluateCost });
				break;
		}


		this.setList(list);
	}

	setList(items)
	{
		this.dataList = items;
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
		if (!list.itemRenderer) list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		list.numItems = items.length;
	}


	renderListItem(index: number, item: GMTimeLoopItem)
	{
		let data = this.dataList[index];
		item.setItemData(data);
	}
}