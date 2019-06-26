import MModel from "../../GameFrame/Module/MModel";
import Game from '../../Game';
import InformationData from '../DataStructs/InformationData';
import Dictionary from '../../Libs/Helpers/Dictionary';
import InformationCellData, { InformationType } from "../DataStructs/InformationCellData";
import TEXT from '../../Config/Keys/TEXT';
import Typed2Signal from '../../Libs/signals/Typed2Signal';
import NumberBadge from '../../FGUI/Extends/CommonBase/NumberBadge';
import GlobalConfig from '../../Config/ConfigExtends/GlobalConfig';
import GlobalKey from '../../Config/Keys/GlobalKey';
import InformationParseData from '../DataStructs/InformationParseData';
import IntelligenceState = proto.IntelligenceState;
import IntelligencePaseType = proto.IntelligencePaseType;
import GamerIntelligenceParseS2C = proto.GamerIntelligenceParseS2C;
import LabelType from "../../GameFrame/PropLabels/LabelType";


export default class InformationModel extends MModel {
    private dict: Dictionary<int, InformationData>;

    public parseData: InformationParseData;

    public get normalTypeList(): number[]
    {
        return  [
                    InformationType.bodyheight,
                    InformationType.constellation,
                    InformationType.looks,
                    InformationType.character,
                    InformationType.experience,
                    InformationType.hobby
                ];
    }

    public get allTypeList(): InformationType[]
    {
        return  [
            InformationType.bodyheight,
            InformationType.constellation,
            InformationType.looks,
            InformationType.character,
            InformationType.experience,
            InformationType.hobby,
            InformationType.specialIntelligence
        ];
    }
    /**
     * 已选情报数量是否足够、解析成功率(0-100)global 5001
     */
    public sCellChange: Typed2Signal<IntelligencePaseType, string> = new Typed2Signal<IntelligencePaseType, string>();
    
    isTest: boolean = false;
    
    constructor() {
        super();   
        this.dict = new Dictionary<int, InformationData>();
    }

    //存储情报列表
    setProtoListData(list: Array<any>): void {
        this.dict.clear();
        this.updateProtoListData(list);
    }

    updateProtoListData(list: Array<any>): void {
        for(let data of list)
        {
            let item = new InformationData();
            item.setProtoData(data);
            if (item.count == 0) {
                this.dict.remove(item.id);
            } else {
                this.dict.add(item.id, item);
            }
        }
    }

    setParseData(msg: GamerIntelligenceParseS2C)
    {
        this.parseData.setProtoData(msg);
    }    

    /** 有未读的tab indexs */
    checkTabReadState(): number[]
    {
        let unreadTabIndexs = [];
        for(let index = 0; index < this.allTypeList.length; index++)
        {
            let list = this.getUnreadListFromTab(index);
            if(list.length > 0)
            {
                unreadTabIndexs.push(index);
            }
        }
        return unreadTabIndexs;
    }

    /** 我的情报
     * 点击tab时，将上一个tab标记为已读
     */
    getUnreadListFromTab(index: number): number[]
    {
        
        let unreadList = [];
        let list =this.getInformationListByIndex(index);
        list.forEach(info=>{
            IntelligenceState.Unread == info.state && (unreadList.push(info.id));
        })
        return unreadList;
    }
    
    /** 我的情报 tabindex */
    getInformationListByIndex(index: int): Array<InformationData> 
    {
        if(index > 6)
            return [];
        let type = this.allTypeList[index];
        return this.getInformationListByType(type);
    }
        

    // 获取情报列表根据类型
    getInformationListByType(type: InformationType): Array<InformationData> 
    {
        let list: Array<InformationData> = [];
		let informations = this.dict.getValues();
		for (let i = 0; i < informations.length; i++) {
            let information = informations[i];
            if (information.type == type) 
                 list.push(information);
        }
        return list;
    }

    //转换情报列表  奖励——>情报
    static transitionInfromation(datas: Array<any>): Array<InformationData> 
    {
        let list: Array<InformationData> = [];
        for (let i = 0; i < datas.length; i++) {
            let information = InformationData.Create(datas[i]);
            list.push(information)
        }

        list.sort(function (a, b):number {
			return a.type - b.type;
        });
        list.sort((a,b)=>{
            return a.type == LabelType.specialIntelligence?1:-1;
        });

        return list;
    }


    // 获取情报
    getInformationData(id: int): InformationData  {
        return this.dict.getValue(id);
    }

