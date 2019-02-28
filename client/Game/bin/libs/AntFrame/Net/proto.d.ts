
export interface IC2S {

    key?: (string|null);

    gamerLoginC2S?: (IGamerLoginC2S|null);

    gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);

    serverTimeC2S?: (IServerTimeC2S|null);

    gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);

    gamerFriendChatC2S?: (IGamerFriendChatC2S|null);

    gamerWorldChatC2S?: (IGamerWorldChatC2S|null);

    gamerTestChatC2S?: (IGamerTestChatC2S|null);

    gamerClubRequestC2S?: (IGamerClubRequestC2S|null);

    gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);

    gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);

    gamerMatchC2S?: (IGamerMatchC2S|null);

    gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);

    gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);

    gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);

    gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);

    gamerNewRoomC2S?: (IGamerNewRoomC2S|null);

    gamerAddRoomC2S?: (IGamerAddRoomC2S|null);

    gamerLeaveRoomC2S?: (IGamerLeaveRoomC2S|null);
}

export class C2S implements IC2S {

    constructor(properties?: IC2S);

    public key: string;

    public gamerLoginC2S?: (IGamerLoginC2S|null);

    public gamerLoginGetDataC2S?: (IGamerLoginGetDataC2S|null);

    public serverTimeC2S?: (IServerTimeC2S|null);

    public gamerSubChatChannelC2S?: (IGamerSubChatChannelC2S|null);

    public gamerFriendChatC2S?: (IGamerFriendChatC2S|null);

    public gamerWorldChatC2S?: (IGamerWorldChatC2S|null);

    public gamerTestChatC2S?: (IGamerTestChatC2S|null);

    public gamerClubRequestC2S?: (IGamerClubRequestC2S|null);

    public gamerNewFriendReqC2S?: (IGamerNewFriendReqC2S|null);

    public gamerProcessFriendReqC2S?: (IGamerProcessFriendReqC2S|null);

    public gamerMatchC2S?: (IGamerMatchC2S|null);

    public gamerPVPSyncC2S?: (IGamerPVPSyncC2S|null);

    public gamerGetRealTimeRankC2S?: (IGamerGetRealTimeRankC2S|null);

    public gamerCheckPVPBattleC2S?: (IGamerCheckPVPBattleC2S|null);

    public gamerUploadWXInfoC2S?: (IGamerUploadWXInfoC2S|null);

    public gamerNewRoomC2S?: (IGamerNewRoomC2S|null);

    public gamerAddRoomC2S?: (IGamerAddRoomC2S|null);

    public gamerLeaveRoomC2S?: (IGamerLeaveRoomC2S|null);

}

export interface IGamerLoginC2S {

    id?: (number|null);

    session?: (string|null);

    addr?: (string|null);
}

export class GamerLoginC2S implements IGamerLoginC2S {

    constructor(properties?: IGamerLoginC2S);

    public id: number;

    public session: string;

    public addr: string;

}

export interface IGamerLoginS2C {

    error?: (number|null);

    main?: (IGamerMain|null);
}

export class GamerLoginS2C implements IGamerLoginS2C {

    constructor(properties?: IGamerLoginS2C);

    public error: number;

    public main?: (IGamerMain|null);

}

export interface IGamerLoginGetDataC2S {

    id?: (number|null);
}

export class GamerLoginGetDataC2S implements IGamerLoginGetDataC2S {

    constructor(properties?: IGamerLoginGetDataC2S);

    public id: number;

}

export interface IGamerLoginGetDataS2C {

    error?: (number|null);

    time?: (IServerTime|null);

    friendReqs?: (IGamerFriendRequest[]|null);

    friends?: (IGamerFriend[]|null);

    lengthRank?: (number|null);
}

export class GamerLoginGetDataS2C implements IGamerLoginGetDataS2C {

    constructor(properties?: IGamerLoginGetDataS2C);

    public error: number;

    public time?: (IServerTime|null);

    public friendReqs: IGamerFriendRequest[];

    public friends: IGamerFriend[];

