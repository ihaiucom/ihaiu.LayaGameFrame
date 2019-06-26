
(function() {
    
var C2S = net.C2S;
var _EventDispatch = net._EventDispatch;

var netlogic = 
{

	gamerLoginC2S: function(session, addr){
		C2S("GamerLoginC2S",{session: session, addr: addr});
	},
	gamerLoginS2C: new _EventDispatch(),

	gamerLoginGetDataC2S: function(){
		C2S("GamerLoginGetDataC2S",{});
	},
	gamerLoginGetDataS2C: new _EventDispatch(),

	serverTimeC2S: function(){
		C2S("ServerTimeC2S",{});
	},
	serverTimeS2C: new _EventDispatch(),

	gamerSubChatChannelC2S: function(channel, open){
		C2S("GamerSubChatChannelC2S",{channel: channel, open: open});
	},
	gamerSubChatChannelS2C: new _EventDispatch(),

	gamerFriendChatC2S: function(toId, msg){
		C2S("GamerFriendChatC2S",{toId: toId, msg: msg});
	},
	gamerFriendChatS2C: new _EventDispatch(),

	gamerWorldChatC2S: function(server, msg){
		C2S("GamerWorldChatC2S",{server: server, msg: msg});
	},
	gamerWorldChatS2C: new _EventDispatch(),

	gamerTestChatC2S: function(toId, msg){
		C2S("GamerTestChatC2S",{toId: toId, msg: msg});
	},
	gamerTestChatS2C: new _EventDispatch(),

	gamerClubRequestC2S: function(clubId, msg){
		C2S("GamerClubRequestC2S",{clubId: clubId, msg: msg});
	},
	gamerClubRequestS2C: new _EventDispatch(),

	gamerNewFriendReqC2S: function(oid, msg){
		C2S("GamerNewFriendReqC2S",{oid: oid, msg: msg});
	},
	gamerNewFriendReqS2C: new _EventDispatch(),

	gamerProcessFriendReqC2S: function(oid, result){
		C2S("GamerProcessFriendReqC2S",{oid: oid, result: result});
	},
	gamerProcessFriendReqS2C: new _EventDispatch(),

	gamerGetMailC2S: function(){
		C2S("GamerGetMailC2S",{});
	},
	gamerGetMailS2C: new _EventDispatch(),

	gamerDelMailC2S: function(mailId){
		C2S("GamerDelMailC2S",{mailId: mailId});
	},
	gamerDelMailS2C: new _EventDispatch(),

	gamerDelHaveReadMailC2S: function(){
		C2S("GamerDelHaveReadMailC2S",{});
	},
	gamerDelHaveReadMailS2C: new _EventDispatch(),

	gamerOneKeyRcvMailRewardC2S: function(){
		C2S("GamerOneKeyRcvMailRewardC2S",{});
	},
	gamerOneKeyRcvMailRewardS2C: new _EventDispatch(),

	gamerChangeMailStateC2S: function(mailId, state){
		C2S("GamerChangeMailStateC2S",{mailId: mailId, state: state});
	},
	gamerChangeMailStateS2C: new _EventDispatch(),

	gamerMatchC2S: function(type){
		C2S("GamerMatchC2S",{type: type});
	},
	gamerMatchS2C: new _EventDispatch(),

	gamerPVPSyncC2S: function(session, input, needFrames, crc, agents, reconn, index, addr, result){
		C2S("GamerPVPSyncC2S",{session: session, input: input, needFrames: needFrames, crc: crc, agents: agents, reconn: reconn, index: index, addr: addr, result: result});
	},
	gamerPVPSyncS2C: new _EventDispatch(),

	gamerGetRealTimeRankC2S: function(){
		C2S("GamerGetRealTimeRankC2S",{});
	},
	gamerGetRealTimeRankS2C: new _EventDispatch(),

	gamerCheckPVPBattleC2S: function(session){
		C2S("GamerCheckPVPBattleC2S",{session: session});
	},
	gamerCheckPVPBattleS2C: new _EventDispatch(),

	gamerUploadWXInfoC2S: function(wxInfo){
		C2S("GamerUploadWXInfoC2S",{wxInfo: wxInfo});
	},
	gamerUploadWXInfoS2C: new _EventDispatch(),

	createLeagueC2S: function(name, declaration){
		C2S("CreateLeagueC2S",{name: name, declaration: declaration});
	},
	createLeagueS2C: new _EventDispatch(),

	gamerGetBackpackC2S: function(){
		C2S("GamerGetBackpackC2S",{});
	},
	gamerGetBackpackS2C: new _EventDispatch(),

	gamerSellItemC2S: function(itemId, num){
		C2S("GamerSellItemC2S",{itemId: itemId, num: num});
	},
	gamerSellItemS2C: new _EventDispatch(),

	gamerUseItemC2S: function(itemId, num){
		C2S("GamerUseItemC2S",{itemId: itemId, num: num});
	},
	gamerUseItemS2C: new _EventDispatch(),

	gamerCompoundItemC2S: function(itemId, num){
		C2S("GamerCompoundItemC2S",{itemId: itemId, num: num});
	},
	gamerCompoundItemS2C: new _EventDispatch(),

	gamerSplitItemC2S: function(itemId, num){
		C2S("GamerSplitItemC2S",{itemId: itemId, num: num});
	},
	gamerSplitItemS2C: new _EventDispatch(),

	gamerGetActorListC2S: function(){
		C2S("GamerGetActorListC2S",{});
	},
	gamerGetActorListS2C: new _EventDispatch(),

	gamerChangeActorNameC2S: function(actorId, name){
		C2S("GamerChangeActorNameC2S",{actorId: actorId, name: name});
	},
	gamerChangeActorNameS2C: new _EventDispatch(),

	gamerActorUpLevelC2S: function(actorId){
		C2S("GamerActorUpLevelC2S",{actorId: actorId});
	},
	gamerActorUpLevelS2C: new _EventDispatch(),

	gamerGetActorSetListC2S: function(){
		C2S("GamerGetActorSetListC2S",{});
	},
	gamerGetActorSetListS2C: new _EventDispatch(),

	gamerGetActorSetRewardC2S: function(actorSetId){
		C2S("GamerGetActorSetRewardC2S",{actorSetId: actorSetId});
	},
	gamerGetActorSetRewardS2C: new _EventDispatch(),

	gamerActorSendGiftC2S: function(actorId, giftId, giftNum){
		C2S("GamerActorSendGiftC2S",{actorId: actorId, giftId: giftId, giftNum: giftNum});
	},
	gamerActorSendGiftS2C: new _EventDispatch(),

	gamerActorLabelUpLevelC2S: function(actorId, labelId, itemId, itemNum){
		C2S("GamerActorLabelUpLevelC2S",{actorId: actorId, labelId: labelId, itemId: itemId, itemNum: itemNum});
	},
	gamerActorLabelUpLevelS2C: new _EventDispatch(),

	gamerActorOpenNewLabelC2S: function(actorId, slotId, labelId){
		C2S("GamerActorOpenNewLabelC2S",{actorId: actorId, slotId: slotId, labelId: labelId});
	},
	gamerActorOpenNewLabelS2C: new _EventDispatch(),

	gamerActorBuyNewLabelC2S: function(actorId, labelId){
		C2S("GamerActorBuyNewLabelC2S",{actorId: actorId, labelId: labelId});
	},
	gamerActorBuyNewLabelS2C: new _EventDispatch(),

	gamerActorAdNewLabelC2S: function(actorId, labelId){
		C2S("GamerActorAdNewLabelC2S",{actorId: actorId, labelId: labelId});
	},
	gamerActorAdNewLabelS2C: new _EventDispatch(),

	gamerActorFriendshipUpLevelC2S: function(actorId, itemNum){
		C2S("GamerActorFriendshipUpLevelC2S",{actorId: actorId, itemNum: itemNum});
	},
	gamerActorFriendshipUpLevelS2C: new _EventDispatch(),

	gamerActorFriendshipTaskReportC2S: function(actorId, taskId, progress, state){
		C2S("GamerActorFriendshipTaskReportC2S",{actorId: actorId, taskId: taskId, progress: progress, state: state});
	},
	gamerActorFriendshipTaskReportS2C: new _EventDispatch(),

	gamerActorSkillUpLevelC2S: function(actorId, skillType){
		C2S("GamerActorSkillUpLevelC2S",{actorId: actorId, skillType: skillType});
	},
	gamerActorSkillUpLevelS2C: new _EventDispatch(),

	gMC2S: function(gm){
		C2S("GMC2S",{gm: gm});
	},
	gMS2C: new _EventDispatch(),

	storyGiveLikeC2S: function(commentId, storyId){
		C2S("StoryGiveLikeC2S",{commentId: commentId, storyId: storyId});
	},
	storyGiveLikeS2C: new _EventDispatch(),

	storyCommentC2S: function(storyId, content){
		C2S("StoryCommentC2S",{storyId: storyId, content: content});
	},
	storyCommentS2C: new _EventDispatch(),

	storyReadCommentC2S: function(storyId){
		C2S("StoryReadCommentC2S",{storyId: storyId});
	},
	storyReadCommentS2C: new _EventDispatch(),

	storyGetCommentC2S: function(storyId){
		C2S("StoryGetCommentC2S",{storyId: storyId});
	},
	storyGetCommentS2C: new _EventDispatch(),

	storyChangeNameC2S: function(storyId, name){
		C2S("StoryChangeNameC2S",{storyId: storyId, name: name});
	},
	storyChangeNameS2C: new _EventDispatch(),

	buildLevelUpC2S: function(buildType){
		C2S("BuildLevelUpC2S",{buildType: buildType});
	},
	buildLevelUpS2C: new _EventDispatch(),

	buildEndOfLevelUpC2S: function(buildType){
		C2S("BuildEndOfLevelUpC2S",{buildType: buildType});
	},
	buildEndOfLevelUpS2C: new _EventDispatch(),

	buildBreakUpC2S: function(buildType){
		C2S("BuildBreakUpC2S",{buildType: buildType});
	},
	buildBreakUpS2C: new _EventDispatch(),

	buildSpeedUpC2S: function(buildType, speedUpType){
		C2S("BuildSpeedUpC2S",{buildType: buildType, speedUpType: speedUpType});
	},
	buildSpeedUpS2C: new _EventDispatch(),

	buildGetProductC2S: function(buildType){
		C2S("BuildGetProductC2S",{buildType: buildType});
	},
	buildGetProductS2C: new _EventDispatch(),

	actorEnterBuildC2S: function(actorId, cellId){
		C2S("ActorEnterBuildC2S",{actorId: actorId, cellId: cellId});
	},
	actorEnterBuildS2C: new _EventDispatch(),

	actorLeaveBuildC2S: function(actorId){
		C2S("ActorLeaveBuildC2S",{actorId: actorId});
	},
	actorLeaveBuildS2C: new _EventDispatch(),

	gamerExtractGashaponC2S: function(gashaponId){
		C2S("GamerExtractGashaponC2S",{gashaponId: gashaponId});
	},
	gamerExtractGashaponS2C: new _EventDispatch(),

	storyExtractGashaponC2S: function(gashaponId){
		C2S("StoryExtractGashaponC2S",{gashaponId: gashaponId});
	},
	storyExtractGashaponS2C: new _EventDispatch(),

	gamerGetAllowanceC2S: function(type){
		C2S("GamerGetAllowanceC2S",{type: type});
	},
	gamerGetAllowanceS2C: new _EventDispatch(),

	getStoryExtractInfoC2S: function(gashaponId){
		C2S("GetStoryExtractInfoC2S",{gashaponId: gashaponId});
	},
	getStoryExtractInfoS2C: new _EventDispatch(),

	cleanStoryExtractCDC2S: function(gashaponId){
		C2S("CleanStoryExtractCDC2S",{gashaponId: gashaponId});
	},
	cleanStoryExtractCDS2C: new _EventDispatch(),

	purchaseStoryExtractNumC2S: function(gashaponId){
		C2S("PurchaseStoryExtractNumC2S",{gashaponId: gashaponId});
	},
	purchaseStoryExtractNumS2C: new _EventDispatch(),

	gamerGetIntelligenceC2S: function(){
		C2S("GamerGetIntelligenceC2S",{});
	},
	gamerGetIntelligenceS2C: new _EventDispatch(),

	gamerChangeIntelligenceStateC2S: function(intelligencesId){
		C2S("GamerChangeIntelligenceStateC2S",{intelligencesId: intelligencesId});
	},
	gamerChangeIntelligenceStateS2C: new _EventDispatch(),

	gamerIntelligenceParseC2S: function(type, intelligencesId){
		C2S("GamerIntelligenceParseC2S",{type: type, intelligencesId: intelligencesId});
	},
	gamerIntelligenceParseS2C: new _EventDispatch(),

	studioC2S: function(){
		C2S("StudioC2S",{});
	},
	studioS2C: new _EventDispatch(),

	studioStorySelectC2S: function(storyId, name){
		C2S("StudioStorySelectC2S",{storyId: storyId, name: name});
	},
	studioStorySelectS2C: new _EventDispatch(),

	studioActorSelectC2S: function(storyCharactersId, actorId){
		C2S("StudioActorSelectC2S",{storyCharactersId: storyCharactersId, actorId: actorId});
	},
	studioActorSelectS2C: new _EventDispatch(),

	studioMatchingDisplayEndC2S: function(){
		C2S("StudioMatchingDisplayEndC2S",{});
	},
	studioMatchingDisplayEndS2C: new _EventDispatch(),

	studioEventOptionSelectC2S: function(eventOption){
		C2S("StudioEventOptionSelectC2S",{eventOption: eventOption});
	},
	studioEventOptionSelectS2C: new _EventDispatch(),

	studioStartC2S: function(){
		C2S("StudioStartC2S",{});
	},
	studioStartS2C: new _EventDispatch(),

	studioNextStepC2S: function(step){
		C2S("StudioNextStepC2S",{step: step});
	},
	studioNextStepS2C: new _EventDispatch(),

	studioContinuedListC2S: function(){
		C2S("StudioContinuedListC2S",{});
	},
	studioContinuedListS2C: new _EventDispatch(),

	studioContinuedReceiveC2S: function(uid){
		C2S("StudioContinuedReceiveC2S",{uid: uid});
	},
	studioContinuedReceiveS2C: new _EventDispatch(),

	studioContinuedReceiveAllC2S: function(){
		C2S("StudioContinuedReceiveAllC2S",{});
	},
	studioContinuedReceiveAllS2C: new _EventDispatch(),

	getActivityRewardC2S: function(activityId){
		C2S("GetActivityRewardC2S",{activityId: activityId});
	},
	getActivityRewardS2C: new _EventDispatch(),

	gamerNotifyLoginOtherS2C: new _EventDispatch(),
	gamerNotifyExpLevelS2C: new _EventDispatch(),
	gamerNotifyNewChatS2C: new _EventDispatch(),
	gamerNotifyNewFriendReqS2C: new _EventDispatch(),
	gamerNotifyNewFriendS2C: new _EventDispatch(),
	gamerNotifyMailS2C: new _EventDispatch(),
	gamerNotifyNewMailS2C: new _EventDispatch(),
	gamerNotifyMatchInfoS2C: new _EventDispatch(),
	gamerNotifyPVPSyncS2C: new _EventDispatch(),
	gamerNotifyNewPVPResultS2C: new _EventDispatch(),
	gamerNotifyIconChangeS2C: new _EventDispatch(),
	gamerNotifyLeagueDataS2C: new _EventDispatch(),
	gamerNotifyLeagueGamerOnlineS2C: new _EventDispatch(),
	gamerNotifyItemS2C: new _EventDispatch(),
	gamerNotifyItemChangeS2C: new _EventDispatch(),
	gamerNotifyActorChangeS2C: new _EventDispatch(),
	gamerNotifyActorSetChangeS2C: new _EventDispatch(),
	gamerNotifyStoryListS2C: new _EventDispatch(),
	gamerNotifyBuildInfoS2C: new _EventDispatch(),
	gamerNotifyGashaponInfoS2C: new _EventDispatch(),
	gamerNotifyIntelligenceS2C: new _EventDispatch(),
	gamerNotifyStudioEventS2C: new _EventDispatch(),
	gamerNotifyStudioFirstRewardS2C: new _EventDispatch(),
	gamerNotifyActivitiesS2C: new _EventDispatch(),
};

for(var key in netlogic)
{
    net.logic[key] = netlogic[key];
}

})()
