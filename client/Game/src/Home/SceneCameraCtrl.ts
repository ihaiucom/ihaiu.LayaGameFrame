import Camera = Laya.Camera;
import Sprite3D = Laya.Sprite3D;
import Vector3 = Laya.Vector3;
import Vector2 = Laya.Vector2;
import Rectangle = Laya.Rectangle;
import Scene2D from "./Scene2D";

/**
 * 场景摄像机控制器
 */
export default class SceneCameraCtrl
{
    scene2D: Scene2D;

    moveNode: Sprite3D;
    rotationYNode: Sprite3D;
    rotationXNode: Sprite3D;
    distanceNode: Sprite3D;
    helpNode: Sprite3D;
    camera: Camera;
    sceneCameraBind: SceneCameraBind;

    install(scene2D: Scene2D)
    {
        this.scene2D = scene2D;

        this.moveNode = new Sprite3D();
        this.rotationYNode = new Sprite3D();
        this.rotationXNode = new Sprite3D();
        this.distanceNode = new Sprite3D();
        this.helpNode = new Sprite3D();
        this.camera = new Camera(0, 0.1, 2000);
        this.camera.orthographic = true;

        this.moveNode.addChild(this.rotationYNode);
        this.rotationYNode.addChild(this.rotationXNode);
        this.rotationXNode.addChild(this.distanceNode);
        this.distanceNode.addChild(this.camera);
        this.distanceNode.addChild(this.helpNode);

        this.moveNode.transform.position = new Vector3(2.55, 0, -0.20);

        this.rotationX = -35;
        this.rotationY = -135;
        this.distance = 1000;
        // this.zoom = Laya.RenderContext3D.clientHeight;
        console.log(this.zoom);

        let sceneCameraBind = this.camera.addComponent(SceneCameraBind);
        sceneCameraBind.install(this);
        // sceneCameraBind.dragRegion.width = scene2D.dragRegion.width  * 0.003;
        // sceneCameraBind.dragRegion.height = scene2D.dragRegion.height * 0.003;
        // sceneCameraBind.dragRegion.x = sceneCameraBind.dragRegion.width * -0.5;
        // sceneCameraBind.dragRegion.y =  sceneCameraBind.dragRegion.height * -0.5;
        this.sceneCameraBind = sceneCameraBind;
        window["sceneCameraBind"] = sceneCameraBind;




        // setTimeout(() =>
        // {
             
        //     let screen = new Vector3(scene2D.dragRegion.x, scene2D.dragRegion.y, 0);
        //     let world = new Vector3();
        //     let local = new Vector3();

        //     this.convertScreenCoordToOrthographicCoord(screen, world);
        //     this.helpNode.transform.position = world;
        //     local = this.helpNode.transform.localPosition;

        //     console.log("screen",screen.x, screen.y, screen.z);
        //     console.log("world",world.x, world.y, world.z);
        //     console.log("local",local.x, local.y, local.z);
        //     console.log("=============");
            
        // }, 1000);


    }

    // 添加到场景
    addToScene(scene: Laya.Scene3D)
    {
        scene.addChild(this.moveNode);
    }

    // 从场景移除
    removeFromScene()
    {
        this.moveNode.removeSelf();
    }

    // 侧视角
    get rotationY(): number
    {
        return this.rotationYNode.transform.localRotationEulerY ;
    }

    set rotationY(val: number)
    {
        this.rotationYNode.transform.localRotationEulerY = val;
    }

    // 俯视角
    get rotationX(): number
    {
        return this.rotationXNode.transform.localRotationEulerX ;
    }

    set rotationX(val: number)
    {
        this.rotationXNode.transform.localRotationEulerX = val;
    }

    // 距离地面
    get distance(): number
    {
        return this.distanceNode.transform.localPositionZ;
    }

    set distance(val: number)
    {
        this.distanceNode.transform.localPositionZ = val;
    }

    // 移动位置
    get position(): Vector3
    {
        return this.camera.transform.localPosition;
    }

    set position(val: Vector3)
    {
        this.camera.transform.localPosition = val;
    }

    // 大小
    get zoom()
    {
        //正交投影垂直矩阵尺寸
        return this.camera.orthographicVerticalSize;
    }

    set zoom(val: number)
    {
        this.camera.orthographicVerticalSize = val;
    }

    
	/**
	*转换2D屏幕坐标系统到3D正交投影下的坐标系统，注:只有正交模型下有效。
	*@param source 源坐标。
	*@param out 输出坐标。
	*@return 是否转换成功。
	*/
    convertScreenCoordToOrthographicCoord(source: Vector3,out: Vector3)
    {
        var clientWidth=Laya.RenderContext3D.clientWidth;
        var clientHeight=Laya.RenderContext3D.clientHeight;
        var ratioX=this.camera.orthographicVerticalSize *this.camera.aspectRatio / clientWidth;
        var ratioY=this.camera.orthographicVerticalSize / clientHeight;
        var sE=source.elements;
        var oE=out.elements;
        oE[0]=(-clientWidth / 2+sE[0])*ratioX;
        oE[1]=(clientHeight / 2-sE[1])*ratioY;
        oE[2]=(this.camera.nearPlane-this.camera.farPlane)*(sE[2]+1)/ 2-this.camera.nearPlane;
        Vector3.transformCoordinate(out,this.distanceNode.transform.worldMatrix,out);
        return true;
	}






}

export class SceneCameraBind extends Laya.Script3D
{
    ctrl :  SceneCameraCtrl;
    zoomRate = 14.6;
    
    dragRegion: Rectangle = new Rectangle(0, 0, 720, 1280);
    private _point = new Vector3();

    install(ctrl :  SceneCameraCtrl)
    {
        this.ctrl = ctrl;
        let scene2D = ctrl.scene2D;
        let aspectRatio = ctrl.camera.aspectRatio;
        let rect = scene2D.dragRegion;

        this.dragRegion.width = rect.width / Laya.stage.height;
        this.dragRegion.height = rect.height / Laya.stage.height;
        this.dragRegion.x = this.dragRegion.width * -0.5;
        this.dragRegion.y = this.dragRegion.height * -0.5;
    }


    /**
     * 覆写组件更新方法(相当于循环)
     */
    public onUpdate():void
    {
        if(this.ctrl)
        {
            let ctrl = this.ctrl;
            let scene2D = ctrl.scene2D;
            let rect = scene2D.dragRegion;

            ctrl.zoom =  this.zoomRate / this.ctrl.scene2D.zoom;

            
            this.dragRegion.width   = rect.width / Laya.stage.height * ctrl.zoom;
            this.dragRegion.height  = rect.height / Laya.stage.height * ctrl.zoom;
            this.dragRegion.x = this.dragRegion.width * -0.5;
            this.dragRegion.y = this.dragRegion.height * -0.5;

            let rateX = this.ctrl.scene2D.dragRegion.width > 0 ? (this.ctrl.scene2D.x - this.ctrl.scene2D.dragRegion.x) / this.ctrl.scene2D.dragRegion.width : 0;
            let rateY = this.ctrl.scene2D.dragRegion.height > 0 ? (this.ctrl.scene2D.y - this.ctrl.scene2D.dragRegion.y) / this.ctrl.scene2D.dragRegion.height : 0;
            
            this._point.x = this.dragRegion.x + rateX *  this.dragRegion.width;
            this._point.y = this.dragRegion.y + rateY *  this.dragRegion.height;
            this._point.x *= -1;

            ctrl.position = this._point;


        }
    }
}