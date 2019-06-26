/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StarStruct from "../../Generates/CommonGame/StarStruct";

export default class Star extends StarStruct
{
    set starNum(num: number)
		{
			if (num == null)
			{
				console.log("Error Star Num == null");
				return;
			}
			if (num < 0)
			{
				num = 0;
			}
			if (num > 6)
			{
				num = 6;
			}
			this.m_starNum.setSelectedIndex(num);
		}
}