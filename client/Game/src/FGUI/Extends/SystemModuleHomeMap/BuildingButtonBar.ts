/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingButtonBarStruct from "../../Generates/SystemModuleHomeMap/BuildingButtonBarStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import HomeWindowUI from "../SystemModuleHome/HomeWindowUI";
import MapBuilding from "../../Customs/MapBuilding";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import Home from "../../../Home/Home";
import Game from "../../../Game";
import Scene2D from "../../../Home/Scene2D";
import Dictionary from "../../../Libs/Helpers/Dictionary";
import HomeMapUI from "./HomeMapUI";
import { MenuId } from "../../../GameModule/MenuId";
import { BuildingTabType } from "../ModuleBuildingGJC/BuildingWindowUIGJC";
import { BuildingType } from "../../../GameModule/DataEnums/BuildingType";
import Mathf from "../../../Libs/Mathf";
import MsgKey from "../../../Config/Keys/MsgKey";

export enum BuildingButtonType
{
    // 详情
    details,

    // 装饰
    decorate,

    // 升级
    uplevel,

    // 突破
    bre,

    // 加速
    speed,

    // 进驻
    actor,

    // // 查看其他玩家
    // otherPlayerInfo,

    // 情报 艺人抽取
    information,

    // 剧本抽取招募
    lottery,

    // 拍摄
    shoot,
}

export class BuildingButtonData
{
    type: BuildingButtonType;
    name: string;
    button: fairygui.GButton;
    container: fairygui.GComponent;

    from = new Laya.Point();
    to = new Laya.Point();

    getTweenX(rate: number)
    {
        return Laya.MathUtil.lerp(this.from.x, this.to.x, rate);
    }

    getTweenY(rate: number)
    {
        return Laya.MathUtil.lerp(this.from.y, this.to.y, rate);
    }
    
    constructor(type: BuildingButtonType, name: string)
    {
        this.type = type;
        this.name = name;
    }

    get visiable()
    {
        return this.button.parent != null;
    }

    set visiable(val: boolean)
    {
        if(val)
            this.container.addChild(this.button);
        else
            this.button.removeFromParent();
    }
}

export default class BuildingButtonBar extends BuildingButtonBarStruct
{
    homeMapUI: HomeMapUI;
    mapBuiilding: MapBuilding;

    private buttonList: BuildingButtonData[] = [];
    private buttonDict: Dictionary<BuildingButtonType, BuildingButtonData> = new Dictionary<BuildingButtonType, BuildingButtonData>();
    private showButtonList: BuildingButtonData[] = [];

    
    private _scene2D: Scene2D;
    get scene2D(): Scene2D
    {
        return this._scene2D;
    }

    set scene2D(scene: Scene2D)
    {
        this._scene2D = scene;
    }
    

    // 是否是自己的家园
    get isMySelfHome(): boolean
    {
        return  this.homeMapUI ?  this.homeMapUI.isMySelfHome : true;
    }

    
    // 窗口初始化完毕
    onWindowInited(): void
    {
        window['buildingButtonBar'] = this;
        for(let key in BuildingButtonType)
        {
            if(isString(BuildingButtonType[key]))
            {
                let type: BuildingButtonType = parseInt(key);
                let name: string = BuildingButtonType[key];

                let item = new BuildingButtonData(type, name);
                item.button = <fairygui.GButton> this.m_list.getChild(item.name);
                item.container = this;
                item.button["btnType"] = type;
                this.buttonList.push(item);
                this.buttonDict.add(item.type, item);
                this.addChild(item.button);

                item.button.onClick(this, this.onClickButton, [item]);
            }
        }

        this.m_list.removeFromParent();
        this.m_list.dispose();
        this.m_list = null;


    }

    MOVE_TIME = 200;

