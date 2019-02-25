import Game from "../../Game";
import TEXT from "../../Config/Keys/TEXT";
import LangType from "../../Config/LangType";

export default class TimeHelper
{
    public static OneDaySeconds: number = 86400;

    public static MonthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    /**
     * 获取服务器时区时间的本地对应时间 （用于判断跨天，星期，显示服务器时间）,返回的Date，使用Get函数可以获得服务器的年月日时分秒，方便显示和比较， 但时间戳不同，慎用。
     * @param time 时间戳 秒
     * @return 返回的Date，使用Get函数可以获得服务器的年月日时分秒，方便显示和比较， 但时间戳不同，慎用。
     */
    public static GetServerDateTime(time?: number)
    {
        if (time == null)
        {
            time = Game.time.serverSeconds;
        }
        return new Date(time * 1000 + Game.time.localSubServerTimezone);
    }

    /**
     * 判断服务器时区下时间戳的星期
     * @param time 时间戳 秒
     */
    public static IsWeek(time: number, week: number): boolean
    {
        let date = this.GetServerDateTime(time);
        return date.getDay() == week;
    }
    /**
     * 判断服务器时区下时间戳是否是同一天
     * @param time1 时间戳 秒
     * @param time2 时间戳 秒
     */
    public static IsSameDay(time1: number, time2: number): boolean
    {
        let d1 = this.GetServerDateTime(time1);
        let d2 = this.GetServerDateTime(time2);
        return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
    }

    /**
     * 判断服务器时区下时间戳是否超过某个时刻
     * @param time 时间戳 秒
     */
    public static IsBeyondTimeInSameDay(time: number, h: number = 0, m: number = 0, s: number = 0): boolean
    {
        return this.BeyondTimeInSameDay(time, h, m, s) < 0;
    }

    /**
     * 判断服务器时区下时间戳到指定时间的差
     * @param time 时间戳 秒
     */
    public static BeyondTimeInSameDay(time: number, h: number = 0, m: number = 0, s: number = 0): number
    {
        if (h == 24)
        {
            h = 0;
            let date: Date = this.TimeReformat(h, m, s);
            return (date.getTime() / 1000 + this.OneDaySeconds) - time;
        }
        let date: Date = this.TimeReformat(h, m, s);
        return date.getTime() / 1000 - time;
    }

    /**
     * 获取某个时间到某个点的秒数
     * 如果该点过了判断时间 那该点为下一天该点到这个时间的秒数
     * 否则为该点到判断时间的秒数
     * @param time 
     * @param h 
     * @param m 
     * @param s 
     */
    public static SubSecondTimeInDay(time: number, h: number = 0, m: number = 0, s: number = 0): number
    {
        let seconds = this.BeyondTimeInSameDay(time, h, m, s);
        if (seconds <= 0)
        {
            seconds = seconds + this.OneDaySeconds;
        }
        return seconds;
    }

    //获取下一天零点的时间戳
    public static NextDayZeroPointSecound()
    {
        return this.TimeReformat().getTime() / 1000 + this.OneDaySeconds;
    }

    /**
     * 
     * @param lastTime 
     * @param hour 
     * @param callback 
     */
    public static lastHourToReset(lastTime: number, hour: number, callback: Function): void
    {
        let currSecond = Game.time.serverSeconds;
        //重置小时
        let resetHour = hour;
        //上次时间的小时
        let lastHour = TimeHelper.GetServerDateTime(lastTime).getHours();
        //当前时间的小时
        let nowHour: number = TimeHelper.GetServerDateTime().getHours();
        //超过一天 重置
        if (currSecond - lastTime > TimeHelper.OneDaySeconds)
        {
            callback();
        }
        else
        {
            let isSameDay = TimeHelper.IsSameDay(lastTime, currSecond);
            if (isSameDay)
            {
                if (nowHour >= resetHour && lastHour < resetHour)
                {
                    //同一天 上次更新时间在重置时间之前
                    callback();
                }
            }
            else
            {
                //不在同一天
                if (lastHour < resetHour)
                {
                    callback();
                }
            }
        }
    }


    public static Log(time?: number, name?: string)
    {
        if (time == null)
        {
            time = Game.time.serverMilliseconds;
        }
        if (name == null)
        {
            name = "";
        }
        if (Game.time.serverTimezone == "")
        {
            console.log(">>>>>>>TIME>>>>>>>", time, new Date(time).toLocaleString(), name);
        }
        console.log(">>>>>>>TIME>>>>>>>", time, new Date(time).toLocaleString("en-US", { timeZone: Game.time.serverTimezone }), new Date(time).toLocaleString(), name);
    }
    /**
     * 返回格式 00:00:00
     * @param time 秒
     */
    public static TimeFormat(time)
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
     * 返回格式 x小时x分x秒
     * @param time 秒
     */
    public static TimeFormat2(time)
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
     * 返回格式 Y-M-D-H:M:S
     * @param time 时间戳 秒
     */
    public static DateTimeFormat(time?: number, isHaveYear: boolean = true)
    {
        //三目运算符
        let Dates: Date = this.GetServerDateTime(time);
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
        if (Game.lang.lang == LangType.zh_cn)
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
     * 返回格式 Y-M-D
     * @param time 单位：秒
     */
    public static DateTimeFormat2(time?: number)
    {
        //三目运算符
        let Dates: Date = this.GetServerDateTime(time);
        //年份
        const Year: number = Dates.getFullYear();
        //月份下标是0-11
        const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        //具体的天数
        const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();

        if (Game.lang.lang == LangType.zh_cn)
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
     * 返回格式 M - D
     * @param time 单位：秒
     */
    public static DateTimeFormat3(time?: number)
    {
        //三目运算符
        let Dates: Date = this.GetServerDateTime(time);
        //月份下标是0-11
        const Months: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        //具体的天数
        const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        if (Game.lang.lang == LangType.zh_cn)
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
    public static DateTimeFormat4(time?: number)
    {
        //三目运算符
        let Dates: Date = this.GetServerDateTime(time);
        //小时
        const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        //分钟
        const Minutes = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
        return Hours + ':' + Minutes;
    }

    //服务器所在时区的h时m分s秒对应的时间戳
    public static TimeReformat(h: number = 0, m: number = 0, s: number = 0): Date
    {
        let date = this.GetServerDateTime();
        date.setHours(h);
        date.setMinutes(m);
        date.setSeconds(s);
        // TimeHelper.Log(date.getTime(), "TimeReformat1");
        // TimeHelper.Log((date.getTime() - Game.time.localSubServerTimezone), "TimeReformat1");
        return new Date(date.getTime() - Game.time.localSubServerTimezone);
    }

    public static TimeReformat1(h: number = 0, m: number = 0, s: number = 0): number
    {
        let date = this.TimeReformat(h, m, s);
        return date.getTime();
    }
    public static TimeReformat2(time: string): number
    {
        let strTimes: string[] = time.split(':');
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
        return this.TimeReformat1(h, m, s);
    }


    /**
     * 返回格式 00:00
     * @param time 秒
     */
    public static TimeFormat3(time)
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
     * 返回格式 x小时x分x秒 前面为0 不显示
     * @param time 秒
     */
    public static TimeFormat4(time)
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


}