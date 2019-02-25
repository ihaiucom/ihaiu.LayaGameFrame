import TimeHelper from "../../GameHelpers/TimeHelper";


//======================
// 游戏时间 数据
//----------------------
export default class GameTimeData
{

    // 检查是否就今天		
    isLocalToday(localTime: number)
    {
        let d = new Date(localTime);
        let c = new Date();
        return d.getFullYear() == c.getFullYear() && d.getMonth() == c.getMonth() && d.getDate() == c.getDate();
    }
    // 检查是否就今天 localTime 秒
    isLocalTodayTimezone(localTime: number)
    {
        return TimeHelper.IsSameDay(localTime, this.serverSeconds);
    }

    // 本地与服务器的时差， unix时间戳 毫秒
    private _serverSubtime = 0;
    get serverSubtime()
    {
        return this._serverSubtime;
    }

    // 服务器与客户端的时区差		
    private _localSubServerTimezone = null;
    get localSubServerTimezone()
    {
        if (this._localSubServerTimezone == null)
        {
            this.serverTimezone = "America/Regina";
        }
        return this._localSubServerTimezone + this._localTestAddTIme;
    }
    set localSubServerTimezone(time: number)
    {
        this._localSubServerTimezone = time;
    }

    //服务器所在时区
    private _serverTimezone: string = "";
    get serverTimezone()
    {
        if (this._serverTimezone == "")
        {
            this._serverTimezone = "America/Regina";
        }
        return this._serverTimezone;
    }
    //设置服务器时区
    set serverTimezone(timeZone: string)
    {
        this._serverTimezone = timeZone;
        this.localSubServerTimezone = new Date().getTimezoneOffset() * 60 * 1000 - 6 * 60 * 60 * 1000;
    }

    private _preFrame = 0;
    private _localTime = 0;
    // 	本地，当前时间， unix时间戳 毫秒
    get localTime()
    {
        if (Laya.timer.currFrame != this._preFrame)
        {
            this._localTime = new Date().getTime();
            this._preFrame = Laya.timer.currFrame;
        }
        return this._localTime
    }

    // 本地， 登录时间， unix时间戳 毫秒
    private _localLoginTime: number = new Date().getTime();
    private get localLoginTime(): number
    {
        return this._localLoginTime;
    }

    private set localLoginTime(value: number)
    {
        this._localLoginTime = value;
    }

    // 本地 游戏时间， unix时间戳 毫秒
    private get localGameTime(): number
    {
        return this.localTime - this.localLoginTime;
    }



    // 服务器， 注册时间， unix时间戳 毫秒
    private _registerTime: number = new Date().getTime();
    get registerTime(): number
    {
        return this._registerTime;
    }

    set registerTime(value: number)
    {
        this._registerTime = value;
    }

    // 	注册时间，注册时间， unix时间戳 秒
    get registerSeconds(): number
    {
        return Math.floor(this.registerTime / 1000);
    }


    // 服务器， 登录时间， unix时间戳 毫秒
    private _serverLoginTime: number = new Date().getTime();
    get serverLoginTime(): number
    {
        return this._serverLoginTime;
    }

    set serverLoginTime(value: number)
    {
        this._serverLoginTime = value;
        this.localLoginTime = this.localTime;
        this._serverSubtime = this.localLoginTime - this._serverLoginTime;
    }

    // 	服务器，当前时间， unix时间戳 秒
    get serverSeconds(): number
    {
        return Math.floor(this.serverMilliseconds / 1000);
    }


    // 	服务器，当前时间， unix时间戳 毫秒
    get serverMilliseconds(): number
    {
        return this.serverLoginTime + this.localGameTime;
    }

    // 服务器更新时间
    // 年月日时分秒
    timestampToTime(timestamp: number)
    {
        // let date = new Date(timestamp * 1000);

        let date = TimeHelper.GetServerDateTime(timestamp);
        let Y = date.getFullYear();
        let M = date.getMonth() + 1;
        let D = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        return [Y, M, D, h, m, s];
    }
    // 本地时间
    // 年月日时分秒
    localTimestamToTime()
    {
        // let date = new Date();
        let date = TimeHelper.GetServerDateTime();
        let Y = date.getFullYear();
        let M = date.getMonth() + 1;
        let D = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        return [Y, M, D, h, m, s];
    }

    /**
     * 服务器当前时间和之前的一个时间差 秒
     * @param preunix 之前的时间
     */
    getSubSecondsPre(preunixSeconds: number): number
    {
        let dTime = this.serverSeconds - preunixSeconds;
        if (dTime < 0) dTime = 0;
        return dTime;
    }

    /**
     * 服务器当前时间和之后的一个时间差 秒
     * @param afterunix 之后的时间
     */
    getSubSecondsAfter(afterunixSeconds: number): number
    {
        return afterunixSeconds - this.serverSeconds;
    }





