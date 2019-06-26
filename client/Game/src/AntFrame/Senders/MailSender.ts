import Game from "../../Game";
import GameEventKey from "../../GameEventKey";

export default class MailSender
{
    //请求邮件列表
    async getMailDatas(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerGetMailC2S();
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求读/领取邮件
    async changeStateMail(id:string, state:number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerChangeMailStateC2S(id, state);
        if (s2c.error == 0) {
            Game.moduleModel.mail.changeMail(id, state);
            Game.event.dispatch(GameEventKey.Mail_Change, state);
            Game.event.dispatch(GameEventKey.Mail_Update);
        }
    
        return Promise.resolve(s2c.error == 0);
    }

    //请求删除单条邮件
    async delMail(id: string): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerDelMailC2S(id);
        if (s2c.error == 0) {
            Game.moduleModel.mail.delMails(id);
            
            let len: number = Game.moduleModel.mail.getMailList().length;
            if (len == 9) this.getMailDatas();
            

            Game.event.dispatch(GameEventKey.Mail_DelOne);
            Game.event.dispatch(GameEventKey.Mail_Update, [id]);
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求删除已读邮件
    async delHaveReadMail(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerDelHaveReadMailC2S();
        if (s2c.error == 0) {
            Game.moduleModel.mail.delMails();
            Game.event.dispatch(GameEventKey.Mail_Update);
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求一键领取奖励
    async oneKeyRcvMail(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerOneKeyRcvMailRewardC2S();
        if (s2c.error == 0) {
            Game.moduleModel.mail.rcvMails();
            Game.event.dispatch(GameEventKey.Mail_Update);
        }

        return Promise.resolve(s2c.error == 0);
    }

    //---------------------GM-----------------
    //GM添加邮件
    async addMailGM(): Promise<boolean>
    {
        // let s2c = await Game.net.AsyncGamerGmAddMailC2S();
        // if (s2c.error == 0) {
            
        // }

        // return Promise.resolve(s2c.error == 0);
        return Promise.resolve(0 == 0);
        
    }
    //GM新邮件
    async newMailGM(): Promise<boolean>
    {
        // let s2c = await Game.net.AsyncGamerGmNewMailC2S();
        // if (s2c.error == 0) {
            
        // }

        // return Promise.resolve(s2c.error == 0);
        return Promise.resolve(0 == 0);
        
    }
}