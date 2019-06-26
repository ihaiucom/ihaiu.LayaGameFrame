import Dictionary from "../../Libs/Helpers/Dictionary";
import { LogLevel } from "./Log";
import LogItem from "./LogItem";

export default class Loger
{
	maxcount = 1000;
	public enable = true;
	private dict: Dictionary<LogLevel, LogItem[]> = new Dictionary<LogLevel, LogItem[]>();
    private list: LogItem[] = [];
    
	getList(type: LogLevel): LogItem[]
	{
		if (this.dict.hasKey(type))
			return this.dict.getValue(type);
		let l = [];
		this.dict.add(type, l);
		return l;
	}

	get listAll(): LogItem[]
	{
		return this.list;
	}

	getListByTypes(types: LogLevel[]): LogItem[]
	{
		let list = [];
		for (let i = 0; i < this.list.length; i++)
		{
			if (types.indexOf(this.list[i].logType) != -1)
			{
				list.push(this.list[i]);
			}
		}
		return list;
	}

	addLog(type: LogLevel, message?: string, ...optionalParams: any[])
	{
		if(!this.enable) return;
		if (message)
		{
			let item = LogItem.poolGet();
			item.logType = type;
			item.msg = this.stringFormat(message, ...optionalParams);
			this.add(item);
		}
		else
		{
			let item = LogItem.poolGet();
			item.logType = type;
			item.msg =  message;
			this.add(item);
		}
	}

	add(item: LogItem)
	{
		if(!this.enable) return;
		
		let l = this.getList(item.logType);
		l.push(item);
		this.list.push(item);
		if (this.list.length > this.maxcount)
		{
			this.list.shift().poolRecover();
			
		}

		if (l.length > this.maxcount)
		{
			l.shift().poolRecover();
		}
	}

	clear(): void
	{
		console.clear();
		for(let item of this.list)
		{
			item.poolRecover();
		}
		this.list = [];
		this.dict.clear();
    }
    
    
	stringFormat(message?: string, ...optionalParams: any[]): string
	{
		if (optionalParams)
		{
			for (let i = 0; i < optionalParams.length; i++)
			{
				if (/%s|%d|%i|%o/.test(message))
				{
					message = message.replace(/%s|%d|%i|%o/, optionalParams[i]);
				}
				else
				{
					break;
				}
			}
		}
		return message;

	}




	debug(message?: string, ...optionalParams: any[]): void
	{
		this.addLog(LogLevel.Debug, message, ...optionalParams);
	}

	error(message?: any, ...optionalParams: any[]): void
	{
		this.addLog(LogLevel.Error, message, ...optionalParams);
	}

	info(message?: any, ...optionalParams: any[]): void
	{
		this.addLog(LogLevel.Info, message, ...optionalParams);
	}

	log(message?: any, ...optionalParams: any[]): void
	{
		this.addLog(LogLevel.Info, message, ...optionalParams);
	}

	
	warn(message?: any, ...optionalParams: any[]): void
	{
		this.addLog(LogLevel.Warn, message, ...optionalParams);
	}

}