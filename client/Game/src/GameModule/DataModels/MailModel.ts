import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MailData from "../DataStructs/MailData";

export default class MailModel extends MModel
{
	private dict: Dictionary<string, MailData>;
	constructor() {
		super();
		this.dict = new Dictionary<string, MailData>();
	}



	//存储邮件列表
	setMailList(msg: Array<any>): void {
		for (let i: number = 0; i < msg.length; i++) {
			let mail: MailData = MailData.Create(msg[i]);
			this.dict.add(mail.id, mail);
		}
	}

	//获取邮件列表
	getMailList(): Array<MailData> {
		let list: Array<MailData> = [];
		let mails = this.dict.getValues();
		for (let i = 0; i < mails.length; i++) {
			list.push(mails[i]);
		}


		list.sort(function (a: any, b:any):number {
			if (a.time == b.time) {
				return b.id - a.id;
			} 
			return b.time - a.time;
		});
		
		return list;
	}

	//查询邮件内容
	getMailData(id: string): MailData {
		let data: MailData = this.dict.getValue(id);
		if (data) return data

		return null;
	}

	//读/领取邮件
	changeMail(id:string, state:number): void {
		let mail:MailData = this.dict.getValue(id);
		mail.state = state;
		this.dict.set(id, mail);
	}

	//删除邮件(one or more)
	delMails(id:string = null): void {
		if (id) {
			//one
			this.dict.remove(id);
		} else {
			//more
			let mails = this.dict.getValues();
			for (let i = 0; i < mails.length; i++) {
				let mail: MailData = mails[i];
				if ((!mail.attachments && mail.state == 1) || mail.state == 2) {
					this.dict.remove(mail.id);
				}
			}
		}
	}

	//奖励邮件(one or more)
	rcvMails(id: string = null): void {
		if (id) {
			//one
			let mail:MailData = this.dict.getValue(id);
			mail.state = 1;
			this.dict.set(id, mail);
		} else {
			//more
			let mails = this.dict.getValues();
			for (let i = 0; i < mails.length; i++) {
				let mail: MailData = mails[i];
				if (mail.attachments && mail.state != 2) {
					mail.state = 2;
					this.dict.set(mail.id, mail);
				}
			}
		}
	}

	//已读邮件判定
	getReadMail(): boolean {
		let mails = this.dict.getValues();
		for (let i = 0; i < mails.length; i++) {
			let mail: MailData = mails[i];
			if ((!mail.attachments && mail.state == 1) || mail.state == 2) {
				return true;
			}
		}

		return false;
	}

	//奖励邮件判定
	getrewardMail(): boolean {
		let mails = this.dict.getValues();
		for (let i = 0; i < mails.length; i++) {
			let mail: MailData = mails[i];
			if (mail.attachments && mail.state != 2) {
				return true;
			}
		}

		return false;
	}
}