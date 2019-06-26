import Game from '../../Game';
import GamerNotifyStoryListS2C = proto.GamerNotifyStoryListS2C;

var GamerNotifyStoryListS2CHandler = function(msg: GamerNotifyStoryListS2C)
{
    if (msg.error)
        return;

    let storys: Array<any> = msg.storyList;
    Game.moduleModel.story.setStorySeriesList(storys);
}

export {GamerNotifyStoryListS2CHandler}
