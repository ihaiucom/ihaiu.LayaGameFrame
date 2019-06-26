package control

import (
	"antnet"
	"frame"
	"math"
	"proto/pb"
	"server/logic/model"
)

const(
	LabelType_Prop = 6
	tmpActorSetId = 1 //临时艺人集合ID
)

var maxAp int32 = 100 //行动力上限值
var studio_cost_item int32 = 4 //拍摄消耗行动力
var studio_reward_item int32 = 2 //拍摄获得的基本奖励-金币

var studio_expect_record_quantity int32 = 10 //记录台本数量X

var	expect_constant_a float32 = 0 //期待值常量a
var	expect_constant_b float32 = 0 //期待值常量b
var	prop_constant_c float32 = 0 //属性常量c
var	prop_constant_d float32 = 0 //属性常量d
var	prop_constant_e float32 = 0 //属性常量e
var	prop_constant_f float32 = 0 //属性常量f
var att_first_weight uint32 = 100 //主属性权重
var att_second_weight uint32 = 20 //副属性权重

var att_rand []frame.DTValue2  //属性值随机区间
var att_rand_constant_a float32 = 0 //结果计算公式系数A
var att_rand_constant_b float32 = 0 //结果计算公式系数B
var mathematical_expectation float32 = 0//数学期望
var standard_deviation float32 = 0//标准方差

var studio_rand_grade_max float32 = 0 //评分上限值
var studio_rand_grade_min float32 = 0 //评分下限值
var studio_evaluate float32 = 0//街区评分平均值默认值
var studio_opinions float32 = 0//街区口碑平均值默认值

var propertyMap map[int]string   //属性
var propertyNameIdMap map[string]int   //属性
var normalDistribution map[int]int //正太分布

var studio_continue_reward_time *frame.DTValue2 //持续收益领取时间间隔和获取的奖励次数（秒数&奖励次数）

var studioEvaluationMap map[int]*StudioEvaluation  //拍摄评论列表
var studioEventEvaluationMap map[int][]int32  //拍摄事件评论列表
var studio_evaluation_num int = 3//评论条数

type StudioEvaluation struct {
	scoreMin int
	scoreMax int
	idList []int32
}

type WeightProp struct {
	actor *pb.StudioActor
	prop int
}

