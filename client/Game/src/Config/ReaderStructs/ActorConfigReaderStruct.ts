/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorConfig from "../ConfigExtends/ActorConfig";
import DTActorSkill from "../ConfigExtends/DTActorSkill";
import DTInitialLabel from "../ConfigExtends/DTInitialLabel";
import DTActorStory from "../ConfigExtends/DTActorStory";


export default class ActorConfigReaderStruct extends CsvConfigRender<    ActorConfig      >
{
	tableName = "Actor";


    ParseCsv(csv: string[] )
    {
		let config = new ActorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.setId = csvGetInt(csv,  this.GetHeadIndex(  "setId"  )   );
		config.label_birthplace = csvGetInt(csv,  this.GetHeadIndex(  "label_birthplace"  )   );
		config.age = csvGetInt(csv,  this.GetHeadIndex(  "age"  )   );
		config.birthday = csvGetString(csv,  this.GetHeadIndex(  "birthday"  )   );
		config.height = csvGetFloat(csv,  this.GetHeadIndex(  "height"  )   );
		config.bodyWeight = csvGetFloat(csv,  this.GetHeadIndex(  "bodyWeight"  )   );
		config.label_color = csvGetInt(csv,  this.GetHeadIndex(  "label_color"  )   );
		config.storyEventId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "storyEventId"  )   )   );
		config.label_sex = csvGetInt(csv,  this.GetHeadIndex(  "label_sex"  )   );
		config.label_country = csvGetInt(csv,  this.GetHeadIndex(  "label_country"  )   );
		config.label_showType = csvGetInt(csv,  this.GetHeadIndex(  "label_showType"  )   );
		config.label_ageType = csvGetInt(csv,  this.GetHeadIndex(  "label_ageType"  )   );
		config.randomNameId = csvGetInt(csv,  this.GetHeadIndex(  "randomNameId"  )   );
		config.label_bloodType = csvGetInt(csv,  this.GetHeadIndex(  "label_bloodType"  )   );
		config.label_list_hobby =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label_list_hobby"  )   )   );
		config.label_constellation = csvGetInt(csv,  this.GetHeadIndex(  "label_constellation"  )   );
		config.label_list_character =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label_list_character"  )   )   );
		config.label_list_experience =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label_list_experience"  )   )   );
		config.label_specialIntelligence = csvGetInt(csv,  this.GetHeadIndex(  "label_specialIntelligence"  )   );
		config.label_bodyheight = csvGetInt(csv,  this.GetHeadIndex(  "label_bodyheight"  )   );
		config.label_list_looks =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label_list_looks"  )   )   );
		config.weight = csvGetInt(csv,  this.GetHeadIndex(  "weight"  )   );
		config.assistanceCard = csvGetInt(csv,  this.GetHeadIndex(  "assistanceCard"  )   );
		config.avatar = csvGetInt(csv,  this.GetHeadIndex(  "avatar"  )   );
		config.prop_act = csvGetInt(csv,  this.GetHeadIndex(  "prop_act"  )   );
		config.prop_talent = csvGetInt(csv,  this.GetHeadIndex(  "prop_talent"  )   );
		config.prop_charm = csvGetInt(csv,  this.GetHeadIndex(  "prop_charm"  )   );
		config.prop_eloquence = csvGetInt(csv,  this.GetHeadIndex(  "prop_eloquence"  )   );
		config.prop_entertainment = csvGetInt(csv,  this.GetHeadIndex(  "prop_entertainment"  )   );
		config.actGrowRate =  toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  "actGrowRate"  )   )   );
		config.talentGrowRate =  toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  "talentGrowRate"  )   )   );
		config.charmGrowRate =  toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  "charmGrowRate"  )   )   );
		config.eloquenceGrowRate =  toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  "eloquenceGrowRate"  )   )   );
		config.entertainmentGrowRate =  toFloatArray(       csvGetString(csv,  this.GetHeadIndex(  "entertainmentGrowRate"  )   )   );
		config.mainPropertyField = csvGetString(csv,  this.GetHeadIndex(  "mainPropertyField"  )   );
		config.skill =  DTActorSkill.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "skill"  )   )   );
		config.initialLabel =  DTInitialLabel.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "initialLabel"  )   )   );
		config.actorLabelSetId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "actorLabelSetId"  )   )   );
		config.adLabelSetId = csvGetInt(csv,  this.GetHeadIndex(  "adLabelSetId"  )   );
		config.buyLabelSetId = csvGetInt(csv,  this.GetHeadIndex(  "buyLabelSetId"  )   );
		config.expandLabelSetId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "expandLabelSetId"  )   )   );
		config.storyType =  DTActorStory.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "storyType"  )   )   );
		config.surprise = csvGetInt(csv,  this.GetHeadIndex(  "surprise"  )   );
		config.zh_cn_tips = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_tips"  )   );
		config.zh_cn_getWay = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_getWay"  )   );

		


		this.addConfig(config);
    }
}