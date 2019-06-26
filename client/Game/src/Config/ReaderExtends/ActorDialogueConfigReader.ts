/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import ActorDialogueConfigReaderStruct from "../ReaderStructs/ActorDialogueConfigReaderStruct";
import UnOrderMultiMap from "../../Libs/Helpers/UnOrderMultiMap";
import ActorDialogueConfig from "../ConfigExtends/ActorDialogueConfig";
import DoubleKeyList from "../../Libs/Helpers/DoubleKeyList";
import Random from "../../Libs/Helpers/Random";

export default class ActorDialogueConfigReader extends ActorDialogueConfigReaderStruct
{
    typeDict = new UnOrderMultiMap<int, ActorDialogueConfig>();
    actorTypeDict =  new DoubleKeyList<int, int, ActorDialogueConfig>();
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        for (let config of list)
        {
            this.typeDict.addItem(config.type, config);
            this.actorTypeDict.addItem(config.actorId, config.type, config);
        }
    }


    getTypeConfigs(type:int): ActorDialogueConfig[]
    {
        return this.typeDict.get(type);
    }
    
    getActorTypeConfigs(actorId:int, type:int): ActorDialogueConfig[]
    {
        return this.actorTypeDict.getItemList(actorId, type);
    }

    /** 随机某个类型组的 */
    randomType(type:int)
    {
        let list = this.getTypeConfigs(type);
        if(list && list.length > 0)
        {
            return list[Random.range(0, list.length)];
        }
        return null;
    }

    /** 随机通用的 */
    randomNormal(): ActorDialogueConfig
    {
        return this.randomType(1);
    }

    /** 随机艺人的某个组里的 */
    randomActorType(actorId:int, type:int)
    {
        let list = this.getActorTypeConfigs(actorId, type);
        if(list && list.length > 0)
        {
            return list[Random.range(0, list.length)];
        }
        return null;
    }

}