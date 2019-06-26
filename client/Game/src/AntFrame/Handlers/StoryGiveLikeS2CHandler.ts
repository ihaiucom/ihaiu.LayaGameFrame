import Game from "../../Game";
import StoryGiveLikeS2C = proto.StoryGiveLikeS2C;

var StoryGiveLikeS2CHandler = function(msg: StoryGiveLikeS2C)
{
    if (msg.error)
       return;
    
       Game.moduleModel.story.changeStorySeriesComment(msg.storyComment, msg.storyId);
}

export {StoryGiveLikeS2CHandler}
