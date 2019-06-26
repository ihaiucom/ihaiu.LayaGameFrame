import RoleData from "./RoleData";
import Game from "../../Game";
import AntFrame from "../../AntFrame/AntFrame";
import GamerStatus = proto.GamerStatus;
import IGamerMain = proto.IGamerMain;
import IGamerMini = proto.IGamerMini;

/** 玩家等级快照数据 */
export class UserLevelSnapshotData
{

    // 经验
    public exp: number;

    //玩家等级
    public level: number;

}

export default class UserData extends RoleData
{
    /**
     * 是否登录了并且获取了用户数据
     */
    isLoginAndGetUserData: boolean = false;


    // 获取头像Url		
    get headIconUrl(): string
    {
        if(!isNullOrEmpty(AntFrame.platform.userInfo.avatarUrl))
            return AntFrame.platform.userInfo.avatarUrl;
        
        let portraitCfg = Game.config.headPortrait.getConfig(this.icon);
        if(!portraitCfg) portraitCfg = Game.config.headPortrait.getConfig(1001);
        if (portraitCfg)
        {
            return portraitCfg.iconUrl;
        }
        return "";
    }

    
    public setGamerMain(data: IGamerMain)
    {
        console.info("UserData setGamerMain", data);
        super.setGamerMain(data);
    }

    // 等级快照数据
    public levelSnapshotData = new UserLevelSnapshotData();
    // 刷新等级快照
    public levelSnapshot()
    {
        this.levelSnapshotData.exp = this.exp;
        this.levelSnapshotData.level = this.level;
    }


}