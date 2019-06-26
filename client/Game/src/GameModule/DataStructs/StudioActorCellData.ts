import StoryCharactersConfig from "../../Config/ConfigExtends/StoryCharactersConfig";
import Game from '../../Game';
import PropertyConfig from "../../Config/ConfigExtends/PropertyConfig";
import ActorData from "./ActorData";
import { PropType } from "../../GameFrame/Props/PropType";
import PropId from "../../GameFrame/Props/PropId";
import TEXT from '../../Config/Keys/TEXT';
import LabelValue from '../../GameFrame/PropLabels/LabelValue';
import ActorId from '../DataEnums/ActorId';
import LabelField from '../../GameFrame/PropLabels/LabelField';
import LabelType from '../../GameFrame/PropLabels/LabelType';

/** 拍摄--艺人槽数据 */
export default class StudioActorCellData {
    /** 艺人槽位ID */
    storyCharactersId: int;
    /** 玩家ID, 0为自己玩家，其他的为 助阵玩家 */
    roleId: int = 0;
    /** 艺人ID */
    actorId: int = 0;
    /** 消耗行动力 */
    cost: int = 0;
    /** 改变上阵消耗 */
    costChange: int = 0;


    /** 艺人巢配置 */
    get storyCharacterConfig(): StoryCharactersConfig {
        return Game.config.storyCharacters.getConfig(this.storyCharactersId);
    }

    /** 艺人槽 显示2个主属性标签 */
    get mainPropConfigs(): PropertyConfig[] {
        return this.storyCharacterConfig.mainPropConfigs;
    }

    get mainPropTip(): string {
        let propNames = [];
        this.mainPropConfigs.forEach(conf => {
            propNames.push(conf.name)
        })
        return TEXT.StudioSABannerTip.format(propNames[0], propNames[1])
    }

    getTempActor() {
        let sex = this.storyCharacterConfig.label_sex;
        return Game.moduleModel.actor.getTempActor(sex);
    }

    get headIcon() {
        this.actorData
        let url = this.getTempActor().headIcon;
        if (this.actorId && this.actorId != ActorId.Temp_Man && this.actorId != ActorId.Temp_Woman) {
            let actor = Game.moduleModel.actor.getActor(this.actorId);
            if (!actor)
                throw 'actor not exist! actorId = ' + this.actorId;
            url = actor.headIcon;
        }
        return url;
    }
    get name() {
        let name = this.getTempActor().name;
        if (this.actorId && this.actorId != ActorId.Temp_Man && this.actorId != ActorId.Temp_Woman) {
            let actor = Game.moduleModel.actor.getActor(this.actorId);
            if (!actor)
                throw 'actor not exist! actorId = ' + this.actorId;
            name = actor.name;
        }
        return name;
    }

    get diamondIcon() {
        let url = "";// this.getTempActor().diamondHeadIcon;
        if (this.actorId && this.actorId != ActorId.Temp_Man && this.actorId != ActorId.Temp_Woman) {
            let actor = Game.moduleModel.actor.getActor(this.actorId);
            if (!actor)
                throw "actor " + this.actorId + "not exist";
            url = actor.diamondHeadIcon;
        }
        return url;
    }

    get matchSex(): number {
        let matchingLabels = this.storyCharacterConfig.matchingLabels;
        if(matchingLabels.list.length > 0 && matchingLabels.list[0].type == LabelType.sex)
        {
            return matchingLabels.list[0].val;
        }
        return null;
    }

    get matchingTags(): string[] {
        let labelList = []
        let matchingLabels = this.storyCharacterConfig.matchingLabels;
        matchingLabels.list.forEach((label => {
            if(label.type != LabelType.sex) {
                labelList.push(label.name);
            }
        }));

        return labelList;
    }

