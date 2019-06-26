import MModel from "../../GameFrame/Module/MModel";
import BuildingData, { BuildingStateType, BuildingSucceeType } from "../DataStructs/BuildingData";
import Dictionary from "../../Libs/Helpers/Dictionary";
import BuildingActorCellData from "../DataStructs/BuildingActorCellData";
import Game from "../../Game";
import Mathf from "../../Libs/Mathf";
import TypedSignal from "../../Libs/signals/TypedSignal";
import ConfigIdHelper from "../../Config/ConfigIdHelper";

export default class BuildingModel extends MModel
{
    // 建筑列表
    private buildingDict: Dictionary<int, BuildingData> = new Dictionary<int, BuildingData>();
    private buildings: BuildingData[] = [];

    // 艺人进驻巢字典
    private actorCellDict:Dictionary<int, BuildingActorCellData> = new Dictionary<int, BuildingActorCellData>();

    // 消息--建造或者升级中， 开始和结束
    sBuildingOrUplevelingChange:TypedSignal<BuildingData> = new TypedSignal<BuildingData>();

    // 消息--开启新的建筑
    sBuildingNew:TypedSignal<number> = new TypedSignal<number>();

    // 待开启建筑(Buildingx.xlsx--order)
    nextOrder: number = 1;


    // 初始化
    install(): void
    {
        super.install();

        // 建筑列表
        let buildingConfigs = Game.config.building.getConfigList();
        let buildingData: BuildingData;
        for(let config of buildingConfigs)
        {
            buildingData = new BuildingData();
            buildingData.id      = config.id;

            this.buildingDict.add(buildingData.id, buildingData);
            this.buildings.push(buildingData);
        }

        // 艺人进驻巢字典
        let buildingActorCellConfigs = Game.config.buildingActorCell.getConfigList();
        let actorCellData: BuildingActorCellData;
        for(let actorCellConfig of buildingActorCellConfigs)
        {
            actorCellData = new BuildingActorCellData();
            actorCellData.cellId = actorCellConfig.id;
            buildingData = this.buildingDict.getValue(actorCellConfig.buildingId);
            actorCellData.buildingData = buildingData;
            this.actorCellDict.add(actorCellData.cellId, actorCellData);
            buildingData.actorCellDict.add(actorCellData.cellId, actorCellData);
            buildingData.actorCellList.push(actorCellData);
        }
    }
    
    /** 获取建筑列表 */
    get buildingList(): BuildingData[]
    {
        return this.buildings;
    }

    /** 已创建建筑列表 */
    get buildedBuildingList(): BuildingData[]
    {
        let list = [];
        for (let i = 0; i < this.buildings.length; i++) {
            if (this.buildings[i].builded) {
                list.push(this.buildings[i]);
            }
        }

        return list;
    }

    /** 获取建筑 */
    getBuilding(buldingId:int):BuildingData
    {
        return this.buildingDict.getValue(buldingId);
    }

    /**
     * 获取艺人进驻槽数据
     * @param cellId 槽ID
     */
    getActorCell(cellId:int):BuildingActorCellData
    {
        return this.actorCellDict.getValue(cellId);
    }

    /**
     * 设置艺人进驻槽 艺人
     * @param cellId  槽ID
     * @param actorId 艺人ID
     * @param isCalculate 是否重新计算属性
     */
    setActorCell(cellId:int, actorId:int)
    {
        let cellData = this.getActorCell(cellId);
        cellData.actorId = actorId;
    }
    

    /**
     * 设置建筑等级
     * @param buildingId  建筑ID
     * @param buildingLevel  建筑等级
     * @param isCalculate 是否重新计算属性
     */
    setBuildLevel(buildingId: int, state: int, buildingLevel:int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.builded = (state != BuildingStateType.Build);
        buildingData.level = Math.min(buildingLevel, buildingData.levelMax);

        if (buildingData.order >= this.nextOrder) {
            this.nextOrder = buildingData.order + 1;
            this.sBuildingNew.dispatch(this.nextOrder);
        }
    }

    /**
     * 设置建筑最大等级
     * @param buildingId  建筑ID
     * @param buildingLevel  建筑最大等级
     * @param isCalculate 是否重新计算属性
     */
    setBuildLevelMax(buildingId: int, buildingLevelMax:int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.breLevelMax = buildingLevelMax;
    }
    

    /**
     * 设置建造开始时间戳
     * @param buildingId  建筑ID
     * @param startTime     建造完成时间戳
     */
    setBuildStartTime(buildingId: int, startTime: int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.buildingOrUpleveingTimeStart = startTime;
    }

    /**
     * 设置建造状态、结束时间戳
     * @param buildingId  建筑ID
     * @param state       建造状态0-正常 1-建造中 2-升级中
     * @param endTime     建造完成时间戳
     */
    setBuildEndTime(buildingId: int, state: int, endTime: int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.buildingOrUpleveing = (state != BuildingStateType.Normal);
        buildingData.buildingOrUpleveingTimestamp = endTime;
    }

    /**
     * 设置生产数据
     * @param buildingId  建筑ID
     * @param startTime   生产--服务器--起始时间戳
     * @param noGetNum    生产--服务器--起始数量
     */
    setBuildProductInfo(buildingId: int, productinfos: any)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.serverProduceDict.clear();
        for (let i = 0; i < productinfos.length; i++) {
            let info = productinfos[i];
            buildingData.serverProduceDict.add(info.itemId, info);
        }
    }

    delBuildProductInfo(buildingId: int, actorId: int) 
    {
        let buildingData = this.getBuilding(buildingId);
        if (buildingData.levelConfig.produceItemType == 2) {
            let actorconfig = Game.config.actor.getConfig(actorId);
            buildingData.serverProduceDict.remove(actorconfig.assistanceCard);
        }
    }

    /**
     * 计算建筑属性
     * @param buildingId 
     */
    buildCalculate(buildingId: int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.calculate();
    }
    
    /**
     * 状态改变、发送消息
     * @param buildingId 
     */
    buildBuildingOrLevelChange(buildingId: int, islevel: boolean = false)
    {
        let buildingData = this.getBuilding(buildingId);
        if (islevel) {
            this.sBuildingOrUplevelingChange.dispatch(buildingData);
        }
    }

    buildSuccessShow(buildingId: int, type: int)
    {
        let buildingData = this.getBuilding(buildingId);
        buildingData.successType = type;
        Game.system.buildingSuccessShow(buildingData);
    }

    // 添加事件监听
    protected startListen()
    {
        super.startListen();

        Game.net.gamerNotifyItemChangeS2C.on(this.onStateChange, this);
        Game.net.gamerNotifyExpLevelS2C.on(this.onStateChange, this);
    }

    // 移除事件监听
    protected stopListen()
    {
        super.stopListen();

        Game.net.gamerNotifyItemChangeS2C.off(this.refreshState, this);
        Game.net.gamerNotifyExpLevelS2C.off(this.refreshState, this);
    }

}