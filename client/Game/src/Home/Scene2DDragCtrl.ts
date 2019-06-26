import Handler = Laya.Handler;
import Event = Laya.Event;
import Rectangle = Laya.Rectangle;
import Sprite = laya.display.Sprite;
import Scene2D, { OperationModel } from "./Scene2D";
            
export default class Scene2DDragCtrl
{
    private scene: Scene2D;

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
        return this.scene.getEnableOperation(OperationModel.DragMove);
    }


    install(scene: Scene2D)
    {
        this.scene = scene;
        
        this.scene.on(Event.MOUSE_DOWN, this, this.onStartDrag);
    }
    
    private onStartDrag(e: Event): void 
    {
        if((e.touches == null || e.touches.length == 1) && this.enable)
        {
            let elasticDistance = this.elasticDistance * this.scene.scaleX;
            this.scene.refreshRegion();
    
            //鼠标按下开始拖拽(设置了拖动区域和超界弹回的滑动效果)
            this.scene.startDrag(this.dragRegion, true, this.elasticDistance);
        }
        else
        {
            this.scene.stopDrag();
        }
    }

    stop()
    {
        this.scene.stopDrag();
    }

    
    center()
    {
        this.scene.x = (Laya.stage.width - this.scaleWidth) * 0.5;
        this.scene.y = (Laya.stage.height - this.scaleHeight) * 0.5;
    }
}