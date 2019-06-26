import Handler = Laya.Handler;
import Event = Laya.Event;
import Rectangle = Laya.Rectangle;
import Sprite = laya.display.Sprite;
import Point = Laya.Point;
import Tween = Laya.Tween;
import Ease = Laya.Ease;
import Scene2D, { OperationModel } from "./Scene2D";
import Mathf from "../Libs/Mathf";
import Game from "../Game";
import GameEventKey from "../GameEventKey";
            
export default class Scene2DZoomCtrl
{
    private scene: Scene2D;
    private elasticBackTime = 100;
    private _lastPos: Point = new Point();
    private _lastScale: number = 1;
    private _lastDistance: number = 0;
    private _pos: Point = new Point();
    private _center: Point = new Point();
    private _isScreenCenter: boolean = true;
    private _tween: Tween;
    private _timeoutHandler: number = 0;




    get scale()
    {
        return this.scene.scaleX;
    }

    set scale(value: number)
    {
        this.scene.setScales(value);
    }

    
    get minScaleSource()
    {
        return this.scene.minScaleSource;
    }
    
    get maxScaleSource()
    {
        return this.scene.maxScaleSource;
    }

    get minScale()
    {
        return this.scene.minScale;
    }
    
    get maxScale()
    {
        return this.scene.maxScale;
    }

    get zoomOpTouchFactor()
    {
        return this.scene.zoomOpTouchFactor;
    }

    get zoomOpMouseWheelFactor()
    {
        return this.scene.zoomOpMouseWheelFactor;
    }
    
    get scaleWidth()
    {
        return this.scene.scaleWidth;
    }

    get scaleHeight()
    {
        return this.scene.scaleHeight;
    }

    get dragRegion()
    {
        return this.scene.dragRegion;
    }

    get elasticDistance()
    {
        return this.scene.elasticDistance;
    }

    get enable()
    {
        return this.scene.getEnableOperation(OperationModel.Zoom);
    }



    install(scene: Scene2D)
    {
        this.scene = scene;
        
        this._center.x = Laya.stage.width >> 1;
        this._center.y = Laya.stage.height >> 1;
        
        this._lastPos.x = this.scene.x;
        this._lastPos.y = this.scene.y;
        this._lastScale = this.scale;
        
        Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.on(Event.MOUSE_OUT, this, this.onMouseUp);
        this.scene.on(Event.MOUSE_WHEEL, this, this.onMouseWheel);
        this.scene.on(Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    
    private onMouseUp(e: Event): void 
    {
        Laya.MouseManager.instance.disableMouseEvent = false;
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
        this.checkElastic();
    }

    
    private onMouseDown(e: Event): void 
    {
        if(!this.enable)
            return;

        var touches: Array<any> = e.touches;
        if(touches && touches.length == 2)
        {
            this.clearTimer();
            Laya.MouseManager.instance.disableMouseEvent = true;
            this._lastDistance = this.getDistance(touches);

            
            if(this._isScreenCenter)
            {
                this._center.x = Laya.stage.width >> 1;
                this._center.y = Laya.stage.height >> 1;
            }
            else
            {
                this.getCenter(touches, this._center);
            }
            
            this._lastPos.x = this.scene.x;
            this._lastPos.y = this.scene.y;
            this._lastScale = this.scale;

            
            Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
        }
    }

    
    private preDistance = 0;
    private onMouseMove(e: Event): void 
    {
        var distance: number = this.getDistance(e.touches);
        // let subDistance = distance - this.preDistance;
        // if(Math.abs(subDistance) < 20)
        // {
        //     distance =  this.preDistance;
        // }
        // else
        // {
        //     console.log("subDistance", subDistance);
        //     this.preDistance = distance;
        // }
            

        

        let subDistance = (distance - this._lastDistance);
        if(Math.abs(subDistance) < 3)
            return;

        
        let scale = (distance - this._lastDistance) * this.zoomOpTouchFactor ;
        this._lastDistance = distance;
        // scale *= Mathf.clamp(this.scale, this.minScale * 1.5, this.maxScale * 0.8);
        // scale *= Mathf.clamp(this.scale, 1, this.maxScale * 0.3);
        scale += this.scale;
        
        this.postScale(scale, this._center);
    }

    
    private onMouseWheel(e: Event): void 
    {
        if(!this.enable)
            return;

        let scale = e.delta * this.zoomOpMouseWheelFactor * this.scale;
        scale += this.scale;

        this._lastPos.x = this.scene.x;
        this._lastPos.y = this.scene.y;
        this._lastScale = this.scale;

        if(this._isScreenCenter)
        {
            this._center.x = Laya.stage.width >> 1;
            this._center.y = Laya.stage.height >> 1;
        }
        else
        {
            this._center.x = e.stageX;
            this._center.y = e.stageY;
        }

        this.postScale(scale, this._center);

        this.clearTimer();
        this._timeoutHandler = setTimeout(() => 
        {
            this.checkElastic();
        }, 100);
    }

    /**
	*橡皮筋效果检测。
	*/
    private checkElastic()
    {
        let scale = NaN;
        if(this.scale < this.minScale)
            scale = this.minScale;
        else if(this.scale > this.maxScale)
            scale = this.maxScale;

        if(!isNaN(scale))
        {
            var obj = {mzoom:  scale};
            this._tween = Tween.to(this, obj, this.elasticBackTime, Ease.sineOut, Handler.create(this, this.clear), 0, false, false);
        }
        else
        {
            this.clear();
        }
    }

    stop()
    {
        this.clear();
    }

    clear()
    {
        this.scene.onZoomEnd();
        this.clearTimer();
    }

    
    /**
	*清除计时器。
    */
   clearTimer()
   {
       clearTimeout(this._timeoutHandler);
        if (this._tween)
        {
            this._tween.recover();
            this._tween = null;
        }
   }

   private set mzoom(value: number)
   {
       this.postScale(value, this._center);
   }

   private get mzoom()
   {
       return this.scale;
   }

   public get zoom()
   {
       return this.scale;
   }

   public set zoom(value: number)
   {
       this._lastPos.x = this.scene.x;
       this._lastPos.y = this.scene.y;
       this._lastScale = this.scale;
       this.postScale(value, this._center);
   }
    

    private postScale(scale: number, center: Point)
    {
        scale = Math.max(scale, this.minScaleSource);
        scale = Math.min(scale, this.maxScaleSource);
        this.scale = scale;
        // console.log("scale", scale);

        let rate = scale / this._lastScale;
        let pos =  this._lastPos;

        this._pos.x = pos.x * rate - center.x * (rate - 1);
        this._pos.y = pos.y * rate - center.y * (rate - 1);
        this.checkArea(this._pos);
        this.scene.pos(this._pos.x, this._pos.y);
    }

    private checkArea(pos: Point)
    {
        this.scene.checkArea(pos);
    }

    

    /**计算两个触摸点之间的距离*/
    private getDistance(points: Array<any>): number {
        var distance: number = 0;
        if (points && points.length == 2)
        {
            var dx: number = points[0].stageX - points[1].stageX;
            var dy: number = points[0].stageY - points[1].stageY;

            distance = Math.sqrt(dx * dx + dy * dy);
        }
        return distance;
    }
    /**
     * 获取缩放中心点
     */
    private getCenter(points: Array<any>, center: Point) : Point
    {
        if (points && points.length == 2)
        {
            center.x = (points[0].stageX + points[1].stageX) /2
            center.y = (points[0].stageY + points[1].stageY) /2
        }
        return this._center;
    }

}