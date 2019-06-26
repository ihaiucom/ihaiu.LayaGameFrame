export default class SegmentProgressHelper
{
    /**
     * 
     * @param currentValue 实际值--当前经验值值
     * @param marks 领取礼包所需经验值--读配置
     * @param beginRate 经验条开始增长位置 (0-100)
     * @param endRate 最后一个礼包在进度条位置 (0-100)
     * @returns 当前经验值对应进度条位置(进度条max=100)
     */
    static getRate(currentValue: number, marks: number[], beginRate:number =0, endRate: number = 100): number
    {
        let rightIndex = marks.findIndex((v)=>{
            return v > currentValue;
        });
        if(rightIndex == -1)
            return endRate;
        let leftIndex = rightIndex-1;
        let min = leftIndex >=0? marks[leftIndex]: 0;
        let max = marks[rightIndex];
        let ratio = (currentValue - min) / (max - min);
        let interval = (endRate - beginRate)  / marks.length;
        let result = beginRate + rightIndex * interval + interval * ratio;
        return Math.floor(result); 
    }
}