func LoadFormulaConfig(){
	tableGlobal_expect_constant_a:= frame.Config.Doc.GetConfigGlobal("studio_expect_constant_a")
	if tableGlobal_expect_constant_a == nil{
		antnet.LogError("[拍摄]global表字段studio_expect_constant_a缺失")
	}else {
		expect_constant_a = tableGlobal_expect_constant_a.Value6
	}

	tableGlobal_expect_constant_b:= frame.Config.Doc.GetConfigGlobal("studio_expect_constant_b")
	if tableGlobal_expect_constant_b == nil{
		antnet.LogError("[拍摄]global表字段studio_expect_constant_b缺失")
	}else {
		expect_constant_b = tableGlobal_expect_constant_b.Value6
	}

	tableGlobal_prop_constant_c:= frame.Config.Doc.GetConfigGlobal("studio_prop_constant_c")
	if tableGlobal_prop_constant_c == nil{
		antnet.LogError("[拍摄]global表字段 studio_prop_constant_c 缺失")
	}else {
		prop_constant_c = tableGlobal_prop_constant_c.Value6
	}

	tableGlobal_prop_constant_d:= frame.Config.Doc.GetConfigGlobal("studio_prop_constant_d")
	if tableGlobal_prop_constant_d == nil{
		antnet.LogError("[拍摄]global表字段 studio_prop_constant_d 缺失")
	}else {
		prop_constant_d = tableGlobal_prop_constant_d.Value6
	}

	tableGlobal_prop_constant_e:= frame.Config.Doc.GetConfigGlobal("studio_prop_constant_e")
	if tableGlobal_prop_constant_e == nil{
		antnet.LogError("[拍摄]global表字段 studio_prop_constant_e 缺失")
	}else {
		prop_constant_e = tableGlobal_prop_constant_e.Value6
	}

	tableGlobal_prop_constant_f:= frame.Config.Doc.GetConfigGlobal("studio_prop_constant_f")
	if tableGlobal_prop_constant_f == nil{
		antnet.LogError("[拍摄]global表字段 studio_prop_constant_f 缺失")
	}else {
		prop_constant_f = tableGlobal_prop_constant_f.Value6
	}

	tableGlobal_studio_att_rand:= frame.Config.Doc.GetConfigGlobal("studio_att_rand")
	if tableGlobal_studio_att_rand == nil{
		antnet.LogError("[拍摄]global表字段 studio_att_rand 缺失")
	}else {
		att_rand = tableGlobal_studio_att_rand.Value2
	}

	tableGlobal_att_rand_constant_a:= frame.Config.Doc.GetConfigGlobal("studio_att_rand_constant_a")
	if tableGlobal_att_rand_constant_a == nil{
		antnet.LogError("[拍摄]global表字段 studio_att_rand_constant_a 缺失")
	}else {
		att_rand_constant_a = tableGlobal_att_rand_constant_a.Value6
	}

	tableGlobal_att_rand_constant_b:= frame.Config.Doc.GetConfigGlobal("studio_att_rand_constant_b")
	if tableGlobal_att_rand_constant_b == nil{
		antnet.LogError("[拍摄]global表字段 studio_att_rand_constant_b 缺失")
	}else {
		att_rand_constant_b = tableGlobal_att_rand_constant_b.Value6
	}

	tableGlobal_att_rate:= frame.Config.Doc.GetConfigGlobal("studio_att_rate")
	if tableGlobal_att_rate == nil && len(tableGlobal_att_rate.Value1) < 2{
		antnet.LogError("[拍摄]global表字段 studio_att_rate 缺失")
	}else {
		att_first_weight = uint32(tableGlobal_att_rate.Value1[0])
		att_second_weight = uint32(tableGlobal_att_rate.Value1[1])
	}

	//属性
	propertyMap = make(map[int]string)
	propertyNameIdMap = make(map[string]int)
	for _,value := range frame.Config.Doc.Label{
		if value.Type == LabelType_Prop{
			propertyMap[value.Id] = value.Field
			propertyNameIdMap[value.Field] = value.Id
		}
	}

	tableGlobal_mathematical_expectation:= frame.Config.Doc.GetConfigGlobal("studio_rand_grade_mathematical_expectation")
	if tableGlobal_mathematical_expectation == nil{
		antnet.LogError("[拍摄]global表字段 studio_rand_grade_mathematical_expectation 缺失")
	}else {
		mathematical_expectation = tableGlobal_mathematical_expectation.Value6
	}
	tableGlobal_standard_deviation:= frame.Config.Doc.GetConfigGlobal("studio_rand_grade_standard_deviation")
	if tableGlobal_standard_deviation == nil{
		antnet.LogError("[拍摄]global表字段 studio_rand_grade_standard_deviation 缺失")
	}else {
		standard_deviation = tableGlobal_standard_deviation.Value6
	}

	tableGlobal_studio_rand_grade_min:= frame.Config.Doc.GetConfigGlobal("studio_rand_grade_min")
	if tableGlobal_studio_rand_grade_min == nil{
		antnet.LogError("[拍摄]global表字段 studio_rand_grade_min 缺失")
	}else {
		studio_rand_grade_min = tableGlobal_studio_rand_grade_min.Value6
	}

	tableGlobal_studio_rand_grade_max:= frame.Config.Doc.GetConfigGlobal("studio_rand_grade_max")
	if tableGlobal_studio_rand_grade_max == nil{
		antnet.LogError("[拍摄]global表字段 studio_rand_grade_max 缺失")
	}else {
		studio_rand_grade_max = tableGlobal_studio_rand_grade_max.Value6
	}

	tableGlobal_studio_evaluate:= frame.Config.Doc.GetConfigGlobal("studio_evaluate")
	if tableGlobal_studio_evaluate == nil{
		antnet.LogError("[拍摄]global表字段 studio_evaluate 缺失")
	}else {
		studio_evaluate = tableGlobal_studio_evaluate.Value6
	}

	tableGlobal_studio_opinions:= frame.Config.Doc.GetConfigGlobal("studio_opinions")
	if tableGlobal_studio_opinions == nil{
		antnet.LogError("[拍摄]global表字段 studio_opinions 缺失")
	}else {
		studio_opinions = tableGlobal_studio_opinions.Value6
	}



	tableGlobal_cost_item := frame.Config.Doc.GetConfigGlobal("studio_cost_item")
	if tableGlobal_cost_item == nil{
		antnet.LogError("[拍摄]global表字段 studio_cost_item 缺失")
	}else{
		studio_cost_item = int32(tableGlobal_cost_item.Value)
	}

	tableGlobal_studio_reward_item := frame.Config.Doc.GetConfigGlobal("studio_reward_item")
	if tableGlobal_studio_reward_item == nil{
		antnet.LogError("[拍摄]global表字段 studio_reward_item 缺失")
	}else{
		studio_reward_item = int32(tableGlobal_studio_reward_item.Value)
	}

	//记录台本数量X
	tableGlobal_expect_record_quantity := frame.Config.Doc.GetConfigGlobal("studio_expect_record_quantity")
	if tableGlobal_expect_record_quantity == nil{
		antnet.LogError("[拍摄]global表字段 studio_expect_record_quantity 缺失")
	}else{
		studio_expect_record_quantity = int32(tableGlobal_expect_record_quantity.Value)
	}

	//正太分布
	normalDistribution = make(map[int]int)
	for _,value := range frame.Config.Doc.NormalDistribution{
		normalDistribution[value.Score] = value.RandomSum
	}

	tableGlobal_studio_continue_reward_time := frame.Config.Doc.GetConfigGlobal("studio_continue_reward_time")
	if tableGlobal_studio_continue_reward_time == nil || len(tableGlobal_studio_continue_reward_time.Value2) < 1{
		antnet.LogError("[拍摄]global表字段 studio_continue_reward_time 缺失")
	}else{
		studio_continue_reward_time = &tableGlobal_studio_continue_reward_time.Value2[0]
		if studio_continue_reward_time.V2 == 0{
			antnet.LogError("[拍摄]global表字段 studio_continue_reward_time 周期数为0")
			studio_continue_reward_time.V2 = 10
		}
	}
	studioEvaluationMap = make(map[int]*StudioEvaluation)
	for id,value := range frame.Config.Doc.StudioAudienceEvaluation{
		if studioEvaluation,found := studioEvaluationMap[value.ScoreMax];found{
			studioEvaluation.idList = append(studioEvaluation.idList,int32(id))
		}else{
			data := &StudioEvaluation{}
			data.idList = make([]int32,0,10)
			data.idList = append(data.idList,int32(id))
			data.scoreMin = value.ScoreMin
			data.scoreMax = value.ScoreMax
			studioEvaluationMap[data.scoreMax] = data
		}
	}


	studioEventEvaluationMap = make(map[int][]int32)
	for id,value := range frame.Config.Doc.StudioEventEvaluation{
		if _,found := studioEventEvaluationMap[value.Type];found{
			studioEventEvaluationMap[value.Type] = append(studioEventEvaluationMap[value.Type],int32(id))
		}else{
			idList := make([]int32,0,10)
			idList = append(idList,int32(id))
			studioEventEvaluationMap[value.Type] = idList
		}
	}
	tableGlobal_ap_max := frame.Config.Doc.GetConfigGlobal("init_player_ap_max")
	if tableGlobal_ap_max == nil {
		antnet.LogError("[数值]global表字段 tableGlobal_ap_max 缺失")
	}else{
		maxAp = int32(tableGlobal_ap_max.Value)
	}
	tableGlobal_studio_evaluation_num := frame.Config.Doc.GetConfigGlobal("studio_evaluation_num")
	if tableGlobal_studio_evaluation_num == nil {
		antnet.LogError("[数值]global表字段 studio_evaluation_num 缺失")
	}else{
		studio_evaluation_num = tableGlobal_studio_evaluation_num.Value
	}

}

