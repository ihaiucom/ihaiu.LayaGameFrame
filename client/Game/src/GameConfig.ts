
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=720;
    static height:number=1280;
    static scaleMode:string=Laya.Stage.SCALE_SHOWALL;
    static screenMode:string="none";
    static alignV:string=Laya.Stage.ALIGN_TOP;
    static alignH:string=Laya.Stage.ALIGN_CENTER;
    static startScene:any="test/TestScene.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
    }
}
GameConfig.init();