    public lengthRank: number;

}

export interface IServerTimeC2S {

    id?: (number|null);
}

export class ServerTimeC2S implements IServerTimeC2S {

    constructor(properties?: IServerTimeC2S);

    public id: number;

}

export interface IServerTimeS2C {

    error?: (number|null);

    time?: (IServerTime|null);
}

export class ServerTimeS2C implements IServerTimeS2C {

    constructor(properties?: IServerTimeS2C);

    public error: number;

    public time?: (IServerTime|null);

}

export interface IGamerNotifyLoginOtherS2C {

    error?: (number|null);
}

export class GamerNotifyLoginOtherS2C implements IGamerNotifyLoginOtherS2C {

    constructor(properties?: IGamerNotifyLoginOtherS2C);

    public error: number;

}

export interface IGamerSubChatChannelC2S {

    id?: (number|null);

    channel?: (number|null);

    open?: (boolean|null);
}

export class GamerSubChatChannelC2S implements IGamerSubChatChannelC2S {

    constructor(properties?: IGamerSubChatChannelC2S);

    public id: number;

    public channel: number;

    public open: boolean;

}

export interface IGamerSubChatChannelS2C {

    error?: (number|null);
}

export class GamerSubChatChannelS2C implements IGamerSubChatChannelS2C {

    constructor(properties?: IGamerSubChatChannelS2C);

    public error: number;

}

export interface IGamerFriendChatC2S {

    id?: (number|null);

    toId?: (number|null);

    msg?: (string|null);
}

export class GamerFriendChatC2S implements IGamerFriendChatC2S {

    constructor(properties?: IGamerFriendChatC2S);

    public id: number;

    public toId: number;

    public msg: string;

}

export interface IGamerFriendChatS2C {

    error?: (number|null);
}

export class GamerFriendChatS2C implements IGamerFriendChatS2C {

    constructor(properties?: IGamerFriendChatS2C);

    public error: number;

}

export interface IGamerWorldChatC2S {

    id?: (number|null);

    server?: (number|null);

    msg?: (string|null);
}

export class GamerWorldChatC2S implements IGamerWorldChatC2S {

    constructor(properties?: IGamerWorldChatC2S);

    public id: number;

    public server: number;

    public msg: string;

}

export interface IGamerWorldChatS2C {

    error?: (number|null);
}

export class GamerWorldChatS2C implements IGamerWorldChatS2C {

    constructor(properties?: IGamerWorldChatS2C);

    public error: number;

}

export interface IGamerTestChatC2S {

    id?: (number|null);

    toId?: (number|null);

    msg?: (string|null);
}

export class GamerTestChatC2S implements IGamerTestChatC2S {

    constructor(properties?: IGamerTestChatC2S);

    public id: number;

    public toId: number;

    public msg: string;

}

export interface IGamerTestChatS2C {

    error?: (number|null);

    id?: (number|null);
}

export class GamerTestChatS2C implements IGamerTestChatS2C {

    constructor(properties?: IGamerTestChatS2C);

    public error: number;

    public id: number;

}

export interface IGamerClubRequestC2S {

    id?: (number|null);

    clubId?: (number|null);

    msg?: (string|null);
}

export class GamerClubRequestC2S implements IGamerClubRequestC2S {

    constructor(properties?: IGamerClubRequestC2S);

    public id: number;

    public clubId: number;

    public msg: string;

}

export interface IGamerClubRequestS2C {

    error?: (number|null);

    id?: (number|null);

    ok?: (boolean|null);
}

export class GamerClubRequestS2C implements IGamerClubRequestS2C {

    constructor(properties?: IGamerClubRequestS2C);

    public error: number;

    public id: number;

    public ok: boolean;

}

export interface IGamerNotifyNewChatS2C {

    error?: (number|null);

    chats?: (IChatData[]|null);
}

export class GamerNotifyNewChatS2C implements IGamerNotifyNewChatS2C {

    constructor(properties?: IGamerNotifyNewChatS2C);

    public error: number;

