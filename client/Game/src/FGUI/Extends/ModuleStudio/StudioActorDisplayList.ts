/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorDisplayListStruct from "../../Generates/ModuleStudio/StudioActorDisplayListStruct";
import StudioActorDisplayItem from './StudioActorDisplayItem';
import StudioActorData from '../../../GameModule/DataStructs/StudioActorData';
import Game from '../../../Game';
import StudioActorDisplayPanel from './StudioActorDisplayPanel';

export default class StudioActorDisplayList extends StudioActorDisplayListStruct
{
    items: StudioActorDisplayItem[] = [];
    get actors(): StudioActorData[] {
        return Game.moduleModel.studio.current.actors;
    }
    public scrollToViewAtIndex(index: number, ani?:boolean) {
        this.scrollPane.setPosY(this.m_content.scrollPosY(index), ani);
    }

    updateView(actors: StudioActorData[]) 
    {
        this.clear();
        for (let index = 0; index < actors.length; index++) 
        {
            let item = StudioActorDisplayItem.poolGet();
            this.m_content.addItem(item);
            item.y = -this.height;
            item.toY = index * (item.height);
            item.updateView(actors[index]);
            this.items.push(item);
        }
    }

    public playItemAnimation(index: number, duration:number, delay: number) {

        if(!this.m_content) return;

        let item = this.items[index];
        if(!item) return;
        
        item.fromY= this.height + index * (item.height);
        item.y = item.fromY;


        this.m_content.height = (index+1) * item.height;
        // let g = this.m_content.displayObject.graphics;
        // g.clear();
        // g.drawRect(0, 0, this.m_content.width,  this.m_content.height, '#00FF0033', '#FF00FF', 2);
        if(this.m_content.height >= this.height)
        {
            this.scrollPane.scrollBottom(true);
        }
        item.tweenTo(item.fromY, item.toY, 500, 0);
    }

    public stopItemAnimations() {
        let itemHeight = 0;
        for (let index = 0; index < this.items.length; index++) {
            let item = this.items[index];
            item.stop();
            itemHeight = item.height;
        }
        this.m_content.height =  itemHeight * this.items.length;
        this.scrollPane.scrollDown(1000, true);
    }

    clear()
    {
        this.m_content.clear();
        this.items.length = 0;
    }
}