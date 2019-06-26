/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import ActivitiesConfigReader from "./ReaderExtends/ActivitiesConfigReader";
import ActorConfigReader from "./ReaderExtends/ActorConfigReader";
import ActorActionConfigReader from "./ReaderExtends/ActorActionConfigReader";
import ActorDialogueConfigReader from "./ReaderExtends/ActorDialogueConfigReader";
import ActorFriendshipConfigReader from "./ReaderExtends/ActorFriendshipConfigReader";
import ActorGiftConfigReader from "./ReaderExtends/ActorGiftConfigReader";
import ActorGiftCostConfigReader from "./ReaderExtends/ActorGiftCostConfigReader";
import ActorLabelSetConfigReader from "./ReaderExtends/ActorLabelSetConfigReader";
import ActorLevelCostConfigReader from "./ReaderExtends/ActorLevelCostConfigReader";
import ActorSkillConfigReader from "./ReaderExtends/ActorSkillConfigReader";
import ActorSkillLevelConfigReader from "./ReaderExtends/ActorSkillLevelConfigReader";
import ActorStarConfigReader from "./ReaderExtends/ActorStarConfigReader";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import BlockLevelConfigReader from "./ReaderExtends/BlockLevelConfigReader";
import BuildingConfigReader from "./ReaderExtends/BuildingConfigReader";
import BuildingActorCellConfigReader from "./ReaderExtends/BuildingActorCellConfigReader";
import BuildingBrePicConfigReader from "./ReaderExtends/BuildingBrePicConfigReader";
import BuildingComponentConfigReader from "./ReaderExtends/BuildingComponentConfigReader";
import BuildingLevelConfigReader from "./ReaderExtends/BuildingLevelConfigReader";
import BuildingRegionConfigReader from "./ReaderExtends/BuildingRegionConfigReader";
import ChapterConfigReader from "./ReaderExtends/ChapterConfigReader";
import CompoundConfigReader from "./ReaderExtends/CompoundConfigReader";
import CountActivitiesConfigReader from "./ReaderExtends/CountActivitiesConfigReader";
import DailytaskConfigReader from "./ReaderExtends/DailytaskConfigReader";
import DailytaskrewardConfigReader from "./ReaderExtends/DailytaskrewardConfigReader";
import EffectConfigReader from "./ReaderExtends/EffectConfigReader";
import FurnitureConfigReader from "./ReaderExtends/FurnitureConfigReader";
import GameRandomNameConfigReader from "./ReaderExtends/GameRandomNameConfigReader";
import GashaponConfigReader from "./ReaderExtends/GashaponConfigReader";
import GlobalConfigReader from "./ReaderExtends/GlobalConfigReader";
import GuideConfigReader from "./ReaderExtends/GuideConfigReader";
import HeadPortraitConfigReader from "./ReaderExtends/HeadPortraitConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import ItemTypeConfigReader from "./ReaderExtends/ItemTypeConfigReader";
import LabelConfigReader from "./ReaderExtends/LabelConfigReader";
import LabelLevelConfigReader from "./ReaderExtends/LabelLevelConfigReader";
import LabelTypeConfigReader from "./ReaderExtends/LabelTypeConfigReader";
import LoaderConfigReader from "./ReaderExtends/LoaderConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MainplotConfigReader from "./ReaderExtends/MainplotConfigReader";
import MaintaskConfigReader from "./ReaderExtends/MaintaskConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MenuIndexConfigReader from "./ReaderExtends/MenuIndexConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";
import NormalDistributionConfigReader from "./ReaderExtends/NormalDistributionConfigReader";
import PerformanceConfigReader from "./ReaderExtends/PerformanceConfigReader";
import PerformanceTypeConfigReader from "./ReaderExtends/PerformanceTypeConfigReader";
import PlayerLevelConfigReader from "./ReaderExtends/PlayerLevelConfigReader";
import PlotConfigReader from "./ReaderExtends/PlotConfigReader";
import PropertyConfigReader from "./ReaderExtends/PropertyConfigReader";
import RewardConfigReader from "./ReaderExtends/RewardConfigReader";
import SkillEffectConfigReader from "./ReaderExtends/SkillEffectConfigReader";
import StoryConfigReader from "./ReaderExtends/StoryConfigReader";
import StoryCharactersConfigReader from "./ReaderExtends/StoryCharactersConfigReader";
import StoryEventConfigReader from "./ReaderExtends/StoryEventConfigReader";
import StoryPositionConfigReader from "./ReaderExtends/StoryPositionConfigReader";
import StorySeriesConfigReader from "./ReaderExtends/StorySeriesConfigReader";
import StoryStackSortConfigReader from "./ReaderExtends/StoryStackSortConfigReader";
import StoryStarConfigReader from "./ReaderExtends/StoryStarConfigReader";
import StudioAudienceEvaluationConfigReader from "./ReaderExtends/StudioAudienceEvaluationConfigReader";
import StudioEvaluationConfigReader from "./ReaderExtends/StudioEvaluationConfigReader";
import StudioEventEvaluationConfigReader from "./ReaderExtends/StudioEventEvaluationConfigReader";
import StudioLevelConfigReader from "./ReaderExtends/StudioLevelConfigReader";
import SystemUnlockConfigReader from "./ReaderExtends/SystemUnlockConfigReader";
import UnlockConfigReader from "./ReaderExtends/UnlockConfigReader";

