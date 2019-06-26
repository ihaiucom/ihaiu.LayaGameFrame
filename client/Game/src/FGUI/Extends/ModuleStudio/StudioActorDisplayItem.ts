/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorDisplayItemStruct from "../../Generates/ModuleStudio/StudioActorDisplayItemStruct";
import { UIVirtualListItem } from '../../../Libs/Helpers/UIVirtualList';
import TypedSignal from "../../../Libs/signals/TypedSignal";
import StudioActorData from "../../../GameModule/DataStructs/StudioActorData";
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import Label from '../../../GameFrame/PropLabels/Label';
import ActorPropertyItem1 from '../CommonGame/ActorPropertyItem1';
import PropHelper from '../../../GameFrame/Props/PropHelper';

export default class StudioActorDisplayItem extends StudioActorDisplayItemStruct
{
    propList: number[] = [];
    
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_propList.itemRenderer = Laya.Handler.create(this, this.ItemRenderer, null, false);
    }

    ItemRenderer(index: number, item: ActorPropertyItem1) {
        let data:number = this.propList[index];
        item.updateView(data);
    }

    fromY: number=0;
    toY: number=0;
    tweenTo(fromY: number, toY: number, duration: number = 200, delay: number = 0)
    {
        Laya.Tween.clearTween(this);
        this.fromY = fromY;
        this.toY = toY;
        this.y = fromY;
        Laya.Tween.to(this, {y: toY}, duration, Laya.Ease.expoOut, null, delay);
    }

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearTween(this);
    }


    public stop() 
    {
        this.clear();
        this.y = this.toY;
    }


    updateView(actor: StudioActorData) {
        this.m_name.text = actor.name;
        let propList = actor.matchingProps;
        this.propList.length = 0;
        for(let index = 0; index < propList.length; index++) {
            let val = propList[index].val;
            this.propList.push(val);
        }
        this.m_propList.numItems = this.propList.length;
        this.m_actor.touchable = false;
        this.m_actor.updateView(actor.actorData);
    }

    
    /** 丢回对象池 */
    public poolRecover()
    {
        this.clear();
        this.removeFromParent();
        Laya.Pool.recover(StudioActorDisplayItem.URL, this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): StudioActorDisplayItem
    {
        let item = <StudioActorDisplayItem>Laya.Pool.getItem(StudioActorDisplayItem.URL);
        if(!item) {
            item = StudioActorDisplayItem.createInstance();
        }
        return item;
    }

}