import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import UnitActionUtils from "../Utils/UnitActionUtil";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import TransformData from "../Components/TransformData";
import { TalkType } from "../ExtEnums/TalkType";
import Random from "../../../Libs/Helpers/Random";
import DragCmdConfig from "../CmdConfigs/DragCmdConfig";
import AbstractUnitView from "../../UnityViews/AbstractUnitView";
import UnitData from "../Components/UnitData";
import BubbleTalkSmall from "../../../FGUI/Extends/CommonBase/BubbleTalkSmall";
import BubbleTalkViewManager from "../../UnityViews/BubbleTalkViewManager";
import { UnitType } from "../ExtEnums/UnitType";
import { RouteNode } from "../../../Libs/PathFinding/PathFindingData";
import { DecorationType } from "../ExtEnums/DecorationType";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";
import MapWalk from "../../../FGUI/Extends/SystemModuleHomeMap/MapWalk";
import MovePathData from "../Components/MovePathData";
import { DialogueType } from "../ExtEnums/DialogueType";
import MapHelper from "../Utils/MapHelper";

/** 拖拽命令 */
export class DragCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.Drag;
    cmdConfig: DragCmdConfig;
    unitType: UnitType;
    unitId: int;
    view:AbstractUnitView;
    bubbleTalkView: BubbleTalkSmall;
    transformData:TransformData;

    scaleBegin = 0.8;
    scaleEnd = 3;
    offsetYEnd = 0;
    offsetYBegin = -120;

    static decorationRadius: number = 40;
    decorationNode:RouteNode;
    
    initX: number = 0;
    initY: number = 0;
    isEnablePos: boolean = true;
    buildId = -1;
    talckTime = 0;
    talckTime2 = 0;
    talckCD = 200;
    talckCD2 = 5000;
    talkType = DialogueType.Drag;

    private static _decorationView: Laya.Sprite;
    static get decorationView(): Laya.Sprite
    {
        if(!this._decorationView)
        {
            this._decorationView = new Laya.Sprite();
            // this._decorationView.graphics.drawCircle(0, 0, this.decorationRadius, '#00FF0055', '#FFFFFF', 0)
        }
        return this._decorationView;
    }

    
    release()
    {
        super.release();
        this.transformData = null;
        this.view = null;
        this.cmdConfig = null;
        this.initX = 0;
        this.initY = 0;
        this.isEnablePos = true;
        this.buildId = -1;
    }



    /** 进入 */
    onEnterBegin()
    {
        this.engine.scene.scene2D.layoutShadow.addChild(DragCmdAction.decorationView);
        DragCmdAction.decorationView.visible = false;

        let unit = this.entity.getComponent(UnitData);
        this.unitType = unit.unityType;
        this.unitId = unit.unitId;

        this.transformData = this.entity.getComponent(TransformData);
        this.initX = this.transformData.position.x;
        this.initY = this.transformData.position.y;
        this.view = this.engine.unitViewMap.getValue(unit.unityType, unit.unitId);
        this.view.setHierarchyTop(true);
        this.engine.bubbleTalkViewManager.setHierarchyTop(unit.unityType, unit.unitId);
        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.catch);
        this.scaleBegin = this.transformData.scale;
        this.scaleEnd = MapHelper.absoluteScale(2, 0.5, 2, this.engine.zoom);
        this.offsetYBegin = BubbleTalkViewManager.DefaultOffsetY;
        this.offsetYEnd = MapHelper.absoluteScale(this.offsetYBegin - 30, 0, this.offsetYBegin - 30, this.engine.zoom);

        this.talkType = DialogueType.Drag;
        this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.Drag, true);
        super.onEnterBegin();

    }

    onEnterTick(delta: number)
    {
        super.onEnterTick(delta);
        
        if(this.view)
        {
            let rate = this.cmdConfig.enterCompleteTime / this.cmdConfig.enterCompleteDuration;
            let scale = Laya.MathUtil.lerp(this.transformData.scale, this.scaleEnd, rate);
            let offsetY = Laya.MathUtil.lerp(this.offsetYBegin, this.offsetYEnd, rate);
            this.view.setScale(scale);
            // this.engine.bubbleTalkViewManager.setOffset(this.unitType, this.unitId, offsetY, scale);
            this.engine.bubbleTalkViewManager.setOffset(this.unitType, this.unitId, offsetY, 1);
        }
        this.hitCheck();
    }

    
    // onEnterEnd()
    // {
    //     if(this.view)
    //     {
    //         this.view.setScale(this.transformData.scale * this.scale);
    //         this.view.offsetY = this.offsetY;
    //     }
    //     super.onEnterEnd();
    // }

    
    /** 刷新阶段 */
    onTick(delta: number)
    {
        super.onTick(delta);
        this.hitCheck();
        this.talckTime += delta;
        if(this.talckTime > this.talckCD)
        {
            this.talckTime = 0;

            if(this.hitCheckBuilding())
            {
                if(this.talkType != DialogueType.DragBuildingDisable)
                {
                    this.talkType = DialogueType.DragBuildingDisable;
                    this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.DragBuildingDisable, true, 4000);
                    this.talckTime2 = 0;
                }
            }
            else if(!this.hitCheckEnableWalk())
            {
                if(this.talkType != DialogueType.DragPosDisable)
                {
                    this.talkType = DialogueType.DragPosDisable;
                    this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.DragPosDisable, true, 4000);
                    this.talckTime2 = 0;
                }
            }
            else if(this.talkType != DialogueType.Drag)
            {
                
                this.talkType = DialogueType.Drag;
                if(Random.range(0, 10) < 5)
                {
                    this.engine.unitCmdUtil.clearBubbleTalk(this.unitType, this.unitId);
                }
                else
                {
                    this.talckTime2 = 0;
                    this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.Drag, true);
                }
            }
        }

        
        this.talckTime2 += delta;
        if(this.talckTime2 >= this.talckCD2)
        {
            this.talckTime2 = 0;
            this.talkType = DialogueType.Drag;
            
            if(Random.range(0, 10) < 3)
            {
                this.talkType = DialogueType.Drag;
                this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.Drag, true);
            }
        }

    }

    hitCheck()
    {
        if(this.transformData)
        {
            this.decorationNode = this.engine.decorationUtil.hitArea(this.transformData.position.x, this.transformData.position.y, 40, DecorationType.Seat);
            if(this.decorationNode)
            {
                DragCmdAction.decorationView.pos(this.decorationNode.x, this.decorationNode.y);
                DragCmdAction.decorationView.visible = true;
            }
            else
            {
                DragCmdAction.decorationView.visible = false;
            }
        }
    }

    hitCheckBuilding(): boolean
    {
        let building = this.transformData && this.engine.decorationUtil.hitBuilding(this.transformData.position.x, this.transformData.position.y);
        return building && !building.isBuilded;
    }

    hitCheckEnableWalk(): boolean
    {
        return this.transformData && MapWalk.Instance.hit(this.transformData.position.x, this.transformData.position.y);
    }

    /** 结束 */
    onEndBegin()
    {
        
        let unit = this.entity.getComponent(UnitData);
        this.unitType = unit.unityType;
        this.unitId = unit.unitId;
        this.transformData = this.entity.getComponent(TransformData);

        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.release);
        this.hitCheck();

        

        this.isEnablePos = true;
        if(this.hitCheckBuilding())
        {
            this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.DragBuildingDisable, true);
            this.transformData.position.x = this.initX;
            this.transformData.position.y = this.initY;
            this.isEnablePos = false;
        }

        let enableWalk = this.hitCheckEnableWalk();
        if(!enableWalk)
        {
            this.engine.unitCmdUtil.bubbleTalkGroup(this.unitType, this.unitId, DialogueType.DragPosDisable, true);
            this.transformData.position.x = this.initX;
            this.transformData.position.y = this.initY;
            this.isEnablePos = false;
        }

        if(enableWalk)
        {
            let move = this.entity.getComponent(MovePathData);
            if(move)
            {
                if(this.decorationNode)
                {
                    move.routeNodeId = this.decorationNode.id;
                }
                else
                {
                    let node = this.engine.decorationUtil.findNearestRouteNode(this.transformData.position.x, this.transformData.position.y);
                    if(node)
                    {
                        move.routeNodeId = node.id;
                    }
                }
            }
        }




        super.onEndBegin();
    }

    
    onEndTick(delta: number)
    {
        super.onEndTick(delta);
        if(this.view)
        {
            let rate = this.cmdConfig.enterCompleteTime / this.cmdConfig.enterCompleteDuration;
            let scale = Laya.MathUtil.lerp(this.transformData.scale, this.scaleBegin, rate);
            let offsetY = Laya.MathUtil.lerp(this.offsetYEnd, this.offsetYBegin, rate);
            this.view.setScale(scale);
            // this.engine.bubbleTalkViewManager.setOffset(this.unitType, this.unitId, offsetY, scale);
            this.engine.bubbleTalkViewManager.setOffset(this.unitType, this.unitId, offsetY, 1);
        }
    }


    onEndEnd()
    {

        let unit = this.entity.getComponent(UnitData);
        this.transformData = this.entity.getComponent(TransformData);
        this.view = this.engine.unitViewMap.getValue(unit.unityType, unit.unitId);
        this.unitType = unit.unityType;
        this.unitId = unit.unitId;

        if(this.view)
        {
            this.view.setScale(this.transformData.scale);
            this.view.setHierarchyTop(false);
            this.engine.bubbleTalkViewManager.setOffset(this.unitType, this.unitId, this.offsetYBegin, 1);
        }

        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.idle);

        if(this.isEnablePos)
        {
            if(this.decorationNode)
            {
                if(this.engine.hasDecorationOccupy(this.decorationNode.id))
                {
                    Game.system.toastText(TEXT.HomeUnitSeatOccupy);
                }
                this.engine.unitCmdUtil.sitdown(this.unitType, this.unitId, this.decorationNode.id, false);
            }
        }



        DragCmdAction.decorationView.removeSelf();

        super.onEndEnd();
    }

}

window['DragCmdAction'] = DragCmdAction;