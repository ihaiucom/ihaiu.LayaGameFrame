import ItemData from "./ItemData";
import Game from "../../Game";

export default class MailData 
{
	id: string;         //邮件ID
	mailType: number;   //邮件类型
	time: string;       //邮件发送时间
	theme: string;      //邮件主题
	msg: string;        //邮件内容
	attachments: Array<ItemData>; //附件
	state: number;      //状态
	serverId: number;   //服务器ID
	senderId: number;   //发送者ID
	level: number;      //接收等级
	endTime: number;     //到期时间
	isDel: number;      //一键删除
	cfgId: number;
	save: boolean;

	//创建邮件数据单位
	static Create(msg: any): MailData {
		let mail   = new MailData();
		mail.id    = msg.id;
		mail.mailType = msg.mailType;
		mail.time  = msg.time;
		mail.state = msg.state;

		//读表 or 读服务器
		let data   = msg.cfgId ? MailData.GetMailDataById(msg.cfgId) : msg;
		mail.theme = data.title;
		mail.msg   = data.content;
		if (data.attachments && data.attachments.length > 0) {
			mail.attachments = MailData.GetRewardDatas(data.attachments, 0);
		}

		if (data.item && data.item[0].itemId != 0) {
			mail.attachments = MailData.GetRewardDatas(data.item, 1);
		}

		return mail;
	}

	//解析奖励数据 type:0服务器 1查表
	static GetRewardDatas(arr: Array<any>, type: number): Array<ItemData> {
		let list: Array<ItemData> = [];
		for (let i: number = 0; i < arr.length; i++) {
			let data: ItemData = null;
			if (type == 0) {
				data = ItemData.Create(arr[i].id, arr[i].count);
			} else {
				data = ItemData.Create(arr[i].itemId, arr[i].itemNum);
			}
			
			if (data) list.push(data);
		}

		return list;
	}

	//根据id获取邮件
	static GetMailDataById(id: number): any {
		let mailConfig = Game.config.mail.getConfig(id);
		return mailConfig;
	}

	//根据id获取邮件描述
	static GetMailContentById(id: number): string {
		let mailConfig = Game.config.mail.getConfig(id);
		return mailConfig.content;
	}

}