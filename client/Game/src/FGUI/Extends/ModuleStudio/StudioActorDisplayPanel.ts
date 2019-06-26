/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorDisplayPanelStruct from "../../Generates/ModuleStudio/StudioActorDisplayPanelStruct";
import StudioActorData from '../../../GameModule/DataStructs/StudioActorData';
import LabelConfig from "../../../Config/ConfigExtends/LabelConfig";
import ActorLbTagItem from '../CommonGame/ActorLbTagItem';
import Game from '../../../Game';
import ActorLbTagItem2 from '../CommonGame/ActorLbTagItem2';

export default class StudioActorDisplayPanel extends StudioActorDisplayPanelStruct
{
    protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        this.m_list.itemRenderer = Laya.Handler.create(this,this.RendererItem,null,false);
        this.m_list.itemProvider = Laya.Handler.create(this, this.ItemProvider, null, false);
    }
    get actors(): StudioActorData[] {
        return Game.moduleModel.studio.current.actors;
    }
    dataList:LabelConfig[];
    /** 展示艺人槽属性 */
    public scrollMatchingDispaly(index: number, ani:boolean = true) {
        this.updateTagsAtIndex(index);
        this.m_displayList.scrollToViewAtIndex(index,ani);
    }

    public playItemAnimation(index: number, duration:number, delay: number) {
        Laya.timer.once(delay, this, this.playAnimation, [index,duration,delay], false);
    }

    playAnimation(index: number, duration:number, delay: number) {
        this.updateTagsAtIndex(index);
        this.m_displayList.playItemAnimation(index,duration,delay);
    }

    public stopItemAnimations() {
        Laya.timer.clearAll(this);
        this.updateTagsAtIndex(this.actors.length-1);
        this.m_displayList.stopItemAnimations();
    }
    
    onWindowShow() {
        
    }

    onWindowHide(): void {
        this.clear();
    }

    updateTagsAtIndex(index: number) {
        console.log("index = ", index);
        
        this.dataList = this.actors[index].matchedTagCongfigs;
        this.m_list.numItems = this.dataList.length;
    }

    RendererItem(index: number, item: ActorLbTagItem) {
        let lbConfig = this.dataList[index];
        item.updateView(lbConfig);
    }
    ItemProvider(index: number) {
        let name = this.dataList[index].name;
        if(name.length >=4) {
            return ActorLbTagItem2.URL;
        }
        return ActorLbTagItem.URL;
    }

    clear() {
        this.m_displayList.clear();
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }
    // playAnimation()
    // {
    //     for(let i = 0; i < )
    //     {
    //         a.playItem(i, duration delay);
    //         b.playItem(i, duration, delay + duration);
    //     }
    // }
}