/*
*storyTypeNum	剧本类型数量
*计算剧本期待值
*/
func CalculateStoryExpect(storyTypeNum float32)float32{
	var expect float32 = 1
	if storyTypeNum+expect_constant_b == 0{
		return  expect
	}
	//期待值影响=1.2-(当前台本类型拍摄数量/（当前台本类型拍摄数量+N）)
	expect = expect_constant_a-(storyTypeNum/(storyTypeNum+expect_constant_b))
	expect = antnet.Round(float64(expect),2)
	return expect
}

/*
*actorStar				艺人星级
*actorLevel				艺人等级
*baseProp				基础属性 actor.xlsx 中的初始属性
* prop_spectacle：		初始场面
* prop_plot：			初始剧情
* prop_entertainment：	初始娱乐
* prop_art：				初始艺术
* prop_perform：			初始表演
*场外属性 获取艺人等级属性
*/
func GetActorLevelProp(actorStar int32, actorLevel float32, baseProp float32)float32{
	var ret float32 = 0
	tableActorStar:= frame.Config.Doc.GetConfigActorStar(int(actorStar))
	if tableActorStar == nil || prop_constant_c == 0 || actorLevel < 1{
		return ret
	}
	levelProp :=  (actorLevel - 1)
	//伙伴等级加成=roundup((成长系数/系数C-系数D)*(等级-1)^2+星级系数*系数E*(等级-1)+基础属性）
	ret = (tableActorStar.GrowRate/prop_constant_c -prop_constant_d) * levelProp *levelProp + tableActorStar.StarRate*prop_constant_e * levelProp + baseProp
	ret = float32(math.Ceil(float64(ret)))
	return ret
}



