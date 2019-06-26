import BuildingLevelConfig from "../../Config/ConfigExtends/BuildingLevelConfig";
import Game from "../../Game";
import BuildingConfig from "../../Config/ConfigExtends/BuildingConfig";
import PropLevelDataList from "../../GameFrame/Props/PropLevelDataList";
import Dictionary from "../../Libs/Helpers/Dictionary";
import BuildingActorCellData from "./BuildingActorCellData";
import Prop from "../../GameFrame/Props/Prop";
import Signal from "../../Libs/signals/Signal";
import PropId from "../../GameFrame/Props/PropId";
import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import Random from "../../Libs/Helpers/Random";
import BuildingActorCellConfig from "../../Config/ConfigExtends/BuildingActorCellConfig";
import { BuildingBuildType } from "../../FGUI/Extends/ModuleBuildingGJC/BuildingWindowUIGJC";
import BuildingRegionConfig from "../../Config/ConfigExtends/BuildingRegionConfig";
import BuildingRegionData from "./BuildingRegionData";

//建造状态
export enum BuildingStateType {
    Normal = 0,    
    Build  = 1,
    Level  = 2
}

//成功类型
export enum BuildingSucceeType {
    Build = 0,    
    Level = 1,
    Break = 2
}


/** 建筑数据 */
export default class BuildingData
{
    // 建筑ID
    id:int;

    // 建筑等级
    level:int = 1;

    // 是否建造
    builded:boolean = false;

    //类型0-建造成功 1-升级成功 2-突破成功
    successType:int;

    // 是否建造或者升级中
    buildingOrUpleveing = false;

    // 建造或者升级 完成时间戳
    buildingOrUpleveingTimestamp: number = 0;

    // 建造或者升级 开始时间戳
    buildingOrUpleveingTimeStart: number = 0;

    // 所有产出位物品产出详情
    serverProduceDict: Dictionary<int, any> = new Dictionary<int, any>();

    /**
     * 单个物品生产数量
     * @param itemId 
     */
    currentProduceNum(itemId: number)
    {
        if(this.propProduceCd <= 0 || this.propProduceNum <= 0)
            return 0;

        let serverProduce: any = this.serverProduceDict.getValue(itemId);
        // 生产次数
        let count = serverProduce.startTime > 0 ? Math.floor((Game.time.serverSeconds - serverProduce.startTime) / this.propProduceCd) : 0;
        let num = serverProduce.notGetNum + count * this.propProduceNum;
        num = Math.min(num, this.propReserveMax);
        return num;
    }

    /**
     * 获取某条产线信息
     * @param index 
     */
    getProduceByIndex(index: number): any {
        return this.serverProduceDict.getValues()[index];
    }

    /**
     * 获取某条产线当前CD
     * @param index 
     */
    getProduceCDByIndex(index: number): any {
        let produce = this.getProduceByIndex(index);
        if (produce) {
            let time = (Game.time.serverSeconds - produce.startTime) % this.propProduceCd;
            return time;
        }

        return 0;
    }

    /**
     * 当前所有产出位的物品
     */
    get currentProduceList(): Array<any> {
        return this.serverProduceDict.getValues();
    }

    /**
     * 获取当前建筑所有生产数量
     */
    get currentProduceNumAll(): number {
        let num = 0;
        let list= this.currentProduceList;
        for (let i = 0; i < list.length; i++) {
            num += this.currentProduceNum(list[i].itemId);
        }
        return Math.max(num, 0);
    }

    /**
     * 当前建筑突破状态
     */
    get isNoBre():boolean 
    {
        return this.levelConfig.breLevel && this.level == this.breLevelMax;
    }

    /**
     * 当前等级材料配置(升级 or 建造/突破)
     */
    get nowConfig(): BuildingLevelConfig {
        if (this.builded && !this.isNoBre) {
            return this.nextLevelConfig
        } else {
            return this.levelConfig
        }
    }

    /**
     * 当前操作类型(建造0 or 升级1 or 突破2)
     */
    get nowBuildType(): number {
        if (!this.builded) {
            return BuildingBuildType.Make;
        } 
        if (this.isNoBre) {
            return BuildingBuildType.Break;
        }

        return BuildingBuildType.Level;
    }

    /**
     * 公司等级需求
     */
    get userLevelRequest(): number {
        if (Game.user.level < this.nowConfig.levelReq) {
            return this.nowConfig.levelReq;
        } else {
            return 0;            
        }
    }

    // 艺人进驻巢字典
    actorCellDict:Dictionary<int, BuildingActorCellData> = new Dictionary<int, BuildingActorCellData>();
    // 艺人进驻巢列表
    actorCellList: BuildingActorCellData[] = [];

    // 建筑属性列表
    prop = new PropLevelDataList();

    /**
     * 属性--储量
     */
    get propReserveMax():int
    {
        return this.prop.getVal(PropId.reserve);
    }

    /**
     * 属性--生产数量
     */
    get propProduceNum():int
    {
        return this.prop.getVal(PropId.produceNum);
    }

    /**
     * 属性--生产CD
     */
    get propProduceCd():int
    {
        return this.prop.getVal(PropId.produceCd);
    }

    /**
     * 开启权限
     */
    get order(): int
    {
        return this.config.order;
    }

