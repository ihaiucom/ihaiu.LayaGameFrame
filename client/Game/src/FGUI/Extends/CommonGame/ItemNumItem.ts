/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemNumItemStruct from "../../Generates/CommonGame/ItemNumItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemNumItem extends ItemNumItemStruct
{
    public itemId:number;

    public dataSource:ItemData;

    public RenderItem(data: ItemData): void
    {
        this.itemId = data.id;        
        this.dataSource = data;
        
        this.m_icon.url   = data.itemIconUrl;
        this.m_title.text = data.itemNumTxt;
    }

}