    public chats: IChatData[];

}

export interface IGamerNewFriendReqC2S {

    id?: (number|null);

    oid?: (number|null);

    msg?: (string|null);
}

export class GamerNewFriendReqC2S implements IGamerNewFriendReqC2S {

    constructor(properties?: IGamerNewFriendReqC2S);

    public id: number;

    public oid: number;

    public msg: string;

}

export interface IGamerNewFriendReqS2C {

    error?: (number|null);
}

export class GamerNewFriendReqS2C implements IGamerNewFriendReqS2C {

    constructor(properties?: IGamerNewFriendReqS2C);

    public error: number;

}

export interface IGamerNotifyNewFriendReqS2C {

    error?: (number|null);

    request?: (IGamerFriendRequest|null);
}

export class GamerNotifyNewFriendReqS2C implements IGamerNotifyNewFriendReqS2C {

    constructor(properties?: IGamerNotifyNewFriendReqS2C);

    public error: number;

    public request?: (IGamerFriendRequest|null);

}

export interface IGamerProcessFriendReqC2S {

    id?: (number|null);

    oid?: (number|null);

    result?: (boolean|null);
}

export class GamerProcessFriendReqC2S implements IGamerProcessFriendReqC2S {

    constructor(properties?: IGamerProcessFriendReqC2S);

    public id: number;

    public oid: number;

    public result: boolean;

}

export interface IGamerProcessFriendReqS2C {

    error?: (number|null);
}

export class GamerProcessFriendReqS2C implements IGamerProcessFriendReqS2C {

    constructor(properties?: IGamerProcessFriendReqS2C);

    public error: number;

}

export interface IGamerNotifyNewFriendS2C {

    error?: (number|null);

    friend?: (IGamerFriend|null);
}

export class GamerNotifyNewFriendS2C implements IGamerNotifyNewFriendS2C {

    constructor(properties?: IGamerNotifyNewFriendS2C);

    public error: number;

    public friend?: (IGamerFriend|null);

}

export interface IGamerNotifyNewMailS2C {

    error?: (number|null);

    mail?: (IMail[]|null);
}

export class GamerNotifyNewMailS2C implements IGamerNotifyNewMailS2C {

    constructor(properties?: IGamerNotifyNewMailS2C);

    public error: number;

    public mail: IMail[];

}

export interface IGamerMatchC2S {

    id?: (number|null);

    type?: (number|null);
}

export class GamerMatchC2S implements IGamerMatchC2S {

    constructor(properties?: IGamerMatchC2S);

    public id: number;

    public type: number;

}

export interface IGamerMatchS2C {

    error?: (number|null);
}

export class GamerMatchS2C implements IGamerMatchS2C {

    constructor(properties?: IGamerMatchS2C);

    public error: number;

}

export interface IGamerNotifyMatchInfoS2C {

    error?: (number|null);

    matchInfo?: (IMatchInfo|null);

    reconn?: (boolean|null);
}

export class GamerNotifyMatchInfoS2C implements IGamerNotifyMatchInfoS2C {

    constructor(properties?: IGamerNotifyMatchInfoS2C);

    public error: number;

    public matchInfo?: (IMatchInfo|null);

    public reconn: boolean;

}

export interface IGamerPVPSyncC2S {

    id?: (number|null);

    session?: (string|null);

    input?: (IPVPInput|null);

    needFrames?: (number[]|null);

    crc?: ((number|any)[]|null);

    agents?: (IPVPInput[]|null);

    reconn?: (boolean|null);

    index?: (number|null);

    addr?: (string|null);

    result?: (IPVPResult|null);
}

export class GamerPVPSyncC2S implements IGamerPVPSyncC2S {

    constructor(properties?: IGamerPVPSyncC2S);

    public id: number;

    public session: string;

    public input?: (IPVPInput|null);

    public needFrames: number[];

    public crc: (number|any)[];

    public agents: IPVPInput[];

    public reconn: boolean;

    public index: number;

    public addr: string;

    public result?: (IPVPResult|null);

}

