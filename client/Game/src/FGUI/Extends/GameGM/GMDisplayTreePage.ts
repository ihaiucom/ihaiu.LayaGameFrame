import GMDisplayTreePageStruct from "../../Generates/GameGM/GMDisplayTreePageStruct";
import GMWindow from "../../../GM/GMWindow";



export default class GMDisplayTreePage extends GMDisplayTreePageStruct
{

	// 窗口
	moduleWindow: GMWindow;

	// 窗口初始化完毕
	onWindowInited(): void
	{
		this.m_refreshButton.onClick(this, this.onClickRefreshButton);
		this.m_showSelectButton.onClick(this, this.onClickShowSelectButton);
		this.m_hideSelectButton.onClick(this, this.onClickHideSelectButton);
		this.m_noSelectButton.onClick(this, this.onClickNoSelectButton);

		this.m_parentLayerButton.onClick(this, this.onClickParentLayerButton);
		this.m_setLayerButton.onClick(this, this.onClickSetLayerButton);

	}

	// 点击按钮--刷新
	onClickRefreshButton()
	{
		this.m_tree.refresh();
	}

	// 点击按钮--显示选中的
	onClickShowSelectButton()
	{

	}

	// 点击按钮--隐藏选中的
	onClickHideSelectButton()
	{

	}


	// 点击按钮--不选
	onClickNoSelectButton()
	{

	}


	// 点击按钮--上级
	onClickParentLayerButton()
	{

	}

	// 点击按钮--塌陷
	onClickSetLayerButton()
	{

	}
}