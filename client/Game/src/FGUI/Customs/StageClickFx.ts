import GuiPackageNames from "../Generates/GuiPackageNames";
import FxMovieClipKey from "../FxMovieClipKey";
import MenuLayer from "../../GameFrame/Menu/MenuLayer";
import Game from "../../Game";

/** 屏幕点击特效 */
export default class StageClickFx
{
    private _isInstalled = false;
    /** 启动 */
    install()
    {
        if(this._isInstalled)
            return;

        this._isInstalled = true;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    /** 卸载 */
    uninstall()
    {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    }


    private _lastTime = 0;
    gap = 100;
    onMouseDown(event: Laya.Event)
    {
        if(StageClickFxItem.showCount < 10 && Laya.timer.currTimer - this._lastTime > this.gap)
        {
            let item = StageClickFxItem.poolGet();
            item.setXY(event.stageX, event.stageY);
            item.show();
            this._lastTime = Laya.timer.currTimer;
        }
    }

}

class StageClickFxItem
{
    static showCount = 0;
    fx: fairygui.GMovieClip;
    halfWidth = 100;
    halfHeight = 100;
    constructor()
    {
        this.fx = <any> fairygui.UIPackage.createObject(GuiPackageNames.CommonFx, FxMovieClipKey.ClickMovieClip);
        this.fx.displayObject.blendMode=Laya.BlendMode.ADD;
        this.halfWidth = this.fx.width >> 1;
        this.halfHeight = this.fx.height >> 1;
    }

    show()
    {
        StageClickFxItem.showCount ++;
        this.fx.setPlaySettings(0, -1, 1, -1, Laya.Handler.create(this, this.hide, null, true));
        MenuLayer.floatMsg.addChild(this.fx);
    }

    hide()
    {
        this.fx.removeFromParent();
        this.poolRecover();
        StageClickFxItem.showCount --;
    }

    setXY(x: number, y : number)
    {
        x -= this.halfWidth;
        y -= this.halfHeight;
        this.fx.setXY(x, y);
    }

    
    
    /** 丢回对象池 */
    public poolRecover()
    {
        StageClickFxItem._poolRecover(this);
    }

    private static pool: StageClickFxItem[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): StageClickFxItem
    {
        let item: StageClickFxItem;
        if(StageClickFxItem.pool.length > 0)
        {
            item = StageClickFxItem.pool.pop();
        }
        else
        {
            item = new StageClickFxItem();
        }
        return item;
    }

    
    /** 丢回对象池 */
    private static _poolRecover(item: StageClickFxItem)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }
}