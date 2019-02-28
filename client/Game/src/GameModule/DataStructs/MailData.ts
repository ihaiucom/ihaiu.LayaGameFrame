export default class MailData
	{
		uuid: string = "";
		title: string = ""; // 标题
		content: string = ""; // 内容
		// itemList: Array<Proto.SS.ItemDesc> | null = null; // 奖励列表
		createTime: number = 0; // 创建时间
		IsRewardGot: boolean = false;
		isNew: boolean = false; // 是否是新邮件

		// static Create(data: Proto.SS.MailData)
		// {
		// 	let item: MailData = new MailData();
		// 	item.content = data.content;
		// 	item.itemList = data.itemList;
		// 	item.createTime = data.createTime;
		// 	item.IsRewardGot = data.IsRewardGot;
		// 	item.isNew = data.isNew;
		// 	item.title = data.title;
		// 	item.uuid = data.uuid;
		// 	return item;
		// }

		// get IsNew()
		// {
		// 	if (this.itemList.length > 0)
		// 	{
		// 		return this.isNew && !this.IsRewardGot;
		// 	}
		// 	return this.isNew;
		// }

		// get HasReward()
		// {
		// 	return this.itemList.length > 0 && !this.IsRewardGot;
		// }

		// get HasGetReward()
		// {
		// 	return this.itemList.length > 0 && this.IsRewardGot;
		// }
	}