    onClickButton(item: BuildingButtonData)
    {
        
        
        switch(item.type)
        {
            // 详情
            case BuildingButtonType.details:
                // 地图移到建筑位置，并隐藏主界面
                this.scene2D.zoomBuildingEnter(this.mapBuiilding.buildingId);
     			Game.menu.openTab(MenuId.BuildingInfo, BuildingTabType.Content, this.mapBuiilding.buildingData);
                break;
                
            // 装饰
            case BuildingButtonType.decorate:
                break;

            // 建造
            // case BuildingButtonType.create:

            // 升级
            case BuildingButtonType.uplevel:
                let pos = this.mapBuiilding.nextRegionPos;
                let dx = pos.x ? pos.x - this.mapBuiilding.scenePos.x : 0;
                let dy = pos.y ? pos.y - this.mapBuiilding.scenePos.y : 0;
                this.scene2D.zoomBuildingEnter(this.mapBuiilding.buildingId, dx, dy);
                
                this.mapBuiilding.showNextRegion();
                Game.menu.openTab(MenuId.BuildingInfo, BuildingTabType.Build, this.mapBuiilding.buildingData);
                break;
            // 突破
            case BuildingButtonType.bre:
                this.scene2D.zoomBuildingEnter(this.mapBuiilding.buildingId);
                Game.menu.openTab(MenuId.BuildingInfo, BuildingTabType.Build, this.mapBuiilding.buildingData);
                break;
                
            // 加速
            case BuildingButtonType.speed:
                Game.system.buildingSpeedUpShow(this.mapBuiilding.buildingData)
                break;
            
            // 进驻
            case BuildingButtonType.actor:
                Game.menu.open(MenuId.BuildingActor, this.mapBuiilding.buildingData);
                break;
            
            // 查看其他玩家
            // case BuildingButtonType.otherPlayerInfo:s
                // break;

            // 艺人招募
            case BuildingButtonType.information:
                Game.menu.open(MenuId.Information);
                break;
                
            // 剧本抽取
            case BuildingButtonType.lottery:
                Game.menu.open(MenuId.StoryLottery);
                break;

            // 拍摄
            case BuildingButtonType.shoot:
                Game.menu.open(MenuId.Studio);
                break;
        }
        this.hide();
    }

    getButton(type: BuildingButtonType):BuildingButtonData
    {
        return this.buttonDict.getValue(type);
    }


