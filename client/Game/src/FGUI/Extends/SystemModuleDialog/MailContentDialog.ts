/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MailContentDialogStruct from "../../Generates/SystemModuleDialog/MailContentDialogStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import MailData from "../../../GameModule/DataStructs/MailData";
import ItemNumItem from "../CommonGame/ItemNumItem";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";
import GameEventKey from "../../../GameEventKey";
import TimeHelper from "../../../GameHelpers/TimeHelper";

export default class MailContentDialog extends MailContentDialogStruct
{
    private dialogCtrl: DialogCtrl;

    //邮件ID
    mailID:string;
    //奖励数据列表
    rewardDataList: Array<ItemData>;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_closeBtn.onClick(this, this.close);
        this.m_btnClose.onClick(this, this.close);

        this.m_btnDelect.onClick(this, this.delectMail);
        this.m_btnReward.onClick(this, this.rewardMail);

        //注册List刷新回调
        this.m_listReward.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        //注册List点击回调
        this.m_listReward.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);

        //虚拟列表
        this.m_listReward.setVirtual();
    }

    //List刷新回调
    renderListItem(index: number, item: ItemNumItem): void  {
        item.RenderItem(this.rewardDataList[index]);
    }

    //List点击回调
    clickListItem(target: ItemNumItem, event: Event): void  {
        //弹出物品信息框
        event.stopPropagation();

        Game.system.itemInfoShow(target.dataSource);
    }

    //删除单条邮件
    delectMail(): void  {
        Game.sender.mail.delMail(this.mailID);
    }

    //领取单条奖励
    rewardMail(): void  {
        Game.sender.mail.changeStateMail(this.mailID, 2);
    }

    //领取奖励
    rcvMail(state: number): void {
        if(this.rewardDataList) this.m_reward.selectedIndex = state == 2 ? 1 : 2;
    }

    //弹窗显示
    open(datasource: MailData): void  {
        this.m_Msg1.text = TEXT.ToReader;
        this.m_Msg2.text = TEXT.ReawrdMsg;

        this.m_title.text   = datasource.theme;
        this.m_content.text = datasource.msg;
        this.m_time.text    = TimeHelper.GetYMD(Number(datasource.time));

        if (datasource.attachments) {
            this.rewardDataList = datasource.attachments;
            this.m_listReward.numItems = datasource.attachments.length;
            this.m_reward.selectedIndex = datasource.state == 2 ? 1 : 2;
        } else {
            this.rewardDataList = null;
            this.m_listReward.numItems  = 0;
            this.m_reward.selectedIndex = 0;
        }

        this.mailID = datasource.id;
        Game.event.add(GameEventKey.Mail_Change, this.rcvMail, this);
        Game.event.add(GameEventKey.Mail_DelOne, this.close, this);
        this.dialogCtrl.open();
    }

    //弹窗关闭
    close(): void  {
        Game.event.remove(GameEventKey.Mail_Change, this.rcvMail, this);
        Game.event.remove(GameEventKey.Mail_DelOne, this.close, this);
        this.dialogCtrl.close();        
    }
}