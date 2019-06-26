import TreeStruct from "../../Generates/GameGM/TreeStruct";
import TreeItem from "./TreeItem";

export default class Tree extends TreeStruct
{
	data: fairygui.GComponent;
	itemPool: fairygui.GObjectPool;
	itemRoot: TreeItem;
	layerLevelInitPaddingLeft = 60;
	layerLevelPaddingLeft = 50;


	public constructor() 
	{
		super();
		this.itemPool = new fairygui.GObjectPool();
	}

	refresh()
	{
		if(this.data)
			this.setDataRoot(this.data);
		else
			this.setDataRoot(fairygui.GRoot.inst);
	}


	setDataRoot(dataRoot: fairygui.GComponent)
	{
		this.data = dataRoot;

		let item: TreeItem
		if (this.itemRoot)
		{
			item = this.itemRoot;
		}
		else
		{
			item = <TreeItem>this.itemPool.getObject(TreeItem.URL);
			item.treeParent = this;
			item.treeRoot = this;
			this.addChild(item);
		}
		item.setData(dataRoot);
		this.itemRoot = item;
		this.updateLayout();
	}

	updateLayout()
	{
		this.itemRoot.updateLayout();
	}


}