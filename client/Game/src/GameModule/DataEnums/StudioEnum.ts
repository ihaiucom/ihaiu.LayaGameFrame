


// 拍摄--事件类型
export enum StudioEventType
{
	storyInvalid				= 0, //无效
	storyCharactersBest			= 1,//特殊事件
	storyFunny 					= 2,//搞笑事件
	storyActor 					= 3,//艺人事件
}



// 拍摄--艺人--状态
export enum StudioActorState
{
	ActorStateInvalid	= 0,
	noraml				= 1,//普通
	help 				= 2,//助阵
	best 				= 3,//最匹配
}


// 拍摄--剧本--类型
export enum StudioStoryType
{
	Invalid 			= 0,
	noraml				= 1,//普通剧本
	gold 				= 2,//金本
}
