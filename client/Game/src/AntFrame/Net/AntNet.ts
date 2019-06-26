import GamerLoginS2C = proto.GamerLoginS2C;
import GamerLoginGetDataS2C = proto.GamerLoginGetDataS2C;
import ServerTimeS2C = proto.ServerTimeS2C;
import GamerSubChatChannelS2C = proto.GamerSubChatChannelS2C;
import GamerFriendChatS2C = proto.GamerFriendChatS2C;
import GamerWorldChatS2C = proto.GamerWorldChatS2C;
import GamerTestChatS2C = proto.GamerTestChatS2C;
import GamerClubRequestS2C = proto.GamerClubRequestS2C;
import GamerNewFriendReqS2C = proto.GamerNewFriendReqS2C;
import GamerProcessFriendReqS2C = proto.GamerProcessFriendReqS2C;
import GamerGetMailS2C = proto.GamerGetMailS2C;
import GamerDelMailS2C = proto.GamerDelMailS2C;
import GamerDelHaveReadMailS2C = proto.GamerDelHaveReadMailS2C;
import GamerOneKeyRcvMailRewardS2C = proto.GamerOneKeyRcvMailRewardS2C;
import GamerChangeMailStateS2C = proto.GamerChangeMailStateS2C;
import MailState = proto.MailState;
import GamerMatchS2C = proto.GamerMatchS2C;
import GamerPVPSyncS2C = proto.GamerPVPSyncS2C;
import PVPInput = proto.PVPInput;
import PVPResult = proto.PVPResult;
import GamerGetRealTimeRankS2C = proto.GamerGetRealTimeRankS2C;
import GamerCheckPVPBattleS2C = proto.GamerCheckPVPBattleS2C;
import GamerUploadWXInfoS2C = proto.GamerUploadWXInfoS2C;
import WXInfo = proto.WXInfo;
import CreateLeagueS2C = proto.CreateLeagueS2C;
import GamerGetBackpackS2C = proto.GamerGetBackpackS2C;
import GamerSellItemS2C = proto.GamerSellItemS2C;
import GamerUseItemS2C = proto.GamerUseItemS2C;
import GamerCompoundItemS2C = proto.GamerCompoundItemS2C;
import GamerSplitItemS2C = proto.GamerSplitItemS2C;
import GamerGetActorListS2C = proto.GamerGetActorListS2C;
import GamerChangeActorNameS2C = proto.GamerChangeActorNameS2C;
import GamerActorUpLevelS2C = proto.GamerActorUpLevelS2C;
import GamerGetActorSetListS2C = proto.GamerGetActorSetListS2C;
import GamerGetActorSetRewardS2C = proto.GamerGetActorSetRewardS2C;
import GamerActorSendGiftS2C = proto.GamerActorSendGiftS2C;
import GamerActorLabelUpLevelS2C = proto.GamerActorLabelUpLevelS2C;
import GamerActorOpenNewLabelS2C = proto.GamerActorOpenNewLabelS2C;
import GamerActorBuyNewLabelS2C = proto.GamerActorBuyNewLabelS2C;
import GamerActorAdNewLabelS2C = proto.GamerActorAdNewLabelS2C;
import GamerActorFriendshipUpLevelS2C = proto.GamerActorFriendshipUpLevelS2C;
import GamerActorFriendshipTaskReportS2C = proto.GamerActorFriendshipTaskReportS2C;
import TaskState = proto.TaskState;
import GamerActorSkillUpLevelS2C = proto.GamerActorSkillUpLevelS2C;
import GMS2C = proto.GMS2C;
import StoryGiveLikeS2C = proto.StoryGiveLikeS2C;
import StoryCommentS2C = proto.StoryCommentS2C;
import StoryReadCommentS2C = proto.StoryReadCommentS2C;
import StoryGetCommentS2C = proto.StoryGetCommentS2C;
import StoryChangeNameS2C = proto.StoryChangeNameS2C;
import BuildLevelUpS2C = proto.BuildLevelUpS2C;
import BuildEndOfLevelUpS2C = proto.BuildEndOfLevelUpS2C;
import BuildBreakUpS2C = proto.BuildBreakUpS2C;
import BuildSpeedUpS2C = proto.BuildSpeedUpS2C;
import SpeedUpType = proto.SpeedUpType;
import BuildGetProductS2C = proto.BuildGetProductS2C;
import ActorEnterBuildS2C = proto.ActorEnterBuildS2C;
import ActorLeaveBuildS2C = proto.ActorLeaveBuildS2C;
import GamerExtractGashaponS2C = proto.GamerExtractGashaponS2C;
import StoryExtractGashaponS2C = proto.StoryExtractGashaponS2C;
import GamerGetAllowanceS2C = proto.GamerGetAllowanceS2C;
import GetStoryExtractInfoS2C = proto.GetStoryExtractInfoS2C;
import CleanStoryExtractCDS2C = proto.CleanStoryExtractCDS2C;
import PurchaseStoryExtractNumS2C = proto.PurchaseStoryExtractNumS2C;
import GamerGetIntelligenceS2C = proto.GamerGetIntelligenceS2C;
import GamerChangeIntelligenceStateS2C = proto.GamerChangeIntelligenceStateS2C;
import GamerIntelligenceParseS2C = proto.GamerIntelligenceParseS2C;
import IntelligencePaseType = proto.IntelligencePaseType;
import StudioS2C = proto.StudioS2C;
import StudioStorySelectS2C = proto.StudioStorySelectS2C;
import StudioActorSelectS2C = proto.StudioActorSelectS2C;
import StudioMatchingDisplayEndS2C = proto.StudioMatchingDisplayEndS2C;
import StudioEventOptionSelectS2C = proto.StudioEventOptionSelectS2C;
import StudioStartS2C = proto.StudioStartS2C;
import StudioNextStepS2C = proto.StudioNextStepS2C;
import StudioStep = proto.StudioStep;
import StudioContinuedListS2C = proto.StudioContinuedListS2C;
import StudioContinuedReceiveS2C = proto.StudioContinuedReceiveS2C;
import StudioContinuedReceiveAllS2C = proto.StudioContinuedReceiveAllS2C;
import GetActivityRewardS2C = proto.GetActivityRewardS2C;

declare var net;
export default class AntNet
{
	public static get onError(){
		return net.logic.onError;
	}
	public static get onConnect(){
		return net.logic.onConnect;
	}
	public static get onClose(){
		return net.logic.onClose;
	}
	public static get onReconnect(){
		return net.logic.onReconnect;
	}
	public static get logicPing() {
		return net.logic.ping;
	}

	public static GamerLoginC2S(session: string, addr: string){
		net.logic.gamerLoginC2S(session, addr);
	}

	public static get gamerLoginS2C(){
		return net.logic.gamerLoginS2C;
	}