export interface IGamerPVPSyncS2C {

    error?: (number|null);
}

export class GamerPVPSyncS2C implements IGamerPVPSyncS2C {

    constructor(properties?: IGamerPVPSyncS2C);

    public error: number;

}

export interface IGamerNotifyPVPSyncS2C {

    maxFrameCount?: (number|null);

    frames?: (IPVPFrame[]|null);

    framesData?: (Uint8Array|null);

    frameData?: (Uint8Array[]|null);

    index?: (number|null);

    delta?: (number|null);

    session?: (string|null);
}

export class GamerNotifyPVPSyncS2C implements IGamerNotifyPVPSyncS2C {

    constructor(properties?: IGamerNotifyPVPSyncS2C);

    public maxFrameCount: number;

    public frames: IPVPFrame[];

    public framesData: Uint8Array;

    public frameData: Uint8Array[];

    public index: number;

    public delta: number;

    public session: string;

}

export interface IGamerNotifyNewPVPResultS2C {

    error?: (number|null);

    icon?: (number|null);

    oldLengthRank?: (number|null);

    newLengthRank?: (number|null);

    result?: (IPVPResult|null);
}

export class GamerNotifyNewPVPResultS2C implements IGamerNotifyNewPVPResultS2C {

    constructor(properties?: IGamerNotifyNewPVPResultS2C);

    public error: number;

    public icon: number;

    public oldLengthRank: number;

    public newLengthRank: number;

    public result?: (IPVPResult|null);

}

export interface IGamerNotifyIconChangeS2C {

    error?: (number|null);

    icon?: (number|null);
}

export class GamerNotifyIconChangeS2C implements IGamerNotifyIconChangeS2C {

    constructor(properties?: IGamerNotifyIconChangeS2C);

    public error: number;

    public icon: number;

}

export interface IGamerGetRealTimeRankC2S {

    id?: (number|null);
}

export class GamerGetRealTimeRankC2S implements IGamerGetRealTimeRankC2S {

    constructor(properties?: IGamerGetRealTimeRankC2S);

    public id: number;

}

export interface IGamerGetRealTimeRankS2C {

    error?: (number|null);

    ranks?: (IRankLength[]|null);
}

export class GamerGetRealTimeRankS2C implements IGamerGetRealTimeRankS2C {

    constructor(properties?: IGamerGetRealTimeRankS2C);

    public error: number;

    public ranks: IRankLength[];

}

export interface IGamerCheckPVPBattleC2S {

    id?: (number|null);

    session?: (string|null);
}

export class GamerCheckPVPBattleC2S implements IGamerCheckPVPBattleC2S {

    constructor(properties?: IGamerCheckPVPBattleC2S);

    public id: number;

    public session: string;

}

export interface IGamerCheckPVPBattleS2C {

    error?: (number|null);

    matchInfo?: (IMatchInfo|null);
}

export class GamerCheckPVPBattleS2C implements IGamerCheckPVPBattleS2C {

    constructor(properties?: IGamerCheckPVPBattleS2C);

    public error: number;

    public matchInfo?: (IMatchInfo|null);

}

export interface IGamerUploadWXInfoC2S {

    id?: (number|null);

    wxInfo?: (IWXInfo|null);
}

export class GamerUploadWXInfoC2S implements IGamerUploadWXInfoC2S {

    constructor(properties?: IGamerUploadWXInfoC2S);

    public id: number;

    public wxInfo?: (IWXInfo|null);

}

export interface IGamerUploadWXInfoS2C {

    error?: (number|null);
}

export class GamerUploadWXInfoS2C implements IGamerUploadWXInfoS2C {

    constructor(properties?: IGamerUploadWXInfoS2C);

    public error: number;

}

export interface IGamerNewRoomC2S {

    id?: (number|null);

    type?: (number|null);
}

export class GamerNewRoomC2S implements IGamerNewRoomC2S {

    constructor(properties?: IGamerNewRoomC2S);

    public id: number;

    public type: number;

}

