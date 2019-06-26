import Assembly from "../../Libs/Assembly";
import ViewSkeletonStartSystem from "./Systems/ViewSkeletonStartSystem";
import ViewPositionSystem from "./Systems/ViewPositionSystem";
import ViewHierarchySystem from "./Systems/ViewHierarchySystem";
import ViewBubbleTalkSystem from "./Systems/ViewBubbleTalkSystem";
import UnitCmdGenerateSystem from "./Systems/UnitCmdGenerateSystem";
import UnitCmdExeSystem from "./Systems/UnitCmdExeSystem";
import UnitData from "./Components/UnitData";
import TransformData from "./Components/TransformData";
import SkeletonData from "./Components/SkeletonData";
import UnitActionData from "./Components/UnitActionData";
import MovePathData from "./Components/MovePathData";
import ShadowData from "./Components/ShadowData";
import ScreenLimitData from "./Components/ScreenLimitData";
import HierarchyData from "./Components/HierarchyData";
import DragData from "./Components/DragData";
import ViewDragStartSystem from "./Systems/ViewDragStartSystem";
import UnitClearCmdEvent from "./Events/UnitClearCmdEvent";
import UnitDataStartSystem from "./Systems/UnitDataStartSystem";
import UnitDataDestorySystem from "./Systems/UnitDataDestorySystem";
import ViewMapUILayoutSystem from "./Systems/ViewMapUILayoutSystem";

export default class UnitIncludes
{
    private static isInstalled = false;
    static install()
    {
        if(this.isInstalled)
            return;
        // system  
        Assembly.register(<any>ViewSkeletonStartSystem, 'ViewSkeletonStartSystem');
        Assembly.register(<any>ViewDragStartSystem, 'ViewDragStartSystem');
        Assembly.register(<any>UnitDataStartSystem, 'UnitDataStartSystem');
        Assembly.register(<any>UnitDataDestorySystem, 'UnitDataDestorySystem');
        Assembly.register(<any>ViewPositionSystem, 'ViewPositionSystem');
        Assembly.register(<any>ViewHierarchySystem, 'ViewHierarchySystem');
        Assembly.register(<any>ViewBubbleTalkSystem, 'ViewBubbleTalkSystem');
        Assembly.register(<any>ViewMapUILayoutSystem, 'ViewMapUILayoutSystem');
        Assembly.register(<any>UnitCmdGenerateSystem, 'UnitCmdGenerateSystem');
        Assembly.register(<any>UnitCmdExeSystem, 'UnitCmdExeSystem');

        // component
        Assembly.register(<any>TransformData, 'TransformData');
        Assembly.register(<any>UnitData, 'UnitData');
        Assembly.register(<any>SkeletonData, 'SkeletonData');
        Assembly.register(<any>UnitActionData, 'UnitActionData');
        Assembly.register(<any>MovePathData, 'MovePathData');
        Assembly.register(<any>ShadowData, 'ShadowData');
        Assembly.register(<any>ScreenLimitData, 'ScreenLimitData');
        Assembly.register(<any>HierarchyData, 'HierarchyData');
        Assembly.register(<any>ScreenLimitData, 'ScreenLimitData');
        Assembly.register(<any>DragData, 'DragData');

        // event
        Assembly.register(<any>UnitClearCmdEvent, 'UnitClearCmdEvent');
        
    }
}