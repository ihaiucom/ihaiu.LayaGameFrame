/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorConfig from "../ConfigExtends/ActorConfig";
import DTActorSkill from "../ConfigExtends/DTActorSkill";
import DTActorStory from "../ConfigExtends/DTActorStory";
import DTActorFeature from "../ConfigExtends/DTActorFeature";
import DTActorCharacter from "../ConfigExtends/DTActorCharacter";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ActorConfigReaderStruct extends CsvConfigRender<    ActorConfig      >
{
	tableName = "Actor";


    ParseCsv(csv: string[] )
    {
		let config = new ActorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.random_name = csvGetInt(csv,  this.GetHeadIndex(  "random_name"  )   );
		config.star = csvGetInt(csv,  this.GetHeadIndex(  "star"  )   );
		config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
		config.country = csvGetInt(csv,  this.GetHeadIndex(  "country"  )   );
		config.show_type = csvGetInt(csv,  this.GetHeadIndex(  "show_type"  )   );
		config.age_type = csvGetInt(csv,  this.GetHeadIndex(  "age_type"  )   );
		config.avatar = csvGetInt(csv,  this.GetHeadIndex(  "avatar"  )   );
		config.spectacle = csvGetInt(csv,  this.GetHeadIndex(  "spectacle"  )   );
		config.perform = csvGetInt(csv,  this.GetHeadIndex(  "perform"  )   );
		config.plot = csvGetInt(csv,  this.GetHeadIndex(  "plot"  )   );
		config.art = csvGetInt(csv,  this.GetHeadIndex(  "art"  )   );
		config.entertainment = csvGetInt(csv,  this.GetHeadIndex(  "entertainment"  )   );
		config.main_id = csvGetInt(csv,  this.GetHeadIndex(  "main_id"  )   );
		config.skill =  DTActorSkill.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "skill"  )   )   );
		config.story_type =  DTActorStory.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "story_type"  )   )   );
		config.story_feature =  DTActorFeature.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "story_feature"  )   )   );
		config.character =  DTActorCharacter.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "character"  )   )   );
		config.surprise = csvGetInt(csv,  this.GetHeadIndex(  "surprise"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.recruit_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "recruit_reward"  )   )   );
		config.enable_cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "enable_cost"  )   )   );
		config.random_value = csvGetInt(csv,  this.GetHeadIndex(  "random_value"  )   );
		config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
		config.paycheck = csvGetInt(csv,  this.GetHeadIndex(  "paycheck"  )   );
		config.stamina = csvGetInt(csv,  this.GetHeadIndex(  "stamina"  )   );
		config.culture = csvGetInt(csv,  this.GetHeadIndex(  "culture"  )   );
		config.assets = csvGetInt(csv,  this.GetHeadIndex(  "assets"  )   );
		config.en_tips = csvGetString(csv,  this.GetHeadIndex(  "en_tips"  )   );
		config.cn_tips = csvGetString(csv,  this.GetHeadIndex(  "cn_tips"  )   );
		config.en_getway = csvGetString(csv,  this.GetHeadIndex(  "en_getway"  )   );
		config.cn_getway = csvGetString(csv,  this.GetHeadIndex(  "cn_getway"  )   );

		


		this.addConfig(config);
    }
}