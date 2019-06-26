export default class PropId
{
    // 只是UI Tab 综合 使用
    public static tabAll = 0;
    // 储量
    public static reserve = 1;
    // 储量最大值
    public static reserveMax = 2;
    
    /** 产出频率 */ 
    public static produceCd = 3;
    // 产出数量
    public static produceNum = 4;
    // 建造cd
    public static buildingCd = 5;
    // 上映持续天数
    public static playDay = 6;
    // 招募概率
    public static recruitProbability = 7;

    /** 暴击几率 */
    public static criticalHitChance = 8;

    /** 暴击效果 */
    public static critEffect = 9;

    /** 拍摄收视率 */
    public static audienceRatings = 10;

    /** 后续收益效果 */
    public static followUp = 11;

    /** 事件触发 */
    public static event = 12;

    /** 增加随机剧本 */
    public static script = 13;

    /** 生产应援卡 */
    public static assistanceCard = 14;

    /** 额外产出 */
    public static additionalOutput = 15;
    
    /** 魅力 */
    public static charm = 1601;
    
    /** 口才 */
    public static eloquence = 1602;
    
    /** 娱乐 */
    public static entertainment = 1603;
    
    /** 表演 */
    public static act = 1604;
    
    /** 才艺 */
    public static talent = 1605;

    
    /** ID列表 */
    private static list: int[];
    public static get List(): int[]
    {
        if(!PropId.list)
        {
            let list = [];
            for(let key in PropId)
            {
                if(key == 'list' || key == 'List' || PropId[key] <= 0)
                    continue;
                list.push(PropId[key]);
            }

            PropId.list = list;
        }
        return PropId.list;
    }

}