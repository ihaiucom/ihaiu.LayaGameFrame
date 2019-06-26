import ItemData from '../../GameModule/DataStructs/ItemData';
import Game from '../../Game';
import GamerNotifyStudioFirstRewardS2C = proto.GamerNotifyStudioFirstRewardS2C;
import ItemType = proto.ItemType;

var GamerNotifyStudioFirstRewardS2CHandler = function(msg: GamerNotifyStudioFirstRewardS2C)
{
    if(0 == msg.error)
    {
        let result = Game.moduleModel.studio.current.result;
        result.expReward = 0;
        for(let item of msg.firstReward)
        {
            if(item.type == ItemType.exp) {
                result.expReward += item.count;
            }else {
                let itemData = new ItemData();
                itemData.setProtoData(item);
                result.firstReward.push(itemData);
            }
        }
        Game.moduleModel.studioContinued.latestData.setProtoData(msg.continueEarning);
    }
}

export {GamerNotifyStudioFirstRewardS2CHandler}
