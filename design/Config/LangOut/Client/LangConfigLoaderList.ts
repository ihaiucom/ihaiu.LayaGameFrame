/////////////////////////////////////
// ihaiu.Language生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	/// 配置读取器列表
	export class LangConfigLoaderList
	{
		lang: string = "zh_cn";

		// 读取器列表
		renders: LangConfigReader[] = [];

		
        activities   = new LangConfigReader("Activities");
        actor   = new LangConfigReader("Actor");
        actorAide   = new LangConfigReader("ActorAide");
        actorAssets   = new LangConfigReader("ActorAssets");
        actorLevel   = new LangConfigReader("ActorLevel");
        actorLoyalty   = new LangConfigReader("ActorLoyalty");
        actorTrain   = new LangConfigReader("ActorTrain");
        avatar   = new LangConfigReader("Avatar");
        blockLevel   = new LangConfigReader("BlockLevel");
        boxTarget   = new LangConfigReader("BoxTarget");
        buildingEffect   = new LangConfigReader("BuildingEffect");
        buildingLevel   = new LangConfigReader("BuildingLevel");
        business   = new LangConfigReader("Business");
        cinema   = new LangConfigReader("Cinema");
        city   = new LangConfigReader("City");
        cityPopularize   = new LangConfigReader("CityPopularize");
        country   = new LangConfigReader("Country");
        cupPackage   = new LangConfigReader("CupPackage");
        dailySignTrailer   = new LangConfigReader("DailySignTrailer");
        dialogue   = new LangConfigReader("Dialogue");
        floor   = new LangConfigReader("Floor");
        gameLevel   = new LangConfigReader("GameLevel");
        gameRandomName   = new LangConfigReader("GameRandomName");
        guidesystem   = new LangConfigReader("Guidesystem");
        headPortrait   = new LangConfigReader("HeadPortrait");
        item   = new LangConfigReader("Item");
        levelGiftPackage   = new LangConfigReader("LevelGiftPackage");
        mail   = new LangConfigReader("Mail");
        maintask   = new LangConfigReader("Maintask");
        meetingGame   = new LangConfigReader("MeetingGame");
        menu   = new LangConfigReader("Menu");
        monthCard   = new LangConfigReader("MonthCard");
        movieAdaptationMsg   = new LangConfigReader("MovieAdaptationMsg");
        movieAudienceEvaluation   = new LangConfigReader("MovieAudienceEvaluation");
        movieDrop   = new LangConfigReader("MovieDrop");
        movieExpect   = new LangConfigReader("MovieExpect");
        movieMediaVisit   = new LangConfigReader("MovieMediaVisit");
        movieMidiaEvaluation   = new LangConfigReader("MovieMidiaEvaluation");
        movieMidiaEvaluationMsg   = new LangConfigReader("MovieMidiaEvaluationMsg");
        movieShootType   = new LangConfigReader("MovieShootType");
        msg   = new LangConfigReader("Msg");
        msgChat   = new LangConfigReader("MsgChat");
        msgProtoError   = new LangConfigReader("MsgProtoError");
        npc   = new LangConfigReader("Npc");
        operationTasks   = new LangConfigReader("OperationTasks");
        order   = new LangConfigReader("Order");
        oscar   = new LangConfigReader("Oscar");
        produce   = new LangConfigReader("Produce");
        property   = new LangConfigReader("Property");
        recharge   = new LangConfigReader("Recharge");
        secretary   = new LangConfigReader("Secretary");
        secretaryText   = new LangConfigReader("SecretaryText");
        secretaryType   = new LangConfigReader("SecretaryType");
        settingDefault   = new LangConfigReader("SettingDefault");
        shop   = new LangConfigReader("Shop");
        skill   = new LangConfigReader("Skill");
        skillEffect   = new LangConfigReader("SkillEffect");
        skillTrigger   = new LangConfigReader("SkillTrigger");
        speak   = new LangConfigReader("Speak");
        story   = new LangConfigReader("Story");
        storyCharacters   = new LangConfigReader("StoryCharacters");
        storyline   = new LangConfigReader("Storyline");
        storyStackSort   = new LangConfigReader("StoryStackSort");
        street   = new LangConfigReader("Street");
        task   = new LangConfigReader("Task");
        textCode   = new LangConfigReader("TextCode");
        textFgui   = new LangConfigReader("TextFgui");
        unlock   = new LangConfigReader("Unlock");
        visit   = new LangConfigReader("Visit");
        weeklyQuest   = new LangConfigReader("WeeklyQuest");
        welfare   = new LangConfigReader("Welfare");
        writer   = new LangConfigReader("Writer");
        writerAdaptEffect   = new LangConfigReader("WriterAdaptEffect");
        writerLevel   = new LangConfigReader("WriterLevel");


        // 初始化读取器列表
        initList()
        {

            this.renders.push(this.activities);
            this.renders.push(this.actor);
            this.renders.push(this.actorAide);
            this.renders.push(this.actorAssets);
            this.renders.push(this.actorLevel);
            this.renders.push(this.actorLoyalty);
            this.renders.push(this.actorTrain);
            this.renders.push(this.avatar);
            this.renders.push(this.blockLevel);
            this.renders.push(this.boxTarget);
            this.renders.push(this.buildingEffect);
            this.renders.push(this.buildingLevel);
            this.renders.push(this.business);
            this.renders.push(this.cinema);
            this.renders.push(this.city);
            this.renders.push(this.cityPopularize);
            this.renders.push(this.country);
            this.renders.push(this.cupPackage);
            this.renders.push(this.dailySignTrailer);
            this.renders.push(this.dialogue);
            this.renders.push(this.floor);
            this.renders.push(this.gameLevel);
            this.renders.push(this.gameRandomName);
            this.renders.push(this.guidesystem);
            this.renders.push(this.headPortrait);
            this.renders.push(this.item);
            this.renders.push(this.levelGiftPackage);
            this.renders.push(this.mail);
            this.renders.push(this.maintask);
            this.renders.push(this.meetingGame);
            this.renders.push(this.menu);
            this.renders.push(this.monthCard);
            this.renders.push(this.movieAdaptationMsg);
            this.renders.push(this.movieAudienceEvaluation);
            this.renders.push(this.movieDrop);
            this.renders.push(this.movieExpect);
            this.renders.push(this.movieMediaVisit);
            this.renders.push(this.movieMidiaEvaluation);
            this.renders.push(this.movieMidiaEvaluationMsg);
            this.renders.push(this.movieShootType);
            this.renders.push(this.msg);
            this.renders.push(this.msgChat);
            this.renders.push(this.msgProtoError);
            this.renders.push(this.npc);
            this.renders.push(this.operationTasks);
            this.renders.push(this.order);
            this.renders.push(this.oscar);
            this.renders.push(this.produce);
            this.renders.push(this.property);
            this.renders.push(this.recharge);
            this.renders.push(this.secretary);
            this.renders.push(this.secretaryText);
            this.renders.push(this.secretaryType);
            this.renders.push(this.settingDefault);
            this.renders.push(this.shop);
            this.renders.push(this.skill);
            this.renders.push(this.skillEffect);
            this.renders.push(this.skillTrigger);
            this.renders.push(this.speak);
            this.renders.push(this.story);
            this.renders.push(this.storyCharacters);
            this.renders.push(this.storyline);
            this.renders.push(this.storyStackSort);
            this.renders.push(this.street);
            this.renders.push(this.task);
            this.renders.push(this.textCode);
            this.renders.push(this.textFgui);
            this.renders.push(this.unlock);
            this.renders.push(this.visit);
            this.renders.push(this.weeklyQuest);
            this.renders.push(this.welfare);
            this.renders.push(this.writer);
            this.renders.push(this.writerAdaptEffect);
            this.renders.push(this.writerLevel);
        }


	}
}