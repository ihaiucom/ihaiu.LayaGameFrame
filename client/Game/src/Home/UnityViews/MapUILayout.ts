import GObject = fairygui.GObject;
import Scene2D from "../Scene2D";
import MapHelper from "../Units/Utils/MapHelper";
import { IMapUI } from "./IMapUI";
export default class MapUILayout extends fairygui.GRoot
{
    scene: Scene2D;
    get zoom(): number
    {
        return this.scene.zoom;
    }


    install(scene: Scene2D)
    {
        this.scene = scene;
    }

    addChild(child: GObject): GObject
    {
        MapHelper.uiRefreshZoom(<IMapUI><any> child, this.zoom);
        return super.addChild(child);
    }

    addChildAt(child: GObject, index?: number): GObject
    {
        MapHelper.uiRefreshZoom(<IMapUI><any> child, this.zoom);
        return super.addChildAt(child, index);
    }

    addChildForLaya(child: Laya.Node): Laya.Node
    {
        MapHelper.uiRefreshZoom(<IMapUI><any> child, this.zoom);
        return this.displayObject.addChild(child);
    }

    addChildAtForLaya(child: Laya.Node, index: number): Laya.Node
    {
        MapHelper.uiRefreshZoom(<IMapUI><any> child, this.zoom);
        return this.displayObject.addChildAt(child, index);
    }
}