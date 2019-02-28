/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import ActionConfigReader from "./ReaderExtends/ActionConfigReader";
import ActivitiesConfigReader from "./ReaderExtends/ActivitiesConfigReader";
import ActorConfigReader from "./ReaderExtends/ActorConfigReader";
import ActorAideConfigReader from "./ReaderExtends/ActorAideConfigReader";
import ActorAideattachConfigReader from "./ReaderExtends/ActorAideattachConfigReader";
import ActorAideIntimacyConfigReader from "./ReaderExtends/ActorAideIntimacyConfigReader";
import ActorAideLvConfigReader from "./ReaderExtends/ActorAideLvConfigReader";
import ActorAssetsConfigReader from "./ReaderExtends/ActorAssetsConfigReader";
import ActorAssetsLvConfigReader from "./ReaderExtends/ActorAssetsLvConfigReader";
import ActorLevelConfigReader from "./ReaderExtends/ActorLevelConfigReader";
import ActorLoyaltyConfigReader from "./ReaderExtends/ActorLoyaltyConfigReader";
import ActorProficiencyConfigReader from "./ReaderExtends/ActorProficiencyConfigReader";
import ActorTrainConfigReader from "./ReaderExtends/ActorTrainConfigReader";
import ActorTrainLvConfigReader from "./ReaderExtends/ActorTrainLvConfigReader";
import AvatarConfigReader from "./ReaderExtends/AvatarConfigReader";
import BattleLevelConfigReader from "./ReaderExtends/BattleLevelConfigReader";
import BattleShootTypeConfigReader from "./ReaderExtends/BattleShootTypeConfigReader";
import BlockLevelConfigReader from "./ReaderExtends/BlockLevelConfigReader";
import BlockRankingListConfigReader from "./ReaderExtends/BlockRankingListConfigReader";
import BlockWordsConfigReader from "./ReaderExtends/BlockWordsConfigReader";
import BlockWordsIIConfigReader from "./ReaderExtends/BlockWordsIIConfigReader";
import BoxTargetConfigReader from "./ReaderExtends/BoxTargetConfigReader";
import BuildingEffectConfigReader from "./ReaderExtends/BuildingEffectConfigReader";
import BuildingLevelConfigReader from "./ReaderExtends/BuildingLevelConfigReader";
import BusinessConfigReader from "./ReaderExtends/BusinessConfigReader";
import CinemaConfigReader from "./ReaderExtends/CinemaConfigReader";
import CityConfigReader from "./ReaderExtends/CityConfigReader";
import CityPopularizeConfigReader from "./ReaderExtends/CityPopularizeConfigReader";
import CompleteConfigReader from "./ReaderExtends/CompleteConfigReader";
import CompoundConfigReader from "./ReaderExtends/CompoundConfigReader";
import CooperateTaskConfigReader from "./ReaderExtends/CooperateTaskConfigReader";
import CountActivitiesConfigReader from "./ReaderExtends/CountActivitiesConfigReader";
import CountryConfigReader from "./ReaderExtends/CountryConfigReader";
import CupPackageConfigReader from "./ReaderExtends/CupPackageConfigReader";
import DailySignConfigReader from "./ReaderExtends/DailySignConfigReader";
import DailySignTrailerConfigReader from "./ReaderExtends/DailySignTrailerConfigReader";
import DialogueConfigReader from "./ReaderExtends/DialogueConfigReader";
import EventConfigReader from "./ReaderExtends/EventConfigReader";
import FloorConfigReader from "./ReaderExtends/FloorConfigReader";
import GameLevelConfigReader from "./ReaderExtends/GameLevelConfigReader";
import GameRandomNameConfigReader from "./ReaderExtends/GameRandomNameConfigReader";
import GameVersionConfigReader from "./ReaderExtends/GameVersionConfigReader";
import GiftPackageConfigReader from "./ReaderExtends/GiftPackageConfigReader";
import GlobalConfigReader from "./ReaderExtends/GlobalConfigReader";
import GuidePathConfigReader from "./ReaderExtends/GuidePathConfigReader";
import GuidesystemConfigReader from "./ReaderExtends/GuidesystemConfigReader";
import HeadPortraitConfigReader from "./ReaderExtends/HeadPortraitConfigReader";
import ImageConfigReader from "./ReaderExtends/ImageConfigReader";
import InitialActorConfigReader from "./ReaderExtends/InitialActorConfigReader";
import ItemConfigReader from "./ReaderExtends/ItemConfigReader";
import LanguageTypeConfigReader from "./ReaderExtends/LanguageTypeConfigReader";
import LevelGiftPackageConfigReader from "./ReaderExtends/LevelGiftPackageConfigReader";
import LimitActorConfigReader from "./ReaderExtends/LimitActorConfigReader";
import LoaderConfigReader from "./ReaderExtends/LoaderConfigReader";
import LoadingConfigReader from "./ReaderExtends/LoadingConfigReader";
import MailConfigReader from "./ReaderExtends/MailConfigReader";
import MaintaskConfigReader from "./ReaderExtends/MaintaskConfigReader";
import MeetingGameConfigReader from "./ReaderExtends/MeetingGameConfigReader";
import MeetingRewardsConfigReader from "./ReaderExtends/MeetingRewardsConfigReader";
import MenuConfigReader from "./ReaderExtends/MenuConfigReader";
import MenuIndexConfigReader from "./ReaderExtends/MenuIndexConfigReader";
import MonthCardConfigReader from "./ReaderExtends/MonthCardConfigReader";
import MovieAdaptationMsgConfigReader from "./ReaderExtends/MovieAdaptationMsgConfigReader";
import MovieAudienceEvaluationConfigReader from "./ReaderExtends/MovieAudienceEvaluationConfigReader";
import MovieDropConfigReader from "./ReaderExtends/MovieDropConfigReader";
import MovieExpectConfigReader from "./ReaderExtends/MovieExpectConfigReader";
import MovieLicenceConfigReader from "./ReaderExtends/MovieLicenceConfigReader";
import MovieMediaVisitConfigReader from "./ReaderExtends/MovieMediaVisitConfigReader";
import MovieMidiaEvaluationConfigReader from "./ReaderExtends/MovieMidiaEvaluationConfigReader";
import MovieMidiaEvaluationMsgConfigReader from "./ReaderExtends/MovieMidiaEvaluationMsgConfigReader";
import MoviePopularizeConfigReader from "./ReaderExtends/MoviePopularizeConfigReader";
import MovieShootTypeConfigReader from "./ReaderExtends/MovieShootTypeConfigReader";
import MsgConfigReader from "./ReaderExtends/MsgConfigReader";
import MsgChatConfigReader from "./ReaderExtends/MsgChatConfigReader";
import MsgProtoErrorConfigReader from "./ReaderExtends/MsgProtoErrorConfigReader";
import NpcConfigReader from "./ReaderExtends/NpcConfigReader";
import OperationTasksConfigReader from "./ReaderExtends/OperationTasksConfigReader";
import OperationTasksScoreConfigReader from "./ReaderExtends/OperationTasksScoreConfigReader";
import OperationTasksTermsConfigReader from "./ReaderExtends/OperationTasksTermsConfigReader";
import OrderConfigReader from "./ReaderExtends/OrderConfigReader";
import OscarConfigReader from "./ReaderExtends/OscarConfigReader";
import PerformConfigReader from "./ReaderExtends/PerformConfigReader";
import PlayActConfigReader from "./ReaderExtends/PlayActConfigReader";
import PlayerDefaultConfigReader from "./ReaderExtends/PlayerDefaultConfigReader";
import PlayerLevelConfigReader from "./ReaderExtends/PlayerLevelConfigReader";
import PopUpConfigReader from "./ReaderExtends/PopUpConfigReader";
import PositionConfigReader from "./ReaderExtends/PositionConfigReader";
import ProduceConfigReader from "./ReaderExtends/ProduceConfigReader";
import ProduceLevelConfigReader from "./ReaderExtends/ProduceLevelConfigReader";
import ProduceLvConfigReader from "./ReaderExtends/ProduceLvConfigReader";
import ProduceSouvenirConfigReader from "./ReaderExtends/ProduceSouvenirConfigReader";
import PropertyConfigReader from "./ReaderExtends/PropertyConfigReader";
import RandomNameConfigReader from "./ReaderExtends/RandomNameConfigReader";
import RandomSurnameConfigReader from "./ReaderExtends/RandomSurnameConfigReader";
import RechargeConfigReader from "./ReaderExtends/RechargeConfigReader";
import RoadshowConfigReader from "./ReaderExtends/RoadshowConfigReader";
import SecretaryConfigReader from "./ReaderExtends/SecretaryConfigReader";
import SecretaryGiftConfigReader from "./ReaderExtends/SecretaryGiftConfigReader";
import SecretaryTypeConfigReader from "./ReaderExtends/SecretaryTypeConfigReader";
import ServerRankingListConfigReader from "./ReaderExtends/ServerRankingListConfigReader";
import SettingDefaultConfigReader from "./ReaderExtends/SettingDefaultConfigReader";
import ShopConfigReader from "./ReaderExtends/ShopConfigReader";
import SkillConfigReader from "./ReaderExtends/SkillConfigReader";
import SkillEffectConfigReader from "./ReaderExtends/SkillEffectConfigReader";
import SkillTriggerConfigReader from "./ReaderExtends/SkillTriggerConfigReader";
import SpeakConfigReader from "./ReaderExtends/SpeakConfigReader";
import StarConConfigReader from "./ReaderExtends/StarConConfigReader";
import StoryConfigReader from "./ReaderExtends/StoryConfigReader";
import StoryCharactersConfigReader from "./ReaderExtends/StoryCharactersConfigReader";
import StoryGoalsConfigReader from "./ReaderExtends/StoryGoalsConfigReader";
import StorylineConfigReader from "./ReaderExtends/StorylineConfigReader";
import StoryRateConfigReader from "./ReaderExtends/StoryRateConfigReader";
import StoryRefreshPriceConfigReader from "./ReaderExtends/StoryRefreshPriceConfigReader";
import StoryStackItemConfigReader from "./ReaderExtends/StoryStackItemConfigReader";
import StoryStackSortConfigReader from "./ReaderExtends/StoryStackSortConfigReader";
import StreetConfigReader from "./ReaderExtends/StreetConfigReader";
import SysTimeConfigReader from "./ReaderExtends/SysTimeConfigReader";
import TaskConfigReader from "./ReaderExtends/TaskConfigReader";
import TestConfigReader from "./ReaderExtends/TestConfigReader";
import TurntableCompleteConfigReader from "./ReaderExtends/TurntableCompleteConfigReader";
import TurntableRewardConfigReader from "./ReaderExtends/TurntableRewardConfigReader";
import TypeConfigReader from "./ReaderExtends/TypeConfigReader";
import UnlockConfigReader from "./ReaderExtends/UnlockConfigReader";
import VisitConfigReader from "./ReaderExtends/VisitConfigReader";
import WeeklyQuestConfigReader from "./ReaderExtends/WeeklyQuestConfigReader";
import WelfareConfigReader from "./ReaderExtends/WelfareConfigReader";
import WheelDropConfigReader from "./ReaderExtends/WheelDropConfigReader";
import WriterConfigReader from "./ReaderExtends/WriterConfigReader";
import WriterAbilityConfigReader from "./ReaderExtends/WriterAbilityConfigReader";
import WriterAdaptEffectConfigReader from "./ReaderExtends/WriterAdaptEffectConfigReader";
import WriterLevelConfigReader from "./ReaderExtends/WriterLevelConfigReader";
import WriterSkillConfigReader from "./ReaderExtends/WriterSkillConfigReader";
import WriterStationConfigReader from "./ReaderExtends/WriterStationConfigReader";