/*
*levelProp			场外属性
*actorId			艺人ID
*storyCharaterId 	艺人角色ID
*propType			属性类型 场面 娱乐等
*标签加成 获取艺人拍摄流程匹配展示标签加成属性
*/
func GetActorStudioTagProp(levelProp float32, actorId ,storyCharaterId ,propType int)float32{
	var ret float32 = 0
	tableActor:= frame.Config.Doc.GetConfigActor(actorId)
	if tableActor == nil{
		return ret
	}
	tableStoryCharacters:= frame.Config.Doc.GetConfigStoryCharacters(storyCharaterId)
	if tableStoryCharacters == nil{
		return ret
	}

	var storyTagProp float32 = 0
	//storyTag加成
	for _,storyTag := range tableActor.InitialLabel{
		if storyTag.Property != propType{
			continue
		}
		for _,tag := range tableStoryCharacters.Label_storyTag {
			if tag == storyTag.StoryTag {
				tableLabelLevel := frame.Config.Doc.GetConfigLabelLevel(storyTag.Level)
				if tableLabelLevel == nil {
					continue
				}
				storyTagProp = storyTagProp +  tableLabelLevel.StoryTag
			}
		}
	}

	//标签加成=场外场面*（1+综艺标签加成）
	ret = levelProp * storyTagProp
	return ret
}

/*
*levelProp			场外属性
*challengeAchieve 	剧本挑战成就
*actorId			艺人ID
*storyid			拍摄剧本ID
*storyCharaterId 	艺人角色ID
*propType			属性类型 场面 娱乐等
*场内属性 获取艺人拍摄流程属性
*/
func GetActorStudioProp(challengeAchieve,levelProp float32, actorId ,storyid,storyCharaterId ,propType int)float32{
	var ret float32 = 0
	tableActor:= frame.Config.Doc.GetConfigActor(actorId)
	if tableActor == nil{
		return ret
	}
	tableStory:= frame.Config.Doc.GetConfigStory(storyid)
	if tableStory == nil{
		return ret
	}
	tableStoryCharacters:= frame.Config.Doc.GetConfigStoryCharacters(storyCharaterId)
	if tableStoryCharacters == nil{
		return ret
	}
	tableStoryPosition := frame.Config.Doc.GetConfigStoryPosition(tableStoryCharacters.StoryPositionId)
	if tableStoryPosition == nil{
		return ret
	}
	//位置加成
	var positionProp float32 = float32(tableStoryPosition.Con)
	var storyTypeProp float32 = 0
	var storyTagProp float32 = 0
	 //storyType风格加成
	for _,storyType := range tableActor.StoryType{
		if 	tableStory.Label_storyType == storyType.Story && storyType.Property == propType{
			tableLabelLevel := frame.Config.Doc.GetConfigLabelLevel(storyType.Lv)
			if tableLabelLevel == nil{
				continue
			}
			storyTypeProp = storyTypeProp + tableLabelLevel.StoryType
		}
	}
	//storyTag综艺角色加成
	for _,storyTag := range tableActor.InitialLabel{
		if storyTag.Property != propType{
			continue
		}
		for _,tag := range tableStoryCharacters.Label_storyTag {
			if tag == storyTag.StoryTag {
				tableLabelLevel := frame.Config.Doc.GetConfigLabelLevel(storyTag.Level)
				if tableLabelLevel == nil {
					continue
				}
				storyTagProp = storyTagProp +  tableLabelLevel.StoryTag
			}
		}
	}

	//场内场面=场外场面*（1+位置加成/100）*（1+综艺风格加成+综艺元素加成+综艺角色加成+剧本挑战成就加成）
	ret = levelProp*(1+positionProp/100) *(1 +storyTypeProp + storyTagProp+challengeAchieve)
	if ret == 0 {
		ret = 1
	}
	return ret
}