    // 情报是否存在
    hasInformation(id: number): boolean {
        return this.dict.hasKey(id);
    }

    // 情报数量
    get InformationCount(): number {
        return this.dict.count;
    }

    /**
     * 
     * @param infoId 情报id
     * @param cellData 情报槽位
     * @returns 是否是卸下情报
     */
    selectCell(infoId: number, cellData: InformationCellData, type: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal): boolean
    {
        let isRemove: boolean = false;
        if(!cellData)
        {
            console.error(" error: cellData not exist info: ", infoId, "cellData: ", cellData);
            return;
        }
        if(!infoId && cellData.informationData)
        {
            cellData.informationData.count++;
            cellData.informationData = null;
            this.dispatchCellChange(type);
            return true;
        }
        let infoData = this.getInformationData(infoId);
        
        if(cellData.informationData)
        {
            if(cellData.informationData.id == infoId)
            {
                infoData.count++;
                cellData.informationData = null;
                isRemove = true;
            }
            else
            {
                cellData.informationData.count++;
                cellData.informationData = infoData;
                infoData.count--;
            }
        }
        else
        {
            cellData.informationData = infoData;
            infoData.count--;
        }
        this.dispatchCellChange(type);
        return isRemove;
    }

    dispatchCellChange(type: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal)
    {
        let count = this.selectedNormalIds.length;
        let chance = this.getChanceTxt(type);
        this.sCellChange.dispatch(type, chance);
    }

    /**默认：Normal */
    public getChanceTxt(type: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal): string
    {
        if(type == IntelligencePaseType.IntelligencePaseType_Special)
        {
            return "100%";
        }
        let count = this.selectedNormalIds.length;
        let chance = 0;
        //万分比
        let chanceVals = GlobalConfig.getValue2(GlobalKey.information_chance);
        let val = chanceVals.find(val=>{
            return val.v1 == count;
        });
        val && (chance = val.v2 / 100);
        return chance + "%";
    }

    private _specialCellData: InformationCellData;
    
    public get specialCellData(): InformationCellData
    {
        if(!this._specialCellData)
        {
            this._specialCellData = new InformationCellData(InformationType.specialIntelligence, 0);
        }
        return this._specialCellData;
    }
    
    
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////普通情报相关////////////////////////////////////////

    /**普通情报槽位列表 */
    private _normalCellList: Array<InformationCellData>;

    /** 普通情报槽位列表 */
    public get normalCellList(): InformationCellData[]
    {
        if(!this._normalCellList)
        {
            this._normalCellList = [];
            
            for(let i = 0; i < this.normalTypeList.length; i++)
            {
                let cell = new InformationCellData(this.normalTypeList[i], i);
                this._normalCellList.push(cell);
            }
        }
        return this._normalCellList;
    }

    

    /** 下一个空槽位 */
    public nextCellData(from: number): InformationCellData
    {
        let nextIndex = this.normalCellList.findIndex((value, index)=>{
            return index >= from && !value.informationData;
        });
        if(-1 == nextIndex)
        {
            nextIndex = this.normalCellList.findIndex((value, index)=>{
                return index >= 0 && !value.informationData;
            });
        }
        let nextData = null;
        nextIndex != -1 && (nextData = this.normalCellList[nextIndex]);
        return nextData;
    }

    /** 已选情报id列表 */
    public get selectedNormalIds(): number[]
    {
        let ids = [];
        this.normalCellList.forEach(cell=>{
            cell.informationData && (ids.push(cell.informationData.id));
        });
        return ids;
    }

    /** 已选特殊情报id */
    public get selectedSpecialId(): number[]
    {
        let ids = [];
        if(this.specialCellData.informationData)
            ids.push(this.specialCellData.informationData.id);
        return ids;
    }

    /** 情报不足时提示文本 */
    public notEnoughToast(type: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal): string
    {
        if(IntelligencePaseType.IntelligencePaseType_Normal == type)
            return TEXT.InformationNoEnough;
        else
            return TEXT.InformationSpecialNoEnough;
    }

    /** 情报数量是否达到要求 */
    public canAnalyze(type: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal): boolean
    {
        if(IntelligencePaseType.IntelligencePaseType_Normal == type)
        {
            let amount = this.selectedNormalIds.length;
            return amount >= 3;
        }
        else
        {
            return this.selectedSpecialId.length > 0;
        }
    }
    

    public clearCellList()
    {
        this.normalCellList.forEach(cell =>{
            cell.clear();
        });
    }

}