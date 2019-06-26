import Game from "../Game";
import LangManager from "../Config/LangManager";
import LangType from "../Config/LangType";
import TEXT from "../Config/Keys/TEXT";
import Mathf from "../Libs/Mathf";


export default class TimeHelper
{
	/** 一天的秒数 */
	public static ONE_DAY_SECONDS: number = 86400;
	/** 一小时的秒数 */
	public static ONE_HOUR_SECONDS: number = 3600;

	public static MonthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	
	/**
	 * 获取指定时间 月的天数 (28/ 29/ 30 / 31)
	 * @param fullYear 年
	 * @param month 月 取值范围(1--12) 
	 */
	public static GetServerMonthDateNum(fullYear?: number, month?: number): number
	{
		let date = this.GetServerDateByTimestamp();
		if(fullYear === null || fullYear === undefined)
			fullYear = date.getFullYear();
			
		if(month === null || month === undefined)
			month = date.getMonth() + 1;
		
		date = new Date(fullYear, month, 0);
		return date.getDate();
	}

	/**
	 * 日期转字符串 ， 返回 2019-6-24 周7 18:45:30
	 * @param d 
	 */
	public static ToStr(d: Date): string
	{
		return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 周${d.getDay() == 0 ? 7 : d.getDay()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`; 
	}

	//======================================
	// 获取服务器时区 时间
	//--------------------------------------


	/**
	 * 获取服务器时区时间的本地对应时间 （用于判断跨天，星期，显示服务器时间）,返回的Date，使用Get函数可以获得服务器的年月日时分秒，方便显示和比较， 但时间戳不同，慎用。
	 * @param timestamp 时间戳 秒
	 * @return 返回的Date，使用Get函数可以获得服务器的年月日时分秒，方便显示和比较， 但时间戳不同，慎用。
	 */
	public static GetServerDateByTimestamp(timestamp?: number):Date
	{
		if (timestamp == null)
		{
			timestamp = Game.time.serverSeconds;
		}
		return new Date(timestamp * 1000 - Game.time.localSubServerTimeZone);
	}

	
	
	/**
	 * 获取服务器时间戳 (精确到毫秒)
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static GetServerTimestampByHMS(h: number = 0, m: number = 0, s: number = 0): number
	{
		let date = this.GetServerDateByHMS(h, m, s);
		return date.getTime();
	}

	
	/**
	 * 获取服务器时间戳  (精确到毫秒)
	 * @param timeHMS 字符窜时间 01:20:10
	 */
	public static GetServerTimestampByHMSText(timeHMS: string): number
	{
		let strTimes: string[] = timeHMS.split(':');
		let h, m, s;
		if (strTimes[0])
		{
			h = Number(strTimes[0]) || 0;
		}
		if (strTimes[1])
		{
			m = Number(strTimes[1]) || 0;
		}
		if (strTimes[2])
		{
			s = Number(strTimes[2]) || 0;
		}
		return this.GetServerTimestampByHMS(h, m, s);
	}

	
	/**
	 * 获取服务器时间
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static GetServerDateByHMS(h: number = 0, m: number = 0, s: number = 0): Date
	{
		let date = this.GetServerDateByTimestamp();
		date.setHours(h);
		date.setMinutes(m);
		date.setSeconds(s);
		return date;
	}

	
	//======================================
	// 获取指定时间点的日期, 如果指定时间点过了将修改日期到下一个时间点, 参照服务器时区
	//--------------------------------------

	
	/**
	 * 获取下一个服务器时间点
	 * 如果当前时间 <= 目标时间， 返回目标时间
	 * 如果当前时间 > 目标时间, 返回第二天对应时间
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static getServerNextDate(h: number = 0, m: number = 0, s: number = 0): Date
	{
		let date = this.GetServerDateByHMS(h, m, s);
		if(date.getTime() >= Game.time.serverMilliseconds)
		{
			return date;
		}

		date.setHours(date.getHours() + 24);
		return date;
	}

	
	/**
	 * 获取下一个服务器时间点
	 * 如果当前时间 <= 目标时间， 返回目标时间
	 * 如果当前时间 > 目标时间, 返回下一周对应时间
	 * 
	 * @param week 星期几 (0--6) 
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static getServerNextWeekDate(week: number, h: number = 0, m: number = 0, s: number = 0): Date
	{
		let date = this.GetServerDateByHMS(h, m, s);
		let subWeek = week - date.getDay();
		if(subWeek < 0)
		{
			subWeek += 7;
		}
		else if(subWeek == 0)
		{
			if(date.getTime() < Game.time.serverMilliseconds)
			{
				subWeek += 7;
			}
		}

		date.setDate(date.getDate() + subWeek);
		return date;
	}

	

	
	/**
	 * 获取下一个服务器时间点
	 * 如果当前时间 <= 目标时间， 返回目标时间
	 * 如果当前时间 > 目标时间, 返回下一个月对应时间
	 * @param monthDate (1 ~ 31), 如果是0就是当天， 如果小于0就是月末倒数第几天
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static getServerNextMonthDate(monthDate: number, h: number = 0, m: number = 0, s: number = 0): Date
	{
		let date = this.GetServerDateByHMS(h, m, s);
		let mdate = monthDate;
		if(monthDate == 0)
		{
			mdate = date.getDate();
		}
		else if(monthDate < 0)
		{
			mdate = this.GetServerMonthDateNum() + monthDate + 1;
		}

		date.setDate(mdate);
		
		if(date.getTime() >= Game.time.serverMilliseconds)
		{
			return date;
		}

		let nextMothDateNum = this.GetServerMonthDateNum(date.getFullYear(), date.getMonth() + 1);

		if(monthDate < 0)
		{
			mdate = nextMothDateNum + monthDate + 1;
		}

		if(mdate > nextMothDateNum)
		{
			mdate = nextMothDateNum;
		}

		date.setMonth(date.getMonth() + 1);
		date.setDate(mdate);

		return date;
	}



	

	
	//======================================
	// 时间--判断
	//--------------------------------------

	

	/**
	 * 获取服务器明天0点时间戳 (精确到毫秒)
	 */
	public static getServerTomorrowZeroPointTimestamp()
	{
		return this.GetServerTimestampByHMS()  + this.ONE_DAY_SECONDS * 1000;
	}





	/**
	 * 判断服务器时区下时间戳的星期
	 * @param timestamp 时间戳 秒
	 */
	public static IsServerWeek(timestamp: number, week: number): boolean
	{
		let date = this.GetServerDateByTimestamp(timestamp);
		return date.getDay() == week;
	}

	
	

    /**
	 * 检查本地时区是否就今天
	 * @param timestamp 时间戳 秒
	 */		
    public static isToday(timestamp: number)
    {
        let d = new Date(timestamp * 1000);
        let c = new Date();
        return d.getFullYear() == c.getFullYear() && d.getMonth() == c.getMonth() && d.getDate() == c.getDate();
	}
	
	

	/**
	 * 检查服务器时区是否就今天
	 * @param timestamp 时间戳 秒
	 */
	public static IsServerToday(timestamp: number): boolean
	{
		let d1 = this.GetServerDateByTimestamp(timestamp);
		let d2 = this.GetServerDateByTimestamp();
		return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
	}


	/**
	 * 判断本地时区下时间戳是否是同一天
	 * @param timestamp1 时间戳 秒
	 * @param timestamp2 时间戳 秒
	 */
	public static IsSameDay(timestamp1: number, timestamp2: number): boolean
	{
		let d1 = new Date(timestamp1);
		let d2 = new Date(timestamp2);
		return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
	}
	

	/**
	 * 判断服务器时区下时间戳是否是同一天
	 * @param timestamp1 时间戳 秒
	 * @param timestamp2 时间戳 秒
	 */
	public static IsServerSameDay(timestamp1: number, timestamp2: number): boolean
	{
		let d1 = this.GetServerDateByTimestamp(timestamp1);
		let d2 = this.GetServerDateByTimestamp(timestamp2);
		return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
	}

	


	/**
	 * 判断服务器时区下时间戳是否超过某个时刻
	 * @param timestamp 时间戳 秒
	 */
	public static IsBeyondTimeInSameDay(timestamp: number, h: number = 0, m: number = 0, s: number = 0): boolean
	{
		return this.BeyondTimeInSameDay(timestamp, h, m, s) / 1000 <= 0;
	}

	/**
	 * 判断服务器时区下时间戳到指定时间的差
	 * @param timestamp 时间戳 秒
	 */
	public static BeyondTimeInSameDay(timestamp: number, h: number = 0, m: number = 0, s: number = 0): number
	{
		if (h == 24)
		{
			h = 0;
			let date: Date = this.GetServerDateByHMS(h, m, s);
			return (date.getTime() / 1000 + this.ONE_DAY_SECONDS) - timestamp;
		}
		let date: Date = this.GetServerDateByHMS(h, m, s);
		return date.getTime() / 1000 - timestamp;
	}

	/**
	 * 获取某个时间到某个点的秒数
	 * 如果该点过了判断时间 那该点为下一天该点到这个时间的秒数
	 * 否则为该点到判断时间的秒数
	 * @param timestamp 
	 * @param h 
	 * @param m 
	 * @param s 
	 */
	public static SubSecondTimeInDay(timestamp: number, h: number = 0, m: number = 0, s: number = 0): number
	{
		let seconds = this.BeyondTimeInSameDay(timestamp, h, m, s);
		if (seconds <= 0)
		{
			seconds = seconds + this.ONE_DAY_SECONDS;
		}
		return seconds;
	}


	//======================================
	// 时间格式化-- 以时间戳
	//--------------------------------------


	/**
	 * 返回格式 Y-M-D-H:M:S
	 * @param timestamp 时间戳 秒
	 * @param isHaveYear 是否显示年
	 * @param isShowServerTimezoom 是否用服务器时区显示， 默认 flase
	 */
	public static GetYMDHMS(timestamp?: number, isHaveYear: boolean = true, isShowServerTimezoom: boolean = false):string
	{
		//三目运算符
		let Dates: Date = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
		//年份
		const Year: number = Dates.getFullYear();
		//月份下标是0-11
		const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
		//具体的天数
		const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
		//小时
		const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
		//分钟
		const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
		//秒
		// const Seconds = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();

		//返回数据格式
		if (LangManager.Instance.lang == LangType.zh_cn)
		{
			if (isHaveYear)
			{
				return Year + '-' + Months + '-' + Day + ' ' + Hours + ':' + Minutes;
			}
			else
			{
				return Months + '-' + Day + ' ' + Hours + ':' + Minutes;
			}
		}
		else
		{
			if (isHaveYear)
			{
				return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
			}
			else
			{
				return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day + ', ' + Hours + ':' + Minutes;
			}
		}
	}


	
	/**
	 * 获取年月日 Y-M-D
	 * @param timestamp 时间戳 秒
	 * @param isShowServerTimezoom 是否用服务器时区显示， 默认 flase
	 */
	public static GetYMD(timestamp?: number, isShowServerTimezoom: boolean = false)
	{
		//三目运算符
		let Dates: Date = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
		//年份
		const Year: number = Dates.getFullYear();
		//月份下标是0-11
		const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
		//具体的天数
		const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();

		if (LangManager.Instance.lang == LangType.zh_cn)
		{
			//返回数据格式
			return Year + '-' + Months + '-' + Day;
		}
		else
		{
			//返回数据格式
			return Year + ' ' + TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
		}
	}

	/**
	 * 获取日期 M-D
	 * @param timestamp 时间戳 秒
	 * @param isShowServerTimezoom 是否用服务器时区显示， 默认 flase
	 */
	public static GetMD(timestamp?: number, isShowServerTimezoom: boolean = false):string
	{
		//三目运算符
		let Dates: Date = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
		//月份下标是0-11
		const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
		//具体的天数
		const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
		if (LangManager.Instance.lang == LangType.zh_cn)
		{
			//返回数据格式
			return Months + '-' + Day;
		}
		else
		{
			//返回数据格式
			return TimeHelper.MonthText[Dates.getMonth()] + ' ' + Day;
		}
	}

	/**
	 * 获取时间 H:M
	 * @param timestamp 时间戳 秒
	 * @param isShowServerTimezoom 是否用服务器时区显示， 默认 flase
	 */
	public static GetHM(timestamp?: number, isShowServerTimezoom: boolean = false)
	{
		//三目运算符
		let Dates: Date = isShowServerTimezoom ? this.GetServerDateByTimestamp(timestamp) : new Date(timestamp);
		//小时
		const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
		//分钟
		const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
		return Hours + ':' + Minutes;
	}



	
	/**
	 * 获取剩余时间 00:00:00
	 * @param timestamp 时间戳 秒
	 */
	public static TimeleftHHMMSS(timestamp)
	{
		let time = timestamp - Game.time.serverSeconds;
        time = Math.max(time, 0)
		return this.TimeFormatFixedHHMMSS(time);
	}

	/**
	 * 判断倒计时是否结束
	 * @param timestamp 时间戳
	 */
	public static TimeleftIsOver(timestamp)
	{
		let time = timestamp - Game.time.serverSeconds;
		return time <= 0? true: false
	}

	
	//======================================
	// 时间格式化-- 以时间长度
	//--------------------------------------
	
	 
	/**
	 * 返回格式 00:00:00
	 * @param time 秒 时间长度
	 */
	public static TimeFormatFixedHHMMSS(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600)
		let minutes = Math.floor((time % 3600) / 60)
		let seconds = Math.floor(time % 60)
		str += hours < 10 ? "0" + hours : hours;
		str += ":" + (minutes < 10 ? "0" + minutes : minutes);
		str += ":" + (seconds < 10 ? "0" + seconds : seconds);
		return str;
	}

	/**
	 * 返回格式 00：00：00
	 * @param time 秒 时间长度
	 * 注：位图字体生成的字符串需要中文的"："获取
	 */
	public static TimeFormatFixedHHMMSSCN(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600)
		let minutes = Math.floor((time % 3600) / 60)
		let seconds = Math.floor(time % 60)
		str += hours < 10 ? "0" + hours : hours;
		str += "：" + (minutes < 10 ? "0" + minutes : minutes);
		str += "：" + (seconds < 10 ? "0" + seconds : seconds);
		return str;
	}

	/**
	 * 返回格式 x小时x分x秒
	 * @param time 秒
	 */
	public static TimeFormatFixedXHXMXS(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600);
		let minutes = Math.floor((time % 3600) / 60);
		let seconds = Math.floor(time % 60);
		if (hours > 0)
			str += hours + TEXT.Hour;
		str += minutes + TEXT.Minute;
		str += seconds + TEXT.Second;
		return str;
	}


	/**
	 * 返回格式 00:00:00, 前面为0 不显示
	 * @param time 秒
	 */
	public static TimeFormatHHMMSS(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600)
		let minutes = Math.floor((time % 3600) / 60)
		let seconds = Math.floor(time % 60)
		str += hours == 0 ? "" : "0" + hours;
		str += (hours > 0 ? ":" : "") + (minutes < 10 ? "0" + minutes : minutes);
		str += ":" + (seconds < 10 ? "0" + seconds : seconds);
		return str;
	}

	/**
	 * 返回格式 x小时x分x秒, 前面为0 不显示
	 * @param time 秒
	 */
	public static TimeFormatXHXMXS(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600);
		let minutes = Math.floor((time % 3600) / 60);
		let seconds = Math.floor(time % 60);
		if (hours > 0)
			str += hours + TEXT.Hour;
		if (minutes > 0)
			str += minutes + TEXT.Minute;
		str += seconds + TEXT.Second;
		return str;
	}

	/**
	 * 返回格式 x小时x分x秒, 为0 不显示
	 * @param time 秒
	 */
	public static TimeFormatXHXMXSWithoutZero(time)
	{
		let str: string = "";
		let hours = Math.floor(time / 3600);
		let minutes = Math.floor((time % 3600) / 60);
		let seconds = Math.floor(time % 60);
		if (hours > 0)
			str += hours + TEXT.Hour;
		if (minutes > 0)
			str += minutes + TEXT.Minute;
		if(seconds > 0)
			str += seconds + TEXT.Second;
		return str;
	}

	
	//======================================
	// 时间格式化--获取 xx前
	//--------------------------------------
	
	/**
	 * 返回 Y-M-D / x个月前 / x周前 / x天前 / x小时前 / x分钟前 / x秒前
	 * @param timestamp 时间戳 (秒)
	 */
	public static TimeBeforeByTimestamp(timestamp: number): string
	{
		let seconds = Game.time.serverSeconds - timestamp;
		return this.TimeBefore(seconds);
	}


	/**
	 * 返回 Y-M-D / x个月前 / x周前 / x天前 / x小时前 / x分钟前 / x秒前
	 * @param seconds 时间长度 (秒)
	 */
	public static TimeBefore(seconds: number): string
	{
		let totalDays = seconds / this.ONE_DAY_SECONDS;
		if(totalDays > 60)
		{
			return this.GetYMD(totalDays);
		}
		else
		{
			if(totalDays > 30)
			{
				return TEXT.DATE_MonthBefore.format(1);
			}
			else
			{
				if(totalDays > 14)
				{
					return TEXT.DATE_WeekBefore.format(2);
				}
				else
				{
					if(totalDays > 7)
					{
						return TEXT.DATE_WeekBefore.format(1);
					}
					else
					{
						if(totalDays > 1)
						{
							return TEXT.DATE_DayBefore.format(Math.floor(totalDays));
						}
						else
						{
							let totalHours = seconds / this.ONE_HOUR_SECONDS;
							if(totalHours > 1)
							{
								return TEXT.DATE_HourBefore.format(Math.floor(totalHours));
							}
							else
							{
								let totalMinutes = seconds / 60;
								if(totalMinutes > 1)
								{
									return TEXT.DATE_MinuteBefore.format(Math.floor(totalMinutes));
								}
								else if(seconds >= 1)
								{
									return TEXT.DATE_SecondeBefore.format(Math.floor(seconds));
								}
								else
								{
									return TEXT.DATE_SecondeBefore.format(1);
								}
							}
						}
					}
				}
			}
		}
	}




}

window['TimeHelper'] = TimeHelper;