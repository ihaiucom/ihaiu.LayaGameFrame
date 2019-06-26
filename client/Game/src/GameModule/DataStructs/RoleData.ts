import Game from '../../Game';
import GamerStatus = proto.GamerStatus;
import IGamerMain = proto.IGamerMain;
import IGamerMini = proto.IGamerMini;
import HeadPortraitConfig from '../../Config/ConfigExtends/HeadPortraitConfig';

export default class RoleData
{
    //玩家id
    public id: number;

    //玩家uid
    public uid: string;

    //玩家所属逻辑服id
    public lsid: number;

    //所在物理服id
    public psid: number;

    //玩家状态, 仅用作客户端显示使用
    public state: GamerStatus;

    //玩家姓名
    public name: string;

    //玩家等级
    public level: number;

    //快速重连session
    public session: string;

    //建立时间
    public create: (number|any);

    //最后登陆时间
    public lastLogin: (number|any);

    //最后下线时间
    public lastLogout: (number|any);

    //角色类型
    public typeId: number;

    public icon: number;

    // 经验
    public exp: number;

    // pvp服务器Session
    public pvpSession: string;

    // 头像
    public avatar: string;

    //联盟id
    public leagueId: number;

    //vip等级
    public vipLevel: number = 1;
    
    
    public setGamerMain(data: IGamerMain)
    {
        for(var key in data)
        {
            this[key] = data[key];
        }
    }

    public set setGamerMini(data: IGamerMini)
    {
        for(var key in data)
        {
            this[key] = data[key];
        }
    }
    // 获取头像Url		
    get headIconUrl(): string
    {
        let portraitCfg: HeadPortraitConfig = Game.config.headPortrait.getConfig(this.icon);
        if(!portraitCfg) portraitCfg = Game.config.headPortrait.getConfig(1001);
        if (portraitCfg)
        {
            return portraitCfg.iconUrl;
        }
        return "";
    }

    
    // 获取升级需要经验值
    get upgradeFans(): number
    {
        let config = Game.config.playerLevel.getConfig(Game.user.level);
        if (config)
        {
            return config.exp;
        }
        return 0;
    }

    // 获取等级的最大经验值
    public getMaxExpByLevel(lv: number)
    {
        let config = Game.config.playerLevel.getConfig(lv);
        if (config)
        {
            return config.exp;
        }
        return 0;
    }

    /** 是否是最大等级 */
    public getIsMaxLevel(level: number)
    {
        return level >= Game.config.playerLevel.maxLevel;
    }

    
}