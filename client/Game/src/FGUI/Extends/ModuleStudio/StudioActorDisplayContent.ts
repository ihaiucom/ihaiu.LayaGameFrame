/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorDisplayContentStruct from "../../Generates/ModuleStudio/StudioActorDisplayContentStruct";
import StudioActorDisplayItem from './StudioActorDisplayItem';
import UIVirtualList from '../../../Libs/Helpers/UIVirtualList';

export default class StudioActorDisplayContent extends StudioActorDisplayContentStruct
{
    itemHeight: number = 0;
    
    clear() 
    {
        while(this.numChildren > 0)
        {
            let item = this.getChildAt(0);
            if(item instanceof StudioActorDisplayItem)
                item.poolRecover();
        }
        this.height = 0;
    }

    addItem(item: StudioActorDisplayItem) 
    {
        this.addChild(item);
        item.width = this.width;
        if(!this.itemHeight) 
        {
            this.itemHeight = item.height;
        }
    }

    public scrollPosY(index: number) {
        return index * this.itemHeight;
    }

    

}