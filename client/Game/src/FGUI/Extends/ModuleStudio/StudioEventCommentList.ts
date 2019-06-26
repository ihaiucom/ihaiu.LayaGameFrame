/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioEventCommentListStruct from "../../Generates/ModuleStudio/StudioEventCommentListStruct";
import StudioEventCommentItem from "./StudioEventCommentItem";
import StudioEventData from "../../../GameModule/DataStructs/StudioEventData";
import Game from '../../../Game';

export default class StudioEventCommentList extends StudioEventCommentListStruct
{
    items: StudioEventCommentItem[] = [];

    private _selectedIndex : number = -1;
    public get selectedIndex() : number {
        return this._selectedIndex;
    }

    

    async updateView(event: StudioEventData) {
        let configs = event.eventEvaluationConfigList;
        this.clear();
        let duration = 1000;
        let skipDuration = 100;
        this.scrollPane.scrollTop(false);
        for (let index = 0; index < configs.length; index++) {
            let item = StudioEventCommentItem.poolGet();
            item.updateView(configs[index])
            this.addItem(item);
            this.items.push(item);
            this.playItemAnimation(index, duration, skipDuration + duration*index);
        }
    }

    stopAnimations() {
        
        this.clear();
    }

    addItem(item: StudioEventCommentItem) {
        this.m_content.addChild(item);
        item.width = this.m_content.width;
        this.m_content.height += item.height;
    }

    clear() {
        Laya.timer.clearAll(this);
        while(this.m_content.numChildren > 0)
        {
            let item = this.m_content.getChildAt(0);
            if(item instanceof StudioEventCommentItem)
                item.poolRecover();
        }
        this.m_content.height = 0;
        this._selectedIndex = -1;
    }

    playItemAnimation(index: number, duration:number, delay: number) {
        let item = this.items[index];
        item.fromY= this.height + index * (item.height);
        item.toY = index * (item.height);
        item.alpha = 0;
        item.y = item.toY;
        Laya.timer.once(delay, this, this._playItem, [item, index], false);
    }

    private _playItem(item: StudioEventCommentItem, index: number)
    {
        let that = this;
        this.m_content.height = (index+1) * item.height;
        // let g = this.m_content.displayObject.graphics;
        // g.clear();
        // g.drawRect(0, 0, this.m_content.width,  this.m_content.height, '#00FF0033', '#FF00FF', 2);

        if(this.m_content.height >= this.height)
        {
            this.scrollPane.scrollBottom(true);
        }
        // item.tweenTo(item.fromY, item.toY, 500, 0);
        item.tweenAlpha(Game.constant.studio.CommentTweenAlpha);
    }
}