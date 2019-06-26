/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopMainBarStruct from "../../Generates/SystemModuleMenu/TopMainBarStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import MenuValidateOpening from "../../../GameModule/MenuValidateOpening";
import MenuValidateUnlock from "../../../GameModule/MenuValidateUnlock";
import TEXT from "../../../Config/Keys/TEXT";

export default class TopMainBar extends TopMainBarStruct
{
    
    // 窗口
    moduleWindow: HomeWindow;
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_headInfo.onClick(this, this.onClickHeadIcon);
        this.m_street.onClick(this, this.onClickStreet);
    }

    // 窗口显示
    onWindowShow(): void
    {
        // 刷新数据
        this.refreshData();
        Game.net.gamerNotifyExpLevelS2C.on(this.refreshData, this);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.net.gamerNotifyExpLevelS2C.off(this.refreshData, this);
    }

    // 点击玩家头像	
    onClickHeadIcon(): void
    {
        Game.menu.open(MenuId.PlayerInfo);
    }

    // 点击排行
    onClickRank(): void
    {
        Game.menu.open(MenuId.Rank);
    }
    // 点击街区
    onClickStreet(): void
    {
        Game.menu.open(MenuId.Rank);
    }

    private OnRankSelfListResponse()
    {
        // this.m_server.m_serverName.text = Game.moduleModel.rank.ServerName;
        // this.m_server.m_serverRank.text = Games.TEXT.RankText.format(Game.moduleModel.rank.SelfServerRank);
        // this.m_street.m_streetId.text = Game.moduleModel.street.GetStreetNameTips(Game.moduleModel.street.streetCurrentId);
        // this.m_street.m_streetRank.text = Games.TEXT.RankText.format(Game.moduleModel.rank.SelfGroupRank);
        // this.m_street.m_blockIcon.url = Game.config.blockLevel.getBlockIconUrl(User.info.stall)
    }

    private onServerRename()
    {
        // 角色名称
        // this.m_street.m_roleName.text = User.info.name;
    }

    // 刷新数据
    refreshData()
    {
        ///------------- 头像--------------

        let user = Game.user;

        // 头像
        this.m_headInfo.m_icon.icon = user.headIconUrl;

        // 经验条
        this.m_headInfo.m_expBar.max = user.upgradeFans;
        this.m_headInfo.m_expBar.value = user.exp;

        // VIP
        // this.m_headInfo.m_vip.text = `Star ${user.vipLevel}`;

        // Heart
        this.m_headInfo.m_level.text = format(TEXT.LVDot, user.level);


        ///------------- 街区--------------

        // 角色名称
        // this.m_street.m_roleName.text = user.name;

        // 排行数据刷新
        this.OnRankSelfListResponse();
        // this.refreshRankUnlock();
    }

    //验证是否解锁排行榜
    refreshRankUnlock()
    {
        // 验证功能是否解锁
        if (<boolean>MenuValidateOpening.getInstance().validate(MenuId.Rank) && <boolean>MenuValidateUnlock.getInstance().validate(MenuId.Rank))
        {
            this.m_street.visible = true;
        } else
        {
            this.m_street.visible = false;
        }
    }


    onRefreshUnlock()
    {
        this.refreshRankUnlock();
    }
    onRefreshRed()
    {
        // this.m_street.m_red.visible = Game.moduleModel.street.RedNum;
        // this.m_server.m_red.visible = Game.moduleModel.rank.RedNum;
        this.m_street.m_red.visible = false;

    }
}