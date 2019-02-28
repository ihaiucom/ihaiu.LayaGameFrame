import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MailData from "../DataStructs/MailData";

export default class MailModel extends MModel
{
	private dict: Dictionary<string, MailData>;
	constructor()
	{
		super();
		this.dict = new Dictionary<string, MailData>();
	}

	get mailList(): MailData[]
	{
		let list: MailData[] = [];
		let items = this.dict.getValues();
		for (let i = 0; i < items.length; i++)
		{
			if (items[i])
			{
				list.push(items[i]);
			}
		}
		return list;
	}

	// public UpdateServeMailData(mail: Proto.SS.MailData)
	// {
	// 	let data: Games.MailData = Games.MailData.Create(mail);
	// 	this.dict.add(mail.uuid, data);
	// }

	// public RemoveMailData(uuid: string)
	// {
	// 	this.dict.remove(uuid);
	// }

	// public GetMailList(): Array<Games.MailData>
	// {
	// 	return this.mailList.sort((a, b) =>
	// 	{
	// 		if (a.IsNew == true && b.IsNew != true)
	// 		{
	// 			return -1;
	// 		}
	// 		if (a.IsNew != true && b.IsNew == true)
	// 		{
	// 			return 1;
	// 		}
	// 		return b.createTime - a.createTime;
	// 	});
	// }

	// public GetMail(uuid): Games.MailData
	// {
	// 	return this.dict.getValue(uuid);
	// }

	// public lastDelectMail: string[] = [];
	// public DeleteMail(uuid: string)
	// {
	// 	this.lastDelectMail = [];
	// 	let mail: Games.MailData = this.GetMail(uuid);
	// 	if (mail && (mail.itemList.length == 0 || mail.IsRewardGot))
	// 	{
	// 		this.lastDelectMail.push(uuid);
	// 		Game.protosender.Mail.MailDelete(uuid);
	// 	}
	// }
	// public RewardMail(uuid, showError?: boolean)
	// {
	// 	if (showError == null)
	// 	{
	// 		showError = true;
	// 	}
	// 	let mail: Games.MailData = this.GetMail(uuid);
	// 	let rewardList: DTItemNum[] = [];
	// 	if (mail && !mail.IsRewardGot && mail.itemList.length > 0)
	// 	{
	// 		let itemNums = 0;
	// 		for (var item of mail.itemList)
	// 		{
	// 			let cfg = Game.config.item.getConfig(item.itemId);
	// 			if (cfg && cfg.type == 4)
	// 			{
	// 				itemNums += item.amount;
	// 			}
	// 			if (Game.moduleModel.bag.IsLicenceFull(item.itemId, item.amount))
	// 			{
	// 				if (showError)
	// 				{
	// 					Game.system.toastText(Games.TEXT.LincenceMax);
	// 				}
	// 				return false;
	// 			}
	// 		}
	// 		if (Game.moduleModel.bag.IsBagFull(itemNums))
	// 		{
	// 			if (showError)
	// 			{
	// 				Game.system.toastMsg(MsgKey.produce_warehouse_max);
	// 			}
	// 			return false;
	// 		}
	// 		Game.protosender.Mail.MailGetReward(uuid);
	// 		for (var item of mail.itemList)
	// 		{
	// 			let reward = new DTItemNum();
	// 			reward.itemId = item.itemId;
	// 			reward.itemNum = item.amount;
	// 			rewardList.push(reward);
	// 		}
	// 		return rewardList;
	// 	}
	// 	return false;
	// }

	// public ReadMail(uuid)
	// {
	// 	let mail: Games.MailData = this.GetMail(uuid);
	// 	if (mail && mail.isNew)
	// 	{
	// 		Game.protosender.Mail.MailRead(uuid);
	// 	}
	// }

	// public DeleteAll()
	// {
	// 	let mailList = this.GetMailList();
	// 	let deleteList: string[] = [];
	// 	for (var mail of mailList)
	// 	{
	// 		if (mail.IsNew)
	// 		{
	// 			continue;
	// 		}
	// 		if (mail.itemList.length > 0 && !mail.IsRewardGot)
	// 		{
	// 			continue;
	// 		}
	// 		deleteList.push(mail.uuid);
	// 	}
	// 	if (deleteList.length == 0)
	// 	{
	// 		Game.system.toastMsg(MsgKey.non_deletable_mail);
	// 	} else
	// 	{

	// 		this.lastDelectMail = deleteList;
	// 		Game.protosender.Mail.MailDeleteMany(deleteList);
	// 	}
	// }

	// public RewardAll()
	// {
	// 	let mailList = this.GetMailList();
	// 	let rewardMailList: string[] = [];
	// 	let itemNums = 0
	// 	let isFull: boolean = false;
	// 	let isLicenceLimit: boolean = false;
	// 	let licenceAddNum: number = 0;

	// 	let Movie_Licence_ID = Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value;
	// 	for (var mail of mailList)
	// 	{
	// 		if (mail.itemList.length == 0 || mail.IsRewardGot)
	// 		{
	// 			continue;
	// 		}
	// 		let thItems = 0;
	// 		let thLicenceNum = 0;
	// 		for (var item of mail.itemList)
	// 		{
	// 			let cfg = Game.config.item.getConfig(item.itemId);
	// 			if (cfg && cfg.type == 4)
	// 			{
	// 				thItems += item.amount;
	// 			}
	// 			if (item.itemId == Movie_Licence_ID)
	// 			{
	// 				thLicenceNum += item.amount;
	// 			}
	// 		}
	// 		if (item.itemId == Movie_Licence_ID)
	// 		{
	// 			if (Game.moduleModel.bag.IsLicenceFull(item.itemId, item.amount + licenceAddNum))
	// 			{
	// 				isLicenceLimit = true;
	// 				continue;
	// 			} else
	// 			{
	// 				licenceAddNum++;
	// 			}
	// 		}

	// 		if (Game.moduleModel.bag.IsBagFull(itemNums + thItems))
	// 		{
	// 			isFull = true;
	// 			continue;
	// 		}
	// 		itemNums += thItems;
	// 		rewardMailList.push(mail.uuid);
	// 	}

	// 	if (rewardMailList.length > 0)
	// 	{
	// 		Game.protosender.Mail.MailGetRewardMany(rewardMailList);
	// 	}

	// 	if (isFull)
	// 	{
	// 		Game.system.toastMsg(MsgKey.produce_warehouse_max);
	// 	}
	// 	if (isLicenceLimit)
	// 	{
	// 		Game.system.toastText(Games.TEXT.LincenceMax);
	// 	}
	// 	if ((!isLicenceLimit && !isFull) && rewardMailList.length == 0)
	// 	{
	// 		Game.system.toastMsg(MsgKey.non_can_receive_mail);
	// 	}
	// }

	// get RedNum(): number
	// {
	// 	let mailList = this.GetMailList();
	// 	let num = 0;
	// 	for (var index = 0; index < mailList.length; index++)
	// 	{
	// 		var mail = mailList[index];
	// 		if (mail.IsNew)
	// 		{
	// 			num++;
	// 		}
	// 	}
	// 	return Math.min(num, 999);
	// }
}