/*
*actorStar	艺人星级
*actorLevel	艺人等级
*艺人消耗行动力
*/
func GetActorConsume(actorStar int32, actorLevel int32)int32 {
	var ret int32 = 0
	tableActorStar:= frame.Config.Doc.GetConfigActorStar(int(actorStar))
	if tableActorStar == nil ||prop_constant_c == 0 || actorLevel < 1{
		return ret
	}
	levelProp :=  float32(actorLevel - 1)
	//	F(等级)=(2(成长系数/系数C-系数D)*(等级-1)+星级系数*系数E)*系数F
	tmp := (2*(tableActorStar.GrowRate/prop_constant_c -prop_constant_d) * levelProp  + tableActorStar.StarRate*prop_constant_e)*prop_constant_f
	ret = int32(tmp)
	return ret
}

/*
*gamerLevel		玩家等级
*gamerActor		艺人model数据
*story			拍摄剧本
*actorList 		拍摄艺人角色
*ret			起效属性值map列表
*起效属性 获取艺人起效属性结果得分
*/
func GetActorWorkProp(gamerActor *model.ModelGamerActor , story* pb.StudioStory,actorList []*pb.StudioActor)map[int]float32 {
	sumScoreMap := make(map[int]float32)
	actorListLen :=len(actorList)
	if gamerActor == nil || story == nil || actorList == nil || actorListLen == 0{
		return sumScoreMap
	}
	if att_rand_constant_a == 0{
		return sumScoreMap
	}
	tableStory:= frame.Config.Doc.GetConfigStory(int(story.StoryId))
	if tableStory == nil{
		return sumScoreMap
	}
	tableStoryStar:= frame.Config.Doc.GetConfigStoryStar(tableStory.Label_star)
	if tableStoryStar == nil{
		return sumScoreMap
	}
	randomNum := tableStoryStar.RandomNum
	if story.StoryType == pb.StudioStoryType_StudioStoryType_gold{
		randomNum = tableStoryStar.GoldRandomNum
	}

	weightPair := antnet.NewValueWeightPair()
	propList := make([]*WeightProp,0,len(propertyMap)*actorListLen)
	var index uint64 = 0
	for _,actor := range actorList{
		tableStoryCharacters:= frame.Config.Doc.GetConfigStoryCharacters(int(actor.StoryCharactersId))
		if tableStoryCharacters == nil{
			antnet.LogError("[拍摄]计算，艺人位为空actor：%v",actor)
			continue
		}
		firstProp := tableStoryCharacters.RandomPropId
		for prop,_ := range propertyMap{
			weightProp := &WeightProp{actor:actor,prop:prop}
			propList = append(propList,weightProp)
			if IsFirstProp(prop,firstProp){
				weightPair.Add(att_first_weight,index)
			}else{
				weightPair.Add(att_second_weight,index)
			}
			index++
		}
	}
	listLen := len(propList)
	for i:=0;i<randomNum;i++{
		index := int(weightPair.Random())
		if index < 0 || index >= listLen{
			continue
		}
		weightProp := propList[index]
		actor := weightProp.actor
		prop := weightProp.prop
		modelActor := gamerActor.GetActor(actor.ActorId)
		if  modelActor == nil{
			continue
		}
		tableActor:= frame.Config.Doc.GetConfigActor(int(actor.ActorId))
		if tableActor == nil{
			continue
		}

		var actorLevel float32 = float32(modelActor.Level)
		var actorLevelProp float32 = 0
		if field,found := propertyMap[prop];found{
			switch field {
			case "act":
				actorLevelProp = GetActorLevelProp(modelActor.Star,actorLevel,float32(tableActor.Prop_act))
				break
			case "talent":
				actorLevelProp = GetActorLevelProp(modelActor.Star,actorLevel,float32(tableActor.Prop_talent))
				break
			case "charm":
				actorLevelProp = GetActorLevelProp(modelActor.Star,actorLevel,float32(tableActor.Prop_charm))
				break
			case "eloquence":
				actorLevelProp = GetActorLevelProp(modelActor.Star,actorLevel,float32(tableActor.Prop_eloquence))
				break
			case "entertainment":
				actorLevelProp = GetActorLevelProp(modelActor.Star,actorLevel,float32(tableActor.Prop_entertainment))
				break
			}
		}
		actorStudioProp := GetActorStudioProp(/* TODO */0,actorLevelProp,int(actor.ActorId),int(story.StoryId),int(actor.StoryCharactersId),prop)
		//单次结果=(int(等级/系数A+1）×系数B)/(等级+int(等级/系数A+1）×系数B)×起效属性×rand(0.8,1.2)
		index = int(story.Season -1)
		att_rand_len := len(att_rand)
		if index >= att_rand_len{
			index = att_rand_len -1
		}else if index <0{
			index = 0
		}
		random := antnet.RandBetween(att_rand[index].V1,att_rand[index].V2)
		result1:= (actorLevel/att_rand_constant_a+1)*att_rand_constant_b
		if result1 + actorLevel == 0{
			continue
		}
		result := result1/(actorLevel+result1)*actorStudioProp*float32(random)/100 //单次计算结果
		if value,found := sumScoreMap[prop];found{
			sumScoreMap[prop] = value + result
		}else {
			sumScoreMap[prop] = result
		}

		//艺人单个的数据
		if actor.ScoreProps == nil{
			actor.ScoreProps = make([]*pb.StudioActorProp,0,len(propertyMap))
		}
		find := false
		for _,scoreProp := range actor.ScoreProps{
			if scoreProp.PropId == int32(prop){
				find = true
				scoreProp.PropVal += int32(result) //不精确
				break
			}
		}
		if find == false{
			actorProp:= &pb.StudioActorProp{}
			actorProp.PropId = int32(prop)
			actorProp.PropVal = int32(result) //不精确
			actor.ScoreProps = append(actor.ScoreProps,actorProp)
		}
	}
	calStudioActorScore(actorList)
	return 	sumScoreMap
}