/// 配置读取器列表
export default class ConfigManagerList
{
    // 读取器列表
    renders: ConfigRenderInterface[] = [];


    action  : ActionConfigReader = new ActionConfigReader();
    activities  : ActivitiesConfigReader = new ActivitiesConfigReader();
    actor  : ActorConfigReader = new ActorConfigReader();
    actorAide  : ActorAideConfigReader = new ActorAideConfigReader();
    actorAideattach  : ActorAideattachConfigReader = new ActorAideattachConfigReader();
    actorAideIntimacy  : ActorAideIntimacyConfigReader = new ActorAideIntimacyConfigReader();
    actorAideLv  : ActorAideLvConfigReader = new ActorAideLvConfigReader();
    actorAssets  : ActorAssetsConfigReader = new ActorAssetsConfigReader();
    actorAssetsLv  : ActorAssetsLvConfigReader = new ActorAssetsLvConfigReader();
    actorLevel  : ActorLevelConfigReader = new ActorLevelConfigReader();
    actorLoyalty  : ActorLoyaltyConfigReader = new ActorLoyaltyConfigReader();
    actorProficiency  : ActorProficiencyConfigReader = new ActorProficiencyConfigReader();
    actorTrain  : ActorTrainConfigReader = new ActorTrainConfigReader();
    actorTrainLv  : ActorTrainLvConfigReader = new ActorTrainLvConfigReader();
    avatar  : AvatarConfigReader = new AvatarConfigReader();
    battleLevel  : BattleLevelConfigReader = new BattleLevelConfigReader();
    battleShootType  : BattleShootTypeConfigReader = new BattleShootTypeConfigReader();
    blockLevel  : BlockLevelConfigReader = new BlockLevelConfigReader();
    blockRankingList  : BlockRankingListConfigReader = new BlockRankingListConfigReader();
    blockWords  : BlockWordsConfigReader = new BlockWordsConfigReader();
    blockWordsII  : BlockWordsIIConfigReader = new BlockWordsIIConfigReader();
    boxTarget  : BoxTargetConfigReader = new BoxTargetConfigReader();
    buildingEffect  : BuildingEffectConfigReader = new BuildingEffectConfigReader();
    buildingLevel  : BuildingLevelConfigReader = new BuildingLevelConfigReader();
    business  : BusinessConfigReader = new BusinessConfigReader();
    cinema  : CinemaConfigReader = new CinemaConfigReader();
    city  : CityConfigReader = new CityConfigReader();
    cityPopularize  : CityPopularizeConfigReader = new CityPopularizeConfigReader();
    complete  : CompleteConfigReader = new CompleteConfigReader();
    compound  : CompoundConfigReader = new CompoundConfigReader();
    cooperateTask  : CooperateTaskConfigReader = new CooperateTaskConfigReader();
    countActivities  : CountActivitiesConfigReader = new CountActivitiesConfigReader();
    country  : CountryConfigReader = new CountryConfigReader();
    cupPackage  : CupPackageConfigReader = new CupPackageConfigReader();
    dailySign  : DailySignConfigReader = new DailySignConfigReader();
    dailySignTrailer  : DailySignTrailerConfigReader = new DailySignTrailerConfigReader();
    dialogue  : DialogueConfigReader = new DialogueConfigReader();
    event  : EventConfigReader = new EventConfigReader();
    floor  : FloorConfigReader = new FloorConfigReader();
    gameLevel  : GameLevelConfigReader = new GameLevelConfigReader();
    gameRandomName  : GameRandomNameConfigReader = new GameRandomNameConfigReader();
    gameVersion  : GameVersionConfigReader = new GameVersionConfigReader();
    giftPackage  : GiftPackageConfigReader = new GiftPackageConfigReader();
    global  : GlobalConfigReader = new GlobalConfigReader();
    guidePath  : GuidePathConfigReader = new GuidePathConfigReader();
    guidesystem  : GuidesystemConfigReader = new GuidesystemConfigReader();
    headPortrait  : HeadPortraitConfigReader = new HeadPortraitConfigReader();
    image  : ImageConfigReader = new ImageConfigReader();
    initialActor  : InitialActorConfigReader = new InitialActorConfigReader();
    item  : ItemConfigReader = new ItemConfigReader();
    languageType  : LanguageTypeConfigReader = new LanguageTypeConfigReader();
    levelGiftPackage  : LevelGiftPackageConfigReader = new LevelGiftPackageConfigReader();
    limitActor  : LimitActorConfigReader = new LimitActorConfigReader();
    loader  : LoaderConfigReader = new LoaderConfigReader();
    loading  : LoadingConfigReader = new LoadingConfigReader();
    mail  : MailConfigReader = new MailConfigReader();
    maintask  : MaintaskConfigReader = new MaintaskConfigReader();
    meetingGame  : MeetingGameConfigReader = new MeetingGameConfigReader();
    meetingRewards  : MeetingRewardsConfigReader = new MeetingRewardsConfigReader();
    menu  : MenuConfigReader = new MenuConfigReader();
    menuIndex  : MenuIndexConfigReader = new MenuIndexConfigReader();
    monthCard  : MonthCardConfigReader = new MonthCardConfigReader();
    movieAdaptationMsg  : MovieAdaptationMsgConfigReader = new MovieAdaptationMsgConfigReader();
    movieAudienceEvaluation  : MovieAudienceEvaluationConfigReader = new MovieAudienceEvaluationConfigReader();
    movieDrop  : MovieDropConfigReader = new MovieDropConfigReader();
    movieExpect  : MovieExpectConfigReader = new MovieExpectConfigReader();
    movieLicence  : MovieLicenceConfigReader = new MovieLicenceConfigReader();
    movieMediaVisit  : MovieMediaVisitConfigReader = new MovieMediaVisitConfigReader();
    movieMidiaEvaluation  : MovieMidiaEvaluationConfigReader = new MovieMidiaEvaluationConfigReader();
    movieMidiaEvaluationMsg  : MovieMidiaEvaluationMsgConfigReader = new MovieMidiaEvaluationMsgConfigReader();
    moviePopularize  : MoviePopularizeConfigReader = new MoviePopularizeConfigReader();
    movieShootType  : MovieShootTypeConfigReader = new MovieShootTypeConfigReader();
    msg  : MsgConfigReader = new MsgConfigReader();
    msgChat  : MsgChatConfigReader = new MsgChatConfigReader();
    msgProtoError  : MsgProtoErrorConfigReader = new MsgProtoErrorConfigReader();
    npc  : NpcConfigReader = new NpcConfigReader();
    operationTasks  : OperationTasksConfigReader = new OperationTasksConfigReader();
    operationTasksScore  : OperationTasksScoreConfigReader = new OperationTasksScoreConfigReader();
    operationTasksTerms  : OperationTasksTermsConfigReader = new OperationTasksTermsConfigReader();
    order  : OrderConfigReader = new OrderConfigReader();
    oscar  : OscarConfigReader = new OscarConfigReader();
    perform  : PerformConfigReader = new PerformConfigReader();
    playAct  : PlayActConfigReader = new PlayActConfigReader();
    playerDefault  : PlayerDefaultConfigReader = new PlayerDefaultConfigReader();
    playerLevel  : PlayerLevelConfigReader = new PlayerLevelConfigReader();
    popUp  : PopUpConfigReader = new PopUpConfigReader();
    position  : PositionConfigReader = new PositionConfigReader();
    produce  : ProduceConfigReader = new ProduceConfigReader();
    produceLevel  : ProduceLevelConfigReader = new ProduceLevelConfigReader();
    produceLv  : ProduceLvConfigReader = new ProduceLvConfigReader();
    produceSouvenir  : ProduceSouvenirConfigReader = new ProduceSouvenirConfigReader();
    property  : PropertyConfigReader = new PropertyConfigReader();
    randomName  : RandomNameConfigReader = new RandomNameConfigReader();
    randomSurname  : RandomSurnameConfigReader = new RandomSurnameConfigReader();
    recharge  : RechargeConfigReader = new RechargeConfigReader();
    roadshow  : RoadshowConfigReader = new RoadshowConfigReader();
    secretary  : SecretaryConfigReader = new SecretaryConfigReader();
    secretaryGift  : SecretaryGiftConfigReader = new SecretaryGiftConfigReader();
    secretaryType  : SecretaryTypeConfigReader = new SecretaryTypeConfigReader();
    serverRankingList  : ServerRankingListConfigReader = new ServerRankingListConfigReader();
    settingDefault  : SettingDefaultConfigReader = new SettingDefaultConfigReader();
    shop  : ShopConfigReader = new ShopConfigReader();
    skill  : SkillConfigReader = new SkillConfigReader();
    skillEffect  : SkillEffectConfigReader = new SkillEffectConfigReader();
    skillTrigger  : SkillTriggerConfigReader = new SkillTriggerConfigReader();
    speak  : SpeakConfigReader = new SpeakConfigReader();
    starCon  : StarConConfigReader = new StarConConfigReader();
    story  : StoryConfigReader = new StoryConfigReader();
    storyCharacters  : StoryCharactersConfigReader = new StoryCharactersConfigReader();
    storyGoals  : StoryGoalsConfigReader = new StoryGoalsConfigReader();
    storyline  : StorylineConfigReader = new StorylineConfigReader();
    storyRate  : StoryRateConfigReader = new StoryRateConfigReader();
    storyRefreshPrice  : StoryRefreshPriceConfigReader = new StoryRefreshPriceConfigReader();
    storyStackItem  : StoryStackItemConfigReader = new StoryStackItemConfigReader();
    storyStackSort  : StoryStackSortConfigReader = new StoryStackSortConfigReader();
    street  : StreetConfigReader = new StreetConfigReader();
    sysTime  : SysTimeConfigReader = new SysTimeConfigReader();
    task  : TaskConfigReader = new TaskConfigReader();
    test  : TestConfigReader = new TestConfigReader();
    turntableComplete  : TurntableCompleteConfigReader = new TurntableCompleteConfigReader();
    turntableReward  : TurntableRewardConfigReader = new TurntableRewardConfigReader();
    type  : TypeConfigReader = new TypeConfigReader();
    unlock  : UnlockConfigReader = new UnlockConfigReader();
    visit  : VisitConfigReader = new VisitConfigReader();
    weeklyQuest  : WeeklyQuestConfigReader = new WeeklyQuestConfigReader();
    welfare  : WelfareConfigReader = new WelfareConfigReader();
    wheelDrop  : WheelDropConfigReader = new WheelDropConfigReader();
    writer  : WriterConfigReader = new WriterConfigReader();
    writerAbility  : WriterAbilityConfigReader = new WriterAbilityConfigReader();
    writerAdaptEffect  : WriterAdaptEffectConfigReader = new WriterAdaptEffectConfigReader();
    writerLevel  : WriterLevelConfigReader = new WriterLevelConfigReader();
    writerSkill  : WriterSkillConfigReader = new WriterSkillConfigReader();
    writerStation  : WriterStationConfigReader = new WriterStationConfigReader();


