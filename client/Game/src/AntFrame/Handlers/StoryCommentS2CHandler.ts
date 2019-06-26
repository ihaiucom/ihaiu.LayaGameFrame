import Game from "../../Game";
import StoryCommentS2C = proto.StoryCommentS2C;

var StoryCommentS2CHandler = function(msg: StoryCommentS2C)
{
    if (msg.error)
       return;

    let comments: Array<any> = msg.storyCommentList;
    Game.moduleModel.story.setStorySeriesCommentList(msg.storyId, comments, true);
}

export {StoryCommentS2CHandler}
