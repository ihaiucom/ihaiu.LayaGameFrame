/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCommentListStruct from "../../Generates/ModuleStudio/StudioCommentListStruct";
import StudioCommentItem from "./StudioCommentItem";
import StudioResultData from "../../../GameModule/DataStructs/StudioResultData";
import Game from "../../../Game";

export default class StudioCommentList extends StudioCommentListStruct
{
    items: StudioCommentItem[] = [];

    async updateView(event: StudioResultData) {
        this.enabled = false;
        let configs = event.audienceEvaluationConfigs;
        this.clear();
        let duration = 1000;
        this.scrollPane.scrollTop(false);
        for (let index = 0; index < configs.length; index++) {
            let item = StudioCommentItem.poolGet();
            item.updateView(configs[index])
            this.addItem(item);
            this.items.push(item);
            this.playItemAnimation(index, duration, duration*index);
        }
    }

    addItem(item: StudioCommentItem) {
        this.m_content.addChild(item);
        item.width = this.m_content.width;
        this.m_content.height += item.height;
    }

    clear() {
        Laya.timer.clearAll(this);
        while(this.m_content.numChildren > 0)
        {
            let item = this.m_content.getChildAt(0);
            if(item instanceof StudioCommentItem)
                item.poolRecover();
        }
        this.m_content.height = 0;
    }

    playItemAnimation(index: number, duration:number, delay: number) {
        let item = this.items[index];
        item.fromY= this.height + index * (item.height);
        item.toY = index * (item.height);
        item.alpha = 0;
        item.y = item.toY;
        Laya.timer.once(delay, this, this._playItem, [item, index], false);
    }

    private _playItem(item: StudioCommentItem, index: number)
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
        item.tweenAlpha(Game.constant.studio.CommentTweenAlpha);
    }
}