import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import DoubleKeyMap from "../../Libs/Helpers/DoubleKeyMap";
import LevelAnimationHelper from "./MapBuilding/LevelAnimationHelper";
import SyncHellper from "../../Libs/Helpers/SyncHelper";
import Game from "../../Game";
import R from "../../Config/Keys/R";
import DecorationAnimationHelper from "./MapBuilding/DecorationAnimationHelper";

export default class MapEffectManager {
    // 地图
    homeMapUI:HomeMapUI;

    // 显示集合
    spriteDict: DoubleKeyMap<int , string, Laya.Sprite> = new DoubleKeyMap<int , string, Laya.Sprite>();
    
    // 特效集合
    particleDict: DoubleKeyMap<int , string, any> = new DoubleKeyMap<int , string, any>();

    // 特效集合
    skeletonDict: DoubleKeyMap<int , string, any> = new DoubleKeyMap<int , string, any>();

    install(homeMapUI:HomeMapUI)
    {
        this.homeMapUI = homeMapUI;

    }

    uninstall()
    {  
        
    }

    async addEffect(buildId: number, level: string, rect: Laya.Rectangle)
    {
        let rectSp = new Laya.Sprite();
        rectSp.pos(rect.x, rect.y);
        rectSp.width = rect.width;
        rectSp.height= rect.height;
        this.homeMapUI.mapTopLayout.addChild(rectSp);
        this.spriteDict.add(buildId, level,rectSp);
        // rectSp.graphics.drawRect(0, 0, rect.width, rect.height, "#ff0000");

        await SyncHellper.waitTime(200);

        let levelAnimationHelper = await LevelAnimationHelper.showIn(rectSp, true);
        this.particleDict.add(buildId,level, levelAnimationHelper);

        let brushSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.Brush);
        brushSkeleton.zOrder = this.homeMapUI.mapTopLayout.numChildren + 1;
        brushSkeleton.pos(rect.x + rect.width / 2, rect.y + rect.height / 2);
        this.homeMapUI.mapTopLayout.addChild(brushSkeleton);
        brushSkeleton.play(0, true);
        this.skeletonDict.add(buildId, level, brushSkeleton);
    }

    async removeEffect(buildId: number, level: string)
    {
        let particl = this.particleDict.getValue(buildId, level);
        if (particl) {
            particl.clear();
            this.particleDict.remove(buildId, level);   
        }

        let skeleton= this.skeletonDict.getValue(buildId, level);
        if (skeleton) {
            skeleton.stop();
            skeleton.removeSelf();
            this.skeletonDict.remove(buildId, level);
        }
        

        let rectSp  = this.spriteDict.getValue(buildId, level);
        if (rectSp) {
            DecorationAnimationHelper.showIn(rectSp, 1000);    
        }
        
        await SyncHellper.waitTime(1000);
        rectSp.removeSelf();
        this.spriteDict.remove(buildId, level);
    }
}