//计算艺人分数 mvp
func calStudioActorScore(actorList []*pb.StudioActor){
	var mvpId int32 = 0
	var mvpValue int32 = 0
	for _,actor := range actorList{
		for _,scoreProp := range actor.ScoreProps{
			actor.NormalScoreTotal += scoreProp.PropVal
		}
		if actor.NormalScoreTotal >= mvpValue{
			mvpValue = actor.NormalScoreTotal
			mvpId = actor.ActorId
		}
	}
	for _,actor := range actorList{
		if actor.ActorId == mvpId{
			actor.IsMvp = true
		}
	}
}


//是否第一属性
func IsFirstProp(prop int,firstProp []int)bool{
	isFirstProp := false
	for _,value :=range firstProp{
		if prop == value{
			isFirstProp = true
			break
		}
	}
	return isFirstProp
}

/*
*requireScore			要求得分
*value					得分
*计算数学期望
*/
func GetMathExpect(requireScore float32,value float32) float32{
	var mathExpect float32 = mathematical_expectation
	allValue := value +requireScore
	if allValue == 0{
		return mathExpect
	}
	//𝜇 : 数学期望=rounddown((魅力得分+娱乐得分）/（魅力得分+娱乐得分+要求得分）*（上限值-下限值）+下限值,2)
	mathExpect = (value)/allValue * (studio_rand_grade_max -studio_rand_grade_min) + studio_rand_grade_min
	mathExpect = antnet.Round(float64(mathExpect),2)
	return mathExpect
}

/*
*requireScore		要求得分 或者要求口碑
*value = charmValue+entertainmentValue		 随机分数 =	魅力得分+娱乐得分
*value = actValue+talentValue+eloquenceValue 随机口碑 =	表演得分+才艺得分+口才得分
*获取随机分数（或口碑）
*/
func GetRandomGrade(requireScore, value float32)float32{
	mathExpect := GetMathExpect(requireScore,value) *10
	random := antnet.RandBetween(0,100000)
	//2分法查找
	var min,mid,max int = 1,0,99
	var curQueryValue int = 0
	if standard_deviation == 0{
		return 5
	}
	//8次循环
	for{
		mid = (min+max)/2
		curQueryValue =int((float32(mid) - mathExpect)/standard_deviation)
		if  normalDistribution[curQueryValue] > random{
			max = mid - 1
		}else if normalDistribution[curQueryValue] < random{
			min = mid + 1
		}else if normalDistribution[curQueryValue] == random{
			return  (float32(mid) /10)
		}

		if min > max{
			break
		}
	}
	return (float32(max) /10)
}

