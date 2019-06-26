import Scene2D, { OperationModel } from "./Scene2D";

export class BoundaryRate
{
    left = -0.6;
    right = 0.6;
    top = -0.4;
    bottom = 0.5;

    constructor(left: number = -0.6, right: number = 0.6, top: number = -0.4, bottom: number = 0.5)
    {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }

    getH(rate: number): number
    {
        rate = (rate - 0.5) * 2;
        if(rate < this.left)
        {
            return rate - this.left;
        }
        else if(rate > this.right)
        {
            return rate - this.right;
        }
        return 0;
    }

    getV(rate: number): number
    {
        rate = (rate - 0.5) * 2;
        if(rate < this.top)
        {
            return rate - this.top;
        }
        else if(rate > this.bottom)
        {
            return rate - this.bottom;
        }
        return 0;
    }
}

export default class Scene2DBoundaryMoveCtrl
{
    private scene: Scene2D;

    boundaryRate = new BoundaryRate();
    moveSpeed = -30;

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
    
    get enable()
    {
        return this.scene.getEnableOperation(OperationModel.BoundaryMove);
    }

    
    install(scene: Scene2D)
    {
        this.scene = scene;
        
    }

    private isLooping: boolean = false;
    start()
    {
        if(this.isLooping)
            return;
        this.isLooping = true;
        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    stop()
    {
        this.isLooping = false;
        Laya.timer.clear(this, this.onLoop);
    }

    private p = new Laya.Point();
    private onLoop()
    {
        if(!this.enable)
            return;

        let event = Laya.MouseManager.instance._event;
        if(event && this.zoom != 0)
        {
            if(event.touches && event.touches.length != 1)
            {
                return;
            }

            let rateX = event.stageX / Laya.stage.width;
            let rateY = event.stageY / Laya.stage.height;
            let speedX = this.boundaryRate.getH(rateX) * this.moveSpeed;
            let speedY = this.boundaryRate.getV(rateY) * this.moveSpeed;

            let p = this.p;
            p.x = this.x + speedX;
            p.y = this.y + speedY;
            this.scene.checkArea(p);
            this.x = p.x;
            this.y = p.y;

        }
    }


}