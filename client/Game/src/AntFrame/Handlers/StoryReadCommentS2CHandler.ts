import Game from "../../Game";
import StoryReadCommentS2C = proto.StoryReadCommentS2C;

var StoryReadCommentS2CHandler = function(msg: StoryReadCommentS2C)
{
    if (msg.error)
       return;

    let comments: Array<any> = msg.storyCommentList;
    Game.moduleModel.story.setStorySeriesCommentList(msg.storyId, comments, true);
   
    let maxcomments: Array<any> = msg.maxLikeCommentList;
    Game.moduleModel.story.setMaxStorySeriesCommentList(msg.storyId, maxcomments);

}

export {StoryReadCommentS2CHandler}
