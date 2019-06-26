import BuildingLevelConfigStruct from "../ConfigStructs/BuildingLevelConfigStruct";
import PropList from "../../GameFrame/Props/PropList";
import BuildingActorCellConfig from "./BuildingActorCellConfig";
import Game from "../../Game";
import BuildingConfig from "./BuildingConfig";
import Dictionary from "../../Libs/Helpers/Dictionary";
import BuildingActorCellData from "../../GameModule/DataStructs/BuildingActorCellData";
import Prop from "../../GameFrame/Props/Prop";
import Res from "../Keys/Res";


export default class BuildingLevelConfig extends BuildingLevelConfigStruct 
{
    // 属性列表
    propList = new PropList();

    private _actorCellConfig: BuildingActorCellConfig;
    get actorCellConfig(): BuildingActorCellConfig {
        if (!this._actorCellConfig) {
            let buildingConfig: BuildingConfig = Game.config.building.getConfig(this.type);
            for (let config of buildingConfig.buildActorCellConfigs) {
                if (this.level == config.buildingLevelMin) {
                    this._actorCellConfig = config;
                    break
                }
            }
        }
        return this._actorCellConfig;
    }

    // 已开启艺人槽配置
    private _buildingActorCellConfigs:BuildingActorCellConfig[];
    get buildingActorCellConfigs():BuildingActorCellConfig[]
    {
        if(!this._buildingActorCellConfigs)
        {
            this._buildingActorCellConfigs = [];
            let buildingConfig: BuildingConfig = Game.config.building.getConfig(this.type);
            for(let actorcellConfig of buildingConfig.buildActorCellConfigs)
            {
                if(this.level >= actorcellConfig.buildingLevelMin)
                {
                    this._buildingActorCellConfigs.push(actorcellConfig);
                }
            }
        }
        return this._buildingActorCellConfigs;
    }

    // 已开启艺人槽配置字典
    private _buildingActorCellConfigDict: Dictionary<int, BuildingActorCellConfig>;
    get buildingActorCellConfigDict():Dictionary<int, BuildingActorCellConfig>
    {
        
        if(!this._buildingActorCellConfigDict)
        {
            this._buildingActorCellConfigDict = new Dictionary<int, BuildingActorCellConfig>();
            for(let cellConfig of this.buildingActorCellConfigs)
            {
                this._buildingActorCellConfigDict.add(cellConfig.id, cellConfig);
            }
        }
        return this._buildingActorCellConfigDict;
    }

    // 已开启艺人槽 属性列表
    private _buildingActorCellPropList: PropList;
    get buildingActorCellPropList(): PropList
    {
        if(!this._buildingActorCellPropList)
        {
            this._buildingActorCellPropList = new PropList();
            for(let cellConfig of this.buildingActorCellConfigs)
            {
                let prop = cellConfig.prop;
                if(prop)
                {
                    this._buildingActorCellPropList.add(prop);
                }
            }

        }
        return this._buildingActorCellPropList;
    }

    // 获取已开启艺人槽配置
    getBuildActorCellConfig(buildingActorCellConfigId: int): BuildingActorCellConfig
    {
        return this.buildingActorCellConfigDict.getValue(buildingActorCellConfigId);
    }

    // 判定 艺人槽是否开启
    getBuildActorCellIsOpened(buildingActorCellConfigId: int): boolean
    {
        return this.buildingActorCellConfigDict.hasKey(buildingActorCellConfigId);
    }

    // 获取艺人进驻属性列表
    getActorCellsProps(dict: Dictionary<int, BuildingActorCellData>): Prop[]
    {
        let propList: Prop[] = [];
        let cellData: BuildingActorCellData;
        let cellConfig: BuildingActorCellConfig;
        let prop: Prop;
        let celldict: any = dict.__getDict();
        for(let cellId in celldict)
        {
            cellData = celldict[cellId];
            if(cellData.isEmpty)
                continue;

            cellConfig = this.getBuildActorCellConfig(cellData.cellId);
            if(!cellConfig)
                continue;

            prop = cellConfig.prop;
            if(prop)
                propList.push(prop);
        }

        return propList;
    }

    // 获取建筑图片--Hit
    private _picHit: string;
    public get picHit():string
    {
        if(!this._picHit)
        {
            this._picHit = Res.getHomeBuildingPicHit(this.type, 0);
        }
        return this._picHit;
    }

    // 获取建筑图片--Pic--突破后
    private _pic: string;
    public get pic(): string
    {
        if(!this._pic)
        {
            this._pic = Res.getHomeBuildingPic(this.type, this.breIndex);
        }
        return this._pic;
    }

    // 获取建筑图片--Pic--突破前
    private _picNoBre: string;
    public get picNoBre():string
    {
        if(!this._picNoBre)
        {
            this._picNoBre = Res.getHomeBuildingPic(this.type, Math.max(1, this.breIndex - 1));
        }
        return this._picNoBre;
    }
    
}