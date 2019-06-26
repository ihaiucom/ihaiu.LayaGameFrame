import TookHandler from "./TookHandler";
import TimeHelper from "../GameHelpers/TimeHelper";


/**
 * 定点任务
 */
export default abstract class FixedTimeTookHandler extends TookHandler
{
    fixedTimeList: FixedTimeConfig[] = [];
    
    
    /** 
     * 验证是否可以被调用
     */
    validate(serverMilliseconds: number): boolean
    {
        let result = false;
        for(let item of this.fixedTimeList)
        {
            if(serverMilliseconds >= item.timestamp)
            {
                result = true;
                item.reseTimestamp();
                break;
            }
        }

        return result;
    }
    
}

/** 定点时间类型 */
export enum FixedTimeType
{
    /** 天 */
    Day,

    /** 周 */
    Week,

    /** 月 */
    Month
}

/**
 * 定点时间配置
 */
export class FixedTimeConfig
{
    /** 创建时间点 */
    public static CreateHMS(h: number, m: number = 0, s: number = 0):FixedTimeConfig
    {
        let config = new FixedTimeConfig();
        config.timeType = FixedTimeType.Day;
        config.hour = h;
        config.minute = m;
        config.second = s;
        return config;
    }

    
    /**
     * 创建每周 时间点
     * @param weekDay  周几,  一周（0~6）的某一天的数字。注意： 星期天为 0, 星期一为 1, 以此类推。
     * @param h 
     * @param m 
     * @param s 
     */
    public static CreateWeek(weekDay: number, h: number, m: number = 0, s: number = 0):FixedTimeConfig
    {
        let config = new FixedTimeConfig();
        config.timeType = FixedTimeType.Week;
        config.weekDay = weekDay;
        config.hour = h;
        config.minute = m;
        config.second = s;
        return config;
    }

    
    /**
     * 创建每月 时间点
     * @param monthDate  一个月中的第几天,值是 1 ~ 31 之间的一个整数, 0 就是当天；负数就是月末倒数第几天, -1是月末最后一天
     * @param h 
     * @param m 
     * @param s 
     */
    public static CreateMonthDate(monthDate: number, h: number, m: number = 0, s: number = 0):FixedTimeConfig
    {
        let config = new FixedTimeConfig();
        config.timeType = FixedTimeType.Month;
        config.monthDate = monthDate;
        config.hour = h;
        config.minute = m;
        config.second = s;
        return config;
    }



    timeType: FixedTimeType = FixedTimeType.Day;

    /**
     * 一个月中的第几天
     * FixedTimeType.Month 才有效
     * 
     * 值是 1 ~ 31 之间的一个整数
     * 0 就是当天
     * 负数就是月末倒数第几天, -1是月末最后一天
     */
    monthDate: number = 0;

    /**
     * 周几
     * FixedTimeType.Week 才有效
     * 
     * 一周（0~6）的某一天的数字。
     * 注意： 星期天为 0, 星期一为 1, 以此类推。
     */
    weekDay: number = 0;


    /** 时 */
    hour: number = 0;
    /** 分 */
    minute: number = 0;
    /** 秒 */
    second: number = 0;

    /**
     * 时间戳 (精确到毫秒)
     */
    private _timestamp: number = -1;
    get timestamp()
    {
        if(this._timestamp <= 0)
        {
            this.reseTimestamp();
        }
        return this._timestamp;
    }

    /** 重置时间戳 */
    reseTimestamp()
    {
        let date: Date;
        switch(this.timeType)
        {
            case FixedTimeType.Day:
                date = TimeHelper.getServerNextDate(this.hour, this.minute, this.second);
                break;

            case FixedTimeType.Week:
                date = TimeHelper.getServerNextWeekDate(this.weekDay, this.hour, this.minute, this.second);
                break;

            case FixedTimeType.Month:
                date = TimeHelper.getServerNextMonthDate(this.monthDate, this.hour, this.minute, this.second);
                break;
        }

        console.log(TimeHelper.ToStr(date));

        this._timestamp = date.getTime();
    }
}