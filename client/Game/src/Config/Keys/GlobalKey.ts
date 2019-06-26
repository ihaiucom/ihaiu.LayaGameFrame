/////////////////////////////////////
// ExportKey生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class GlobalKey
{
	// 0 KeyField
	// 1 KeyValue
	// 2 ID
	// 3 ModuleName
	// 4 Name

	/** 1   --- 初始剧本可选择数量 */
	static Script_choose_num = "Script_choose_num";

	/** 2   --- 电影下线后的持续收益时间（分钟） */
	static Popularize_Duration = "Popularize_Duration";

	/** 3   --- 最多可同时进行持续收益的电影数量 */
	static Max_Movie_Num = "Max_Movie_Num";

	/** 4   --- 初始背包容量 */
	static init_pack_capacity = "init_pack_capacity";

	/** 10   --- 角色初始化信息-玩家初始行动力 */
	static init_player_ap = "init_player_ap";

	/** 11   --- 角色初始化信息-玩家初始行动力上限 */
	static init_player_ap_max = "init_player_ap_max";

	/** 12   --- 角色初始化信息-玩家初始拥有的剧本列表storyseriesID */
	static init_player_own_story = "init_player_own_story";

	/** 13   --- 角色初始化信息-玩家初始拥有的艺人列表actorID */
	static init_player_own_actor = "init_player_own_actor";

	/** 14   --- 角色初始化信息-玩家初始拥有的道具列表itemID,初始金币钻石 */
	static init_player_own_item = "init_player_own_item";

	/** 1000   --- 玩家初始艺人上限数量 */
	static KEY_1025_WanGuChuShi__ShangXianShuLiang = "KEY_1025_WanGuChuShi__ShangXianShuLiang";

	/** 2001   --- 期待值常数a */
	static studio_expect_constant_a = "studio_expect_constant_a";

	/** 2002   --- 期待值常数b */
	static studio_expect_constant_b = "studio_expect_constant_b";

	/** 2003   --- 记录台本数量X */
	static studio_expect_record_quantity = "studio_expect_record_quantity";

	/** 2004   --- 属性权重 */
	static studio_att_rate = "studio_att_rate";

	/** 2005   --- 属性值随机区间 */
	static studio_att_rand = "studio_att_rand";

	/** 2006   --- 结果计算公式系数A */
	static studio_att_rand_constant_a = "studio_att_rand_constant_a";

	/** 2007   --- 结果计算公式系数B */
	static studio_att_rand_constant_b = "studio_att_rand_constant_b";

	/** 2008   --- 拍摄进度条，最高常数 */
	static studio_constant_result_max_constant = "studio_constant_result_max_constant";

	/** 2009   --- 拍摄进度条，及格常数 */
	static studio_constant_result_middle_constant = "studio_constant_result_middle_constant";

	/** 2010   --- 街区评分平均值默认值 */
	static studio_evaluate = "studio_evaluate";

	/** 2011   --- 街区口碑平均值默认值 */
	static studio_opinions = "studio_opinions";

	/** 2012   --- 评分期望𝜇 */
	static studio_rand_grade_mathematical_expectation = "studio_rand_grade_mathematical_expectation";

	/** 2013   --- 评分方差𝜎 */
	static studio_rand_grade_standard_deviation = "studio_rand_grade_standard_deviation";

	/** 2014   --- 评分上限值 */
	static studio_rand_grade_max = "studio_rand_grade_max";

	/** 2015   --- 评分下限值 */
	static studio_rand_grade_min = "studio_rand_grade_min";

	/** 2015   --- 艺人疲劳消耗系数A */
	static studio_fatigue_cost_constant_a = "studio_fatigue_cost_constant_a";

	/** 2016   --- 艺人疲劳消耗系数B */
	static studio_fatigue_cost_constant_b = "studio_fatigue_cost_constant_b";

	/** 2017   --- 剧本下一期开启的评分要求和触发几率 */
	static studio_next_season_open = "studio_next_season_open";

	/** 2018   --- 拍摄随机剧本数量 */
	static studio_random_story_num = "studio_random_story_num";

	/** 2020   --- 艺人属性计算常数C\艺人行动力消耗常数C */
	static studio_prop_constant_c = "studio_prop_constant_c";

	/** 2021   --- 艺人属性计算常数D\艺人行动力消耗常数D */
	static studio_prop_constant_d = "studio_prop_constant_d";

	/** 2022   --- 艺人属性计算常数E\艺人行动力消耗常数E */
	static studio_prop_constant_e = "studio_prop_constant_e";

	/** 2023   --- 艺人行动力消耗常数F */
	static studio_prop_constant_f = "studio_prop_constant_f";

	/** 2024   --- 拍摄消耗行动力道具ID-item表格ID */
	static studio_cost_item = "studio_cost_item";

	/** 2025   --- 拍摄获得道具ID-item表格ID */
	static studio_reward_item = "studio_reward_item";

	/** 2026   --- 持续收益领取时间间隔和获取的奖励次数（秒数&奖励次数） */
	static studio_continue_reward_time = "studio_continue_reward_time";

	/** 2027   --- 评价数量 */
	static studio_evaluation_num = "studio_evaluation_num";

	/** 2028   --- 随机低分天数系数 */
	static studio_continue_reward_date_min_constant = "studio_continue_reward_date_min_constant";

	/** 2029   --- 随机高分天数系数a */
	static studio_continue_reward_date_max_constant_a = "studio_continue_reward_date_max_constant_a";

	/** 2030   --- 随机高分天数系数b */
	static studio_continue_reward_date_max_constant_b = "studio_continue_reward_date_max_constant_b";

	/** 2031   --- 持续收益每天权重随机权重范围 */
	static studio_continue_reward_rand_weight_min = "studio_continue_reward_rand_weight_min";

	/** 2032   --- 高分天数权重系数 */
	static studio_continue_reward_rand_high_score = "studio_continue_reward_rand_high_score";

	/** 2033   --- 低分天数权重系数 */
	static studio_continue_reward_rand_low_score = "studio_continue_reward_rand_low_score";

	/** 2050   --- 剧本搜罗每阶段搜罗冷却加速消耗资源类型和数量 */
	static story_stack_cd_stage_cost = "story_stack_cd_stage_cost";

	/** 2101   --- 拍摄后续收益提示文本 */
	static studio_income_prompt = "studio_income_prompt";

	/** 3001   --- 改名提示最小长度 */
	static rename_prompt_min = "rename_prompt_min";

	/** 3002   --- 改名提示最大长度 */
	static rename_prompt_max = "rename_prompt_max";

	/** 3003   --- 情报宝箱开启需求次数 */
	static information_box = "information_box";

	/** 3004   --- 情报解析-选择情报最小数量 */
	static information_select_min = "information_select_min";

	/** 3005   --- 情报解析-选择情报最大数量 */
	static information_select_max = "information_select_max";

	/** 4001   --- 初始可进行商演次数上限 */
	static initial_performance_limit = "initial_performance_limit";

	/** 4002   --- 可同时进行商演次数上限 */
	static initial_sametime_performance_limit = "initial_sametime_performance_limit";

	/** 4003   --- 商演刷新cd */
	static performance_refresh_cd = "performance_refresh_cd";

	/** 5001   --- 单条普通情报提供的概率 */
	static information_chance = "information_chance";

	/** 5002   --- 单挑情报匹配后提供的权重 */
	static information_match_con = "information_match_con";

	/** 6001   --- 抽取剧本每日恢复次数上限 */
	static story_create_times_max = "story_create_times_max";

	/** 6002   --- 抽取剧本冷却CD */
	static story_create_cd = "story_create_cd";

	/** 6003   --- 跳过冷却时间需要花费的物品类型-item表格ID和单位时间 */
	static story_create_skip_cost = "story_create_skip_cost";

	/** 6004   --- 每日购买抽取次数上限 */
	static story_create_times_purchase_max = "story_create_times_purchase_max";

	/** 6005   --- 购买抽取次数需要花费的物品类型-item表格ID和数量 */
	static story_create_times_purchase_cost = "story_create_times_purchase_cost";

	/** 6006   --- 抽取剧本保底奖励 */
	static story_create_reward = "story_create_reward";

}