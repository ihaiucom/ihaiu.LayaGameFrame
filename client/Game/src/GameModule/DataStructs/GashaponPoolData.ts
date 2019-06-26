import GashaponData from "./GashaponData";
import DTFixItemNum from "../../Config/ConfigExtends/DTFixItemNum";

export default class GashaponPoolData {
    //单抽数据
    oneData: GashaponData;

    //多抽数据
    tenData: GashaponData;

    static Create(one: GashaponData, ten: GashaponData = null): GashaponPoolData{
        let pool = new GashaponPoolData();
        pool.oneData = one;
        pool.tenData = ten;

        return pool;
    }

    /**
     * 奖池类型
     */
    get type(): number {
        return this.oneData.config.type;
    }

    /**
     * 所属模块
     */
    get menuId(): number {
        return this.oneData.config.menu;
    }

    /**
     * 海报路径
     */
    get iconUrl(): string {
        return ""//this.oneData.config.pic;
    }

    /**
     * 抽奖描述
     */
    get desc(): string {
        return this.oneData.config.desc;
    }

    

    /**
     * 已抽取次数
     */
    get allowance(): number {
        if (this.tenData) {
            return this.oneData.extractNum + this.tenData.extractNum;   
        } else {
            return this.oneData.extractNum;
        }
    }

    /**
     * 总抽取次数
     */
    get allowanceNum(): number {
        return this.oneData.config.allowanceNum;
    }

    /**
     * 免费次数
     */
    get freeNum(): number {
        return this.oneData.freeNum;
    }

    /**
     * 下一次免费时间
     */
    get nextFreeTime(): number {
        return this.oneData.nextFreeTime;
    }

    /**
     * 开始时间
     */
    get startTime(): number {
        return this.oneData.startTime;
    }

    /**
     * 结束时间
     */
    get endTime(): number {
        return this.oneData.endTime;
    }
}