    public isActorSelected(actorId: number): boolean {
        if (actorId == this.actorId)
            return true;
        if (actorId == ActorId.Temp_Man || actorId == ActorId.Temp_Woman) {
            return false;
        }
        let actorIDs = [];
        let actorCells = Game.moduleModel.studio.current.actorCells;
        actorCells.forEach(cell => {
            if (cell.actorId > 0)
                actorIDs.push(cell.actorId);
        })
        return actorIDs.indexOf(actorId) != -1;
    }

    public isCurrentActor(actorId: number):boolean
    {
        let isCurrent = false;
        if(this.isActorSelected(actorId) && actorId == this.actorId)
        {
            isCurrent = true;
        }
        return isCurrent;
    }

    /**
     * 
     * 获取匹配的艺人
     * @param min 艺人槽位个数
     */
    getMatchedActors() {
        let list: ActorData[] = [];
        let props = [];
        this.mainPropConfigs.forEach(config => {
            props.push(config.id);
        })
        if (!props || props.length != 2) {
            console.error("获取匹配的艺人需要传入两个属性", props);
            return list;
        }
        let actorList: ActorData[] = Game.moduleModel.actor.actorList;
        for (let actorData of actorList) {
            if (this.storyCharacterConfig.matchingLabels.isMatching(actorData.config.labelList)) {
                list.push(actorData);
            }
        }

        // 没有匹配的艺人， 上阵临时艺人
        if (list.length > 0) {  // 艺人排序
            list.sort((a: ActorData, b: ActorData) => {
                return b.prop.getVal(props[0]) + b.prop.getVal(props[1]) - (a.prop.getVal(props[0]) + a.prop.getVal(props[1]));
            });
        }
        let tmpList = [];
        let actorCells = Game.moduleModel.studio.current.actorCells;
        for (let cell of actorCells) {
            if (!(!cell.actorId || cell.actorId == ActorId.Temp_Man || cell.actorId == ActorId.Temp_Woman)) {
                tmpList.push(cell.actorId);
            }
        }
        let matchedList = list.slice();
        for (let i = 0, n = matchedList.length; i < n; i++) {
            let actor = matchedList[i];
            if (this.actorId == actor.id)
                continue;
            if (tmpList.indexOf(actor.id) != -1) {
                matchedList.splice(i, 1);
                i--;
                n--;
            }
        }

        if (matchedList.length <= 0) {
            if (!this.actorData && this.storyCharacterConfig.label_sex == 0) {
                list.push(Game.moduleModel.actor.getTempActor(LabelValue.sex_man));
                list.push(Game.moduleModel.actor.getTempActor(LabelValue.sex_lady));
            } else {
                list.push(Game.moduleModel.actor.getTempActor(this.storyCharacterConfig.label_sex));
            }
        }

        return list;
    }
    getMatchingActors(sortPropId: int = 0) {
        let list: ActorData[] = [];
        let actorList: ActorData[] = Game.moduleModel.actor.actorList;
        for (let actorData of actorList) {
            if (this.storyCharacterConfig.matchingLabels.isMatching(actorData.config.labelList)) {
                list.push(actorData);
            }
        }
        if (!this.actorData || this.storyCharacterConfig.label_sex == 0) {
            list.push(Game.moduleModel.actor.getTempActor(LabelValue.sex_man));
            list.push(Game.moduleModel.actor.getTempActor(LabelValue.sex_lady));
        } else {
            list.push(Game.moduleModel.actor.getTempActor(this.storyCharacterConfig.label_sex));
        }
        // 没有匹配的艺人， 上阵临时艺人
        if (list.length > 0) {
            // 艺人排序
            list.sort((a: ActorData, b: ActorData) => {
                if (sortPropId <= 0)
                    return b.level - a.level;
                else
                    return b.prop.getVal(sortPropId) - a.prop.getVal(sortPropId);
            });
        }

        return list;
    }

    // 获取艺人数据
    get actorData(): ActorData {
        if (this.actorId <= 0)
            return null;

        return Game.moduleModel.actor.getActor(this.actorId);
    }




}