/*
*randomGrade 			随机得分 randomGrade := GetRandomGrade(requireScore,charmValue, entertainmentValue)
*requireScore			要求得分
*streetAverageScore		街区平均得分
*charmValue				魅力得分
*entertainmentValue		娱乐得分
*获取拍摄评分
*/
func GetStudioGrade(randomGrade,requireScore,streetAverageScore,charmValue, entertainmentValue float32)float32{
	//评分 =（魅力得分+娱乐得分）/（魅力得分+娱乐得分+要求得分）*随机评分+要求得分/（魅力得分+娱乐得分+要求得分）*街区评分平均值
	val1:= charmValue +entertainmentValue
	val2:= val1+requireScore
	var grade float32= 5
	if val2 == 0{
		return grade
	}
	grade = val1 /val2 * randomGrade + requireScore/val2 *streetAverageScore
	grade = antnet.Round(float64(grade),1)
	return grade
}


/*
*requireScore				要求得分
*randomGrade 				随机口碑
*streetAveragePublicPraise	街区平均口碑
*actValue					表演得分
*talentValue				才艺得分
*eloquenceValue				 口才得分
*获取拍摄公众口碑
*/
func GetStudioPublicPraise(randomGrade,requireScore,streetAveragePublicPraise,actValue, talentValue,eloquenceValue float32)float32{
	//口碑 =（口才得分+表演得分+才艺得分）/（口才得分+表演得分+才艺得分+要求得分）*随机口碑+要求得分/（口才得分+表演得分+才艺得分+要求得分）*街区口碑平均值
	val1:= eloquenceValue + actValue + talentValue
	val2:= val1+requireScore
	var grade float32= 5
	if val2 == 0{
		return grade
	}
	grade = val1 /val2 * randomGrade + requireScore/val2 *streetAveragePublicPraise
	grade = antnet.Round(float64(grade),1)
	return grade
}

/*
*streetProp				街区系数
*storyStarProp 			剧本星级系数
*charmValue				魅力得分
*entertainmentValue		娱乐得分
*grade					评分
*StoryExpect 			期待值影响
*获取拍摄首次收益
*/
func GetFirstEarnings(streetProp, storyStarProp,charmValue, entertainmentValue,grade,StoryExpect float32)int32{
	//首次收益=街区系数*剧本星级系数*（魅力得分+娱乐得分）*评分*期待值影响
	//antnet.LogDebug("[拍摄]获取匹配展示属性streetProp:%d, storyStarProp:%d,charmValue:%d, entertainmentValue:%d,grade,StoryExpect:%d",streetProp, storyStarProp,charmValue, entertainmentValue,grade,StoryExpect)
	firstEarnings := streetProp*storyStarProp*(charmValue+entertainmentValue)*grade*StoryExpect
	return int32(firstEarnings)
}


/*
*streetContinueProp		街区持续收益系数
*storyContinueStarProp 	剧本星级持续收益系数
*actValue				表演得分
*talentValue			才艺得分
*eloquenceValue			口才得分
*publicPraise 			公众口碑
*获取拍摄持续收益
*/
func GetContinueEarnings(streetContinueProp, storyContinueStarProp,actValue, talentValue,eloquenceValue,publicPraise float32)int32{
	//持续收益= 街区持续收益系数*剧本星级持续收益系数*（口才得分+表演得分+才艺得分）*口碑
	continueEarnings := streetContinueProp*storyContinueStarProp*(actValue+talentValue+eloquenceValue)*publicPraise
	return int32(continueEarnings)
}