	public static async AsyncGamerLoginC2S(session: string, addr: string):Promise<GamerLoginS2C>{
		return new Promise<GamerLoginS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginS2C.on(fun);
			AntNet.GamerLoginC2S(session, addr);
		});
	}

	public static GamerLoginGetDataC2S(){
		net.logic.gamerLoginGetDataC2S();
	}

	public static get gamerLoginGetDataS2C(){
		return net.logic.gamerLoginGetDataS2C;
	}

	public static async AsyncGamerLoginGetDataC2S():Promise<GamerLoginGetDataS2C>{
		return new Promise<GamerLoginGetDataS2C>((resolve)=>{
			let s2c = {error:200} as GamerLoginGetDataS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLoginGetDataS2C){
				clearTimeout(timeObj);
				AntNet.gamerLoginGetDataS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLoginGetDataS2C.on(fun);
			AntNet.GamerLoginGetDataC2S();
		});
	}

	public static ServerTimeC2S(){
		net.logic.serverTimeC2S();
	}

	public static get serverTimeS2C(){
		return net.logic.serverTimeS2C;
	}

	public static async AsyncServerTimeC2S():Promise<ServerTimeS2C>{
		return new Promise<ServerTimeS2C>((resolve)=>{
			let s2c = {error:200} as ServerTimeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ServerTimeS2C){
				clearTimeout(timeObj);
				AntNet.serverTimeS2C.off(fun);
				resolve(e);
			}
			AntNet.serverTimeS2C.on(fun);
			AntNet.ServerTimeC2S();
		});
	}

	public static GamerSubChatChannelC2S(channel: number, open: boolean){
		net.logic.gamerSubChatChannelC2S(channel, open);
	}

	public static get gamerSubChatChannelS2C(){
		return net.logic.gamerSubChatChannelS2C;
	}

	public static async AsyncGamerSubChatChannelC2S(channel: number, open: boolean):Promise<GamerSubChatChannelS2C>{
		return new Promise<GamerSubChatChannelS2C>((resolve)=>{
			let s2c = {error:200} as GamerSubChatChannelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSubChatChannelS2C){
				clearTimeout(timeObj);
				AntNet.gamerSubChatChannelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSubChatChannelS2C.on(fun);
			AntNet.GamerSubChatChannelC2S(channel, open);
		});
	}

	public static GamerFriendChatC2S(toId: number, msg: string){
		net.logic.gamerFriendChatC2S(toId, msg);
	}

	public static get gamerFriendChatS2C(){
		return net.logic.gamerFriendChatS2C;
	}

	public static async AsyncGamerFriendChatC2S(toId: number, msg: string):Promise<GamerFriendChatS2C>{
		return new Promise<GamerFriendChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerFriendChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerFriendChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerFriendChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerFriendChatS2C.on(fun);
			AntNet.GamerFriendChatC2S(toId, msg);
		});
	}

	public static GamerWorldChatC2S(server: number, msg: string){
		net.logic.gamerWorldChatC2S(server, msg);
	}

	public static get gamerWorldChatS2C(){
		return net.logic.gamerWorldChatS2C;
	}

	public static async AsyncGamerWorldChatC2S(server: number, msg: string):Promise<GamerWorldChatS2C>{
		return new Promise<GamerWorldChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerWorldChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerWorldChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerWorldChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerWorldChatS2C.on(fun);
			AntNet.GamerWorldChatC2S(server, msg);
		});
	}

	public static GamerTestChatC2S(toId: number, msg: string){
		net.logic.gamerTestChatC2S(toId, msg);
	}

	public static get gamerTestChatS2C(){
		return net.logic.gamerTestChatS2C;
	}

	public static async AsyncGamerTestChatC2S(toId: number, msg: string):Promise<GamerTestChatS2C>{
		return new Promise<GamerTestChatS2C>((resolve)=>{
			let s2c = {error:200} as GamerTestChatS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerTestChatS2C){
				clearTimeout(timeObj);
				AntNet.gamerTestChatS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerTestChatS2C.on(fun);
			AntNet.GamerTestChatC2S(toId, msg);
		});
	}

	public static GamerClubRequestC2S(clubId: number, msg: string){
		net.logic.gamerClubRequestC2S(clubId, msg);
	}

	public static get gamerClubRequestS2C(){
		return net.logic.gamerClubRequestS2C;
	}

	public static async AsyncGamerClubRequestC2S(clubId: number, msg: string):Promise<GamerClubRequestS2C>{
		return new Promise<GamerClubRequestS2C>((resolve)=>{
			let s2c = {error:200} as GamerClubRequestS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerClubRequestS2C){
				clearTimeout(timeObj);
				AntNet.gamerClubRequestS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerClubRequestS2C.on(fun);
			AntNet.GamerClubRequestC2S(clubId, msg);
		});
	}

	public static GamerNewFriendReqC2S(oid: number, msg: string){
		net.logic.gamerNewFriendReqC2S(oid, msg);
	}

	public static get gamerNewFriendReqS2C(){
		return net.logic.gamerNewFriendReqS2C;
	}

	public static async AsyncGamerNewFriendReqC2S(oid: number, msg: string):Promise<GamerNewFriendReqS2C>{
		return new Promise<GamerNewFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewFriendReqS2C.on(fun);
			AntNet.GamerNewFriendReqC2S(oid, msg);
		});
	}

	public static GamerProcessFriendReqC2S(oid: number, result: boolean){
		net.logic.gamerProcessFriendReqC2S(oid, result);
	}

	public static get gamerProcessFriendReqS2C(){
		return net.logic.gamerProcessFriendReqS2C;
	}

	public static async AsyncGamerProcessFriendReqC2S(oid: number, result: boolean):Promise<GamerProcessFriendReqS2C>{
		return new Promise<GamerProcessFriendReqS2C>((resolve)=>{
			let s2c = {error:200} as GamerProcessFriendReqS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerProcessFriendReqS2C){
				clearTimeout(timeObj);
				AntNet.gamerProcessFriendReqS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerProcessFriendReqS2C.on(fun);
			AntNet.GamerProcessFriendReqC2S(oid, result);
		});
	}

	public static GamerGetMailC2S(){
		net.logic.gamerGetMailC2S();
	}

	public static get gamerGetMailS2C(){
		return net.logic.gamerGetMailS2C;
	}

	public static async AsyncGamerGetMailC2S():Promise<GamerGetMailS2C>{
		return new Promise<GamerGetMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetMailS2C.on(fun);
			AntNet.GamerGetMailC2S();
		});
	}

	public static GamerDelMailC2S(mailId: string){
		net.logic.gamerDelMailC2S(mailId);
	}

	public static get gamerDelMailS2C(){
		return net.logic.gamerDelMailS2C;
	}

	public static async AsyncGamerDelMailC2S(mailId: string):Promise<GamerDelMailS2C>{
		return new Promise<GamerDelMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelMailS2C.on(fun);
			AntNet.GamerDelMailC2S(mailId);
		});
	}

	public static GamerDelHaveReadMailC2S(){
		net.logic.gamerDelHaveReadMailC2S();
	}

	public static get gamerDelHaveReadMailS2C(){
		return net.logic.gamerDelHaveReadMailS2C;
	}

	public static async AsyncGamerDelHaveReadMailC2S():Promise<GamerDelHaveReadMailS2C>{
		return new Promise<GamerDelHaveReadMailS2C>((resolve)=>{
			let s2c = {error:200} as GamerDelHaveReadMailS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerDelHaveReadMailS2C){
				clearTimeout(timeObj);
				AntNet.gamerDelHaveReadMailS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerDelHaveReadMailS2C.on(fun);
			AntNet.GamerDelHaveReadMailC2S();
		});
	}

	public static GamerOneKeyRcvMailRewardC2S(){
		net.logic.gamerOneKeyRcvMailRewardC2S();
	}

	public static get gamerOneKeyRcvMailRewardS2C(){
		return net.logic.gamerOneKeyRcvMailRewardS2C;
	}

	public static async AsyncGamerOneKeyRcvMailRewardC2S():Promise<GamerOneKeyRcvMailRewardS2C>{
		return new Promise<GamerOneKeyRcvMailRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerOneKeyRcvMailRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerOneKeyRcvMailRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerOneKeyRcvMailRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerOneKeyRcvMailRewardS2C.on(fun);
			AntNet.GamerOneKeyRcvMailRewardC2S();
		});
	}

	public static GamerChangeMailStateC2S(mailId: string, state: MailState){
		net.logic.gamerChangeMailStateC2S(mailId, state);
	}

	public static get gamerChangeMailStateS2C(){
		return net.logic.gamerChangeMailStateS2C;
	}

	public static async AsyncGamerChangeMailStateC2S(mailId: string, state: MailState):Promise<GamerChangeMailStateS2C>{
		return new Promise<GamerChangeMailStateS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeMailStateS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeMailStateS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeMailStateS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeMailStateS2C.on(fun);
			AntNet.GamerChangeMailStateC2S(mailId, state);
		});
	}

	public static GamerMatchC2S(type: number){
		net.logic.gamerMatchC2S(type);
	}

	public static get gamerMatchS2C(){
		return net.logic.gamerMatchS2C;
	}

	public static async AsyncGamerMatchC2S(type: number):Promise<GamerMatchS2C>{
		return new Promise<GamerMatchS2C>((resolve)=>{
			let s2c = {error:200} as GamerMatchS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerMatchS2C){
				clearTimeout(timeObj);
				AntNet.gamerMatchS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerMatchS2C.on(fun);
			AntNet.GamerMatchC2S(type);
		});
	}

	public static GamerPVPSyncC2S(session: string, input: PVPInput, needFrames: number[], crc: number[], agents: PVPInput[], reconn: boolean, index: number, addr: string, result: PVPResult){
		net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
	}

	public static get gamerPVPSyncS2C(){
		return net.logic.gamerPVPSyncS2C;
	}

	public static async AsyncGamerPVPSyncC2S(session: string, input: PVPInput, needFrames: number[], crc: number[], agents: PVPInput[], reconn: boolean, index: number, addr: string, result: PVPResult):Promise<GamerPVPSyncS2C>{
		return new Promise<GamerPVPSyncS2C>((resolve)=>{
			let s2c = {error:200} as GamerPVPSyncS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerPVPSyncS2C){
				clearTimeout(timeObj);
				AntNet.gamerPVPSyncS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerPVPSyncS2C.on(fun);
			AntNet.GamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
		});
	}

	public static GamerGetRealTimeRankC2S(){
		net.logic.gamerGetRealTimeRankC2S();
	}

	public static get gamerGetRealTimeRankS2C(){
		return net.logic.gamerGetRealTimeRankS2C;
	}

	public static async AsyncGamerGetRealTimeRankC2S():Promise<GamerGetRealTimeRankS2C>{
		return new Promise<GamerGetRealTimeRankS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetRealTimeRankS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetRealTimeRankS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetRealTimeRankS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetRealTimeRankS2C.on(fun);
			AntNet.GamerGetRealTimeRankC2S();
		});
	}

	public static GamerCheckPVPBattleC2S(session: string){
		net.logic.gamerCheckPVPBattleC2S(session);
	}

	public static get gamerCheckPVPBattleS2C(){
		return net.logic.gamerCheckPVPBattleS2C;
	}

	public static async AsyncGamerCheckPVPBattleC2S(session: string):Promise<GamerCheckPVPBattleS2C>{
		return new Promise<GamerCheckPVPBattleS2C>((resolve)=>{
			let s2c = {error:200} as GamerCheckPVPBattleS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCheckPVPBattleS2C){
				clearTimeout(timeObj);
				AntNet.gamerCheckPVPBattleS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCheckPVPBattleS2C.on(fun);
			AntNet.GamerCheckPVPBattleC2S(session);
		});
	}

	public static GamerUploadWXInfoC2S(wxInfo: WXInfo){
		net.logic.gamerUploadWXInfoC2S(wxInfo);
	}

	public static get gamerUploadWXInfoS2C(){
		return net.logic.gamerUploadWXInfoS2C;
	}

	public static async AsyncGamerUploadWXInfoC2S(wxInfo: WXInfo):Promise<GamerUploadWXInfoS2C>{
		return new Promise<GamerUploadWXInfoS2C>((resolve)=>{
			let s2c = {error:200} as GamerUploadWXInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUploadWXInfoS2C){
				clearTimeout(timeObj);
				AntNet.gamerUploadWXInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUploadWXInfoS2C.on(fun);
			AntNet.GamerUploadWXInfoC2S(wxInfo);
		});
	}

	public static CreateLeagueC2S(name: string, declaration: string){
		net.logic.createLeagueC2S(name, declaration);
	}

	public static get createLeagueS2C(){
		return net.logic.createLeagueS2C;
	}

	public static async AsyncCreateLeagueC2S(name: string, declaration: string):Promise<CreateLeagueS2C>{
		return new Promise<CreateLeagueS2C>((resolve)=>{
			let s2c = {error:200} as CreateLeagueS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:CreateLeagueS2C){
				clearTimeout(timeObj);
				AntNet.createLeagueS2C.off(fun);
				resolve(e);
			}
			AntNet.createLeagueS2C.on(fun);
			AntNet.CreateLeagueC2S(name, declaration);
		});
	}

	public static GamerGetBackpackC2S(){
		net.logic.gamerGetBackpackC2S();
	}

	public static get gamerGetBackpackS2C(){
		return net.logic.gamerGetBackpackS2C;
	}

	public static async AsyncGamerGetBackpackC2S():Promise<GamerGetBackpackS2C>{
		return new Promise<GamerGetBackpackS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetBackpackS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetBackpackS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetBackpackS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetBackpackS2C.on(fun);
			AntNet.GamerGetBackpackC2S();
		});
	}

	public static GamerSellItemC2S(itemId: number, num: number){
		net.logic.gamerSellItemC2S(itemId, num);
	}

	public static get gamerSellItemS2C(){
		return net.logic.gamerSellItemS2C;
	}

	public static async AsyncGamerSellItemC2S(itemId: number, num: number):Promise<GamerSellItemS2C>{
		return new Promise<GamerSellItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerSellItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSellItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerSellItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSellItemS2C.on(fun);
			AntNet.GamerSellItemC2S(itemId, num);
		});
	}

	public static GamerUseItemC2S(itemId: number, num: number){
		net.logic.gamerUseItemC2S(itemId, num);
	}

	public static get gamerUseItemS2C(){
		return net.logic.gamerUseItemS2C;
	}

	public static async AsyncGamerUseItemC2S(itemId: number, num: number):Promise<GamerUseItemS2C>{
		return new Promise<GamerUseItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerUseItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerUseItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerUseItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerUseItemS2C.on(fun);
			AntNet.GamerUseItemC2S(itemId, num);
		});
	}

	public static GamerCompoundItemC2S(itemId: number, num: number){
		net.logic.gamerCompoundItemC2S(itemId, num);
	}

	public static get gamerCompoundItemS2C(){
		return net.logic.gamerCompoundItemS2C;
	}

	public static async AsyncGamerCompoundItemC2S(itemId: number, num: number):Promise<GamerCompoundItemS2C>{
		return new Promise<GamerCompoundItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerCompoundItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerCompoundItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerCompoundItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerCompoundItemS2C.on(fun);
			AntNet.GamerCompoundItemC2S(itemId, num);
		});
	}

	public static GamerSplitItemC2S(itemId: number, num: number){
		net.logic.gamerSplitItemC2S(itemId, num);
	}

	public static get gamerSplitItemS2C(){
		return net.logic.gamerSplitItemS2C;
	}

	public static async AsyncGamerSplitItemC2S(itemId: number, num: number):Promise<GamerSplitItemS2C>{
		return new Promise<GamerSplitItemS2C>((resolve)=>{
			let s2c = {error:200} as GamerSplitItemS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerSplitItemS2C){
				clearTimeout(timeObj);
				AntNet.gamerSplitItemS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerSplitItemS2C.on(fun);
			AntNet.GamerSplitItemC2S(itemId, num);
		});
	}

	public static GamerGetActorListC2S(){
		net.logic.gamerGetActorListC2S();
	}

	public static get gamerGetActorListS2C(){
		return net.logic.gamerGetActorListS2C;
	}

	public static async AsyncGamerGetActorListC2S():Promise<GamerGetActorListS2C>{
		return new Promise<GamerGetActorListS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetActorListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetActorListS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetActorListS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetActorListS2C.on(fun);
			AntNet.GamerGetActorListC2S();
		});
	}

	public static GamerChangeActorNameC2S(actorId: number, name: string){
		net.logic.gamerChangeActorNameC2S(actorId, name);
	}

	public static get gamerChangeActorNameS2C(){
		return net.logic.gamerChangeActorNameS2C;
	}

	public static async AsyncGamerChangeActorNameC2S(actorId: number, name: string):Promise<GamerChangeActorNameS2C>{
		return new Promise<GamerChangeActorNameS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeActorNameS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeActorNameS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeActorNameS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeActorNameS2C.on(fun);
			AntNet.GamerChangeActorNameC2S(actorId, name);
		});
	}

	public static GamerActorUpLevelC2S(actorId: number){
		net.logic.gamerActorUpLevelC2S(actorId);
	}

	public static get gamerActorUpLevelS2C(){
		return net.logic.gamerActorUpLevelS2C;
	}

	public static async AsyncGamerActorUpLevelC2S(actorId: number):Promise<GamerActorUpLevelS2C>{
		return new Promise<GamerActorUpLevelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorUpLevelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorUpLevelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorUpLevelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorUpLevelS2C.on(fun);
			AntNet.GamerActorUpLevelC2S(actorId);
		});
	}

	public static GamerGetActorSetListC2S(){
		net.logic.gamerGetActorSetListC2S();
	}

	public static get gamerGetActorSetListS2C(){
		return net.logic.gamerGetActorSetListS2C;
	}

	public static async AsyncGamerGetActorSetListC2S():Promise<GamerGetActorSetListS2C>{
		return new Promise<GamerGetActorSetListS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetActorSetListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetActorSetListS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetActorSetListS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetActorSetListS2C.on(fun);
			AntNet.GamerGetActorSetListC2S();
		});
	}

	public static GamerGetActorSetRewardC2S(actorSetId: number){
		net.logic.gamerGetActorSetRewardC2S(actorSetId);
	}

	public static get gamerGetActorSetRewardS2C(){
		return net.logic.gamerGetActorSetRewardS2C;
	}

	public static async AsyncGamerGetActorSetRewardC2S(actorSetId: number):Promise<GamerGetActorSetRewardS2C>{
		return new Promise<GamerGetActorSetRewardS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetActorSetRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetActorSetRewardS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetActorSetRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetActorSetRewardS2C.on(fun);
			AntNet.GamerGetActorSetRewardC2S(actorSetId);
		});
	}

	public static GamerActorSendGiftC2S(actorId: number, giftId: number, giftNum: number){
		net.logic.gamerActorSendGiftC2S(actorId, giftId, giftNum);
	}

	public static get gamerActorSendGiftS2C(){
		return net.logic.gamerActorSendGiftS2C;
	}

	public static async AsyncGamerActorSendGiftC2S(actorId: number, giftId: number, giftNum: number):Promise<GamerActorSendGiftS2C>{
		return new Promise<GamerActorSendGiftS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorSendGiftS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorSendGiftS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorSendGiftS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorSendGiftS2C.on(fun);
			AntNet.GamerActorSendGiftC2S(actorId, giftId, giftNum);
		});
	}

	public static GamerActorLabelUpLevelC2S(actorId: number, labelId: number, itemId: number, itemNum: number){
		net.logic.gamerActorLabelUpLevelC2S(actorId, labelId, itemId, itemNum);
	}

	public static get gamerActorLabelUpLevelS2C(){
		return net.logic.gamerActorLabelUpLevelS2C;
	}

	public static async AsyncGamerActorLabelUpLevelC2S(actorId: number, labelId: number, itemId: number, itemNum: number):Promise<GamerActorLabelUpLevelS2C>{
		return new Promise<GamerActorLabelUpLevelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorLabelUpLevelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorLabelUpLevelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorLabelUpLevelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorLabelUpLevelS2C.on(fun);
			AntNet.GamerActorLabelUpLevelC2S(actorId, labelId, itemId, itemNum);
		});
	}

	public static GamerActorOpenNewLabelC2S(actorId: number, slotId: number, labelId: number){
		net.logic.gamerActorOpenNewLabelC2S(actorId, slotId, labelId);
	}

	public static get gamerActorOpenNewLabelS2C(){
		return net.logic.gamerActorOpenNewLabelS2C;
	}

	public static async AsyncGamerActorOpenNewLabelC2S(actorId: number, slotId: number, labelId: number):Promise<GamerActorOpenNewLabelS2C>{
		return new Promise<GamerActorOpenNewLabelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorOpenNewLabelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorOpenNewLabelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorOpenNewLabelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorOpenNewLabelS2C.on(fun);
			AntNet.GamerActorOpenNewLabelC2S(actorId, slotId, labelId);
		});
	}

	public static GamerActorBuyNewLabelC2S(actorId: number, labelId: number){
		net.logic.gamerActorBuyNewLabelC2S(actorId, labelId);
	}

	public static get gamerActorBuyNewLabelS2C(){
		return net.logic.gamerActorBuyNewLabelS2C;
	}

	public static async AsyncGamerActorBuyNewLabelC2S(actorId: number, labelId: number):Promise<GamerActorBuyNewLabelS2C>{
		return new Promise<GamerActorBuyNewLabelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorBuyNewLabelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorBuyNewLabelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorBuyNewLabelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorBuyNewLabelS2C.on(fun);
			AntNet.GamerActorBuyNewLabelC2S(actorId, labelId);
		});
	}

	public static GamerActorAdNewLabelC2S(actorId: number, labelId: number){
		net.logic.gamerActorAdNewLabelC2S(actorId, labelId);
	}

	public static get gamerActorAdNewLabelS2C(){
		return net.logic.gamerActorAdNewLabelS2C;
	}

	public static async AsyncGamerActorAdNewLabelC2S(actorId: number, labelId: number):Promise<GamerActorAdNewLabelS2C>{
		return new Promise<GamerActorAdNewLabelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorAdNewLabelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorAdNewLabelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorAdNewLabelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorAdNewLabelS2C.on(fun);
			AntNet.GamerActorAdNewLabelC2S(actorId, labelId);
		});
	}

	public static GamerActorFriendshipUpLevelC2S(actorId: number, itemNum: number){
		net.logic.gamerActorFriendshipUpLevelC2S(actorId, itemNum);
	}

	public static get gamerActorFriendshipUpLevelS2C(){
		return net.logic.gamerActorFriendshipUpLevelS2C;
	}

	public static async AsyncGamerActorFriendshipUpLevelC2S(actorId: number, itemNum: number):Promise<GamerActorFriendshipUpLevelS2C>{
		return new Promise<GamerActorFriendshipUpLevelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorFriendshipUpLevelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorFriendshipUpLevelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorFriendshipUpLevelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorFriendshipUpLevelS2C.on(fun);
			AntNet.GamerActorFriendshipUpLevelC2S(actorId, itemNum);
		});
	}

	public static GamerActorFriendshipTaskReportC2S(actorId: number, taskId: number, progress: number, state: TaskState){
		net.logic.gamerActorFriendshipTaskReportC2S(actorId, taskId, progress, state);
	}

	public static get gamerActorFriendshipTaskReportS2C(){
		return net.logic.gamerActorFriendshipTaskReportS2C;
	}

	public static async AsyncGamerActorFriendshipTaskReportC2S(actorId: number, taskId: number, progress: number, state: TaskState):Promise<GamerActorFriendshipTaskReportS2C>{
		return new Promise<GamerActorFriendshipTaskReportS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorFriendshipTaskReportS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorFriendshipTaskReportS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorFriendshipTaskReportS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorFriendshipTaskReportS2C.on(fun);
			AntNet.GamerActorFriendshipTaskReportC2S(actorId, taskId, progress, state);
		});
	}

	public static GamerActorSkillUpLevelC2S(actorId: number, skillType: number){
		net.logic.gamerActorSkillUpLevelC2S(actorId, skillType);
	}

	public static get gamerActorSkillUpLevelS2C(){
		return net.logic.gamerActorSkillUpLevelS2C;
	}

	public static async AsyncGamerActorSkillUpLevelC2S(actorId: number, skillType: number):Promise<GamerActorSkillUpLevelS2C>{
		return new Promise<GamerActorSkillUpLevelS2C>((resolve)=>{
			let s2c = {error:200} as GamerActorSkillUpLevelS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerActorSkillUpLevelS2C){
				clearTimeout(timeObj);
				AntNet.gamerActorSkillUpLevelS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerActorSkillUpLevelS2C.on(fun);
			AntNet.GamerActorSkillUpLevelC2S(actorId, skillType);
		});
	}

	public static GMC2S(gm: string){
		net.logic.gMC2S(gm);
	}

	public static get gMS2C(){
		return net.logic.gMS2C;
	}

	public static async AsyncGMC2S(gm: string):Promise<GMS2C>{
		return new Promise<GMS2C>((resolve)=>{
			let s2c = {error:200} as GMS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GMS2C){
				clearTimeout(timeObj);
				AntNet.gMS2C.off(fun);
				resolve(e);
			}
			AntNet.gMS2C.on(fun);
			AntNet.GMC2S(gm);
		});
	}

	public static StoryGiveLikeC2S(commentId: number, storyId: number){
		net.logic.storyGiveLikeC2S(commentId, storyId);
	}

	public static get storyGiveLikeS2C(){
		return net.logic.storyGiveLikeS2C;
	}

	public static async AsyncStoryGiveLikeC2S(commentId: number, storyId: number):Promise<StoryGiveLikeS2C>{
		return new Promise<StoryGiveLikeS2C>((resolve)=>{
			let s2c = {error:200} as StoryGiveLikeS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryGiveLikeS2C){
				clearTimeout(timeObj);
				AntNet.storyGiveLikeS2C.off(fun);
				resolve(e);
			}
			AntNet.storyGiveLikeS2C.on(fun);
			AntNet.StoryGiveLikeC2S(commentId, storyId);
		});
	}

	public static StoryCommentC2S(storyId: number, content: string){
		net.logic.storyCommentC2S(storyId, content);
	}

	public static get storyCommentS2C(){
		return net.logic.storyCommentS2C;
	}

	public static async AsyncStoryCommentC2S(storyId: number, content: string):Promise<StoryCommentS2C>{
		return new Promise<StoryCommentS2C>((resolve)=>{
			let s2c = {error:200} as StoryCommentS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryCommentS2C){
				clearTimeout(timeObj);
				AntNet.storyCommentS2C.off(fun);
				resolve(e);
			}
			AntNet.storyCommentS2C.on(fun);
			AntNet.StoryCommentC2S(storyId, content);
		});
	}

	public static StoryReadCommentC2S(storyId: number){
		net.logic.storyReadCommentC2S(storyId);
	}

	public static get storyReadCommentS2C(){
		return net.logic.storyReadCommentS2C;
	}

	public static async AsyncStoryReadCommentC2S(storyId: number):Promise<StoryReadCommentS2C>{
		return new Promise<StoryReadCommentS2C>((resolve)=>{
			let s2c = {error:200} as StoryReadCommentS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryReadCommentS2C){
				clearTimeout(timeObj);
				AntNet.storyReadCommentS2C.off(fun);
				resolve(e);
			}
			AntNet.storyReadCommentS2C.on(fun);
			AntNet.StoryReadCommentC2S(storyId);
		});
	}

	public static StoryGetCommentC2S(storyId: number){
		net.logic.storyGetCommentC2S(storyId);
	}

	public static get storyGetCommentS2C(){
		return net.logic.storyGetCommentS2C;
	}

	public static async AsyncStoryGetCommentC2S(storyId: number):Promise<StoryGetCommentS2C>{
		return new Promise<StoryGetCommentS2C>((resolve)=>{
			let s2c = {error:200} as StoryGetCommentS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryGetCommentS2C){
				clearTimeout(timeObj);
				AntNet.storyGetCommentS2C.off(fun);
				resolve(e);
			}
			AntNet.storyGetCommentS2C.on(fun);
			AntNet.StoryGetCommentC2S(storyId);
		});
	}

	public static StoryChangeNameC2S(storyId: number, name: string){
		net.logic.storyChangeNameC2S(storyId, name);
	}

	public static get storyChangeNameS2C(){
		return net.logic.storyChangeNameS2C;
	}

	public static async AsyncStoryChangeNameC2S(storyId: number, name: string):Promise<StoryChangeNameS2C>{
		return new Promise<StoryChangeNameS2C>((resolve)=>{
			let s2c = {error:200} as StoryChangeNameS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryChangeNameS2C){
				clearTimeout(timeObj);
				AntNet.storyChangeNameS2C.off(fun);
				resolve(e);
			}
			AntNet.storyChangeNameS2C.on(fun);
			AntNet.StoryChangeNameC2S(storyId, name);
		});
	}

	public static BuildLevelUpC2S(buildType: number){
		net.logic.buildLevelUpC2S(buildType);
	}

	public static get buildLevelUpS2C(){
		return net.logic.buildLevelUpS2C;
	}

	public static async AsyncBuildLevelUpC2S(buildType: number):Promise<BuildLevelUpS2C>{
		return new Promise<BuildLevelUpS2C>((resolve)=>{
			let s2c = {error:200} as BuildLevelUpS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuildLevelUpS2C){
				clearTimeout(timeObj);
				AntNet.buildLevelUpS2C.off(fun);
				resolve(e);
			}
			AntNet.buildLevelUpS2C.on(fun);
			AntNet.BuildLevelUpC2S(buildType);
		});
	}

	public static BuildEndOfLevelUpC2S(buildType: number){
		net.logic.buildEndOfLevelUpC2S(buildType);
	}

	public static get buildEndOfLevelUpS2C(){
		return net.logic.buildEndOfLevelUpS2C;
	}

	public static async AsyncBuildEndOfLevelUpC2S(buildType: number):Promise<BuildEndOfLevelUpS2C>{
		return new Promise<BuildEndOfLevelUpS2C>((resolve)=>{
			let s2c = {error:200} as BuildEndOfLevelUpS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuildEndOfLevelUpS2C){
				clearTimeout(timeObj);
				AntNet.buildEndOfLevelUpS2C.off(fun);
				resolve(e);
			}
			AntNet.buildEndOfLevelUpS2C.on(fun);
			AntNet.BuildEndOfLevelUpC2S(buildType);
		});
	}

	public static BuildBreakUpC2S(buildType: number){
		net.logic.buildBreakUpC2S(buildType);
	}

	public static get buildBreakUpS2C(){
		return net.logic.buildBreakUpS2C;
	}

	public static async AsyncBuildBreakUpC2S(buildType: number):Promise<BuildBreakUpS2C>{
		return new Promise<BuildBreakUpS2C>((resolve)=>{
			let s2c = {error:200} as BuildBreakUpS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuildBreakUpS2C){
				clearTimeout(timeObj);
				AntNet.buildBreakUpS2C.off(fun);
				resolve(e);
			}
			AntNet.buildBreakUpS2C.on(fun);
			AntNet.BuildBreakUpC2S(buildType);
		});
	}

	public static BuildSpeedUpC2S(buildType: number, speedUpType: SpeedUpType){
		net.logic.buildSpeedUpC2S(buildType, speedUpType);
	}

	public static get buildSpeedUpS2C(){
		return net.logic.buildSpeedUpS2C;
	}

	public static async AsyncBuildSpeedUpC2S(buildType: number, speedUpType: SpeedUpType):Promise<BuildSpeedUpS2C>{
		return new Promise<BuildSpeedUpS2C>((resolve)=>{
			let s2c = {error:200} as BuildSpeedUpS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuildSpeedUpS2C){
				clearTimeout(timeObj);
				AntNet.buildSpeedUpS2C.off(fun);
				resolve(e);
			}
			AntNet.buildSpeedUpS2C.on(fun);
			AntNet.BuildSpeedUpC2S(buildType, speedUpType);
		});
	}

	public static BuildGetProductC2S(buildType: number){
		net.logic.buildGetProductC2S(buildType);
	}

	public static get buildGetProductS2C(){
		return net.logic.buildGetProductS2C;
	}

	public static async AsyncBuildGetProductC2S(buildType: number):Promise<BuildGetProductS2C>{
		return new Promise<BuildGetProductS2C>((resolve)=>{
			let s2c = {error:200} as BuildGetProductS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:BuildGetProductS2C){
				clearTimeout(timeObj);
				AntNet.buildGetProductS2C.off(fun);
				resolve(e);
			}
			AntNet.buildGetProductS2C.on(fun);
			AntNet.BuildGetProductC2S(buildType);
		});
	}

	public static ActorEnterBuildC2S(actorId: number, cellId: number){
		net.logic.actorEnterBuildC2S(actorId, cellId);
	}

	public static get actorEnterBuildS2C(){
		return net.logic.actorEnterBuildS2C;
	}

	public static async AsyncActorEnterBuildC2S(actorId: number, cellId: number):Promise<ActorEnterBuildS2C>{
		return new Promise<ActorEnterBuildS2C>((resolve)=>{
			let s2c = {error:200} as ActorEnterBuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ActorEnterBuildS2C){
				clearTimeout(timeObj);
				AntNet.actorEnterBuildS2C.off(fun);
				resolve(e);
			}
			AntNet.actorEnterBuildS2C.on(fun);
			AntNet.ActorEnterBuildC2S(actorId, cellId);
		});
	}

	public static ActorLeaveBuildC2S(actorId: number){
		net.logic.actorLeaveBuildC2S(actorId);
	}

	public static get actorLeaveBuildS2C(){
		return net.logic.actorLeaveBuildS2C;
	}

	public static async AsyncActorLeaveBuildC2S(actorId: number):Promise<ActorLeaveBuildS2C>{
		return new Promise<ActorLeaveBuildS2C>((resolve)=>{
			let s2c = {error:200} as ActorLeaveBuildS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:ActorLeaveBuildS2C){
				clearTimeout(timeObj);
				AntNet.actorLeaveBuildS2C.off(fun);
				resolve(e);
			}
			AntNet.actorLeaveBuildS2C.on(fun);
			AntNet.ActorLeaveBuildC2S(actorId);
		});
	}

	public static GamerExtractGashaponC2S(gashaponId: number){
		net.logic.gamerExtractGashaponC2S(gashaponId);
	}

	public static get gamerExtractGashaponS2C(){
		return net.logic.gamerExtractGashaponS2C;
	}

	public static async AsyncGamerExtractGashaponC2S(gashaponId: number):Promise<GamerExtractGashaponS2C>{
		return new Promise<GamerExtractGashaponS2C>((resolve)=>{
			let s2c = {error:200} as GamerExtractGashaponS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerExtractGashaponS2C){
				clearTimeout(timeObj);
				AntNet.gamerExtractGashaponS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerExtractGashaponS2C.on(fun);
			AntNet.GamerExtractGashaponC2S(gashaponId);
		});
	}

	public static StoryExtractGashaponC2S(gashaponId: number){
		net.logic.storyExtractGashaponC2S(gashaponId);
	}

	public static get storyExtractGashaponS2C(){
		return net.logic.storyExtractGashaponS2C;
	}

	public static async AsyncStoryExtractGashaponC2S(gashaponId: number):Promise<StoryExtractGashaponS2C>{
		return new Promise<StoryExtractGashaponS2C>((resolve)=>{
			let s2c = {error:200} as StoryExtractGashaponS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StoryExtractGashaponS2C){
				clearTimeout(timeObj);
				AntNet.storyExtractGashaponS2C.off(fun);
				resolve(e);
			}
			AntNet.storyExtractGashaponS2C.on(fun);
			AntNet.StoryExtractGashaponC2S(gashaponId);
		});
	}

	public static GamerGetAllowanceC2S(type: number){
		net.logic.gamerGetAllowanceC2S(type);
	}

	public static get gamerGetAllowanceS2C(){
		return net.logic.gamerGetAllowanceS2C;
	}

	public static async AsyncGamerGetAllowanceC2S(type: number):Promise<GamerGetAllowanceS2C>{
		return new Promise<GamerGetAllowanceS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetAllowanceS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetAllowanceS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetAllowanceS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetAllowanceS2C.on(fun);
			AntNet.GamerGetAllowanceC2S(type);
		});
	}

	public static GetStoryExtractInfoC2S(gashaponId: number){
		net.logic.getStoryExtractInfoC2S(gashaponId);
	}

	public static get getStoryExtractInfoS2C(){
		return net.logic.getStoryExtractInfoS2C;
	}

	public static async AsyncGetStoryExtractInfoC2S(gashaponId: number):Promise<GetStoryExtractInfoS2C>{
		return new Promise<GetStoryExtractInfoS2C>((resolve)=>{
			let s2c = {error:200} as GetStoryExtractInfoS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetStoryExtractInfoS2C){
				clearTimeout(timeObj);
				AntNet.getStoryExtractInfoS2C.off(fun);
				resolve(e);
			}
			AntNet.getStoryExtractInfoS2C.on(fun);
			AntNet.GetStoryExtractInfoC2S(gashaponId);
		});
	}

	public static CleanStoryExtractCDC2S(gashaponId: number){
		net.logic.cleanStoryExtractCDC2S(gashaponId);
	}

	public static get cleanStoryExtractCDS2C(){
		return net.logic.cleanStoryExtractCDS2C;
	}

	public static async AsyncCleanStoryExtractCDC2S(gashaponId: number):Promise<CleanStoryExtractCDS2C>{
		return new Promise<CleanStoryExtractCDS2C>((resolve)=>{
			let s2c = {error:200} as CleanStoryExtractCDS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:CleanStoryExtractCDS2C){
				clearTimeout(timeObj);
				AntNet.cleanStoryExtractCDS2C.off(fun);
				resolve(e);
			}
			AntNet.cleanStoryExtractCDS2C.on(fun);
			AntNet.CleanStoryExtractCDC2S(gashaponId);
		});
	}

	public static PurchaseStoryExtractNumC2S(gashaponId: number){
		net.logic.purchaseStoryExtractNumC2S(gashaponId);
	}

	public static get purchaseStoryExtractNumS2C(){
		return net.logic.purchaseStoryExtractNumS2C;
	}

	public static async AsyncPurchaseStoryExtractNumC2S(gashaponId: number):Promise<PurchaseStoryExtractNumS2C>{
		return new Promise<PurchaseStoryExtractNumS2C>((resolve)=>{
			let s2c = {error:200} as PurchaseStoryExtractNumS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:PurchaseStoryExtractNumS2C){
				clearTimeout(timeObj);
				AntNet.purchaseStoryExtractNumS2C.off(fun);
				resolve(e);
			}
			AntNet.purchaseStoryExtractNumS2C.on(fun);
			AntNet.PurchaseStoryExtractNumC2S(gashaponId);
		});
	}

	public static GamerGetIntelligenceC2S(){
		net.logic.gamerGetIntelligenceC2S();
	}

	public static get gamerGetIntelligenceS2C(){
		return net.logic.gamerGetIntelligenceS2C;
	}

	public static async AsyncGamerGetIntelligenceC2S():Promise<GamerGetIntelligenceS2C>{
		return new Promise<GamerGetIntelligenceS2C>((resolve)=>{
			let s2c = {error:200} as GamerGetIntelligenceS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerGetIntelligenceS2C){
				clearTimeout(timeObj);
				AntNet.gamerGetIntelligenceS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerGetIntelligenceS2C.on(fun);
			AntNet.GamerGetIntelligenceC2S();
		});
	}

	public static GamerChangeIntelligenceStateC2S(intelligencesId: number[]){
		net.logic.gamerChangeIntelligenceStateC2S(intelligencesId);
	}

	public static get gamerChangeIntelligenceStateS2C(){
		return net.logic.gamerChangeIntelligenceStateS2C;
	}

	public static async AsyncGamerChangeIntelligenceStateC2S(intelligencesId: number[]):Promise<GamerChangeIntelligenceStateS2C>{
		return new Promise<GamerChangeIntelligenceStateS2C>((resolve)=>{
			let s2c = {error:200} as GamerChangeIntelligenceStateS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerChangeIntelligenceStateS2C){
				clearTimeout(timeObj);
				AntNet.gamerChangeIntelligenceStateS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerChangeIntelligenceStateS2C.on(fun);
			AntNet.GamerChangeIntelligenceStateC2S(intelligencesId);
		});
	}

	public static GamerIntelligenceParseC2S(type: IntelligencePaseType, intelligencesId: number[]){
		net.logic.gamerIntelligenceParseC2S(type, intelligencesId);
	}

	public static get gamerIntelligenceParseS2C(){
		return net.logic.gamerIntelligenceParseS2C;
	}

	public static async AsyncGamerIntelligenceParseC2S(type: IntelligencePaseType, intelligencesId: number[]):Promise<GamerIntelligenceParseS2C>{
		return new Promise<GamerIntelligenceParseS2C>((resolve)=>{
			let s2c = {error:200} as GamerIntelligenceParseS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerIntelligenceParseS2C){
				clearTimeout(timeObj);
				AntNet.gamerIntelligenceParseS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerIntelligenceParseS2C.on(fun);
			AntNet.GamerIntelligenceParseC2S(type, intelligencesId);
		});
	}

	public static StudioC2S(){
		net.logic.studioC2S();
	}

	public static get studioS2C(){
		return net.logic.studioS2C;
	}

	public static async AsyncStudioC2S():Promise<StudioS2C>{
		return new Promise<StudioS2C>((resolve)=>{
			let s2c = {error:200} as StudioS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioS2C){
				clearTimeout(timeObj);
				AntNet.studioS2C.off(fun);
				resolve(e);
			}
			AntNet.studioS2C.on(fun);
			AntNet.StudioC2S();
		});
	}

	public static StudioStorySelectC2S(storyId: number, name: string){
		net.logic.studioStorySelectC2S(storyId, name);
	}

	public static get studioStorySelectS2C(){
		return net.logic.studioStorySelectS2C;
	}

	public static async AsyncStudioStorySelectC2S(storyId: number, name: string):Promise<StudioStorySelectS2C>{
		return new Promise<StudioStorySelectS2C>((resolve)=>{
			let s2c = {error:200} as StudioStorySelectS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioStorySelectS2C){
				clearTimeout(timeObj);
				AntNet.studioStorySelectS2C.off(fun);
				resolve(e);
			}
			AntNet.studioStorySelectS2C.on(fun);
			AntNet.StudioStorySelectC2S(storyId, name);
		});
	}

	public static StudioActorSelectC2S(storyCharactersId: number, actorId: number){
		net.logic.studioActorSelectC2S(storyCharactersId, actorId);
	}

	public static get studioActorSelectS2C(){
		return net.logic.studioActorSelectS2C;
	}

	public static async AsyncStudioActorSelectC2S(storyCharactersId: number, actorId: number):Promise<StudioActorSelectS2C>{
		return new Promise<StudioActorSelectS2C>((resolve)=>{
			let s2c = {error:200} as StudioActorSelectS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioActorSelectS2C){
				clearTimeout(timeObj);
				AntNet.studioActorSelectS2C.off(fun);
				resolve(e);
			}
			AntNet.studioActorSelectS2C.on(fun);
			AntNet.StudioActorSelectC2S(storyCharactersId, actorId);
		});
	}

	public static StudioMatchingDisplayEndC2S(){
		net.logic.studioMatchingDisplayEndC2S();
	}

	public static get studioMatchingDisplayEndS2C(){
		return net.logic.studioMatchingDisplayEndS2C;
	}

	public static async AsyncStudioMatchingDisplayEndC2S():Promise<StudioMatchingDisplayEndS2C>{
		return new Promise<StudioMatchingDisplayEndS2C>((resolve)=>{
			let s2c = {error:200} as StudioMatchingDisplayEndS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioMatchingDisplayEndS2C){
				clearTimeout(timeObj);
				AntNet.studioMatchingDisplayEndS2C.off(fun);
				resolve(e);
			}
			AntNet.studioMatchingDisplayEndS2C.on(fun);
			AntNet.StudioMatchingDisplayEndC2S();
		});
	}

	public static StudioEventOptionSelectC2S(eventOption: number){
		net.logic.studioEventOptionSelectC2S(eventOption);
	}

	public static get studioEventOptionSelectS2C(){
		return net.logic.studioEventOptionSelectS2C;
	}

	public static async AsyncStudioEventOptionSelectC2S(eventOption: number):Promise<StudioEventOptionSelectS2C>{
		return new Promise<StudioEventOptionSelectS2C>((resolve)=>{
			let s2c = {error:200} as StudioEventOptionSelectS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioEventOptionSelectS2C){
				clearTimeout(timeObj);
				AntNet.studioEventOptionSelectS2C.off(fun);
				resolve(e);
			}
			AntNet.studioEventOptionSelectS2C.on(fun);
			AntNet.StudioEventOptionSelectC2S(eventOption);
		});
	}

	public static StudioStartC2S(){
		net.logic.studioStartC2S();
	}

	public static get studioStartS2C(){
		return net.logic.studioStartS2C;
	}

	public static async AsyncStudioStartC2S():Promise<StudioStartS2C>{
		return new Promise<StudioStartS2C>((resolve)=>{
			let s2c = {error:200} as StudioStartS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioStartS2C){
				clearTimeout(timeObj);
				AntNet.studioStartS2C.off(fun);
				resolve(e);
			}
			AntNet.studioStartS2C.on(fun);
			AntNet.StudioStartC2S();
		});
	}

	public static StudioNextStepC2S(step: StudioStep){
		net.logic.studioNextStepC2S(step);
	}

	public static get studioNextStepS2C(){
		return net.logic.studioNextStepS2C;
	}

	public static async AsyncStudioNextStepC2S(step: StudioStep):Promise<StudioNextStepS2C>{
		return new Promise<StudioNextStepS2C>((resolve)=>{
			let s2c = {error:200} as StudioNextStepS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioNextStepS2C){
				clearTimeout(timeObj);
				AntNet.studioNextStepS2C.off(fun);
				resolve(e);
			}
			AntNet.studioNextStepS2C.on(fun);
			AntNet.StudioNextStepC2S(step);
		});
	}

	public static StudioContinuedListC2S(){
		net.logic.studioContinuedListC2S();
	}

	public static get studioContinuedListS2C(){
		return net.logic.studioContinuedListS2C;
	}

	public static async AsyncStudioContinuedListC2S():Promise<StudioContinuedListS2C>{
		return new Promise<StudioContinuedListS2C>((resolve)=>{
			let s2c = {error:200} as StudioContinuedListS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioContinuedListS2C){
				clearTimeout(timeObj);
				AntNet.studioContinuedListS2C.off(fun);
				resolve(e);
			}
			AntNet.studioContinuedListS2C.on(fun);
			AntNet.StudioContinuedListC2S();
		});
	}

	public static StudioContinuedReceiveC2S(uid: number){
		net.logic.studioContinuedReceiveC2S(uid);
	}

	public static get studioContinuedReceiveS2C(){
		return net.logic.studioContinuedReceiveS2C;
	}

	public static async AsyncStudioContinuedReceiveC2S(uid: number):Promise<StudioContinuedReceiveS2C>{
		return new Promise<StudioContinuedReceiveS2C>((resolve)=>{
			let s2c = {error:200} as StudioContinuedReceiveS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioContinuedReceiveS2C){
				clearTimeout(timeObj);
				AntNet.studioContinuedReceiveS2C.off(fun);
				resolve(e);
			}
			AntNet.studioContinuedReceiveS2C.on(fun);
			AntNet.StudioContinuedReceiveC2S(uid);
		});
	}

	public static StudioContinuedReceiveAllC2S(){
		net.logic.studioContinuedReceiveAllC2S();
	}

	public static get studioContinuedReceiveAllS2C(){
		return net.logic.studioContinuedReceiveAllS2C;
	}

	public static async AsyncStudioContinuedReceiveAllC2S():Promise<StudioContinuedReceiveAllS2C>{
		return new Promise<StudioContinuedReceiveAllS2C>((resolve)=>{
			let s2c = {error:200} as StudioContinuedReceiveAllS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:StudioContinuedReceiveAllS2C){
				clearTimeout(timeObj);
				AntNet.studioContinuedReceiveAllS2C.off(fun);
				resolve(e);
			}
			AntNet.studioContinuedReceiveAllS2C.on(fun);
			AntNet.StudioContinuedReceiveAllC2S();
		});
	}

	public static GetActivityRewardC2S(activityId: number){
		net.logic.getActivityRewardC2S(activityId);
	}

	public static get getActivityRewardS2C(){
		return net.logic.getActivityRewardS2C;
	}

	public static async AsyncGetActivityRewardC2S(activityId: number):Promise<GetActivityRewardS2C>{
		return new Promise<GetActivityRewardS2C>((resolve)=>{
			let s2c = {error:200} as GetActivityRewardS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GetActivityRewardS2C){
				clearTimeout(timeObj);
				AntNet.getActivityRewardS2C.off(fun);
				resolve(e);
			}
			AntNet.getActivityRewardS2C.on(fun);
			AntNet.GetActivityRewardC2S(activityId);
		});
	}

	public static get gamerNotifyLoginOtherS2C(){
		return net.logic.gamerNotifyLoginOtherS2C;
	}

	public static get gamerNotifyExpLevelS2C(){
		return net.logic.gamerNotifyExpLevelS2C;
	}

	public static get gamerNotifyNewChatS2C(){
		return net.logic.gamerNotifyNewChatS2C;
	}

	public static get gamerNotifyNewFriendReqS2C(){
		return net.logic.gamerNotifyNewFriendReqS2C;
	}

	public static get gamerNotifyNewFriendS2C(){
		return net.logic.gamerNotifyNewFriendS2C;
	}

	public static get gamerNotifyMailS2C(){
		return net.logic.gamerNotifyMailS2C;
	}

	public static get gamerNotifyNewMailS2C(){
		return net.logic.gamerNotifyNewMailS2C;
	}

	public static get gamerNotifyMatchInfoS2C(){
		return net.logic.gamerNotifyMatchInfoS2C;
	}

	public static get gamerNotifyPVPSyncS2C(){
		return net.logic.gamerNotifyPVPSyncS2C;
	}

	public static get gamerNotifyNewPVPResultS2C(){
		return net.logic.gamerNotifyNewPVPResultS2C;
	}

	public static get gamerNotifyIconChangeS2C(){
		return net.logic.gamerNotifyIconChangeS2C;
	}

	public static get gamerNotifyLeagueDataS2C(){
		return net.logic.gamerNotifyLeagueDataS2C;
	}

	public static get gamerNotifyLeagueGamerOnlineS2C(){
		return net.logic.gamerNotifyLeagueGamerOnlineS2C;
	}

	public static get gamerNotifyItemS2C(){
		return net.logic.gamerNotifyItemS2C;
	}

	public static get gamerNotifyItemChangeS2C(){
		return net.logic.gamerNotifyItemChangeS2C;
	}

	public static get gamerNotifyActorChangeS2C(){
		return net.logic.gamerNotifyActorChangeS2C;
	}

	public static get gamerNotifyActorSetChangeS2C(){
		return net.logic.gamerNotifyActorSetChangeS2C;
	}

	public static get gamerNotifyStoryListS2C(){
		return net.logic.gamerNotifyStoryListS2C;
	}

	public static get gamerNotifyBuildInfoS2C(){
		return net.logic.gamerNotifyBuildInfoS2C;
	}

	public static get gamerNotifyGashaponInfoS2C(){
		return net.logic.gamerNotifyGashaponInfoS2C;
	}

	public static get gamerNotifyIntelligenceS2C(){
		return net.logic.gamerNotifyIntelligenceS2C;
	}

	public static get gamerNotifyStudioEventS2C(){
		return net.logic.gamerNotifyStudioEventS2C;
	}

	public static get gamerNotifyStudioFirstRewardS2C(){
		return net.logic.gamerNotifyStudioFirstRewardS2C;
	}

	public static get gamerNotifyActivitiesS2C(){
		return net.logic.gamerNotifyActivitiesS2C;
	}

}
