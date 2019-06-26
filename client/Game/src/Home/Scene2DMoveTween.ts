import Handler = Laya.Handler;
import Event = Laya.Event;
import Rectangle = Laya.Rectangle;
import Sprite = laya.display.Sprite;
import Point = Laya.Point;
import Tween = Laya.Tween;
import Ease = Laya.Ease;
import Scene2D from "./Scene2D";
import Mathf from "../Libs/Mathf";
import Game from "../Game";
import GameEventKey from "../GameEventKey";

export default class Scene2DMoveTween
{
    scene: Scene2D;
    dragRegion: Rectangle = new Rectangle();

    get x()
    {
        return this.scene.x;
    }

    set x(val: number)
    {
        this.scene.x = val;
    }

    get y()
    {
        return this.scene.y;
    }

    set y(val: number)
    {
        this.scene.y = val;
    }

    get zoom()
    {
        return this.scene.scaleX;
    }

    set zoom(val: number)
    {
        this.scene.setScales(val);
        this.scene.refreshRegion();
    }

    install(target: Scene2D)
    {
        this.scene = target;
    }

    private _tween: Tween;

    // 将地图某个点移动到屏幕中间
    movieTo(x: number, y: number, scale: number, duration: number = 500)
    {
        this.stop();

        scale = Mathf.clamp(scale, this.scene.minScale, this.scene.maxScale);

        this.refreshRegion(scale);
        


        let pos = new Point(x * scale, y * scale);
        let center = Point.TEMP;
        this.posToCenter(pos, center);

        if(duration > 0)
        {
            var obj = {x:  center.x, y : center.y, zoom: scale};
            this._tween = Tween.to(this, obj, duration, Ease.linearInOut, Handler.create(this, this.clearTime), 0, false, false);
        }
        else
        {
            this.x = center.x;
            this.y = center.y;
            this.zoom = scale;
        }

    }


    
    stop()
    {
        this.clearTime();
    }

    
    clearTime()
    {
        this.scene.onZoomEnd();
        this.scene.refreshRegion();
        this.scene.isTweening = false;
        if (this._tween)
        {
            this._tween.recover();
            this._tween = null;
        }
    }

    
    refreshRegion(scale: number = NaN)
    {
        let w = this.scene.width * scale;
        let h = this.scene.height * scale;
        let ed = this.scene._elasticDistance * scale;
        
        let dragWidthLimit: number  = w     - ed * 2  - Laya.stage.width ;
        let dragHeightLimit: number = h     - ed * 2  - Laya.stage.height ;
       
        
        let dragRegion = this.dragRegion;
        dragRegion.x = -dragWidthLimit - ed;
        dragRegion.y = -dragHeightLimit - ed;
        dragRegion.width = dragWidthLimit;
        dragRegion.height = dragHeightLimit;

        

        if(w < Laya.stage.width)
        {
            dragRegion.x = (Laya.stage.width - w) >> 1;
            dragRegion.width = 0;
        }

        if(h < Laya.stage.height)
        {
            dragRegion.x = (Laya.stage.height - h) >> 1;
            dragRegion.height = 0;
        }
    }

    
    checkArea(pos: Point)
    {

        if(pos.x < this.dragRegion.x)
        {
            pos.x = this.dragRegion.x;
        }
        else if(pos.x > this.dragRegion.x + this.dragRegion.width)
        {
            pos.x = this.dragRegion.x + this.dragRegion.width;
        }

        
        if(pos.y < this.dragRegion.y)
        {
            pos.y = this.dragRegion.y;
        }
        else if(pos.y > this.dragRegion.y + this.dragRegion.height)
        {
            pos.y = this.dragRegion.y + this.dragRegion.height;
        }
    }

    
    // 屏幕中心点
    get stageWidthHalf()
    {
        return Laya.stage.width >> 1;
    }

    get stageHeightHalf()
    {
        return Laya.stage.height >> 1;
    }
    

    // 地图坐标 转 放置在屏幕中心时的坐标
    posToCenter(pos: Point, outCenterPos: Point)
    {
        outCenterPos.x = this.stageWidthHalf - pos.x ;
        outCenterPos.y = this.stageHeightHalf- pos.y;
        this.checkArea(outCenterPos);
    }
}