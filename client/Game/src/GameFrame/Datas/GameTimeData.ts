import TimeHelper from "../../GameHelpers/TimeHelper";
import Typed2Signal from "../../Libs/signals/Typed2Signal";


export class DateTime
{
    // 年
    year?: number;
    
    // 月 （0-11）
    month?: number;

    // 日 （1-31）
    date?: number;

    // 星期 （0-6）0为星期日
    week?: number;

    // 时 （0-23）。
    hour?: number;

    // 分 （0-59）。
    minute?: number;

    // 秒 （0-59）。
    second?: number;
    
    // 时区偏移
    timezone?: number;
    
    // 时间戳
    timestamp?: number;

    CopyValue(d: DateTime)
    {
        d.year = this.year;
        d.month = this.month;
        d.date = this.date;
        d.week = this.week;
        d.hour = this.hour;
        d.minute = this.minute;
        d.second = this.second;
        d.timezone = this.timezone;
        d.timestamp = this.timezone;
    }
}


//======================
// 游戏时间 数据
//----------------------
export default class GameTimeData
{
    /** 消息: 服务器日期改变 */
    sServerDateChange = new Typed2Signal<number, number>();
    
    /** 本地当前时间 */
    private _localDateTime = new DateTime();
    
    /** 服务器当前时间 */
    private _serverDateTime = new DateTime();

    
    /** 服务器当前时间 的 本地显示时间 */
    private _server2LocalDateTime = new DateTime();
    private _preServer2LocalDateTime = new DateTime();
    

    /** 本地当前时间 */
    get localDateTime():DateTime
    {
        this.refresh();
        return this._localDateTime;
    }



    /** 服务器当前时间 */
    private get serverDateTime():DateTime
    {
        this.refresh();
        return this._serverDateTime;
    }

    
    /** 服务器当前时间 的 本地显示时间 */
    get server2LocalDateTime():DateTime
    {
        this.refresh();
        return this._server2LocalDateTime;
    }

    start()
    {
        this.stop();
        Laya.timer.loop(1000, this, this.refresh);
    }

    stop()
    {
        Laya.timer.clearAll(this);
    }


    private _preFrame = -1;
    /**
     * 刷新
     */
    private refresh()
    {
        if (Laya.timer.currFrame != this._preFrame)
        {
            this._preFrame = Laya.timer.currFrame;

            let date = new Date();
            this._localDateTime.timestamp = date.getTime();
            this._localDateTime.year = date.getFullYear();
            this._localDateTime.month = date.getMonth();
            this._localDateTime.date = date.getDate();
            this._localDateTime.week = date.getDay();
            this._localDateTime.hour = date.getHours();
            this._localDateTime.minute = date.getMinutes();
            this._localDateTime.second = date.getSeconds();


            this._serverDateTime.timestamp = this.settingServerTimestamp + this.settingTimeLength;
            date = new Date(this._serverDateTime.timestamp);
            this._serverDateTime.year = date.getFullYear();
            this._serverDateTime.month = date.getMonth();
            this._serverDateTime.date = date.getDate();
            this._serverDateTime.week = date.getDay();
            this._serverDateTime.hour = date.getHours();
            this._serverDateTime.minute = date.getMinutes();
            this._serverDateTime.second = date.getSeconds();

            
            this._server2LocalDateTime.timestamp = this._serverDateTime.timestamp;
            date = new Date(this._serverDateTime.timestamp - this.localSubServerTimeZone);
            this._server2LocalDateTime.year = date.getFullYear();
            this._server2LocalDateTime.month = date.getMonth();
            this._server2LocalDateTime.date = date.getDate();
            this._server2LocalDateTime.week = date.getDay();
            this._server2LocalDateTime.hour = date.getHours();
            this._server2LocalDateTime.minute = date.getMinutes();
            this._server2LocalDateTime.second = date.getSeconds();
            this._server2LocalDateTime.timezone = this._serverDateTime.timezone;

            if(this._preServer2LocalDateTime.date)
            {
                if(this._preServer2LocalDateTime.date != this._server2LocalDateTime.date)
                {
                    this.sServerDateChange.dispatch(this._preServer2LocalDateTime.date, this._server2LocalDateTime.date);
                }
            }

            this._server2LocalDateTime.CopyValue(this._preServer2LocalDateTime);


        }
    }

    get serverTimezoneMilliseconds():number
    {
        return this._serverDateTime.timezone * 60 * 60 * 1000;
    }


    
    // 	本地，当前时间， unix时间戳 毫秒
    get localTime()
    {
        this.refresh();
        return this._localDateTime.timestamp;
    }

    // 设置服务器时间
    settingServerTime(timestamp: number, timezone?: number)
    {
        if(timezone !== null && timezone !== undefined)
        {
            this._serverDateTime.timezone = timezone;
            
            this._localSubServerTimeZone = new Date().getTimezoneOffset() * 60 * 1000 * -1  - timezone * 60 * 60 * 1000;
        }

        
        if(timestamp !== null && timestamp !== undefined)
        {
            this.settingServerTimestamp = timestamp * 1000;
        }
    }

    
    // 更新服务器时间戳
    private _settingTimestampServer: number = new Date().getTime();
    private _settingTimestampLocal: number = new Date().getTime();
    get settingServerTimestamp(): number
    {
        return this._settingTimestampServer;
    }

    set settingServerTimestamp(value: number)
    {
        this._settingTimestampServer = value;
        this._settingTimestampLocal = this.localTime;
        this._localSubServerTime = this._settingTimestampLocal - this._settingTimestampServer;
    }

    // 更新服务器时间过了多长时间
    private get settingTimeLength()
    {
        return this.localTime - this._settingTimestampLocal;
    }

    

    
    // 	服务器，当前时间， unix时间戳 秒
    get serverSeconds(): number
    {
        return Math.floor(this.serverMilliseconds / 1000);
    }


    private _preServerFrame = 0;
    // 	服务器，当前时间， unix时间戳 毫秒
    get serverMilliseconds(): number
    {
        this.refresh();
        return this.serverDateTime.timestamp;
    }

    
    /** 测试时差 */
    ___testTimeDifference = 0;
    // 服务器与客户端的时差		
    private _localSubServerTime: number = 0;
    get localSubServerTime()
    {
        return this._localSubServerTime + this.___testTimeDifference;
    }

    // 服务器与客户端的时差区		
    private _localSubServerTimeZone: number = 0;
    get localSubServerTimeZone()
    {
        return this._localSubServerTimeZone + this.___testTimeDifference;
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