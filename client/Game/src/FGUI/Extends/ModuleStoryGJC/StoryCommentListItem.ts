/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryCommentListItemStruct from "../../Generates/ModuleStoryGJC/StoryCommentListItemStruct";
import Game from "../../../Game";

export default class StoryCommentListItem extends StoryCommentListItemStruct
{
    public dataSource:any;

    public storyId:number;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_btnLike.onClick(this, this.Like);
    }

    Like(): void {
        Game.sender.story.giveLike(this.dataSource.id, this.storyId);
    }

    public RenderItem(data: any)  {
        this.dataSource = data;

        // this.m_imgHead.url = "";
        this.m_labName.text = data.name;
        this.m_labNum.text  = String(data.likeCount);        
        this.m_labContent.text = data.content;
        this.m_isLike.selectedIndex = !data.isLike ? 0 : 1; 
    }
}