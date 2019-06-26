import FixedTimeTookHandler, { FixedTimeConfig } from "../FixedTimeTookHandler";

export default class TestFixedTimeHookHandler extends FixedTimeTookHandler
{
    
    /** 
     * 初始化, 配置你的订阅
     */
    init()
    {
        this.fixedTimeList.push(FixedTimeConfig.CreateHMS(16, 23, 0));  
        // this.fixedTimeList.push(FixedTimeConfig.CreateWeek(0, 16, 53, 0)); 
        // this.fixedTimeList.push(FixedTimeConfig.CreateMonthDate(-1, 16, 52, 0)); 

        // for(let item of this.fixedTimeList)
        // {
        //     item.reseTimestamp();
        // }

        super.init();
    }

    

    /** 执行 */
    exe()
    {
        super.exe();
        console.log("TestFixedTimeHookHandler exe");
    }
}