    /**
     * 是否显示建筑 
     * 0-不显示
     * 1-可显示
     * 2-已显示 
     */
    get openTypeByLvAndOrder(): number
    {
        if (this.builded) {
            return 2;
        }
        
        let nextOrder = Game.moduleModel.building.nextOrder;
        if ((this.order <= nextOrder || !this.userLevelRequest) && this.openRegion) {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * 开启区域
     */
    get region(): int
    {
        return this.config.region;
    }

    /**
     * 是否可开启该区域
     */
    get openRegion(): boolean 
    {
        return this.region == 1;
    }



    /**
     * 等级上限(突破后增长)
     */
    private _breLevelMax:int = -1;
    get breLevelMax():int
    {
        return this._breLevelMax;
    }

    set breLevelMax(val:int)
    {
        this._breLevelMax = val;
    }

    /**
     * 最大等级
     */
    get levelMax():int
    {
        return Game.config.buildingLevel.getMaxLevel(this.id);
    }

    /**
     * 是否有上一等级
     */
    get hasLastLevel(): boolean
    {
        return this.level > 1;
    }

    /**
     * 是否有下一等级
     */
    get hasNextLevel(): boolean
    {
        return this.level < this.breLevelMax;
    }
    
    /**
     * 建筑配置
     */
    get config(): BuildingConfig
    {
        return Game.config.building.getConfig(this.id);
    }

    /**
     * 上一等级配置
     */
    get lastLevelConfig():BuildingLevelConfig
    {
        if (this.hasLastLevel)
             return Game.config.buildingLevel.getLevelConfig(this.id, this.level - 1);

        return null;
    }

    /**
     * 当前等级配置
     */
    get levelConfig():BuildingLevelConfig
    {
        return Game.config.buildingLevel.getLevelConfig(this.id, this.level);
    }

    /**
     * 下一等级配置
     */
    get nextLevelConfig(): BuildingLevelConfig
    {
        if(this.hasNextLevel)
            return Game.config.buildingLevel.getLevelConfig(this.id, this.level + 1);
            
        return null;
    }

    /**
     * 当前可预览的配置 <= breLevelMax
     */
    get underBreLevelMaxConfigs(): Array<BuildingLevelConfig>
    {
        let list: Array<BuildingLevelConfig> = [];

        let buildingLevel = Game.config.buildingLevel;
        for (let i = 1; i <= this.breLevelMax; i++) {
            let config = buildingLevel.getLevelConfig(this.id, i);
            list.push(config);
        }
        return list;
    }

    /**
     * 当前等级下的配置 <= level
     */
    get underLevelMaxConfigs(): Array<BuildingLevelConfig>
    {
        let list: Array<BuildingLevelConfig> = [];

        let buildingLevel = Game.config.buildingLevel;
        for (let i = 1; i <= this.level; i++) {
            let config = buildingLevel.getLevelConfig(this.id, i);
            list.push(config);
        }
        return list;
    }

    private _regionDatasDict: Dictionary<int, BuildingRegionData> = new Dictionary<int, BuildingRegionData>();
    private _initRegion: boolean = false;
    /**
     * 已创建的家具数据
     */
    get nowBuildingRegionDatas(): Array<BuildingRegionData>
    {
        if (!this._initRegion) {
            this._initRegion = true;
            let levelConfigs = this.underLevelMaxConfigs;
            for (let i = 0; i < levelConfigs.length; i++) {
                let config = levelConfigs[i];
                for (let j = 0; j < config.levelRegionId.length; j++) {
                    let regionData = BuildingRegionData.Create(Game.config.buildingRegion.getConfig(config.levelRegionId[j]))
                    regionData.level = config.regionLevel;
                    this._regionDatasDict.add(regionData.id, regionData);
                }
            }
        } else {
            let config = this.levelConfig;
            for (let j = 0; j < config.levelRegionId.length; j++) {
                let regionData = BuildingRegionData.Create(Game.config.buildingRegion.getConfig(config.levelRegionId[j]));
                regionData.level = config.regionLevel;
                this._regionDatasDict.add(regionData.id, regionData);
            }
        }

        return this._regionDatasDict.getValues();
    }

    /**
     * 建筑名称
     */
    get name(): string
    {
        return this.config.name;
    }

    /**
     * 获取建筑--图片(预览)
     */
    get pic():string
    {
        return !this.isNoBre ? this.levelConfig.pic : this.levelConfig.picNoBre;
    }

    /**
     * 获取建筑--突破图片
     */
    get picBre():string
    {
        return this.levelConfig.pic;
    }

    /**
     * 已开启槽位数量
     */
    get cellNum():number
    {
        return this.levelConfig.seatNum;
    }

    /**
     * 突破材料检测
     */
    get breakCostEnough(): boolean
    {
        let items = this.nowConfig.breCost;
        for (let i = 0; i < items.length; i++) {
            let num = Game.moduleModel.item.getItemNum(items[i].itemId);
            if (num < items[i].itemNum) return false;
        }
        return true;
    }

    /**
     * 升级材料检测
     */
    get levelCostEnough(): boolean  {
        if (this.hasNextLevel) {
            let items = this.nextLevelConfig.cost;
            for (let i = 0; i < items.length; i++) {
                let num = Game.moduleModel.item.getItemNum(items[i].itemId);
                if (num < items[i].itemNum) return false;
            }
            return true;
        }
        return false;
    }

    /**
     * 材料检测
     */
    get costEnough(): boolean {
        if (this.isNoBre) {
            return this.breakCostEnough;
        } else {
            return this.levelCostEnough;
        }
    }


    /**
     * 计算 属性
     */
    calculate()
    {
        this.prop.clear();
        this.prop.addCurrentLevelList(this.levelConfig.propList);
        this.prop.addCurrentLevelArray(this.levelConfig.getActorCellsProps(this.actorCellDict));


        if(this.hasNextLevel)
        {
            this.prop.addNextLevelList(this.nextLevelConfig.propList);
            this.prop.addNextLevelArray(this.nextLevelConfig.getActorCellsProps(this.actorCellDict));
        }

        this.prop.calculate();
    }



}