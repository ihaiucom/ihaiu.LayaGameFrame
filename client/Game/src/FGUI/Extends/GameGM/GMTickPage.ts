import GMTickPageStruct from "../../Generates/GameGM/GMTickPageStruct";
import GMWindow from "../../../GM/GMWindow";
import { GMTimeLoopSortType } from "./GMTimeLoopPage";

export default class GMTickPage extends GMTickPageStruct
{
	// // 窗口
	// moduleWindow: GMWindow;
	// dataList: any[] = [];
	// sortType: GMTimeLoopSortType = GMTimeLoopSortType.EvaluateCost;





	// // 窗口初始化完毕
	// onWindowInited(): void
	// {
	// 	this.m_clearButton.onClick(this, this.onClickClearButton);
	// 	this.m_refreshButton.onClick(this, this.onClickRefreshButton);

	// 	this.m_sortCostTimeToalButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTimeTotal]);
	// 	this.m_sorteCostTimeButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTime]);
	// 	this.m_sorteCallNumButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CallNum]);
	// 	this.m_sorteEvaluateButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.EvaluateCost]);

	// }

	// onClickClearButton()
	// {
	// 	DebugTimerLoopManager.clear();
	// }


	// onClickRefreshButton(sortType: GMTimeLoopSortType)
	// {
	// 	if (sortType)
	// 	{
	// 		this.sortType = sortType;
	// 	}

	// 	let list = Game.tick["list"];

	// 	switch (this.sortType)
	// 	{
	// 		case GMTimeLoopSortType.CostTimeTotal:
	// 			list = list.sort((a, b) => { return a.debugCostTimeToal - b.debugCostTimeToal });
	// 			break;
	// 		case GMTimeLoopSortType.CostTime:
	// 			list = list.sort((a, b) => { return a.debugCostTime - b.debugCostTime });
	// 			break;
	// 		case GMTimeLoopSortType.CallNum:
	// 			list = list.sort((a, b) => { return a.debugCallNum - b.debugCallNum });
	// 			break;
	// 		case GMTimeLoopSortType.EvaluateCost:
	// 			list = list.sort((a, b) => { return a.debugEvaluateCost - b.debugEvaluateCost });
	// 			break;
	// 	}


	// 	this.setList(list);
	// }

	// setList(items)
	// {
	// 	this.dataList = items;
	// 	let list = this.m_list;
	// 	list.setVirtual();
	// 	list.setVirtualAndLoop();
	// 	if (!list.itemRenderer) list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
	// 	list.numItems = items.length;
	// }


	// renderListItem(index: number, item: GMTimeLoopItem)
	// {
	// 	let data = this.dataList[index];
	// 	item.setTickData(data);
	// }
}