    // 初始化读取器列表
    initList()
    {

        this.renders.push(this.action);
        this.renders.push(this.activities);
        this.renders.push(this.actor);
        this.renders.push(this.actorAide);
        this.renders.push(this.actorAideattach);
        this.renders.push(this.actorAideIntimacy);
        this.renders.push(this.actorAideLv);
        this.renders.push(this.actorAssets);
        this.renders.push(this.actorAssetsLv);
        this.renders.push(this.actorLevel);
        this.renders.push(this.actorLoyalty);
        this.renders.push(this.actorProficiency);
        this.renders.push(this.actorTrain);
        this.renders.push(this.actorTrainLv);
        this.renders.push(this.avatar);
        this.renders.push(this.battleLevel);
        this.renders.push(this.battleShootType);
        this.renders.push(this.blockLevel);
        this.renders.push(this.blockRankingList);
        this.renders.push(this.blockWords);
        this.renders.push(this.blockWordsII);
        this.renders.push(this.boxTarget);
        this.renders.push(this.buildingEffect);
        this.renders.push(this.buildingLevel);
        this.renders.push(this.business);
        this.renders.push(this.cinema);
        this.renders.push(this.city);
        this.renders.push(this.cityPopularize);
        this.renders.push(this.complete);
        this.renders.push(this.compound);
        this.renders.push(this.cooperateTask);
        this.renders.push(this.countActivities);
        this.renders.push(this.country);
        this.renders.push(this.cupPackage);
        this.renders.push(this.dailySign);
        this.renders.push(this.dailySignTrailer);
        this.renders.push(this.dialogue);
        this.renders.push(this.event);
        this.renders.push(this.floor);
        this.renders.push(this.gameLevel);
        this.renders.push(this.gameRandomName);
        this.renders.push(this.gameVersion);
        this.renders.push(this.giftPackage);
        this.renders.push(this.global);
        this.renders.push(this.guidePath);
        this.renders.push(this.guidesystem);
        this.renders.push(this.headPortrait);
        this.renders.push(this.image);
        this.renders.push(this.initialActor);
        this.renders.push(this.item);
        this.renders.push(this.languageType);
        this.renders.push(this.levelGiftPackage);
        this.renders.push(this.limitActor);
        this.renders.push(this.loader);
        this.renders.push(this.loading);
        this.renders.push(this.mail);
        this.renders.push(this.maintask);
        this.renders.push(this.meetingGame);
        this.renders.push(this.meetingRewards);
        this.renders.push(this.menu);
        this.renders.push(this.menuIndex);
        this.renders.push(this.monthCard);
        this.renders.push(this.movieAdaptationMsg);
        this.renders.push(this.movieAudienceEvaluation);
        this.renders.push(this.movieDrop);
        this.renders.push(this.movieExpect);
        this.renders.push(this.movieLicence);
        this.renders.push(this.movieMediaVisit);
        this.renders.push(this.movieMidiaEvaluation);
        this.renders.push(this.movieMidiaEvaluationMsg);
        this.renders.push(this.moviePopularize);
        this.renders.push(this.movieShootType);
        this.renders.push(this.msg);
        this.renders.push(this.msgChat);
        this.renders.push(this.msgProtoError);
        this.renders.push(this.npc);
        this.renders.push(this.operationTasks);
        this.renders.push(this.operationTasksScore);
        this.renders.push(this.operationTasksTerms);
        this.renders.push(this.order);
        this.renders.push(this.oscar);
        this.renders.push(this.perform);
        this.renders.push(this.playAct);
        this.renders.push(this.playerDefault);
        this.renders.push(this.playerLevel);
        this.renders.push(this.popUp);
        this.renders.push(this.position);
        this.renders.push(this.produce);
        this.renders.push(this.produceLevel);
        this.renders.push(this.produceLv);
        this.renders.push(this.produceSouvenir);
        this.renders.push(this.property);
        this.renders.push(this.randomName);
        this.renders.push(this.randomSurname);
        this.renders.push(this.recharge);
        this.renders.push(this.roadshow);
        this.renders.push(this.secretary);
        this.renders.push(this.secretaryGift);
        this.renders.push(this.secretaryType);
        this.renders.push(this.serverRankingList);
        this.renders.push(this.settingDefault);
        this.renders.push(this.shop);
        this.renders.push(this.skill);
        this.renders.push(this.skillEffect);
        this.renders.push(this.skillTrigger);
        this.renders.push(this.speak);
        this.renders.push(this.starCon);
        this.renders.push(this.story);
        this.renders.push(this.storyCharacters);
        this.renders.push(this.storyGoals);
        this.renders.push(this.storyline);
        this.renders.push(this.storyRate);
        this.renders.push(this.storyRefreshPrice);
        this.renders.push(this.storyStackItem);
        this.renders.push(this.storyStackSort);
        this.renders.push(this.street);
        this.renders.push(this.sysTime);
        this.renders.push(this.task);
        this.renders.push(this.test);
        this.renders.push(this.turntableComplete);
        this.renders.push(this.turntableReward);
        this.renders.push(this.type);
        this.renders.push(this.unlock);
        this.renders.push(this.visit);
        this.renders.push(this.weeklyQuest);
        this.renders.push(this.welfare);
        this.renders.push(this.wheelDrop);
        this.renders.push(this.writer);
        this.renders.push(this.writerAbility);
        this.renders.push(this.writerAdaptEffect);
        this.renders.push(this.writerLevel);
        this.renders.push(this.writerSkill);
        this.renders.push(this.writerStation);
    }
    
}