    /**
     * 服务器当前时间和之前的一个时间差 毫秒
     * @param preunix 之前的时间
     */
    getSubMillisecondsPre(preunixMilliseconds: number): number
    {
        return this.serverMilliseconds - preunixMilliseconds;
    }

    /**
     * 服务器当前时间和之后的一个时间差 毫秒
     * @param afterunix 之后的时间
     */
    getSubMillisecondsAfter(afterunixMilliseconds: number): number
    {
        return afterunixMilliseconds - this.serverMilliseconds;
    }



    /**
     * 判断是否跨天
     * @param serverLastRefrushTime 服务器上次刷新时间
     * @param timePoint 跨天时间点，比如：22点
     */
    checkNewDayToRefrush(serverLastRefrushTime: number, timePoint: number)
    {
        let newDay = false;
        let sevTime = this.timestampToTime(serverLastRefrushTime);
        let locTime = this.localTimestamToTime();
        for (let i = 0; i < 3; i++)
        {
            if (sevTime[i] < locTime[i])
            {
                newDay = true;
                break;
            }
        }
        if (!newDay && timePoint > 0)
        {
            if (locTime[3] >= timePoint && sevTime[3] < timePoint)
            {
                newDay = true;
            }
        }
        return newDay;
    }

    /**
     * 检查是否时间到
     * @param localTime 时间戳毫秒 服务器当前时间
     * @param h 小时
     * @param m 分钟
     */
    checkTime(localTime: number, h: number, m: number = 0)
    {
        return TimeHelper.IsBeyondTimeInSameDay(localTime / 1000, h, m);
    }

    // 格式化日期，获取今天的日期
    timeLeft(time: number, hour: number, minutes: number, seconds: number = 0)
    {
        if (this.isLocalTodayTimezone(time / 1000))
        {
            //服务器所在时区的h时m分s秒对应的时间戳
            let time1 = TimeHelper.TimeReformat(hour, minutes, seconds).getTime();
            return time1 - time;
        }
        else
        {
            return 0;
        }
    }


    /**
     * 检查是否时间到
     * @param localTime 时间戳
     * @param h 小时
     * @param m 分钟
     */
    checkTime22222(localTime: number, h: number, m: number = 0)
    {
        let d = new Date(localTime);
        if (d.getHours() < h)
        {
            return false;
        }
        else if (d.getHours() === h)
        {
            if (d.getMinutes() < m)
            {
                return false;
            }
        }
        return true;
    }

    // 格式化日期，获取今天的日期
    timeLeft22222(time: number, hour: number, minutes: number, seconds: number = 0)
    {
        if (this.isLocalToday(time))
        {
            // 今天
            let dates = new Date(time);
            // 小时
            let h = dates.getHours();
            // 分钟
            let m = dates.getMinutes();
            // 秒
            let s = dates.getSeconds();
            let cur = h * 3600 + m * 60 + s;
            let req = hour * 3600 + minutes * 60 + seconds;
            let res = (req - cur) * 1000;
            if (res < 0) res = 0;
            return res;
        }
        else
        {
            // 非今天，理论上隔天，本算法不计算往日数据
            return 0;
        }
    }

    /**
     * 测试所用数据，用于本地时间校正，程序中不要调用
     */
    private _localTestAddTIme = 0;
    //测试所用数据，用于本地时间校正，程序中不要调用
    AddLocalTestSubServerTimezone(h: number, m: number, s: number)
    {
        this._localTestAddTIme = this._localTestAddTIme + ((h * 60 + m) * 60 + s) * 1000;
    }

}


// // 	服务器，当前时间， unix时间戳 秒
// Game.time.serverSeconds;


// // 	服务器，当前时间， unix时间戳 毫秒
// Game.time.serverMilliseconds;



// // 上次操作时间， unix时间戳 秒
// let preOpsTime: number;

// // 服务器当前时间和之前的一个时间差 秒
// let s1 = Game.time.getSubSecondsPre(preOpsTime);



// // 下次操作时间， unix时间戳 秒
// let afterOpsTime: number;
// // 服务器当前时间和之前的一个时间差 秒
// let s2 = Game.time.getSubSecondsAfter(afterOpsTime);




// // 上次操作时间， unix时间戳 毫秒
// let preOpsTime2: number;

// // 服务器当前时间和之前的一个时间差 毫秒
// let ms1 = Game.time.getSubMillisecondsPre(preOpsTime);



// // 下次操作时间， unix时间戳 毫秒
// let afterOpsTime2: number;
// // 服务器当前时间和之后的一个时间差 毫秒
// let ms2 = Game.time.getSubMillisecondsAfter(afterOpsTime);