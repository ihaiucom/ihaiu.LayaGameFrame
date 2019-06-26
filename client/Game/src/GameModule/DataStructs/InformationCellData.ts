import InformationData from './InformationData';

export enum InformationType 
{
    /** 身高 */
    bodyheight = 26,
    /** 星座 */
    constellation = 19,
    /** 外形 */
    looks = 27,
    /** 性格 */
    character = 21,
    /** 特长 */
    experience = 22,
    /** 爱好 */
    hobby = 18,
    /** 特殊情报 */
    specialIntelligence = 20
}

export default class InformationCellData 
{
    /** 槽位上的情报数据 */
    informationData: InformationData = null;
    /**情报类型 */
    type: InformationType;
    /**槽位id 与情报类型对应*/
    index: number;

    constructor(type: InformationType, index: number)
    {
        this.type = type;
        this.index = index;
    }

    clear()
    {
        this.informationData = null;
    }
}