export interface IGamerNewRoomS2C {

    error?: (number|null);

    room?: (IRoomInfo|null);
}

export class GamerNewRoomS2C implements IGamerNewRoomS2C {

    constructor(properties?: IGamerNewRoomS2C);

    public error: number;

    public room?: (IRoomInfo|null);

}

export interface IGamerAddRoomC2S {

    id?: (number|null);

    roomId?: (number|null);
}

export class GamerAddRoomC2S implements IGamerAddRoomC2S {

    constructor(properties?: IGamerAddRoomC2S);

    public id: number;

    public roomId: number;

}

export interface IGamerAddRoomS2C {

    error?: (number|null);
}

export class GamerAddRoomS2C implements IGamerAddRoomS2C {

    constructor(properties?: IGamerAddRoomS2C);

    public error: number;

}

export interface IGamerLeaveRoomC2S {

    id?: (number|null);

    roomId?: (number|null);
}

export class GamerLeaveRoomC2S implements IGamerLeaveRoomC2S {

    constructor(properties?: IGamerLeaveRoomC2S);

    public id: number;

    public roomId: number;

}

export interface IGamerLeaveRoomS2C {

    error?: (number|null);
}

export class GamerLeaveRoomS2C implements IGamerLeaveRoomS2C {

    constructor(properties?: IGamerLeaveRoomS2C);

    public error: number;

}

export interface IGamerNotifyRoomInfoChangeS2C {

    error?: (number|null);

    room?: (IRoomInfo|null);

    cancel?: (boolean|null);
}

export class GamerNotifyRoomInfoChangeS2C implements IGamerNotifyRoomInfoChangeS2C {

    constructor(properties?: IGamerNotifyRoomInfoChangeS2C);

    public error: number;

    public room?: (IRoomInfo|null);

    public cancel: boolean;

}

export enum GamerStatus {
    Offline = 0,
    Online = 1,
    Teaming = 2,
    Matching = 3,
    Fighting = 4
}

export enum ChatChannel {
    GamerChat = 0,
    WorldChat = 1
}

export enum MailType {
    ActivityMail = 0,
    SysMail = 1,
    AnnouncementMail = 2,
    GamerMail = 3
}

export enum MailState {
    MailUnRead = 0,
    MailRead = 1,
    MailReceived = 2
}

export interface IServerTime {

    timestamp?: (number|any|null);

    year?: (number|null);

    month?: (number|null);

    day?: (number|null);

    hour?: (number|null);

    minute?: (number|null);

    second?: (number|null);

    timezone?: (number|null);
}

export class ServerTime implements IServerTime {

    constructor(properties?: IServerTime);

    public timestamp: (number|any);

    public year: number;

    public month: number;

    public day: number;

    public hour: number;

    public minute: number;

    public second: number;

    public timezone: number;

}

export interface IGameItem {

    id?: (number|null);

    count?: (number|null);
}

export class GameItem implements IGameItem {

    constructor(properties?: IGameItem);

    public id: number;

    public count: number;

}

export interface ITimeRecord {

    lastSign?: (number|any|null);

    lastGetPVPResult?: (number|any|null);

    lastWeekRec?: (number|any|null);

    totalTime?: (number|null);
}

export class TimeRecord implements ITimeRecord {

    constructor(properties?: ITimeRecord);

    public lastSign: (number|any);

    public lastGetPVPResult: (number|any);

    public lastWeekRec: (number|any);

    public totalTime: number;

}

export interface INumberRecord {

    elo?: (number|null);

    normWin?: (number|null);

    totalSignIn?: (number|null);

    weekTotalSign?: (number|null);

    weekGoldGet?: (number|null);

    weekExpGet?: (number|null);
}

export class NumberRecord implements INumberRecord {

    constructor(properties?: INumberRecord);

    public elo: number;

    public normWin: number;

    public totalSignIn: number;

    public weekTotalSign: number;

    public weekGoldGet: number;

    public weekExpGet: number;

}

export interface IWXInfo {

    avatarUrl?: (string|null);