/*
*actorId			艺人ID
*actorStar 			艺人星级
*actorLevel			艺人等级
*storyCharacterId	艺人位
*storyId			剧本ID
*获取匹配展示属性
*/
func GetMatchingProps(actorId ,actorStar,actorLevel,storyCharacterId,storyId int32)  []*pb.StudioActorProp{
	//antnet.LogDebug("[拍摄]获取匹配展示属性actorId:%d ,actorStar:%d,actorLevel:%d,storyCharacterId:%d,storyId:%d",actorId ,actorStar,actorLevel,storyCharacterId,storyId)
	matchingPropList := make( []*pb.StudioActorProp,0,len(propertyMap))
	tableActor:= frame.Config.Doc.GetConfigActor(int(actorId))
	if tableActor == nil{
		return matchingPropList
	}

	tableStory:= frame.Config.Doc.GetConfigStory(int(storyId))
	if tableStory == nil{
		return matchingPropList
	}
	var actorLevelProp float32 = 0
	for prop,field :=range propertyMap{
		switch field {
		case "act":
			actorLevelProp = GetActorLevelProp(actorStar,float32(actorLevel),float32(tableActor.Prop_act))
			break
		case "talent":
			actorLevelProp = GetActorLevelProp(actorStar,float32(actorLevel),float32(tableActor.Prop_talent))
			break
		case "charm":
			actorLevelProp = GetActorLevelProp(actorStar,float32(actorLevel),float32(tableActor.Prop_charm))
			break
		case "eloquence":
			actorLevelProp = GetActorLevelProp(actorStar,float32(actorLevel),float32(tableActor.Prop_eloquence))
			break
		case "entertainment":
			actorLevelProp = GetActorLevelProp(actorStar,float32(actorLevel),float32(tableActor.Prop_entertainment))
			break
		}
		actorStudioTagProp := GetActorStudioTagProp(actorLevelProp,int(actorId),int(storyCharacterId),prop)
		//antnet.LogDebug("[拍摄]获取匹配展示属性PropId:%d,actorLevelProp:%f,PropVal:%f",prop,actorLevelProp,actorStudioProp)
		matchingProp := &pb.StudioActorProp{PropId:int32(prop),PropVal:int32(actorStudioTagProp)}
		matchingPropList = append(matchingPropList,matchingProp)
	}
	return matchingPropList
}


/*
*StudioGrade			剧本评分
*publicPraise 			剧本口碑
*获取剧本评分
*/
func GetStudioLevel(StudioGrade,publicPraise float32) int32{
	grade := int(StudioGrade + publicPraise)
	var max,maxId,retVal int = 0,1,1
	for id,value := range frame.Config.Doc.StudioLevel{
		if grade >= value.Min && grade <=value.Max{
			retVal = id
			break
		}
		if max <value.Max{
			max = value.Max
			maxId = id
		}
	}
	if grade > max{
		retVal = maxId
	}
	return int32(retVal)
}

/*
*continueEarnings			持续收益
*获取购买人数
*/
func GetBuyUserCount(continueEarnings int32) int32 {
	 random := float32(antnet.RandBetween(80,100)) /100
	return int32(float32(continueEarnings)*random/100)
}

func GetActorPropertyName(id int32) string{
	v,ok := propertyMap[int(id)]
	if ok {
		return v
	}

	return ""
}

func GetActorPropertyId(name string) int32{
	v,ok := propertyNameIdMap[name]
	if ok {
		return int32(v)
	}

	return 0
}

/*
*actor		拍摄艺人
*艺人和剧本角色标签重合的标签
*/
func GetActorMatchStoryTag(actor* pb.StudioActor) []int32{
	tagList := make([]int32,0,3)
	if actor == nil{
		return tagList
	}
	tableActor:= frame.Config.Doc.GetConfigActor(int(actor.ActorId))
	if tableActor == nil{
		return tagList
	}

	tableStoryCharacters:= frame.Config.Doc.GetConfigStoryCharacters(int(actor.StoryCharactersId))
	if tableStoryCharacters == nil{
		return tagList
	}
	//初始标签
	for _,storyTag := range tableActor.InitialLabel{
		for _,tag := range tableStoryCharacters.Label_storyTag {
			if tag == storyTag.StoryTag {
				tagList = append(tagList,int32(tag))
			}
		}
	}

	//TODO 艺人扩展 艺人其他标签
	return  tagList
}

/*
*拍摄系统事件评论列表
*/
func GetStudioEventEvalution(evalType int) []int32{
	if idList,found := studioEventEvaluationMap[evalType];found{
		retList := make([]int32,0,3)
		length := len(idList)
		randomIndexList:= antnet.RandSliceBetween(0,length,3)
		for _,index := range randomIndexList{
			if index <length {
				retList = append(retList,idList[index])
			}
		}
		return retList
	}
	return nil
}
/*
*score		剧本评分
*拍摄系统观众评论列表
*/
func GetStudioEvalution(score float32) []int32{
	for _,value := range studioEvaluationMap{
		if float32(value.scoreMin) <= score && score <= float32(value.scoreMax){
			retList := make([]int32,0,studio_evaluation_num)
			length := len(value.idList)
			randomIndexList:= antnet.RandSliceBetween(0,length,studio_evaluation_num)
			for _,index := range randomIndexList{
				if index <length {
					retList = append(retList, value.idList[index])
				}
			}
			return retList
		}
	}
	return nil
}
