import Scene3D = Laya.Scene3D;
import Camera = Laya.Camera;
import Handler = Laya.Handler;
import Sprite3D = Laya.Sprite3D;
import SceneCameraCtrl from "./SceneCameraCtrl";
import Scene2D from "./Scene2D";
import HeroMaterial from "../Shader/HeroMaterial";
import BlinnPhongMaterial from "../Shader/BlinnPhongMaterial";
import WallMaterial from "../Shader/WallMaterial";

export default class Scene3der extends Scene3D
{
    private scene2D: Scene2D;
    cameraCtrl:SceneCameraCtrl ;
    install(scene2D: Scene2D)
    {
        this.scene2D = scene2D;
        this.cameraCtrl = new SceneCameraCtrl();
        this.cameraCtrl.install(scene2D);
        this.cameraCtrl.addToScene(this);
        var directionLight = this.scene.addChild(new Laya.DirectionLight());
        // this._testModel();
        window["cameraCtrl"] = this.cameraCtrl;
    }

    
    onScreenResize()
    {
        this.cameraCtrl.sceneCameraBind.onUpdate();
    }

    setWallMaterial(sprite3D:Sprite3D)
    {
        if(sprite3D instanceof Laya.MeshSprite3D)
        if(sprite3D.meshRenderer)
            sprite3D.meshRenderer.sharedMaterial = WallMaterial.defaultMaterial;
        
        for(let i = 0; i < sprite3D.numChildren; i ++)
        {
            let child = sprite3D.getChildAt(i);
            if(child instanceof Sprite3D)
                this.setWallMaterial(child);
        }
    }

    _testModel()
    {
        let scene = this;
        let camera = this.cameraCtrl.camera;

        let scenePath = "res/unity/LayaScene_Scene/Conventional/Scene.lh";
        Laya.loader.create(scenePath,Handler.create(this,()=>
        {
            var sprite3D:Sprite3D = <Sprite3D> Laya.loader.getRes(scenePath);
            this.setWallMaterial(sprite3D);
            scene.addChild(sprite3D);

        }));


        Laya.Sprite3D.load("res/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh", Laya.Handler.create(this, (layaMonkey:Laya.Sprite3D) => {
            scene.addChild(layaMonkey);
            // layaMonkey.transform.localScale = new Laya.Vector3(0.3, 0.3, 0.3);
            //转换2D屏幕坐标系统到3D正交投影下的坐标系统
            // camera.convertScreenCoordToOrthographicCoord(this.pos, this._translate);
            layaMonkey.transform.position =  new Laya.Vector3(1.481, 1.377, 0.099);
            let model: Laya.SkinnedMeshSprite3D = layaMonkey.getChildAt(0).getChildAt(0) as Laya.SkinnedMeshSprite3D;
            
            window["monkeyModel"] = model;
            window["monkeyShader"] = model.skinnedMeshRenderer.sharedMaterial;
            let srcMaterial : Laya.BlinnPhongMaterial = <Laya.BlinnPhongMaterial> model.skinnedMeshRenderer.sharedMaterial;
            // let destMaterial: Laya.BlinnPhongMaterial = new window["MyBlinnPhongMaterial"]();
            
            let destMaterial: HeroMaterial = new HeroMaterial();
            destMaterial["albedoTexture"] =  srcMaterial["albedoTexture"]
            model.skinnedMeshRenderer.sharedMaterial = destMaterial;
            
            // Laya.stage.on(Laya.Event.RESIZE, this, function():void {
            //     camera.convertScreenCoordToOrthographicCoord(this.pos,this._translate);
            //     layaMonkey.transform.position = this._translate;
            // });

            let m2 = layaMonkey.clone();
            m2.transform.position =  new Laya.Vector3(-1, 1, 0);
            scene.addChild(m2);
            window["m2"] = m2;
        
        }));

        // let wallHeight = 0.3;
        // let wall = this.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, wallHeight, 0.05))) as Laya.MeshSprite3D;
        // wall.transform.position = new Laya.Vector3(0, wallHeight * 0.5, 0.2);
        // window["wallM"] = WallMaterial.defaultMaterial;
        // wall.meshRenderer.sharedMaterial = window["wallM"];
        // window["wall"] = wall;


        // for(let x = -30; x < 30; x ++)
        // {
        //     for(let y = -30;  y < 30; y ++)
        //     {
        //         let sprite3D: Laya.Sprite3D = this.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.1, 0.1, 0.1))) as Laya.Sprite3D;
        //         sprite3D.transform.position = new Laya.Vector3(x * 1, 0, y * 1);
        //     }
        // }

        // let scale = 1;
        // let sprite3D: Laya.Sprite3D = this.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(scale, scale, scale))) as Laya.Sprite3D;
        // sprite3D.transform.position = new Laya.Vector3(0, 0, 0);

        
    }




}