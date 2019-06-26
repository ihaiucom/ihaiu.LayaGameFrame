/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MailWindowUIStruct from "../../Generates/ModuleEmail/MailWindowUIStruct";
import MailWindow from "../../../GameModule/ViewWindows/MailWindow";
import MailItem from "./MailItem";
import MailData from "../../../GameModule/DataStructs/MailData";
import Game from "../../../Game";
import LangType from "../../../Config/LangType";
import MsgKey from "../../../Config/Keys/MsgKey";
import GameEventKey from "../../../GameEventKey";

export default class MailWindowUI extends MailWindowUIStruct
{
    //窗口
    moduleWindow: MailWindow;
    //邮件数据列表
    mailDataList: Array<MailData>;


    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnDelect.onClick(this, this.delectMail);
        this.m_btnReward.onClick(this, this.rewardMail);

        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_list.on(fairygui.Events.PULL_UP_RELEASE, this, this.pullUpToRefresh);

        //虚拟列表
        this.m_list.setVirtual();
    }

    //List刷新回调
    renderListItem(index: number, item: MailItem): void  {
        item.RenderItem(this.mailDataList[index]);
    }

    //List点击回调
    clickListItem(target: MailItem, event: Event): void  {
        let data:MailData = target.dataSource;
        Game.system.mailRead(data);
        if (data.state == 0)Game.sender.mail.changeStateMail(data.id, 1);
    }

    //下一页邮件回调
    pullUpToRefresh(event: Event): void {
        let footer: fairygui.GComponent = this.m_list.scrollPane.footer.asCom;
        this.m_list.scrollPane.lockFooter(footer.sourceHeight);
        Game.sender.mail.getMailDatas();
        Laya.timer.once(500, this, function (): void {
            this.m_list.scrollPane.lockFooter(0);
        });
    }

    //删除已读邮件
    delectMail(): void  {
        let read: boolean = Game.moduleModel.mail.getReadMail();
        if (read) {
            Game.sender.mail.delHaveReadMail();
        } else {
            Game.system.toastMsg(MsgKey.non_deletable_mail);
        }
    }

    //领取附件奖励
    rewardMail(): void  {
        let reward: boolean = Game.moduleModel.mail.getrewardMail();
        if (reward) {
            Game.sender.mail.oneKeyRcvMail();
        } else {
            Game.system.toastMsg(MsgKey.non_can_receive_mail);
        }
    }

    //刷新邮箱窗口
    updateView(id: string = null): void {
        if (id) {
            //播放动画
        }

        this.mailDataList = Game.moduleModel.mail.getMailList();
        let len: number = this.mailDataList.length;
        if (len > 0) {
            this.m_NoMail.visible = false;
            this.m_list.numItems  = len;
        } else {
            this.m_NoMail.visible = true;
            this.m_list.numItems  = 0;
            Game.system.toastMsg(MsgKey.non_mail);
        }

    }


    //主窗口显示时将被调
    onWindowShow(): void  {
        this.updateView();

        //更新view
        Game.event.add(GameEventKey.Mail_Update, this.updateView, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        Game.event.remove(GameEventKey.Mail_Update, this.updateView, this);
    }

}