import TreeItemStruct from "../../Generates/GameGM/TreeItemStruct";
import Tree from "./Tree";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";

export default class TreeItem extends TreeItemStruct
{
	treeRoot: Tree;
	treeParent: TreeItem | Tree;
	layerLevel: number = 0;
	data: fairygui.GComponent | fairygui.GObject | laya.display.Sprite;




	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);

		this.m_visiable.onClick(this, this.onClickVisiableButton);
		this.m_openClose.onClick(this, this.onClickOpencloseButton);

	}

	onClickVisiableButton()
	{
		this.data.visible = !this.data.visible;
	}

	onClickOpencloseButton()
	{
		this.m_list.visible = !this.m_list.visible;
		this.treeRoot.updateLayout();
	}





	setData(data: fairygui.GComponent | fairygui.GObject | laya.display.Sprite, layerLevel: number = 0)
	{
		let otherText = "";
		if (data instanceof fairygui.GTextField)
		{
			otherText = data.font + " " + data.fontSize;
		}
		this.data = data;
		this.m_title.text = data.name + "(" + getClassName(data) + ") w=" + data.width + ", h=" + data.height + ", sxy=" + data.scaleX + " " + data.scaleY + " " + otherText;
		this.m_visiable.selected = data.visible;
		this.m_openClose.selected = true;
		this.m_list.visible = true;
		this.width = this.treeParent.width;
		this.m_title.x = this.treeRoot.layerLevelInitPaddingLeft + this.treeRoot.layerLevelPaddingLeft * layerLevel;
		this.m_title.width = this.width - this.m_title.x;
		this.m_list.width = this.treeParent.width;



		for (let i = this.m_list.numChildren - 1; i >= 0; i--)
		{
			let item = this.m_list.getChildAt(i);
			item.removeFromParent();
			this.treeRoot.itemPool.returnObject(item);
		}

		this.m_openClose.visible = false;
		if (data instanceof fairygui.GComponent || data instanceof laya.display.Sprite)	
		{
			this.m_openClose.visible = true;
			if (data == MenuLayer.gm)
			{
				return;
			}

			// for (let i = 0; i < data.numChildren; i++)
			// {
			// 	let item: TreeItem = <TreeItem>this.treeRoot.itemPool.getObject(TreeItem.URL);
			// 	item.treeParent = this;
			// 	item.treeRoot = this.treeRoot;
			// 	item.y = i * item.sourceHeight;
			// 	item.width = this.m_list.width;
			// 	this.m_list.addChild(item);
			// 	if (data instanceof laya.display.Sprite)
			// 	{
			// 		item.setData(<laya.display.Sprite>data.getChildAt(i), layerLevel + 1);
			// 	}
			// 	else
			// 	{
			// 		item.setData(data.getChildAt(i), layerLevel + 1);
			// 	}
			// }

			let container = data;
			if (data instanceof fairygui.GComponent)
			{
				container = data.displayObject;
			}


			for (let i = 0; i < container.numChildren; i++)
			{
				let display = <laya.display.Sprite>container.getChildAt(i);
				if (display["$owner"])
					display = display["$owner"];
				let item: TreeItem = <TreeItem>this.treeRoot.itemPool.getObject(TreeItem.URL);
				item.treeParent = this;
				item.treeRoot = this.treeRoot;
				item.y = i * item.sourceHeight;
				item.width = this.m_list.width;
				this.m_list.addChild(item);
				item.setData(display, layerLevel + 1);
			}





		}
	}

	updateLayout()
	{
		let y = 0;
		if (this.m_list.visible)
		{
			for (let i = 0; i < this.m_list.numChildren; i++)
			{
				let item: TreeItem = <TreeItem>this.m_list.getChildAt(i);
				item.updateLayout();
				item.y = y;
				y += item.height;
			}
		}

		this.m_list.height = y;
		this.height = this.sourceHeight + y;
	}
}