    // testShowNum = 5;
    show(mapBuiilding: MapBuilding, homeMapUI: HomeMapUI)
    {
        if(!this.scene2D.zoomEnableUI)
            return;

        this.mapBuiilding = mapBuiilding;
        this.homeMapUI = homeMapUI;

        

        for(let item of this.buttonList)
        {
            item.visiable = false;
        }

        this.showButtonList.length = 0;
        let visiable = true;
        let isMySelfHome = this.isMySelfHome;
        let buildingData = mapBuiilding.buildingData;
        for(let item of this.buttonList)
        {
            switch(item.type)
            {
                // 详情
                case BuildingButtonType.details:
                    visiable = isMySelfHome &&  buildingData.builded;
                    break;


                // 装饰
                case BuildingButtonType.decorate:
                    visiable = isMySelfHome &&  buildingData.builded && false;
                    break;

                // 建造
                // case BuildingButtonType.create:
                //     visiable = isMySelfHome && false;
                //     break;
                    
                // 升级
                case BuildingButtonType.uplevel:
                    visiable = isMySelfHome && buildingData.builded && !buildingData.buildingOrUpleveing && !buildingData.isNoBre;
                    break;
                    
                // 突破
                case BuildingButtonType.bre:
                    visiable = isMySelfHome && buildingData.builded && !buildingData.buildingOrUpleveing && buildingData.isNoBre;
                    break;
                    
                // 加速
                case BuildingButtonType.speed:
                    visiable = isMySelfHome &&  buildingData.buildingOrUpleveing;
                    break;
                
                // 进驻
                case BuildingButtonType.actor:
                    visiable =  isMySelfHome && (buildingData.cellNum > 0);
                    break;
                    
                // 查看其他玩家
                // case BuildingButtonType.otherPlayerInfo:
                //     visiable =  !isMySelfHome && buildingData.builded;
                //     break;

                // 艺人抽取
                case BuildingButtonType.information:
                    visiable =  isMySelfHome && buildingData.builded && buildingData.id == BuildingType.RookieDepartment;
                    break;

                // 剧本抽取
                case BuildingButtonType.lottery:
                    visiable =  isMySelfHome && buildingData.builded && buildingData.id == BuildingType.CommerceDepartment;
                    break;
                
                // 拍摄
                case BuildingButtonType.shoot:
                    visiable =  isMySelfHome && buildingData.builded && buildingData.id == BuildingType.ShootingCenter;
                    break;

                default:
                    visiable = true;
                    break;
            }
            
            item.visiable = visiable;
            if(visiable)
            {
                this.showButtonList.push(item);
            }
        }

        this.width = 10;
        this.height = 10;

        let widhtHalf = 200;
        let heighHalf = 200;




        



        let time = 0;
        let pos = mapBuiilding.localToGlobal(0, 0);
        let pos2 = new Laya.Point(pos.x, pos.y);
        console.log(pos.x, pos.y);

        
        let upY = 250;
        if (Game.browserSetting.isLiuHai) {
            upY = 450;
        }

        if(pos.x < widhtHalf + 80)
            pos2.x = widhtHalf + 80;
        else if(pos.x > Laya.stage.width - widhtHalf - 80)
            pos2.x = Laya.stage.width - widhtHalf -80;

        if(pos.y < heighHalf + 130)
            pos2.y = heighHalf + 130;
        else if(pos.y > Laya.stage.height - heighHalf - upY)
            pos2.y = Laya.stage.height - heighHalf - 250;

        
        let distance = pos.distance(pos2.x, pos2.y);

        if(distance > 0.01)
        {
            let center = this.scene2D.getCenter();
            time = this.MOVE_TIME;
            pos = this.scene2D.globalToLocal(pos);
            pos2 = this.scene2D.globalToLocal(pos2);

            let posx = pos.x - pos2.x;
            let posy = pos.y - pos2.y;

            // posx /= this.scene2D.zoom;
            // posy /= this.scene2D.zoom;

            posx += center.x;
            posy += center.y;



            this.scene2D.movieTo(posx, posy, this.scene2D.zoom, time);
        }


        let angleOffset = 90;
        let angleGap = 180 / 4;
        let radiusFrom = 0;
        let radiusTo = 120;
        let oX = 0;
        let oY = 0;

        angleOffset = this.angleOffset;
        angleGap = this.angleGap;
        radiusFrom = this.radiusFrom;
        radiusTo = this.radiusTo;
        oX = this.oX ;
        oY = this.oY ;

        this.showButtonList.reverse();
        this.showButtonList.sort((a: BuildingButtonData, b: BuildingButtonData) => { return a.type - b.type});

        angleOffset = 90 - ((this.showButtonList.length - 1) * this.angleGap) / 2 ;

        let count = this.showButtonList.length;
        let item:BuildingButtonData
        for(let i = 0; i < count; i ++)
        {
            item = this.showButtonList[i];
            let angle = angleOffset + angleGap * i;
            item.from.x =  Mathf.anglePointX(angle, radiusFrom, oX);
            item.from.y =  Mathf.anglePointY(angle, radiusFrom, oY);
            
            item.to.x = (i - (count - 1) * 0.5) * item.button.width;
            item.to.y = radiusTo;
            if (count > 3) {
                if (i == 0 || i == count - 1) {
                    item.to.y = radiusTo - 30;
                }
            }

            // item.to.x = Mathf.anglePointX(angle, radiusTo, oX);
            // item.to.y =  Mathf.anglePointY(angle, radiusTo, oY);
        }
        
        this.tweenRate = 0;


        Laya.timer.once(time, this, ()=>
        {
            pos = mapBuiilding.localToGlobal(0, 0);
            this.setXY(pos.x, pos.y);
            Laya.Tween.to(this, {tweenRate: 1}, 300, this.ease);
            this.visible = true;
        })

    }
    angleOffset = 90;
    angleGap = 180 / 4;
    radiusFrom = 0;
    radiusTo = 250;
    oX = 0;
    oY = 0;
    ease = Laya.Ease.backOut;
    

    private _tweenRate = 0;
    get tweenRate()
    {
        return this._tweenRate;
    }

    set tweenRate(rate: number)
    {
        this._tweenRate = rate;
        for(let item of this.showButtonList)
        {
            item.button.x = item.getTweenX(rate);
            item.button.y = item.getTweenY(rate);
            item.button.alpha = Mathf.Clamp01(Laya.MathUtil.lerp(0, 2, rate)) ;
        }
    }

    hide()
    {
        this.visible = false;
        this.tweenRate = 0;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }
}
