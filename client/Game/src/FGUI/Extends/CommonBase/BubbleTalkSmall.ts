/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BubbleTalkSmallStruct from "../../Generates/CommonBase/BubbleTalkSmallStruct";
import TypedSignal from "../../../Libs/signals/TypedSignal";
export default class BubbleTalkSmall extends BubbleTalkSmallStruct
{
    //============================
    // IMapUI
    //----------------------------
    isAbsoluteScale: boolean = true;
    maxAbsoluteScale: number = 1;
    minAbsoluteScale: number = 1;
    sourceScale = 1;
    
    private _relativeScale: number = 1;

    get relativeScale(): number
    {
        return this._relativeScale;
    }
    
    set relativeScale(scale: number)
    {
        this._relativeScale = scale;
        this.setScale(scale, scale);
    }

    //============================


    sHide: TypedSignal<BubbleTalkSmall> = new TypedSignal<BubbleTalkSmall>();
    
    // unit: UnitData;
    // transform: TransformData;
    unit: any;
    transform: any;
    offsetX = 0;
    offsetY = 0;
    

    setText(text: string)
    {
        this.m_title.text = text;
    }


    show(text: string, parent: fairygui.GRoot, unit: any, transform: any, duration = 3000)
    {
        this.unit = unit;
        this.transform = transform;

        parent.addChild(this);
        this.setText(text);
        this.refreshPos();

        if(duration > 0)
        {
            Laya.timer.clearAll(this);
            Laya.timer.once(duration, this, this.hide);
        }
    }

    hide()
    {
        this.removeFromParent();
        Laya.timer.clearAll(this);
        this.sHide.dispatch(this);
    }

    refreshPos()
    {
        if(this.transform)
        {
            this.setXY(this.transform.position.x + this.offsetX, this.transform.position.y + this.offsetY);
        }
    }



    
    /** 丢回对象池 */
    public poolRecover()
    {
        this.removeFromParent();
        this.sHide.removeAll();
        BubbleTalkSmall._poolRecover(this);
    }

    private static pool: BubbleTalkSmall[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): BubbleTalkSmall
    {
        let item: BubbleTalkSmall;
        if(this.pool.length > 0)
        {
            item = this.pool.pop();
        }
        else
        {
            item = this.createInstance();
            item.enabled = false;
        }
        return item;
    }

    
    /** 丢回对象池 */
    private static _poolRecover(item: BubbleTalkSmall)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }

}