    city?: (string|null);

    gender?: (number|null);

    openId?: (string|null);

    language?: (string|null);

    nickName?: (string|null);

    province?: (string|null);

    unionId?: (string|null);

    country?: (string|null);

    sessionId?: (string|null);

    sign?: (string|null);
}

export class WXInfo implements IWXInfo {

    constructor(properties?: IWXInfo);

    public avatarUrl: string;

    public city: string;

    public gender: number;

    public openId: string;

    public language: string;

    public nickName: string;

    public province: string;

    public unionId: string;

    public country: string;

    public sessionId: string;

    public sign: string;

}

export interface IGamerMain {

    id?: (number|null);

    uid?: (string|null);

    lsid?: (number|null);

    psid?: (number|null);

    state?: (GamerStatus|null);

    name?: (string|null);

    level?: (number|null);

    session?: (string|null);

    create?: (number|any|null);

    lastLogin?: (number|any|null);

    lastLogout?: (number|any|null);

    typeId?: (number|null);

    icon?: (number|null);

    exp?: (number|null);

    pvpSession?: (string|null);

    avatar?: (string|null);
}

export class GamerMain implements IGamerMain {

    constructor(properties?: IGamerMain);

    public id: number;

    public uid: string;

    public lsid: number;

    public psid: number;

    public state: GamerStatus;

    public name: string;

    public level: number;

    public session: string;

    public create: (number|any);

    public lastLogin: (number|any);

    public lastLogout: (number|any);

    public typeId: number;

    public icon: number;

    public exp: number;

    public pvpSession: string;

    public avatar: string;

}

export interface IGamerMini {

    id?: (number|null);

    name?: (string|null);

    level?: (number|null);

    lsid?: (number|null);

    avatar?: (string|null);
}

export class GamerMini implements IGamerMini {

    constructor(properties?: IGamerMini);

    public id: number;

    public name: string;

    public level: number;

    public lsid: number;

    public avatar: string;

}

export interface IGamerFriendRequest {

    id?: (number|null);

    msg?: (string|null);

    time?: (number|any|null);

    gamerInfo?: (IGamerMini|null);
}

export class GamerFriendRequest implements IGamerFriendRequest {

    constructor(properties?: IGamerFriendRequest);

    public id: number;

    public msg: string;

    public time: (number|any);

    public gamerInfo?: (IGamerMini|null);

}

export interface IGamerBlack {

    id?: (number|null);
}

export class GamerBlack implements IGamerBlack {

    constructor(properties?: IGamerBlack);

    public id: number;

}

export interface IGamerFriend {

    id?: (number|null);

    time?: (number|any|null);

    gamerInfo?: (IGamerMini|null);
}

export class GamerFriend implements IGamerFriend {

    constructor(properties?: IGamerFriend);

    public id: number;

    public time: (number|any);

    public gamerInfo?: (IGamerMini|null);

}

export interface IChatData {

    from?: (number|null);

    time?: (number|any|null);

    msg?: (string|null);

    channel?: (number|null);

    gamerInfo?: (IGamerMini|null);
}

export class ChatData implements IChatData {

    constructor(properties?: IChatData);

    public from: number;

    public time: (number|any);

    public msg: string;

    public channel: number;

    public gamerInfo?: (IGamerMini|null);

}

export interface IMail {

    id?: (string|null);

    mailType?: (number|null);

    time?: (number|any|null);

    theme?: (string|null);

    msg?: (string|null);

    attachments?: (IGameItem[]|null);

    state?: (number|null);

    serverId?: (number|null);

    senderId?: (number|null);

    level?: (number|null);

    endTime?: (number|any|null);

    isDel?: (number|null);

    cfgId?: (number|null);

    save?: (boolean|null);

    gamerInfo?: (IGamerMini|null);
}

export class Mail implements IMail {

    constructor(properties?: IMail);

    public id: string;

    public mailType: number;

    public time: (number|any);

    public theme: string;

    public msg: string;

    public attachments: IGameItem[];

    public state: number;

