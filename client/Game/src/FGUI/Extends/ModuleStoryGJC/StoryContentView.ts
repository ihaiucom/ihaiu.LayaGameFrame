/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryContentViewStruct from "../../Generates/ModuleStoryGJC/StoryContentViewStruct";
import StoryData from "../../../GameModule/DataStructs/StoryData";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import StoryCommentListItem from "./StoryCommentListItem";
import StoryContentListItem from "./StoryContentListItem";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";

export default class StoryContentView extends StoryContentViewStruct
{
    private storySeriesData: StorySeriesData;

    private eventList: Array<any>;

    private storySeriesDataList: Array<StorySeriesData>;

    private commentDataList: Array<any>;    

    private maxCommentDataList: Array<any>;  
    
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.m_btnSend.onClick(this, this.commentSend);
        this.m_listContent.itemRenderer = Laya.Handler.create(this, this.renderContentListItem, null, false);
        this.m_listContent.on(fairygui.Events.SCROLL_END, this, this.clickContenttListItem);        

        this.m_listComment.itemRenderer = Laya.Handler.create(this, this.renderCommentListItem, null, false);
        this.m_listComment.on(fairygui.Events.PULL_UP_RELEASE, this, this.pullUpCommentListToRefresh);
        //虚拟列表
        this.m_listComment.setVirtual();
    }

    //发送留言
    commentSend(): void {
        if (this.m_labComment.text) {
            Game.sender.story.sendComment(this.storySeriesData.id, this.m_labComment.text);
        } else {
            
        }
        this.m_labComment.text = "";
    }

    //剧本List刷新回调
    renderContentListItem(index: number, item: StoryContentListItem): void  {
        item.RenderItem(this.storySeriesDataList[index]);
    }

    private _topComments: Array<number> = [];
    //评论List刷新回调
    renderCommentListItem(index: number, item: StoryCommentListItem): void  {
        item.RenderItem(this.commentDataList[index]);
        item.storyId = this.storySeriesData.id;
        if (index < this._topComments.length) {
            item.m_imgHot.visible = true;
        } else {
            item.m_imgHot.visible = false;
        }
        
    }

    private _processIndex:number = 0;
    //评论List点击回调
    clickContenttListItem(event: any): void  {
        var midX:number = this.m_listContent.scrollPane.posX + this.m_listContent.viewWidth / 2;
        var cnt:number  = this.m_listContent.numChildren;
        for (var i:number = 0; i < cnt; i++)
        {
            var obj: any = this.m_listContent.getChildAt(i);
            var dist:number = Math.abs(midX - obj.x - obj.width / 2);
            if (dist >= obj.width) {
                
                
            }
            else
            {
                this.m_labStoryNum.text = format(TEXT.StoryNumLable,i + 1, this.storySeriesDataList.length)
                if (cnt >= 7) {
                    if (i < 3 || i > cnt - 1 - 3) {
                        this.m_process.m_Index.selectedIndex=  i < 3 ? i : 3 + 3 - (cnt - 1 - i);               
                    } else {
                        this.m_process.m_Index.selectedIndex= 3;
                    }
                } else {
                    this.m_process.m_Index.selectedIndex = this.m_process.m_Index.selectedIndex + (i - this._processIndex);
                    this._processIndex = i;
                }
                
                this.storySeriesData = obj.dataSource;
                Game.sender.story.readCommentList(obj.dataSource.id);
            }
        }
    }

    //滑动更新
    pullUpCommentListToRefresh(): void {
        Game.sender.story.getCommentList(this.storySeriesData.id);
    }

    //刷新view
    updateView(data: StorySeriesData, dataList: Array<StorySeriesData>): void {
        this.storySeriesData= data;
        this.storySeriesDataList  = dataList;
        this.updateProcess();
        
        this.m_listContent.numItems = this.storySeriesDataList.length;
        this.m_listContent.scrollToView(data.index);
        this.m_labStoryNum.text = format(TEXT.StoryNumLable, data.index + 1, this.storySeriesDataList.length)
    }

    //刷新小点
    updateProcess(): void {
        let leng = this.storySeriesDataList.length;
        let index= this.storySeriesData.index;

        if (leng >= 7) {
            if (index < 3 || index > leng - 1 - 3) {
                index = index < 3 ? index : 3 + 3 - (leng - 1 - index);
            } else {
                index = 3;
            }
            leng = 7;
        } else {
            this._processIndex = index;
        }

        let origin = Math.min(index, leng - index - 1);         //是否为中间点
        let num  = Math.min(3, (leng - 1) - origin);                        
        this.m_process.m_Num.selectedIndex  = num;              //开启点数

        let next = leng - (num + 1) != index ? leng - (num + 1) : 0;
        let left = leng <= 4 ? index : Math.min(3, index + next);               //左边开启点 
        this.m_process.m_Left.selectedIndex = left;

        let right= leng <= 4 ? leng - index - 1 : Math.min(3, leng - left - 1); //右边开启点 
        this.m_process.m_Right.selectedIndex= right;

        let process = leng <= 4 ? 3 : (3 - left + index)
        this.m_process.m_Index.selectedIndex= process;
    }


    //刷新留言
    updateCommentList(): void {
        if(!this.storySeriesData) return;
        this.storySeriesData = Game.moduleModel.story.getStorySeriesData(this.storySeriesData.id);
        this.maxCommentDataList = this.storySeriesData.maxCommentList;
        this.commentDataList = this.maxCommentDataList.concat(this.storySeriesData.commentList);

        this._topComments = [];
        for (let i = 0; i < this.commentDataList.length; i++) {
            let len = this.maxCommentDataList.length ? this.maxCommentDataList.length : 3;
            if (i < len) {
                this._topComments.push(this.commentDataList[i].id);
            }
        }

        this.m_listComment.numItems = this.commentDataList.length;
        this.m_listComment.refreshVirtualList();

        if(Game.moduleModel.story.scrollToUP) {
            this.m_listComment.scrollToView(0);
        }
    }

    //窗口显示时将被调
    onWindowShow(): void  {
        Game.net.storyReadCommentS2C.on(this.updateCommentList, this);
        Game.net.storyCommentS2C.on(this.updateCommentList, this);
        Game.net.storyGetCommentS2C.on(this.updateCommentList, this);
        Game.net.storyGiveLikeS2C.on(this.updateCommentList, this);
    }

    //窗口关闭时将被调
    onWindowHide(): void  {
        Game.net.storyReadCommentS2C.off(this.updateCommentList, this);
        Game.net.storyCommentS2C.off(this.updateCommentList, this);
        Game.net.storyGetCommentS2C.off(this.updateCommentList, this);
        Game.net.storyGiveLikeS2C.off(this.updateCommentList, this);
    }


}