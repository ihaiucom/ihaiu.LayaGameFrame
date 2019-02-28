import {GamerLoginS2C, GamerLoginGetDataS2C, ServerTimeS2C, GamerSubChatChannelS2C, GamerFriendChatS2C, GamerWorldChatS2C, GamerTestChatS2C, GamerClubRequestS2C, GamerNewFriendReqS2C, GamerProcessFriendReqS2C, GamerMatchS2C, PVPInput, PVPResult, GamerPVPSyncS2C, GamerGetRealTimeRankS2C, GamerCheckPVPBattleS2C, WXInfo, GamerUploadWXInfoS2C, GamerNewRoomS2C, GamerAddRoomS2C, GamerLeaveRoomS2C} from "./proto";

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

	public static GamerPVPSyncC2S(session: string, input: PVPInput, needFrames: any, crc: any, agents: PVPInput, reconn: boolean, index: number, addr: string, result: PVPResult){
		net.logic.gamerPVPSyncC2S(session, input, needFrames, crc, agents, reconn, index, addr, result);
	}

	public static get gamerPVPSyncS2C(){
		return net.logic.gamerPVPSyncS2C;
	}

	public static async AsyncGamerPVPSyncC2S(session: string, input: PVPInput, needFrames: any, crc: any, agents: PVPInput, reconn: boolean, index: number, addr: string, result: PVPResult):Promise<GamerPVPSyncS2C>{
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

	public static GamerNewRoomC2S(type: number){
		net.logic.gamerNewRoomC2S(type);
	}

	public static get gamerNewRoomS2C(){
		return net.logic.gamerNewRoomS2C;
	}

	public static async AsyncGamerNewRoomC2S(type: number):Promise<GamerNewRoomS2C>{
		return new Promise<GamerNewRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerNewRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerNewRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerNewRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerNewRoomS2C.on(fun);
			AntNet.GamerNewRoomC2S(type);
		});
	}

	public static GamerAddRoomC2S(roomId: number){
		net.logic.gamerAddRoomC2S(roomId);
	}

	public static get gamerAddRoomS2C(){
		return net.logic.gamerAddRoomS2C;
	}

	public static async AsyncGamerAddRoomC2S(roomId: number):Promise<GamerAddRoomS2C>{
		return new Promise<GamerAddRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerAddRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerAddRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerAddRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerAddRoomS2C.on(fun);
			AntNet.GamerAddRoomC2S(roomId);
		});
	}

	public static GamerLeaveRoomC2S(roomId: number){
		net.logic.gamerLeaveRoomC2S(roomId);
	}

	public static get gamerLeaveRoomS2C(){
		return net.logic.gamerLeaveRoomS2C;
	}

	public static async AsyncGamerLeaveRoomC2S(roomId: number):Promise<GamerLeaveRoomS2C>{
		return new Promise<GamerLeaveRoomS2C>((resolve)=>{
			let s2c = {error:200} as GamerLeaveRoomS2C;
			let timeObj = setTimeout(()=>{
				resolve(s2c);
			}, 5000);
			let fun = function(e:GamerLeaveRoomS2C){
				clearTimeout(timeObj);
				AntNet.gamerLeaveRoomS2C.off(fun);
				resolve(e);
			}
			AntNet.gamerLeaveRoomS2C.on(fun);
			AntNet.GamerLeaveRoomC2S(roomId);
		});
	}

	public static get gamerNotifyLoginOtherS2C(){
		return net.logic.gamerNotifyLoginOtherS2C;
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

	public static get gamerNotifyRoomInfoChangeS2C(){
		return net.logic.gamerNotifyRoomInfoChangeS2C;
	}
}