    public serverId: number;

    public senderId: number;

    public level: number;

    public endTime: (number|any);

    public isDel: number;

    public cfgId: number;

    public save: boolean;

    public gamerInfo?: (IGamerMini|null);

}

export interface IGamerMatch {

    mini?: (IGamerMini|null);

    ai?: (boolean|null);
}

export class GamerMatch implements IGamerMatch {

    constructor(properties?: IGamerMatch);

    public mini?: (IGamerMini|null);

    public ai: boolean;

}

export enum PVPType {
    MINVALID = 0,
    M1V1 = 100,
    M2V2 = 103,
    M3V3 = 104,
    M5V5 = 105,
    M1V10 = 106,
    M2V10 = 107,
    RankM3v3 = 200,
    RankM5v5 = 201,
    TeamM1v1 = 301,
    C2V2 = 401,
    C3V3 = 402,
    C5V5 = 403,
    H3V3 = 501,
    RankH3V3 = 502,
    Conscript3v3 = 601,
    M1 = 1000,
    MT1 = 2000,
    MT1V1 = 2001,
    MT2V2 = 2002,
    MT3V3 = 2003
}

export interface IMatchInfo {

    session?: (string|null);

    time?: (number|any|null);

    addr?: (string|null);

    frameDelta?: (number|null);

    minFrameDelta?: (number|null);

    matchTime?: (number|null);

    inputDelta?: (number|null);

    pvpType?: (number|null);

    threadRecv?: (boolean|null);

    gamers?: (IGamerMatch[]|null);
}

export class MatchInfo implements IMatchInfo {

    constructor(properties?: IMatchInfo);

    public session: string;

    public time: (number|any);

    public addr: string;

    public frameDelta: number;

    public minFrameDelta: number;

    public matchTime: number;

    public inputDelta: number;

    public pvpType: number;

    public threadRecv: boolean;

    public gamers: IGamerMatch[];

}

export interface IPVPInput {

    id?: (number|null);

    yaw?: (number|null);

    btn?: (number|null);

    pos?: (number|null);

    talk?: (number|null);
}

export class PVPInput implements IPVPInput {

    constructor(properties?: IPVPInput);

    public id: number;

    public yaw: number;

    public btn: number;

    public pos: number;

    public talk: number;

}

export interface IPVPFrame {

    delta?: (number|null);

    frame?: (number|null);

    end?: (boolean|null);

    inputs?: (IPVPInput[]|null);
}

export class PVPFrame implements IPVPFrame {

    constructor(properties?: IPVPFrame);

    public delta: number;

    public frame: number;

    public end: boolean;

    public inputs: IPVPInput[];

}

export interface IPVPFrames {

    frames?: (IPVPFrame[]|null);
}

export class PVPFrames implements IPVPFrames {

    constructor(properties?: IPVPFrames);

    public frames: IPVPFrame[];

}

export interface IPVPResult {

    kills?: (number[]|null);

    length?: (number[]|null);

    time?: (number|any|null);

    gone?: (number[]|null);

    version?: (number|null);

    matchInfo?: (IMatchInfo|null);

    frames?: (IPVPFrame[]|null);

    md5?: (string|null);
}

export class PVPResult implements IPVPResult {

    constructor(properties?: IPVPResult);

    public kills: number[];

    public length: number[];

    public time: (number|any);

    public gone: number[];

    public version: number;

    public matchInfo?: (IMatchInfo|null);

    public frames: IPVPFrame[];

    public md5: string;

}

export interface IRankLength {

    id?: (number|null);

    length?: (number|null);

    rank?: (number|null);

    mini?: (IGamerMini|null);
}

export class RankLength implements IRankLength {

    constructor(properties?: IRankLength);

    public id: number;

    public length: number;

    public rank: number;

    public mini?: (IGamerMini|null);

}

export interface IRoomInfo {

    id?: (number|null);

    type?: (number|null);

    time?: (number|any|null);

    members?: (IGamerMini[]|null);
}

export class RoomInfo implements IRoomInfo {

