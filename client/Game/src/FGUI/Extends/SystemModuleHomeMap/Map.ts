/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MapStruct from "../../Generates/SystemModuleHomeMap/MapStruct";
import Res from "../../../Config/Keys/Res";

export default class Map extends MapStruct
{
    

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);

        // while(this.numChildren > 0)
        // {
        //     this.removeChildAt(0);
        // }

        for(let i = 0; i < 16; i ++)
        {
            this.removeChildAt(0);
        }
        
        // this.initDecorationList();
        // Laya.timer.frameOnce(5, this, this.load);
        this.load();
    }

    cellHNum = 4;
    cellVNum = 4;
    cellWidth = 1249;
    cellHeight = 1154;
    load()
    {
        for(let i = 0; i < 16; i ++ )
        {
            let row = Math.floor(i / this.cellHNum);
            let column = i % this.cellHNum;
            let index = i + 1;
            let cell = new fairygui.GLoader();
            cell.x = column * this.cellWidth;
            cell.y = row * this.cellHeight;
            this.addChildAt(cell, 0);
            cell.url = Res.getHomeMap(index);
        }
    }

    decorationList: fairygui.GObject[] = [];
    initDecorationList()
    {
        // while(this.numChildren > 0)
        // {
        //     let item = this.getChildAt(0);
        //     this.decorationList.push(item);
        //     item.removeFromParent();
        // }
    }

    installDecoration(layout: Laya.Sprite)
    {
        // for(let item of this.decorationList)
        // {
        //     item.displayObject.zOrder = item.y;
        //     layout.addChild(item.displayObject);
        // }
    }
}