import Dictionary from "../../Libs/Helpers/Dictionary";
import DoubleKeyMap from "../../Libs/Helpers/DoubleKeyMap";
import { UnitType } from "../Units/ExtEnums/UnitType";
import BubbleTalkSmall from "../../FGUI/Extends/CommonBase/BubbleTalkSmall";
import UnitData from "../Units/Components/UnitData";
import TransformData from "../Units/Components/TransformData";

export default class BubbleTalkViewManager
{
    static DefaultOffsetY = -120;

    layout: fairygui.GRoot;
    dict = new DoubleKeyMap<UnitType, int, BubbleTalkSmall>();
    offsetDict = new DoubleKeyMap<UnitType, int, number[]>();
    list:BubbleTalkSmall[] = [];

    willRemove: UnitData[] = [];
    willRemoveTime = 1000;
    
    install(layout: fairygui.GRoot)
    {
        this.layout = layout;
    }

    setOffset(unitType: UnitType, unitId:int, offsetY: number, scale: number = 1)
    {
        let item = this.offsetDict.getValue(unitType, unitId);
        if(!item)
        {
            item = [offsetY, scale];
            this.offsetDict.add(unitType, unitId, item);
        }
        else
        {
            item[0] = offsetY;
            item[1] = scale;
        }
            
        
        let view = this.getView(unitType, unitId);
        if(view)
        {
            view.offsetY = offsetY;
            view.scaleX = view.scaleY = scale;
            view.sourceScale = scale;
        }
    }

    getView(unitType: UnitType, unitId:int): BubbleTalkSmall
    {
        return this.dict.getValue(unitType, unitId);
    }

    getOrCreateView(unitType: UnitType, unitId:int): BubbleTalkSmall
    {
        let view = this.getView(unitType, unitId);
        if(!view)
        {
            view = BubbleTalkSmall.poolGet();
            let arr = this.offsetDict.getValue(unitType, unitId);
            if(!arr)
            {
                view.offsetY = BubbleTalkViewManager.DefaultOffsetY;
                view.scaleX = view.scaleY = 1;
                view.sourceScale = 1;
            }
            else
            {
                view.offsetY = arr[0];
                view.scaleX = view.scaleY = arr[1];
                view.sourceScale = view.scaleX;
            }
            view.sHide.addOnce(this.onHide, this);
            this.dict.add(unitType, unitId, view);
            this.list.push(view);
        }
        return view;
    }

    removeView(unitType: UnitType, unitId:int)
    {
        let view = this.getView(unitType, unitId);
        if(view)
        {
            view.sHide.remove(this.onHide, this);
            view.poolRecover();
            this.dict.remove(unitType, unitId);
            arrayRemoveItem(this.list, view);
        }
    }
    
    setHierarchyTop(unitType: UnitType, unitId:int)
    {  
        let view = this.getView(unitType, unitId);
        if(view && view.parent)
        {
            view.parent.addChildAt(view, view.parent.numChildren - 1);
        }
    }

    onHide(view: BubbleTalkSmall)
    {
        if(view.unit)
            this.removeView(view.unit.unityType, view.unit.unitId);
    }


    show(unit: UnitData, transform: TransformData, text: string)
    {
        let view = this.getOrCreateView(unit.unityType, unit.unitId);
        view.show(text, this.layout, unit, transform, -1);

        arrayRemoveItem(this.willRemove, unit);
    }

    hide(unit: UnitData)
    {
        let index = this.willRemove.indexOf(unit);
        if(index == -1)
            this.willRemove.push(unit);
    }



}