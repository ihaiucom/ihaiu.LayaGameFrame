import Game from "../../Game";
import StoryGetCommentS2C = proto.StoryGetCommentS2C;

var StoryGetCommentS2CHandler = function(msg: StoryGetCommentS2C)
{
    if (msg.error)
       return;

    let comments: Array<any> = msg.storyCommentList;
    Game.moduleModel.story.setStorySeriesCommentList(msg.storyId, comments, false);
}

export {StoryGetCommentS2CHandler}