    constructor(properties?: IRoomInfo);

    public id: number;

    public type: number;

    public time: (number|any);

    public members: IGamerMini[];

}

export interface IS2C {

    error?: (number|null);

    key?: (string|null);

    gamerLoginS2C?: (IGamerLoginS2C|null);

    gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);

    serverTimeS2C?: (IServerTimeS2C|null);

    gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);

    gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);

    gamerFriendChatS2C?: (IGamerFriendChatS2C|null);

    gamerWorldChatS2C?: (IGamerWorldChatS2C|null);

    gamerTestChatS2C?: (IGamerTestChatS2C|null);

    gamerClubRequestS2C?: (IGamerClubRequestS2C|null);

    gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);

    gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);

    gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);

    gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);

    gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);

    gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);

    gamerMatchS2C?: (IGamerMatchS2C|null);

    gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);

    gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);

    gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);

    gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);

    gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);

    gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);

    gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);

    gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);

    gamerNewRoomS2C?: (IGamerNewRoomS2C|null);

    gamerAddRoomS2C?: (IGamerAddRoomS2C|null);

    gamerLeaveRoomS2C?: (IGamerLeaveRoomS2C|null);

    gamerNotifyRoomInfoChangeS2C?: (IGamerNotifyRoomInfoChangeS2C|null);
}

export class S2C implements IS2C {

    constructor(properties?: IS2C);

    public error: number;

    public key: string;

    public gamerLoginS2C?: (IGamerLoginS2C|null);

    public gamerLoginGetDataS2C?: (IGamerLoginGetDataS2C|null);

    public serverTimeS2C?: (IServerTimeS2C|null);

    public gamerNotifyLoginOtherS2C?: (IGamerNotifyLoginOtherS2C|null);

    public gamerSubChatChannelS2C?: (IGamerSubChatChannelS2C|null);

    public gamerFriendChatS2C?: (IGamerFriendChatS2C|null);

    public gamerWorldChatS2C?: (IGamerWorldChatS2C|null);

    public gamerTestChatS2C?: (IGamerTestChatS2C|null);

    public gamerClubRequestS2C?: (IGamerClubRequestS2C|null);

    public gamerNotifyNewChatS2C?: (IGamerNotifyNewChatS2C|null);

    public gamerNewFriendReqS2C?: (IGamerNewFriendReqS2C|null);

    public gamerNotifyNewFriendReqS2C?: (IGamerNotifyNewFriendReqS2C|null);

    public gamerProcessFriendReqS2C?: (IGamerProcessFriendReqS2C|null);

    public gamerNotifyNewFriendS2C?: (IGamerNotifyNewFriendS2C|null);

    public gamerNotifyNewMailS2C?: (IGamerNotifyNewMailS2C|null);

    public gamerMatchS2C?: (IGamerMatchS2C|null);

    public gamerNotifyMatchInfoS2C?: (IGamerNotifyMatchInfoS2C|null);

    public gamerPVPSyncS2C?: (IGamerPVPSyncS2C|null);

    public gamerNotifyPVPSyncS2C?: (IGamerNotifyPVPSyncS2C|null);

    public gamerNotifyNewPVPResultS2C?: (IGamerNotifyNewPVPResultS2C|null);

    public gamerNotifyIconChangeS2C?: (IGamerNotifyIconChangeS2C|null);

    public gamerGetRealTimeRankS2C?: (IGamerGetRealTimeRankS2C|null);

    public gamerCheckPVPBattleS2C?: (IGamerCheckPVPBattleS2C|null);

    public gamerUploadWXInfoS2C?: (IGamerUploadWXInfoS2C|null);

    public gamerNewRoomS2C?: (IGamerNewRoomS2C|null);

    public gamerAddRoomS2C?: (IGamerAddRoomS2C|null);

    public gamerLeaveRoomS2C?: (IGamerLeaveRoomS2C|null);

    public gamerNotifyRoomInfoChangeS2C?: (IGamerNotifyRoomInfoChangeS2C|null);

}
