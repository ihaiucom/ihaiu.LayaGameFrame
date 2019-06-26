/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSSItemStruct from "../../Generates/ModuleStudio/StudioSSItemStruct";
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import { UIVirtualListItem } from '../../../Libs/Helpers/UIVirtualList';
import TypedSignal from '../../../Libs/signals/TypedSignal';
import Game from '../../../Game';

export default class StudioSSItem extends StudioSSItemStruct implements UIVirtualListItem
{
    storyData: StudioStoryData;
    sClick = new TypedSignal<StudioSSItem>();

    addOnClickEvent() {
        this.onClick(this,this.itemOnClick);
    }

    removeOnClickEvent() {
        this.offClick(this,this.itemOnClick);
    }
    
    setSelect(isSelected: boolean) 
    {
        this.selected = isSelected;
    }

    setSelectedState(state: number) {
        this.m_state.setSelectedIndex(state);
    }

    fromY: number=0;
    toY: number=0;
    tweenTo(fromY: number, toY: number, duration: number = 200, delay: number = 0, completion: Function=null)
    {
        this.m_story.m_stopAnimation.setSelectedIndex(0);
        this.showContent(false);
        let that = this;
        Laya.Tween.clearTween(this);
        this.fromY = fromY;
        this.toY = toY;
        this.y = fromY;
        
        let handler = Laya.Handler.create(null, completion, null,true);
        Laya.Tween.to(this, {y: toY}, duration, Laya.Ease.expoOut, handler, delay);
    }
    
    
    async updateView(data: StudioStoryData) {
        this.storyData = data;
        this.m_story.updateView(data);
        Laya.timer.once(Game.constant.studio.Story_StoryIcon_Duration, this, this.updateContent);
        

    }

    private updateContent()
    {
        let data = this.storyData;
        this.showContent(true);
        if(data) {
            this.m_storyType.updateView(data);
            this.m_title.text = data.storyNameAll;
            this.m_content.text = data.introduction;
            this.m_expect.setSelectedIndex(data.expectType);
            this.m_collectState.updateView(data);
        }
        let items = [this.m_storyType, this.m_title, this.m_content, this.m_expect, this.m_expect,this.m_collectState];
        items.forEach(item=>{
            Laya.Tween.to(item, {alpha: 1}, Game.constant.studio.Story_Content_Duration);
        })
    }

    showContent(isShow:boolean)
    {
        let items = [this.m_storyType, this.m_title, this.m_content, this.m_expectIcon,this.m_collectState];
        items.forEach(item=>{
            item.visible = isShow;
            if(isShow)
            {
                item.alpha = 0;
                Laya.Tween.to(item, {alpha: 1}, Game.constant.studio.Story_Content_Duration);
            }
        });
        if(isShow)
        {
            items.forEach(item=>{
            });
        }else {

        }
    }


    itemOnClick() 
    {
        this.sClick.dispatch(this);
    }

    clear() {
        this.setSelectedState(0);
        Laya.timer.clearAll(this);
        Laya.Tween.clearTween(this);
    }

     /** 丢回对象池 */
     public poolRecover()
     {
         this.clear();
         this.removeFromParent();
         Laya.Pool.recover(StudioSSItem.URL, this);
     }
 
     /** 从对象池里获取对象 */
     public static poolGet(): StudioSSItem
     {
         let item = <StudioSSItem>Laya.Pool.getItem(StudioSSItem.URL);
         if(!item) {
             item = StudioSSItem.createInstance();
         }
         return item;
     }
}