/// 配置读取器列表
export default class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    activities  : ActivitiesConfigReader = new ActivitiesConfigReader();
    actor  : ActorConfigReader = new ActorConfigReader();
    actorAction  : ActorActionConfigReader = new ActorActionConfigReader();
    actorDialogue  : ActorDialogueConfigReader = new ActorDialogueConfigReader();
    actorFriendship  : ActorFriendshipConfigReader = new ActorFriendshipConfigReader();
    actorGift  : ActorGiftConfigReader = new ActorGiftConfigReader();
    actorGiftCost  : ActorGiftCostConfigReader = new ActorGiftCostConfigReader();
    actorLabelSet  : ActorLabelSetConfigReader = new ActorLabelSetConfigReader();
    actorLevelCost  : ActorLevelCostConfigReader = new ActorLevelCostConfigReader();
    actorSkill  : ActorSkillConfigReader = new ActorSkillConfigReader();
    actorSkillLevel  : ActorSkillLevelConfigReader = new ActorSkillLevelConfigReader();
    actorStar  : ActorStarConfigReader = new ActorStarConfigReader();
    avatar  : AvatarConfigReader = new AvatarConfigReader();
    blockLevel  : BlockLevelConfigReader = new BlockLevelConfigReader();
    building  : BuildingConfigReader = new BuildingConfigReader();
    buildingActorCell  : BuildingActorCellConfigReader = new BuildingActorCellConfigReader();
    buildingBrePic  : BuildingBrePicConfigReader = new BuildingBrePicConfigReader();
    buildingComponent  : BuildingComponentConfigReader = new BuildingComponentConfigReader();
    buildingLevel  : BuildingLevelConfigReader = new BuildingLevelConfigReader();
    buildingRegion  : BuildingRegionConfigReader = new BuildingRegionConfigReader();
    chapter  : ChapterConfigReader = new ChapterConfigReader();
    compound  : CompoundConfigReader = new CompoundConfigReader();
    countActivities  : CountActivitiesConfigReader = new CountActivitiesConfigReader();
    dailytask  : DailytaskConfigReader = new DailytaskConfigReader();
    dailytaskreward  : DailytaskrewardConfigReader = new DailytaskrewardConfigReader();
    effect  : EffectConfigReader = new EffectConfigReader();
    furniture  : FurnitureConfigReader = new FurnitureConfigReader();
    gameRandomName  : GameRandomNameConfigReader = new GameRandomNameConfigReader();
    gashapon  : GashaponConfigReader = new GashaponConfigReader();
    global  : GlobalConfigReader = new GlobalConfigReader();
    guide  : GuideConfigReader = new GuideConfigReader();
    headPortrait  : HeadPortraitConfigReader = new HeadPortraitConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    itemType  : ItemTypeConfigReader = new ItemTypeConfigReader();
    label  : LabelConfigReader = new LabelConfigReader();
    labelLevel  : LabelLevelConfigReader = new LabelLevelConfigReader();
    labelType  : LabelTypeConfigReader = new LabelTypeConfigReader();
    loader  : LoaderConfigReader = new LoaderConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    mainplot  : MainplotConfigReader = new MainplotConfigReader();
    maintask  : MaintaskConfigReader = new MaintaskConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    menuIndex  : MenuIndexConfigReader = new MenuIndexConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();
    normalDistribution  : NormalDistributionConfigReader = new NormalDistributionConfigReader();
    performance  : PerformanceConfigReader = new PerformanceConfigReader();
    performanceType  : PerformanceTypeConfigReader = new PerformanceTypeConfigReader();
    playerLevel  : PlayerLevelConfigReader = new PlayerLevelConfigReader();
    plot  : PlotConfigReader = new PlotConfigReader();
    property  : PropertyConfigReader = new PropertyConfigReader();
    reward  : RewardConfigReader = new RewardConfigReader();
    skillEffect  : SkillEffectConfigReader = new SkillEffectConfigReader();
    story  : StoryConfigReader = new StoryConfigReader();
    storyCharacters  : StoryCharactersConfigReader = new StoryCharactersConfigReader();
    storyEvent  : StoryEventConfigReader = new StoryEventConfigReader();
    storyPosition  : StoryPositionConfigReader = new StoryPositionConfigReader();
    storySeries  : StorySeriesConfigReader = new StorySeriesConfigReader();
    storyStackSort  : StoryStackSortConfigReader = new StoryStackSortConfigReader();
    storyStar  : StoryStarConfigReader = new StoryStarConfigReader();
    studioAudienceEvaluation  : StudioAudienceEvaluationConfigReader = new StudioAudienceEvaluationConfigReader();
    studioEvaluation  : StudioEvaluationConfigReader = new StudioEvaluationConfigReader();
    studioEventEvaluation  : StudioEventEvaluationConfigReader = new StudioEventEvaluationConfigReader();
    studioLevel  : StudioLevelConfigReader = new StudioLevelConfigReader();
    systemUnlock  : SystemUnlockConfigReader = new SystemUnlockConfigReader();
    unlock  : UnlockConfigReader = new UnlockConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.activities);
        this.renders.push(this.actor);
        this.renders.push(this.actorAction);
        this.renders.push(this.actorDialogue);
        this.renders.push(this.actorFriendship);
        this.renders.push(this.actorGift);
        this.renders.push(this.actorGiftCost);
        this.renders.push(this.actorLabelSet);
        this.renders.push(this.actorLevelCost);
        this.renders.push(this.actorSkill);
        this.renders.push(this.actorSkillLevel);
        this.renders.push(this.actorStar);
        this.renders.push(this.avatar);
        this.renders.push(this.blockLevel);
        this.renders.push(this.building);
        this.renders.push(this.buildingActorCell);
        this.renders.push(this.buildingBrePic);
        this.renders.push(this.buildingComponent);
        this.renders.push(this.buildingLevel);
        this.renders.push(this.buildingRegion);
        this.renders.push(this.chapter);
        this.renders.push(this.compound);
        this.renders.push(this.countActivities);
        this.renders.push(this.dailytask);
        this.renders.push(this.dailytaskreward);
        this.renders.push(this.effect);
        this.renders.push(this.furniture);
        this.renders.push(this.gameRandomName);
        this.renders.push(this.gashapon);
        this.renders.push(this.global);
        this.renders.push(this.guide);
        this.renders.push(this.headPortrait);
        this.renders.push(this.item);
        this.renders.push(this.itemType);
        this.renders.push(this.label);
        this.renders.push(this.labelLevel);
        this.renders.push(this.labelType);
        this.renders.push(this.loader);
        this.renders.push(this.mail);
        this.renders.push(this.mainplot);
        this.renders.push(this.maintask);
        this.renders.push(this.menu);
        this.renders.push(this.menuIndex);
        this.renders.push(this.msg);
        this.renders.push(this.normalDistribution);
        this.renders.push(this.performance);
        this.renders.push(this.performanceType);
        this.renders.push(this.playerLevel);
        this.renders.push(this.plot);
        this.renders.push(this.property);
        this.renders.push(this.reward);
        this.renders.push(this.skillEffect);
        this.renders.push(this.story);
        this.renders.push(this.storyCharacters);
        this.renders.push(this.storyEvent);
        this.renders.push(this.storyPosition);
        this.renders.push(this.storySeries);
        this.renders.push(this.storyStackSort);
        this.renders.push(this.storyStar);
        this.renders.push(this.studioAudienceEvaluation);
        this.renders.push(this.studioEvaluation);
        this.renders.push(this.studioEventEvaluation);
        this.renders.push(this.studioLevel);
        this.renders.push(this.systemUnlock);
        this.renders.push(this.unlock);
    }
    
}