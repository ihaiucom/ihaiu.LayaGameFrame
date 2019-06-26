import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import Game from "../../../Game";
import { TalkType } from "../ExtEnums/TalkType";
import ActorDialogueConfig from "../../../Config/ConfigExtends/ActorDialogueConfig";
import UnitData from "../Components/UnitData";

/** 气泡说话 */
export default class BubbleTalkCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.BubbleTalk;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Talk;


    text: string;
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity, talkType = TalkType.None, talkVal?:any, duration?:number)
    {
        (duration===void 0)&& (duration=-1);
        if(duration <= 0) duration = Random.range(3000, 10000);

        let text: string;
        let config: ActorDialogueConfig;
        switch(talkType)
        {
            case TalkType.None:
                config = Game.config.actorDialogue.randomNormal();
                break;
            case TalkType.GroupId:
                config = Game.config.actorDialogue.randomType(talkVal);
                break;
            case TalkType.ActorDialogueId:
                if(talkVal)
                {
                    let unit = entity.getComponent(UnitData);
                    config = Game.config.actorDialogue.randomActorType(unit.unitId, talkVal);
                }
                else
                {
                    config = Game.config.actorDialogue.getConfig(talkVal);
                }
                break;
            case TalkType.Text:
                text = talkVal;
                break;
        }

        if(config)
        {
            text = config.describe;
        }

        if(!text)
        {
            text = `没有找到说话内容: talkType=${talkType}, talkVal=${talkVal}`;
        }


        this.completeType = UnitCmdCompleteType.Time;
        this.completeDuration = duration;
        this.text = text;
        
    }
}