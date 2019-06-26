import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MapComponent from "./MapComponent";

export default class MapComponentManager {
    // 地图
    homeMapUI:HomeMapUI;

    // 摆件集合
    componentDict: Dictionary<number, MapComponent> = new Dictionary<number, MapComponent>();
    componentList: Array<MapComponent> = [];

    install(homeMapUI:HomeMapUI)
    {
        this.homeMapUI = homeMapUI;

        //切换父节点
        let componentList = this.componentList;
        for (let i = 0; i < componentList.length; i++) {
            componentList[i].addToScene(homeMapUI);
        }
    }

    uninstall()
    {  
        
    }

    addComponent(key: number, component: MapComponent)
    {
        this.componentDict.add(key, component);
        this.componentList.push(component);
    }
}