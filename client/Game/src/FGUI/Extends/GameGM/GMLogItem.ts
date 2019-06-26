import GMLogItemStruct from "../../Generates/GameGM/GMLogItemStruct";
import LogItem from "../../../GameFrame/Log/LogItem";
import { LogLevel } from "../../../GameFrame/Log/Log";

export default class GMLogItem extends GMLogItemStruct
{
	data: LogItem;

	setData(data: LogItem)
	{
		this.data = data;
		try
		{
			this.title = data.msg;
		}
		catch (e)
		{

		}
		switch (data.logType)
		{
			case LogLevel.Info:
				this.m_title.color = "#121212";
				break;
			case LogLevel.Warn:
				this.m_title.color = "#FFFF00";
				break;
			case LogLevel.Error:
				this.m_title.color = "#FF0000";
				break;
		}
	}
}